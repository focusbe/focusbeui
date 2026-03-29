"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var ColorfulButtonMeta = {
  "componentName": "ColorfulButton",
  "title": "ColorfulButton",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "focusbeui",
    "version": "0.1.0",
    "exportName": "ColorfulButton",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [{
      "title": {
        "label": {
          "type": "i18n",
          "en-US": "type",
          "zh-CN": "类型"
        },
        "tip": "type | 类型"
      },
      "name": "type",
      "description": "类型",
      "setter": {
        "componentName": "RadioGroupSetter",
        "props": {
          "dataSource": [{
            "label": "primary",
            "value": "primary"
          }, {
            "label": "secondary",
            "value": "secondary"
          }, {
            "label": "normal",
            "value": "normal"
          }],
          "options": [{
            "label": "primary",
            "value": "primary"
          }, {
            "label": "secondary",
            "value": "secondary"
          }, {
            "label": "normal",
            "value": "normal"
          }]
        },
        "initialValue": "primary"
      }
    }, {
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
  "title": "ColorfulButton",
  "screenshot": "",
  "schema": {
    "componentName": "ColorfulButton",
    "props": {}
  }
}];
var _default = (0, _extends2["default"])({}, ColorfulButtonMeta, {
  snippets: snippets
});
exports["default"] = _default;