import ora from "ora";
import path from "path";
import { promises as fs } from "fs";
import { ensureDir } from "fs-extra";
import { Command } from "commander";
import { JoinName } from "../util/join-name.js";
export const generate = new Command()
    .name("generate")
    .description("Set up folder structure for a new feature")
    .argument("<feature>", "Feature name")
    .action(async (feature) => {
    const config = await fs.readFile("./.fastree.config.json", "utf-8");
    const parsedConfig = JSON.parse(config);
    const spinner = ora("Setting up folder structure").start();
    try {
        await createStructure(parsedConfig, feature);
        spinner.succeed("Folder structure set up successfully");
    }
    catch (error) {
        spinner.fail("Error in setting up folder structure");
    }
});
const createStructure = async (config, feature) => {
    /**
     * iterate through the structure and create the folders and files
     */
    config.structure.forEach(async (item) => {
        await executeBuild(item, feature, config.defaultExtension);
    });
};
/**
 * Execute the build
 * @param build
 * @param feature
 * @param defaultExtension
 */
const executeBuild = async (build, feature, defaultExtension) => {
    const location = path.resolve(process.cwd(), build.directory);
    await ensureDir(location);
    if (build.folders) {
        build.folders.forEach(async (folder) => {
            await executeFolderBuild(folder, location, feature, defaultExtension);
        });
    }
    if (build.files) {
        build.files.forEach(async (file) => {
            await executeFileBuild(file, location, feature, defaultExtension);
        });
    }
};
/**
 *
 * @param folder Build Folder and files within the folder recursively
 * @param parentDirectory
 * @param feature
 * @param defaultExtension
 */
const executeFolderBuild = async (folder, parentDirectory = process.cwd(), feature, defaultExtension) => {
    const directory = `${parentDirectory}/${folder.name}`;
    await ensureDir(directory);
    if (folder.files) {
        folder.files.forEach(async (file) => {
            await executeFileBuild(file, directory, feature, defaultExtension);
        });
    }
    if (folder.folders) {
        folder.folders.forEach(async (subFolder) => {
            await executeFolderBuild(subFolder, directory, feature, defaultExtension);
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
const executeFileBuild = async (file, parentDirectory = process.cwd(), feature, defaultExtension) => {
    const fileName = JoinName(file.delimiter || ".", file.name || feature, file.prefix, file.suffix, file.extension || defaultExtension);
    const filePath = path.resolve(parentDirectory, fileName);
    const content = `export const ${file?.prefix || ""}${feature}${file?.suffix || ""} = () => {
    return <div>content here</div>
  }`;
    await fs.writeFile(filePath, content, "utf-8");
};
