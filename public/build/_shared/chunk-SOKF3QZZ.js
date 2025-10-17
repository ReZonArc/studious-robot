import {
  require_react
} from "/build/_shared/chunk-QT64XSGC.js";
import {
  __toESM
} from "/build/_shared/chunk-73CLBT4D.js";

// node_modules/react-icons/lib/iconBase.mjs
var import_react2 = __toESM(require_react(), 1);

// node_modules/react-icons/lib/iconContext.mjs
var import_react = __toESM(require_react(), 1);
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react.default.createContext && /* @__PURE__ */ import_react.default.createContext(DefaultContext);

// node_modules/react-icons/lib/iconBase.mjs
var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /* @__PURE__ */ import_react2.default.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return (props) => /* @__PURE__ */ import_react2.default.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = (conf) => {
    var {
      attr,
      size,
      title
    } = props, svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return /* @__PURE__ */ import_react2.default.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /* @__PURE__ */ import_react2.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? /* @__PURE__ */ import_react2.default.createElement(IconContext.Consumer, null, (conf) => elem(conf)) : elem(DefaultContext);
}

// node_modules/react-icons/fi/index.mjs
function FiActivity(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "polyline", "attr": { "points": "22 12 18 12 15 21 9 3 6 12 2 12" }, "child": [] }] })(props);
}
function FiArrowLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "line", "attr": { "x1": "19", "y1": "12", "x2": "5", "y2": "12" }, "child": [] }, { "tag": "polyline", "attr": { "points": "12 19 5 12 12 5" }, "child": [] }] })(props);
}
function FiBook(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M4 19.5A2.5 2.5 0 0 1 6.5 17H20" }, "child": [] }, { "tag": "path", "attr": { "d": "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" }, "child": [] }] })(props);
}
function FiChevronDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "polyline", "attr": { "points": "6 9 12 15 18 9" }, "child": [] }] })(props);
}
function FiChevronRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "polyline", "attr": { "points": "9 18 15 12 9 6" }, "child": [] }] })(props);
}
function FiCode(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "polyline", "attr": { "points": "16 18 22 12 16 6" }, "child": [] }, { "tag": "polyline", "attr": { "points": "8 6 2 12 8 18" }, "child": [] }] })(props);
}
function FiCopy(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "rect", "attr": { "x": "9", "y": "9", "width": "13", "height": "13", "rx": "2", "ry": "2" }, "child": [] }, { "tag": "path", "attr": { "d": "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" }, "child": [] }] })(props);
}
function FiCpu(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "rect", "attr": { "x": "4", "y": "4", "width": "16", "height": "16", "rx": "2", "ry": "2" }, "child": [] }, { "tag": "rect", "attr": { "x": "9", "y": "9", "width": "6", "height": "6" }, "child": [] }, { "tag": "line", "attr": { "x1": "9", "y1": "1", "x2": "9", "y2": "4" }, "child": [] }, { "tag": "line", "attr": { "x1": "15", "y1": "1", "x2": "15", "y2": "4" }, "child": [] }, { "tag": "line", "attr": { "x1": "9", "y1": "20", "x2": "9", "y2": "23" }, "child": [] }, { "tag": "line", "attr": { "x1": "15", "y1": "20", "x2": "15", "y2": "23" }, "child": [] }, { "tag": "line", "attr": { "x1": "20", "y1": "9", "x2": "23", "y2": "9" }, "child": [] }, { "tag": "line", "attr": { "x1": "20", "y1": "14", "x2": "23", "y2": "14" }, "child": [] }, { "tag": "line", "attr": { "x1": "1", "y1": "9", "x2": "4", "y2": "9" }, "child": [] }, { "tag": "line", "attr": { "x1": "1", "y1": "14", "x2": "4", "y2": "14" }, "child": [] }] })(props);
}
function FiDatabase(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "ellipse", "attr": { "cx": "12", "cy": "5", "rx": "9", "ry": "3" }, "child": [] }, { "tag": "path", "attr": { "d": "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" }, "child": [] }, { "tag": "path", "attr": { "d": "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" }, "child": [] }] })(props);
}
function FiDownload(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }, "child": [] }, { "tag": "polyline", "attr": { "points": "7 10 12 15 17 10" }, "child": [] }, { "tag": "line", "attr": { "x1": "12", "y1": "15", "x2": "12", "y2": "3" }, "child": [] }] })(props);
}
function FiEye(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }, "child": [] }, { "tag": "circle", "attr": { "cx": "12", "cy": "12", "r": "3" }, "child": [] }] })(props);
}
function FiFeather(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" }, "child": [] }, { "tag": "line", "attr": { "x1": "16", "y1": "8", "x2": "2", "y2": "22" }, "child": [] }, { "tag": "line", "attr": { "x1": "17.5", "y1": "15", "x2": "9", "y2": "15" }, "child": [] }] })(props);
}
function FiGitBranch(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "line", "attr": { "x1": "6", "y1": "3", "x2": "6", "y2": "15" }, "child": [] }, { "tag": "circle", "attr": { "cx": "18", "cy": "6", "r": "3" }, "child": [] }, { "tag": "circle", "attr": { "cx": "6", "cy": "18", "r": "3" }, "child": [] }, { "tag": "path", "attr": { "d": "M18 9a9 9 0 0 1-9 9" }, "child": [] }] })(props);
}
function FiHome(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }, "child": [] }, { "tag": "polyline", "attr": { "points": "9 22 9 12 15 12 15 22" }, "child": [] }] })(props);
}
function FiInfo(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "circle", "attr": { "cx": "12", "cy": "12", "r": "10" }, "child": [] }, { "tag": "line", "attr": { "x1": "12", "y1": "16", "x2": "12", "y2": "12" }, "child": [] }, { "tag": "line", "attr": { "x1": "12", "y1": "8", "x2": "12.01", "y2": "8" }, "child": [] }] })(props);
}
function FiLayers(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "polygon", "attr": { "points": "12 2 2 7 12 12 22 7 12 2" }, "child": [] }, { "tag": "polyline", "attr": { "points": "2 17 12 22 22 17" }, "child": [] }, { "tag": "polyline", "attr": { "points": "2 12 12 17 22 12" }, "child": [] }] })(props);
}
function FiMessageCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" }, "child": [] }] })(props);
}
function FiRefreshCw(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "polyline", "attr": { "points": "23 4 23 10 17 10" }, "child": [] }, { "tag": "polyline", "attr": { "points": "1 20 1 14 7 14" }, "child": [] }, { "tag": "path", "attr": { "d": "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" }, "child": [] }] })(props);
}
function FiSave(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" }, "child": [] }, { "tag": "polyline", "attr": { "points": "17 21 17 13 7 13 7 21" }, "child": [] }, { "tag": "polyline", "attr": { "points": "7 3 7 8 15 8" }, "child": [] }] })(props);
}
function FiSend(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "line", "attr": { "x1": "22", "y1": "2", "x2": "11", "y2": "13" }, "child": [] }, { "tag": "polygon", "attr": { "points": "22 2 15 22 11 13 2 9 22 2" }, "child": [] }] })(props);
}
function FiSettings(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "circle", "attr": { "cx": "12", "cy": "12", "r": "3" }, "child": [] }, { "tag": "path", "attr": { "d": "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" }, "child": [] }] })(props);
}
function FiTrash2(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "polyline", "attr": { "points": "3 6 5 6 21 6" }, "child": [] }, { "tag": "path", "attr": { "d": "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }, "child": [] }, { "tag": "line", "attr": { "x1": "10", "y1": "11", "x2": "10", "y2": "17" }, "child": [] }, { "tag": "line", "attr": { "x1": "14", "y1": "11", "x2": "14", "y2": "17" }, "child": [] }] })(props);
}
function FiTrendingUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "polyline", "attr": { "points": "23 6 13.5 15.5 8.5 10.5 1 18" }, "child": [] }, { "tag": "polyline", "attr": { "points": "17 6 23 6 23 12" }, "child": [] }] })(props);
}
function FiZap(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "polygon", "attr": { "points": "13 2 3 14 12 14 11 22 21 10 12 10 13 2" }, "child": [] }] })(props);
}

export {
  FiActivity,
  FiArrowLeft,
  FiBook,
  FiChevronDown,
  FiChevronRight,
  FiCode,
  FiCopy,
  FiCpu,
  FiDatabase,
  FiDownload,
  FiEye,
  FiFeather,
  FiGitBranch,
  FiHome,
  FiInfo,
  FiLayers,
  FiMessageCircle,
  FiRefreshCw,
  FiSave,
  FiSend,
  FiSettings,
  FiTrash2,
  FiTrendingUp,
  FiZap
};
//# sourceMappingURL=/build/_shared/chunk-SOKF3QZZ.js.map
