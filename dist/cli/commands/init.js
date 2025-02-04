import ora from "ora";
import path from "path";
import chalk from "chalk";
import prompts from "prompts";
import { z } from "zod";
import { promises as fs } from "fs";
import { Command } from "commander";
import { NAMING_STYLES } from "../constants/naming-styles.js";
const initOptions = z.object({
    cwd: z.string(),
});
export const init = new Command()
    .name("init")
    .description("initialize a new project with fastree")
    .option("-c, --cwd <cwd>", "the working directory. defaults to the current directory.", process.cwd())
    .action(async (options) => {
    const { cwd } = initOptions.parse(options);
    const values = await getInitialConfig(cwd);
    if (!values) {
        console.log(chalk.red("Error in generating config file"));
    }
    console.log(chalk.green("Config file generated successfully"));
});
const getInitialConfig = async (cwd) => {
    const highlight = (text) => chalk.cyan(text);
    const values = await prompts([
        {
            type: "select",
            name: "defaultExtension",
            message: `Select ${highlight("default extention")} for files`,
            choices: [
                { title: "Typescript [.ts]", value: ".ts" },
                { title: "Javascript [.js]", value: ".js" },
                { title: "TSX [.tsx]", value: ".tsx" },
                { title: "JSX [.jsx]", value: ".jsx" },
            ],
            initial: 0,
        },
        {
            type: "text",
            name: "dir",
            initial: "./src/pages",
            message: `Enter the directory where you want to set up ${highlight("files/folder")}`,
        },
        {
            type: "select",
            name: "namingStyle",
            message: `Select ${highlight("naming style")}`,
            choices: NAMING_STYLES.map((convention) => {
                return {
                    title: convention.label,
                    value: convention.value,
                };
            }),
        },
        {
            type: "confirm",
            name: "useIndexExport",
            message: `Do you want to use ${highlight("Index.js")} for exporting files?`,
            initial: true,
        },
    ]);
    const config = {
        defaultExtension: values.defaultExtension,
        namingStyle: values.namingStyle,
        structure: [
            {
                directory: values.dir,
                files: [],
                folders: [],
                ensureDirectory: true,
            },
        ],
        useIndexExport: values.useIndexExport,
    };
    const spinner = ora(`Setting up config`).start();
    const targetPath = path.resolve(cwd, ".fastree.config.json");
    await fs.writeFile(targetPath, JSON.stringify(config, null, 2), "utf8");
    spinner.succeed();
    return config;
};
