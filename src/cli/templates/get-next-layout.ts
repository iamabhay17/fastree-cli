import _ from "lodash";

export const getNextLayout = (feature: string) => {
  const Name = _.capitalize(feature);

  return `import { ReactNode } from \"react\";

  export default function ${Name}Layout({ children }: { children: ReactNode }) {
    return (
      <div>
        <header>Header Content</header>
        <main>{children}</main>
        <footer>Footer Content</footer>
      </div>
    );
  }`;
};
