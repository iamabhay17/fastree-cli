import { getConfig } from "../templates/config.js";
import { getConstant } from "../templates/constant.js";
import { getExpressRoute } from "../templates/express-route.js";
import { getNextLayout } from "../templates/get-next-layout.js";
import { getNextPage } from "../templates/get-next-page.js";
import { getMiddleware } from "../templates/middleware.js";
import { getNextApiRoute } from "../templates/next-api-route.js";
import { getReactComponent } from "../templates/react-component.js";
import { getReactContext } from "../templates/react-context.js";
import { getReactHook } from "../templates/react-hook.js";
import { getService } from "../templates/service.js";

export const getTemplate = (feature: string, type: ITemplate) => {
  switch (type) {
    case "ReactComponent":
      return getReactComponent(feature);
    case "ReactHook":
      return getReactHook(feature);
    case "ReactContext":
      return getReactContext(feature);
    case "Service":
      return getService(feature);
    case "Config":
      return getConfig(feature);
    case "ExpressRoute":
      return getExpressRoute(feature);
    case "Constant":
      return getConstant(feature);
    case "Middleware":
      return getMiddleware(feature);
    case "NextApiRoute":
      return getNextApiRoute(feature);
    case "NextLayout":
      return getNextLayout(feature);
    case "NextPage":
      return getNextPage(feature);
    default:
      return "";
  }
};
