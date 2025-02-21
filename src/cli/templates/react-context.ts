import _ from "lodash";

export const getReactContext = (feature: string) => {
  const Name = _.capitalize(feature);

  return `import React from \"react\";

  interface IState {};
  
  const ${Name}Context = React.createContext<IState>();
  
  export const ${Name}Provider = ({ children }: { children: React.ReactNode }) => {
    
    const data = {}

    return (
      <CounterContext.Provider value={data}>
        {children}
      </CounterContext.Provider>
    );
  };
  
  export const use${Name} = () => {
    const context = React.useContext(${Name}Context);
    if (!context) {
      throw new Error(\"use${Name} must be used within a ${Name}Context\");
    }
    return context;
  };`;
};
