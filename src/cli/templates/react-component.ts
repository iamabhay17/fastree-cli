import _ from "lodash";

export const getReactComponent = (feature: string) => {
  const Name = _.capitalize(feature);

  return `import React from "react";

interface IProps {}

export const ${Name}Component : React.FC<IProps> = () => {
  return (
    <React.Fragment>
      Hello
    </React.Fragment>
  );
};
`;
};
