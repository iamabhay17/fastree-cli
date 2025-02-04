#!/usr/bin/env node

import { Command } from "commander";
import { init } from "./cli/commands/init.js";
import { generate } from "./cli/commands/generate.js";
import { getPackageInfo } from "./cli/util/package-info.js";

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

async function main() {
  const packageInfo = await getPackageInfo();

  const program = new Command()
    .name("fastree")
    .description(
      "npm package to help speed up your developent with consistency and readablity"
    )
    .version(
      packageInfo.version || "1.0.0",
      "-v, --version",
      "output the current version"
    );

  program.addCommand(init).addCommand(generate);
  program.parse();
}

main();
