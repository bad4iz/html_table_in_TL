import { gatherChildren } from "./gatherChildren.js";
import getValuesArr from "./getValuesArr.js";
import removeArtifacts from "./removeArtifacts.js";

export default (html) => {
  const valuesArr = getValuesArr(html);

  const valueWithChildren = gatherChildren(valuesArr);

  return removeArtifacts(valueWithChildren);
}


