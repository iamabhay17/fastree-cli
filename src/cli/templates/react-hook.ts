import _ from "lodash";

export const getReactHook = (feature: string) => {
  const Name = _.capitalize(feature);

  return `import React from "react";

export const use${Name}= () => {
  
  const [state,setState] = React.useState<string>("");

  React.useEffect(()=>{
    // enter code here
  },[])

  return {};
};
`;
};
