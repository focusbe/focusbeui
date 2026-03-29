import _extends from "@babel/runtime/helpers/extends";
var ColorfulInputMeta = {
  "componentName": "ColorfulInput",
  "title": "ColorfulInput",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "focusbeui",
    "version": "0.1.0",
    "exportName": "ColorfulInput",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [{
      "title": {
        "label": {
          "type": "i18n",
          "en-US": "color",
          "zh-CN": "color"
        }
      },
      "name": "color",
      "setter": {
        "componentName": "StringSetter",
        "isRequired": false,
        "initialValue": ""
      }
    }],
    "supports": {
      "style": true
    },
    "component": {}
  }
};
var snippets = [{
  "title": "ColorfulInput",
  "screenshot": "",
  "schema": {
    "componentName": "ColorfulInput",
    "props": {}
  }
}];
export default _extends({}, ColorfulInputMeta, {
  snippets: snippets
});