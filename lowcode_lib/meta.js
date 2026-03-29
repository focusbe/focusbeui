"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.components = exports.componentList = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _meta = _interopRequireDefault(require("./colorful-button/meta"));
var _meta2 = _interopRequireDefault(require("./colorful-input/meta"));
var componentCategorySort = {};
["基础元素", "布局容器类", "表格类", "表单详情类", "帮助类", "对话框类", "业务类", "通用", "引导", "信息输入", "信息展示", "信息反馈"].reverse().forEach(function (item, index) {
  componentCategorySort[item] = ++index;
});
function generateComponentList(components) {
  var componentList = [{
    title: '常用',
    icon: '',
    children: []
  }, {
    title: '容器',
    icon: '',
    children: []
  }, {
    title: '导航',
    icon: '',
    children: []
  }, {
    title: '内容',
    icon: '',
    children: []
  }, {
    title: 'Feedback 反馈',
    icon: '',
    children: []
  }];
  var groupMap = {
    原子组件: true
  };
  var compGroup = {};
  components.forEach(function (comp) {
    var category = comp.category || '其他';
    if (comp.group && !compGroup[comp.componentName]) {
      compGroup[comp.componentName] = comp.group;
    }
    if (comp.group && !groupMap[comp.group]) {
      groupMap[comp.group] = true;
    }
    var target = componentList.find(function (item) {
      return item.title === category;
    });
    if (!target) {
      target = {
        title: category,
        icon: '',
        children: []
      };
      componentList.push(target);
    }
    if (comp.snippets && comp.snippets.length) {
      target.children.push({
        componentName: comp.componentName,
        title: comp.title || comp.componentName,
        sort: {
          category: target.title,
          group: compGroup[comp.componentName] || '原子组件',
          priority: componentCategorySort[target.title] || 0
        },
        icon: '',
        "package": comp.npm.pkg,
        snippets: comp.snippets || []
      });
    }
  });
  return componentList;
}
function fillRealVersion(meta, packageName, version, basicLibraryVersion) {
  if (packageName === void 0) {
    packageName = 'focusbeui';
  }
  if (version === void 0) {
    version = '0.1.0';
  }
  if (basicLibraryVersion === void 0) {
    basicLibraryVersion = {
      "@alifd/next": "1.25.23",
      "@alifd/meet": "2.6.3",
      "antd": "4.17.3"
    };
  }
  if (!meta || !version) {
    return meta;
  }
  var npm = meta.npm;
  if (!npm) {
    return meta;
  }
  if (typeof basicLibraryVersion === 'object' && basicLibraryVersion[npm["package"]]) {
    meta.npm = (0, _extends2["default"])({}, npm, {
      version: basicLibraryVersion[npm["package"]]
    });
  } else if (npm["package"] === packageName) {
    meta.npm = (0, _extends2["default"])({}, npm, {
      version: version
    });
  }
  return meta;
}
var componentMetas = [_meta["default"], _meta2["default"]];
var components = [];
exports.components = components;
var npmInfo = {};
componentMetas.forEach(function (meta) {
  if (Array.isArray(meta)) {
    components.push.apply(components, meta.map(function (item) {
      if (!item.npm) {
        var componentName = item.componentName;
        var names = componentName.split('.');
        var exportName = names[0],
          subName = names[1];
        item.npm = {
          exportName: exportName,
          main: '',
          destructuring: true,
          subName: names.length > 1 ? componentName.slice(componentName.indexOf('.') + 1) : subName
        };
      }
      item.npm = (0, _extends2["default"])({}, npmInfo, item.npm || {});
      return fillRealVersion(item);
    }));
  } else if (meta.components) {
    components.push.apply(components, meta.components.map(function (item) {
      if (!item.npm) {
        var componentName = item.componentName;
        var names = componentName.split('.');
        var exportName = names[0],
          subName = names[1];
        item.npm = {
          exportName: exportName,
          main: '',
          destructuring: true,
          subName: names.length > 1 ? componentName.slice(componentName.indexOf('.') + 1) : subName
        };
      }
      item.npm = (0, _extends2["default"])({}, npmInfo, item.npm || {});
      return fillRealVersion(item);
    }));
  } else {
    if (!meta.npm) {
      var componentName = meta.componentName;
      var names = componentName.split('.');
      var exportName = names[0],
        subName = names[1];
      meta.npm = {
        exportName: exportName,
        main: '',
        destructuring: true,
        subName: names.length > 1 ? componentName.slice(componentName.indexOf('.') + 1) : subName
      };
    }
    meta.npm = (0, _extends2["default"])({}, npmInfo, meta.npm || {});
    components.push(fillRealVersion(meta));
  }
});
var componentList = generateComponentList(components);
exports.componentList = componentList;
var execCompile = !!true;
if (!execCompile) {
  window.FocusbeuiMeta = {
    components: components,
    componentList: componentList
  };
}