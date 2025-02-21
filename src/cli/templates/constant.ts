import _ from "lodash";

export const getConstant = (feature: string) => {
  const Name = _.upperCase(feature);

  return `export const ${Name}_CONSTANT = {};`;
};
