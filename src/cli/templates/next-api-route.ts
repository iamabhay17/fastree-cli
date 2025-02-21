import _ from "lodash";

export const getNextApiRoute = (feature: string) => {
  const Name = _.capitalize(feature);

  return `import { NextApiRequest, NextApiResponse } from \"next\";

  export default function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
      case \"GET\":
        res.status(200).json({ message: \"GET request successful\" });
        break;
      case \"POST\":
        const data = req.body;
        res.status(201).json({ message: \"POST request successful\", data });
        break;
      default:
        res.status(405).json({ message: \"Method Not Allowed\" });
    }
  }`;
};
