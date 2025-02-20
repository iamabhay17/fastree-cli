import ora from "ora";
import path from "path";

import { promises as fs } from "fs";
import { ensureDir } from "fs-extra";
import { Command } from "commander";

import { getTemplate, Templates } from "../constants/templates.js";

export const generate = new Command()
  .name("generate")
  .description("Set up folder structure for a new feature")
  .argument("<feature>", "Feature name")
  .action(async (feature) => {
    const config: string = await fs.readFile("./.fastree.config.json", "utf-8");
    const parsedConfig: IConfig = JSON.parse(config);

    const spinner = ora("Setting up folder structure").start();
    try {
      await createStructure(parsedConfig, feature);
      spinner.succeed("Folder structure set up successfully");
    } catch (error) {
      spinner.fail("Error in setting up folder structure");
    }
  });

const createStructure = async (config: IConfig, feature: string) => {
  /**
   * iterate through the structure and create the folders and files
   */
  config.structure.forEach(async (item: IBuild) => {
    await executeBuild(item, feature);
  });
};

/**
 * Execute the build
 * @param build
 * @param feature
 */

const executeBuild = async (build: IBuild, feature: string) => {
  // get location of folder where file need to be generated
  const location = path.resolve(process.cwd(), build.path);

  // ensure that folder always exist ( Get Folder or Create new one )
  await ensureDir(location);

  if (build.folders) {
    build.folders.forEach(async (folder: IFolder) => {
      await executeFolderBuild(folder, location, feature);
    });
  }
  if (build.files) {
    build.files.forEach(async (file: IFile) => {
      await executeFileBuild(file, location, feature);
    });
  }
};

/**
 *
 * @param folder Build Folder and files within the folder recursively
 * @param parentDirectory
 * @param feature
 */
const executeFolderBuild = async (
  folder: IFolder,
  parentDirectory: string = process.cwd(),
  feature: string
) => {
  const featureSpecificFolderName = folder.name?.replace(
    "<feature-name>",
    feature
  );

  const directory = `${parentDirectory}/${featureSpecificFolderName}`;
  await ensureDir(directory);

  if (folder.files) {
    folder.files.forEach(async (file: IFile) => {
      await executeFileBuild(file, directory, feature);
    });
  }

  if (folder.folders) {
    folder.folders.forEach(async (subFolder: IFolder) => {
      await executeFolderBuild(subFolder, directory, feature);
    });
  }
};

/**
 * Build a single file
 * @param file Build File
 * @param parentDirectory
 * @param feature
 * @param defaultExtension
 */
const executeFileBuild = async (
  file: IFile,
  parentDirectory: string = process.cwd(),
  feature: string
) => {
  const featureSpecificFileName = file.name?.replace("<feature-name>", feature);
  const fileTemplate = getTemplate(feature, file.template);

  const filePath = path.resolve(parentDirectory, featureSpecificFileName);
  await fs.writeFile(filePath, fileTemplate, "utf-8");
};
