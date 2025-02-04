import { Naming } from "../../src/cli/constants/naming-styles.js";

interface IConfig {
  defaultExtension: ".ts" | ".tsx" | ".js" | ".jsx" | `.${string}`;
  namingStyle: Naming;
  structure: IBuild[];
  useIndexExport: boolean;
}

interface IBuild {
  directory: string;
  files: IFile[];
  folders: IFolder[];
}

interface IBaseProperties {
  name?: string;
  prefix?: string;
  suffix?: string;
  delimiter?: string;
}

interface IFile extends IBaseProperties {
  extension?: ".ts" | ".tsx" | ".js" | ".jsx";
  type?: "component" | "utility" | "config" | "other"; // additional metadata
}

interface IFolder extends IBaseProperties {
  files?: IFile[];
  folders?: IFolder[];
  ensureDirectory?: boolean;
}
