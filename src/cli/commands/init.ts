import ora from "ora";
import path from "path";
import chalk from "chalk";

import { z } from "zod";
import { promises as fs } from "fs";
import { Command } from "commander";

const initOptions = z.object({
  cwd: z.string(),
});

export const init = new Command()
  .name("init")
  .description("initialize a new project with fastree")
  .option(
    "-c, --cwd <cwd>",
    "the working directory. defaults to the current directory.",
    process.cwd()
  )
  .action(async (options) => {
    const { cwd } = initOptions.parse(options);
    const values = await getInitialConfig(cwd);
    if (!values) {
      console.log(chalk.red("Error in generating config file"));
    }
    console.log(chalk.green("Config file generated successfully"));
  });

const getInitialConfig = async (cwd: string) => {
  const highlight = (text: string) => chalk.cyan(text);

  const config = {
    structure: [
      {
        path: "src/components",
        folders: [
          {
            name: "<feature-name>",
            files: [],
            folders: [],
          },
        ],
        files: [
          {
            name: "<feature-name>-component.tsx",
            template: "ReactComponent",
          },
        ],
      },
    ],
  };

  const spinner = ora(`Setting up config`).start();
  const targetPath = path.resolve(cwd, ".fastree.config.json");
  await fs.writeFile(targetPath, JSON.stringify(config, null, 2), "utf8");
  spinner.succeed();

  return config;
};
