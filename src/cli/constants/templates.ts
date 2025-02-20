import { getReactComponent } from "../templates/react-component.js";
import { getReactHook } from "../templates/react-hook.js";

export const getTemplate = (feature: string, type: ITemplate) => {
  switch (type) {
    case "ReactComponent":
      return getReactComponent(feature);
    case "ReactHook":
      return getReactHook(feature);
  }
  return "";
};

export const Templates: Record<string, string> = {};
