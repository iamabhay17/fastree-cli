interface IConfig {
  structure: IBuild[];
}

interface IBuild {
  path: string;
  files: IFile[];
  folders: IFolder[];
}

interface IBaseProperties {
  name: string;
}

interface IFile extends IBaseProperties {
  template: ITemplate;
}

interface IFolder extends IBaseProperties {
  files: IFile[];
  folders: IFolder[];
}

type ITemplate =
  | "ReactComponent" // Standard React component
  | "ReactHook" // Custom React hook
  | "ReactContext" // Context API provider/consumer
  | "NextLayout" // Layout component (e.g., dashboard layout)
  | "NextPage" // Page component for Next.js or React Router
  | "Service" // API service (Axios, Fetch, GraphQL)
  | "Middleware" // Middleware functions (Express, Next.js, etc.)
  | "NextApiRoute" // Next.js API route handler
  | "ExpressRoute" // Express.js API route handler
  | "Utility" // General utility function file
  | "Config" // Configuration file (e.g., app settings)
  | "Constant"; // Constants file
