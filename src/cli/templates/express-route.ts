import _ from "lodash";

export const getExpressRoute = (feature: string) => {
  const Name = _.capitalize(feature);

  return `const express = require(\"express\");
  const ${Name}Router = express.Router();
  
  ${Name}Router.get(\"/\", (req, res) => {
    res.json({ message: \"GET request successful\" });
  });
  
  ${Name}Router.post(\"/example\", (req, res) => {
    const data = req.body;
    res.json({ message: \"POST request successful\", data });
  });
  
  module.exports = ${Name}Router;`;
};
