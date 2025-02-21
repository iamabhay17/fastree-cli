import _ from "lodash";

export const getNextPage = (feature: string) => {
  const Name = _.capitalize(feature);

  return `export default function ${Name}() {
    return (
      <div>
        <h1>Welcome to Next.js Page</h1>
        <p>This is a sample page.</p>
      </div>
    );
  }`;
};
