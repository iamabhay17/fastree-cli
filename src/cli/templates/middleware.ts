import _ from "lodash";

export const getMiddleware = (feature: string) => {
  const Name = _.capitalize(feature);

  return `import React from \"react\";
  import { useNavigate } from \"react-router-dom\";

  interface IProps {
    children: React.ReactNode
  }
  
  export const ${Name}Middleware = ({ children }) => {
    const navigate = useNavigate();

    const [validated,setIsValidated]= React.useState(false);
  
    React.useEffect(() => {
      // use validation logic here
    }, []);
  
    if (!validated) {
      return <div>No validated</div>;
    }
  
    return children;
  };`;
};
