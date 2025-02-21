import _ from "lodash";

export const getConfig = (feature: string) => {
  const Name = _.capitalize(feature);

  return `export const ${Name}Config = {};`;
};
