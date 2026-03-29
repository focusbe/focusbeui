import * as componentInstances from "../es/index";
import * as ColorfulButtonData from "./colorful-button/view";
import "../es/index.scss";
var ColorfulButton = getRealComponent(ColorfulButtonData, 'ColorfulButton');
export { ColorfulButton };
var entryDefault = componentInstances["default"];
export { entryDefault as default };
export * from "../es/index";
var coveredComponents = {
  ColorfulButton: ColorfulButton
};
var library = 'BizComps';
var execCompile = !!true;
if (!execCompile) {
  window[library] = Object.assign({
    __esModule: true
  }, componentInstances || {}, coveredComponents || {});
}
function getRealComponent(component, componentName) {
  if (component["default"]) return component["default"];
  if (component[componentName]) return component[componentName];
  return component;
}