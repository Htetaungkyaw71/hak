/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,body{\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    overflow: hidden;\\r\\n}\\r\\n*{\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n}\\r\\ncanvas{\\r\\n    display: block;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://new-mario/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://new-mario/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://new-mario/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://new-mario/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://new-mario/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://new-mario/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://new-mario/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://new-mario/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://new-mario/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://new-mario/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _img_ground1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/ground1.png */ \"./src/img/ground1.png\");\n/* harmony import */ var _img_small11_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/small11.png */ \"./src/img/small11.png\");\n/* harmony import */ var _img_about_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/about.png */ \"./src/img/about.png\");\n/* harmony import */ var _img_projects_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/projects.png */ \"./src/img/projects.png\");\n/* harmony import */ var _img_contact2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/contact2.png */ \"./src/img/contact2.png\");\n/* harmony import */ var _img_live2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/live2.png */ \"./src/img/live2.png\");\n/* harmony import */ var _img_video_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/video.png */ \"./src/img/video.png\");\n/* harmony import */ var _img_ask_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/ask.png */ \"./src/img/ask.png\");\n/* harmony import */ var _img_ide_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/ide.png */ \"./src/img/ide.png\");\n/* harmony import */ var _img_github_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/github.png */ \"./src/img/github.png\");\n/* harmony import */ var _img_football1_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/football1.png */ \"./src/img/football1.png\");\n/* harmony import */ var _img_airplane_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img/airplane.png */ \"./src/img/airplane.png\");\n/* harmony import */ var _img_css1_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./img/css1.png */ \"./src/img/css1.png\");\n/* harmony import */ var _img_js_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./img/js.png */ \"./src/img/js.png\");\n/* harmony import */ var _img_python_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./img/python.png */ \"./src/img/python.png\");\n/* harmony import */ var _img_skills_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./img/skills.png */ \"./src/img/skills.png\");\n/* harmony import */ var _img_namee_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./img/namee.png */ \"./src/img/namee.png\");\n/* harmony import */ var _img_thank_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./img/thank.png */ \"./src/img/thank.png\");\n/* harmony import */ var _img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./img/spriteRunLeft.png */ \"./src/img/spriteRunLeft.png\");\n/* harmony import */ var _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./img/spriteRunRight.png */ \"./src/img/spriteRunRight.png\");\n/* harmony import */ var _img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./img/spriteStandRight.png */ \"./src/img/spriteStandRight.png\");\n/* harmony import */ var _img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./img/spriteStandLeft.png */ \"./src/img/spriteStandLeft.png\");\n/* harmony import */ var _img_background8_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./img/background8.png */ \"./src/img/background8.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet canvas = document.querySelector(\"canvas\");\r\nlet c = canvas.getContext(\"2d\");\r\nlet scrollOffset = 0;\r\ncanvas.width = innerWidth;\r\ncanvas.height = innerHeight;\r\nlet currentKey;\r\n\r\nwindow.addEventListener('resize',()=>{\r\n    canvas.width = innerWidth;\r\n    canvas.height = innerHeight;\r\n})\r\n\r\nclass Platform {\r\n    constructor({x,y,image}){\r\n        this.position = {\r\n            x,\r\n            y\r\n        }\r\n        this.image = image;\r\n        this.width = 580;\r\n        this.height =  125;\r\n        \r\n    }\r\n    draw(){\r\n        c.drawImage(this.image,this.position.x,this.position.y)\r\n    }\r\n    \r\n    \r\n}\r\nclass GenericObject {\r\n    constructor({x,y,image}){\r\n        this.position = {\r\n            x,\r\n            y\r\n        }\r\n        this.image = image;\r\n        this.width = canvas.width;\r\n        this.height =  canvas.height;\r\n        \r\n    }\r\n    draw(){\r\n        c.drawImage(this.image,this.position.x,this.position.y)\r\n    }\r\n    \r\n    \r\n}\r\nclass SmallObj {\r\n    constructor({x,y,image}){\r\n        this.position = {\r\n            x,\r\n            y\r\n        }\r\n        this.image = image;\r\n        this.width = 290;\r\n        this.height =  227;\r\n        \r\n    }\r\n    draw(){\r\n        c.drawImage(this.image,this.position.x,this.position.y)\r\n    }\r\n    \r\n    \r\n}\r\nclass TextObj {\r\n    constructor({x,y,image}){\r\n        this.position = {\r\n            x,\r\n            y\r\n        }\r\n        this.image = image;\r\n        this.width = 600;\r\n        this.height =  600;\r\n        \r\n    }\r\n    draw(){\r\n        c.drawImage(this.image,this.position.x,this.position.y)\r\n    }\r\n  \r\n    \r\n}\r\n\r\n\r\nclass ProjectObj {\r\n    constructor({x,y,image,link}){\r\n        this.position = {\r\n            x,\r\n            y\r\n        }\r\n        this.link = link\r\n        this.image = image;\r\n        this.width = 600;\r\n        this.height =  600;\r\n        \r\n    }\r\n    draw(){\r\n        c.drawImage(this.image,this.position.x,this.position.y)\r\n    }\r\n    click(xmouse,ymouse){\r\n        let distance = Math.sqrt((xmouse - this.position.x)*(xmouse - this.position.x)+(ymouse - this.position.y)*(ymouse - this.position.y))\r\n        if(distance < 400 && distance > 300){\r\n            window.open(this.link,'_blank')\r\n        }\r\n\r\n    }  \r\n}\r\nclass AnimateObj {\r\n    constructor({x,y,image,range}){\r\n        this.position = {\r\n            x,\r\n            y\r\n        }\r\n        this.velocity = {\r\n            x:0,\r\n            y:0\r\n        }\r\n        this.image = image;\r\n        this.width = 600;\r\n        this.height =  600;\r\n        this.range = range\r\n        \r\n    }\r\n    draw(){\r\n        c.drawImage(this.image,this.position.x,this.position.y)\r\n    }\r\n    update = ()=>{\r\n     \r\n        this.draw()  \r\n        if(scrollOffset >= 3200 ){ \r\n            this.position.y += this.velocity.y;     \r\n            if(this.height + this.position.y + this.velocity.y <= canvas.height){\r\n                this.velocity.y += 0.09;\r\n            }\r\n            else{\r\n                this.velocity.y = 0\r\n            }\r\n        }\r\n             \r\n\r\n       \r\n        \r\n    }\r\n    \r\n    \r\n}\r\n\r\nlet gravity = 0.5;\r\nclass Player {\r\n    constructor(){\r\n    \r\n        this.position = {\r\n            x:100,\r\n            y:100\r\n        }\r\n        this.velocity = {\r\n            x:0,\r\n            y:0\r\n        }\r\n        this.frame = 0\r\n        this.width =  66;\r\n        this.height = 150;\r\n        this.sprites = {\r\n            stand:{\r\n                right:getImg(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_21__),\r\n                left:getImg(_img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_22__),\r\n                cropWidth:177,\r\n                width:66\r\n            },\r\n            run:{\r\n                right:getImg(_img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_20__),\r\n                left:getImg(_img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_19__),\r\n                cropWidth:341,\r\n                width:127\r\n            }\r\n        }\r\n        this.currentSprite = this.sprites.stand.right\r\n        this.currentCropWidth = this.sprites.stand.cropWidth\r\n     \r\n      \r\n    } \r\n    draw = ()=> {\r\n        c.drawImage(this.currentSprite,\r\n        this.currentCropWidth * this.frame,\r\n        0,\r\n        this.currentCropWidth,\r\n        400,\r\n        this.position.x,\r\n        this.position.y,\r\n        this.width,\r\n        this.height\r\n        )\r\n    } \r\n    update = ()=>{\r\n        this.frame++;\r\n        if(this.frame > 59 &&( this.currentSprite == this.sprites.stand.right || this.currentSprite == this.sprites.stand.left)){\r\n            this.frame = 0\r\n        }else if(this.frame > 29 && (this.currentSprite == this.sprites.run.right || this.currentSprite == this.sprites.run.left) ){\r\n            this.frame = 0\r\n        }\r\n     \r\n        this.draw()  \r\n        this.position.y += this.velocity.y;\r\n        this.position.x += this.velocity.x;\r\n        \r\n        if(this.height + this.position.y + this.velocity.y <= canvas.height){\r\n            this.velocity.y += gravity;\r\n        }\r\n        else{\r\n            this.velocity.y = 0\r\n        }\r\n         \r\n        \r\n    }\r\n}\r\n\r\nlet player;\r\nlet platforms;\r\nlet generic_obj;\r\nlet small_objs;\r\nlet text_objs;\r\nlet animate_objs;\r\nlet projects_objs;\r\nlet contact_obj;\r\n\r\nfunction getImg(img){\r\n    const image = new Image()\r\n    image.src = img\r\n    return image    \r\n}\r\n\r\nfunction init(){    \r\n    player = new Player()\r\n    platforms = [\r\n        new Platform({x:-1,y:500,image:getImg(_img_ground1_png__WEBPACK_IMPORTED_MODULE_1__)}),\r\n        new Platform({x:580 -5 ,y:500,image:getImg(_img_ground1_png__WEBPACK_IMPORTED_MODULE_1__)}),\r\n        new Platform({x:580 *  2  - 10 ,y:500,image:getImg(_img_ground1_png__WEBPACK_IMPORTED_MODULE_1__)}),\r\n        new Platform({x:580 * 3  - 30 ,y:500,image:getImg(_img_ground1_png__WEBPACK_IMPORTED_MODULE_1__)}),\r\n        new Platform({x:580 * 4 - 40 ,y:500,image:getImg(_img_ground1_png__WEBPACK_IMPORTED_MODULE_1__)}),\r\n        new Platform({x:580 * 5 - 50 ,y:500,image:getImg(_img_ground1_png__WEBPACK_IMPORTED_MODULE_1__)}),\r\n        new Platform({x:580 * 6 - 60 ,y:500,image:getImg(_img_ground1_png__WEBPACK_IMPORTED_MODULE_1__)}),\r\n        new Platform({x:580 * 7 - 70 ,y:500,image:getImg(_img_ground1_png__WEBPACK_IMPORTED_MODULE_1__)}),\r\n        new Platform({x:580 * 8 - 80 ,y:500,image:getImg(_img_ground1_png__WEBPACK_IMPORTED_MODULE_1__)}),\r\n        new Platform({x:580 * 9 - 90 ,y:500,image:getImg(_img_ground1_png__WEBPACK_IMPORTED_MODULE_1__)}),\r\n        new Platform({x:580 * 10 - 110 ,y:500,image:getImg(_img_ground1_png__WEBPACK_IMPORTED_MODULE_1__)}),\r\n        new Platform({x:580 * 11 - 110 ,y:500,image:getImg(_img_ground1_png__WEBPACK_IMPORTED_MODULE_1__)}),\r\n        new Platform({x:580 * 12 - 120 ,y:500,image:getImg(_img_ground1_png__WEBPACK_IMPORTED_MODULE_1__)}),\r\n        new Platform({x:580 * 13 - 130 ,y:500,image:getImg(_img_ground1_png__WEBPACK_IMPORTED_MODULE_1__)}),\r\n        new Platform({x:580 * 14 - 140 ,y:500,image:getImg(_img_ground1_png__WEBPACK_IMPORTED_MODULE_1__)}),\r\n        new Platform({x:580 * 15 - 150 ,y:500,image:getImg(_img_ground1_png__WEBPACK_IMPORTED_MODULE_1__)}),\r\n        new Platform({x:580 * 16 - 160 ,y:500,image:getImg(_img_ground1_png__WEBPACK_IMPORTED_MODULE_1__)}),\r\n    ]\r\n    animate_objs = [\r\n        new AnimateObj({x:580 * 6.5 - 65,y:-300,image:getImg(_img_airplane_png__WEBPACK_IMPORTED_MODULE_12__)}),\r\n        new AnimateObj({x:580 * 7 - 70,y:-300,image:getImg(_img_css1_png__WEBPACK_IMPORTED_MODULE_13__)}),\r\n        new AnimateObj({x:580 * 7.5 - 75,y:-300,image:getImg(_img_js_png__WEBPACK_IMPORTED_MODULE_14__)}),\r\n        new AnimateObj({x:580 * 8 - 80,y:-300,image:getImg(_img_python_png__WEBPACK_IMPORTED_MODULE_15__)}),\r\n    ]\r\n     \r\n    generic_obj = [new GenericObject({x:-1 ,y:-1,image:getImg(_img_background8_png__WEBPACK_IMPORTED_MODULE_23__)})]\r\n    small_objs = [\r\n        new SmallObj({x:580 *  2  - 10,y:380,image:getImg(_img_small11_png__WEBPACK_IMPORTED_MODULE_2__)}),\r\n        new SmallObj({x:580 *  6  - 60,y:380,image:getImg(_img_small11_png__WEBPACK_IMPORTED_MODULE_2__)}),\r\n        new SmallObj({x:580 *  9  - 90,y:380,image:getImg(_img_small11_png__WEBPACK_IMPORTED_MODULE_2__)}),\r\n    ]\r\n    text_objs = [\r\n        new TextObj({x:400,y:140,image:getImg(_img_namee_png__WEBPACK_IMPORTED_MODULE_17__)}),\r\n        new TextObj({x:580 * 15.5 - 155 ,y:140,image:getImg(_img_thank_png__WEBPACK_IMPORTED_MODULE_18__)}),\r\n        new TextObj({x:580 *  2  - 10,y:160,image:getImg(_img_about_png__WEBPACK_IMPORTED_MODULE_3__)}),\r\n        new TextObj({x:580 *  6  - 60,y:160,image:getImg(_img_skills_png__WEBPACK_IMPORTED_MODULE_16__)}),\r\n        new TextObj({x:580 *  9  - 90,y:160,image:getImg(_img_projects_png__WEBPACK_IMPORTED_MODULE_4__)}),\r\n        new TextObj({x:580 *  3  - 30,y:130,image:getImg(_img_live2_png__WEBPACK_IMPORTED_MODULE_6__)}),\r\n        new TextObj({x:580 *  4.5  - 45,y:170,image:getImg(_img_football1_png__WEBPACK_IMPORTED_MODULE_11__)}),\r\n        new TextObj({x:580 *  14  - 140,y:125,image:getImg(_img_contact2_png__WEBPACK_IMPORTED_MODULE_5__)})\r\n    ]\r\n\r\n\r\n    projects_objs = [\r\n        new ProjectObj({x:580 *  10  - 100,y:120,image:getImg(_img_video_png__WEBPACK_IMPORTED_MODULE_7__),link:\"https://chat-valley.herokuapp.com/\"}),\r\n        new ProjectObj({x:580 *  10.8  - 108,y:120,image:getImg(_img_ask_png__WEBPACK_IMPORTED_MODULE_8__),link:\"https://askme-sigma.vercel.app/\"}),\r\n        new ProjectObj({x:580 *  11.6  - 116,y:120,image:getImg(_img_ide_png__WEBPACK_IMPORTED_MODULE_9__),link:\"https://htetaungkyaw71.github.io/Online-IDE/\"}),\r\n        new ProjectObj({x:580 *  12.4  - 124,y:120,image:getImg(_img_github_png__WEBPACK_IMPORTED_MODULE_10__),link:\"https://github.com/Htetaungkyaw71\"}),\r\n    ]\r\n  \r\n\r\n}\r\n\r\n\r\n\r\nlet keys = {\r\n    right:{\r\n        pressed:false\r\n    },\r\n    left:{\r\n        pressed:false\r\n    }\r\n}\r\n\r\n// animation\r\n\r\nfunction animate(){\r\n    requestAnimationFrame(animate)\r\n    c.fillRect(0,0,canvas.width,canvas.height)\r\n\r\n    generic_obj.forEach(g=>{\r\n        g.draw();\r\n    })\r\n    small_objs.forEach(s=>{\r\n        s.draw()\r\n    })\r\n    text_objs.forEach(t=>{\r\n        t.draw()\r\n    })\r\n    projects_objs.forEach(p=>{\r\n        p.draw()\r\n    })\r\n    animate_objs.forEach(a=>{\r\n        a.update();\r\n    })\r\n    platforms.forEach(platform=>{\r\n        platform.draw();\r\n    })\r\n    player.update();\r\n\r\n    if((keys.right.pressed && player.position.x < 100 )){\r\n        player.velocity.x = 5\r\n    }else if((keys.left.pressed && player.position.x > 50) || keys.left.pressed && scrollOffset == 0 && player.position.x > 0 ){\r\n        player.velocity.x = -5\r\n  \r\n    }else{\r\n        player.velocity.x = 0\r\n        if(keys.right.pressed){  \r\n            platforms.forEach(platform=>{\r\n                platform.position.x -= 5\r\n            })\r\n            generic_obj.forEach(g=>{\r\n                g.position.x -= 3\r\n            })\r\n            small_objs.forEach(g=>{\r\n                g.position.x -= 5\r\n            })\r\n            text_objs.forEach(t=>{\r\n                t.position.x -= 5\r\n            })\r\n            animate_objs.forEach(a=>{\r\n                a.position.x -= 5\r\n            })\r\n            projects_objs.forEach(p=>{\r\n                p.position.x -= 5\r\n            })\r\n\r\n            scrollOffset += 5\r\n        \r\n        }else if(keys.left.pressed && scrollOffset > 0){\r\n            platforms.forEach(platform=>{\r\n                platform.position.x += 5\r\n            })\r\n            generic_obj.forEach(g=>{\r\n                g.position.x += 3\r\n            })\r\n            small_objs.forEach(g=>{\r\n                g.position.x += 5\r\n            })\r\n            text_objs.forEach(t=>{\r\n                t.position.x += 5\r\n            })\r\n            animate_objs.forEach(a=>{\r\n                a.position.x += 5\r\n            })\r\n            projects_objs.forEach(p=>{\r\n                p.position.x += 5\r\n            })\r\n            scrollOffset -= 5\r\n        \r\n        }\r\n        \r\n\r\n    }\r\n    if(scrollOffset >= 8290){\r\n        player.velocity.x = 0\r\n        player.position.x = 0\r\n    }\r\n  \r\n\r\n    platforms.forEach(platform=>{\r\n        if(player.height + player.position.y <= platform.position.y &&\r\n            player.height + player.position.y + player.velocity.y >= platform.position.y\r\n            && player.position.x + player.width >= platform.position.x &&\r\n            player.position.x <= platform.position.x + platform.width\r\n            ){\r\n            player.velocity.y = 0;\r\n           \r\n        }\r\n    })\r\n    small_objs.forEach(platform=>{\r\n        if(player.height + player.position.y <= platform.position.y &&\r\n            player.height + player.position.y + player.velocity.y >= platform.position.y\r\n            && player.position.x + player.width >= platform.position.x &&\r\n            player.position.x <= platform.position.x + platform.width\r\n            ){\r\n            player.velocity.y = 0;\r\n        }\r\n    })\r\n\r\n      // sprite swith\r\n    if(keys.right.pressed && currentKey == 'right' && player.currentSprite !== player.sprites.run.right){\r\n        player.frame = 1\r\n        player.currentSprite = player.sprites.run.right;\r\n        player.currentCropWidth = player.sprites.run.cropWidth;\r\n        player.width = player.sprites.run.width\r\n\r\n    }\r\n    else if(keys.left.pressed &&currentKey == 'left' && player.currentSprite !== player.sprites.run.left){\r\n        player.currentSprite = player.sprites.run.left;\r\n        player.currentCropWidth = player.sprites.run.cropWidth;\r\n        player.width = player.sprites.run.width\r\n    }\r\n    else if(!keys.left.pressed && currentKey == 'left' && player.currentSprite !== player.sprites.stand.left){\r\n        player.currentSprite = player.sprites.stand.left;\r\n        player.currentCropWidth = player.sprites.stand.cropWidth;\r\n        player.width = player.sprites.stand.width\r\n    }\r\n    else if(!keys.right.pressed && currentKey == 'right' && player.currentSprite !== player.sprites.stand.right){\r\n        player.currentSprite = player.sprites.stand.right;\r\n        player.currentCropWidth = player.sprites.stand.cropWidth;\r\n        player.width = player.sprites.stand.width\r\n    }\r\n\r\n   \r\n}\r\n\r\n\r\n// animation\r\n\r\n\r\n// control\r\n\r\naddEventListener('keydown',({keyCode})=>{\r\n    switch (keyCode) {\r\n        case 87:\r\n            player.velocity.y -= 15\r\n            break;\r\n        case 68:\r\n            keys.right.pressed = true\r\n            currentKey = \"right\"\r\n            break;\r\n        case 65:\r\n            keys.left.pressed = true\r\n            currentKey = \"left\"\r\n            break;\r\n        default:\r\n            break;\r\n    }\r\n})  \r\n\r\naddEventListener('keyup',({keyCode})=>{\r\n    switch (keyCode) {\r\n        case 87:\r\n            break;\r\n        case 68:\r\n            keys.right.pressed = false\r\n            break;\r\n        case 65: \r\n            keys.left.pressed = false\r\n          \r\n            break;\r\n        default:\r\n            break;\r\n    }\r\n})  \r\n\r\n// control\r\naddEventListener('click',(event)=>{\r\n    const rect = canvas.getBoundingClientRect()\r\n    let x = event.clientX - rect.left\r\n    let y = event.clientY - rect.top\r\n    projects_objs.forEach(p=>{\r\n        p.click(x,y)\r\n    })\r\n})\r\n\r\ninit()\r\nanimate()\r\n\r\n\r\n\n\n//# sourceURL=webpack://new-mario/./src/index.js?");

/***/ }),

/***/ "./src/img/about.png":
/*!***************************!*\
  !*** ./src/img/about.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3193be054b45f14d9a42.png\";\n\n//# sourceURL=webpack://new-mario/./src/img/about.png?");

/***/ }),

/***/ "./src/img/airplane.png":
/*!******************************!*\
  !*** ./src/img/airplane.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7b9fbdd3f2f2591b17d4.png\";\n\n//# sourceURL=webpack://new-mario/./src/img/airplane.png?");

/***/ }),

/***/ "./src/img/ask.png":
/*!*************************!*\
  !*** ./src/img/ask.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fdb3d8bbec2191a40527.png\";\n\n//# sourceURL=webpack://new-mario/./src/img/ask.png?");

/***/ }),

/***/ "./src/img/background8.png":
/*!*********************************!*\
  !*** ./src/img/background8.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3c683a0f06d79b54f88c.png\";\n\n//# sourceURL=webpack://new-mario/./src/img/background8.png?");

/***/ }),

/***/ "./src/img/contact2.png":
/*!******************************!*\
  !*** ./src/img/contact2.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bf36d335fa45eb045ab8.png\";\n\n//# sourceURL=webpack://new-mario/./src/img/contact2.png?");

/***/ }),

/***/ "./src/img/css1.png":
/*!**************************!*\
  !*** ./src/img/css1.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a9ead6e6bd4866a11b90.png\";\n\n//# sourceURL=webpack://new-mario/./src/img/css1.png?");

/***/ }),

/***/ "./src/img/football1.png":
/*!*******************************!*\
  !*** ./src/img/football1.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cffa8094e58ce6e0009c.png\";\n\n//# sourceURL=webpack://new-mario/./src/img/football1.png?");

/***/ }),

/***/ "./src/img/github.png":
/*!****************************!*\
  !*** ./src/img/github.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"84b88ea8029e134aef68.png\";\n\n//# sourceURL=webpack://new-mario/./src/img/github.png?");

/***/ }),

/***/ "./src/img/ground1.png":
/*!*****************************!*\
  !*** ./src/img/ground1.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2c682c34087a3823ea77.png\";\n\n//# sourceURL=webpack://new-mario/./src/img/ground1.png?");

/***/ }),

/***/ "./src/img/ide.png":
/*!*************************!*\
  !*** ./src/img/ide.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cb5f877e68861958ac40.png\";\n\n//# sourceURL=webpack://new-mario/./src/img/ide.png?");

/***/ }),

/***/ "./src/img/js.png":
/*!************************!*\
  !*** ./src/img/js.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6753d71ebfd85e998a8c.png\";\n\n//# sourceURL=webpack://new-mario/./src/img/js.png?");

/***/ }),

/***/ "./src/img/live2.png":
/*!***************************!*\
  !*** ./src/img/live2.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6bcc95d3640699afb19d.png\";\n\n//# sourceURL=webpack://new-mario/./src/img/live2.png?");

/***/ }),

/***/ "./src/img/namee.png":
/*!***************************!*\
  !*** ./src/img/namee.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b502086b7eb1c383ed86.png\";\n\n//# sourceURL=webpack://new-mario/./src/img/namee.png?");

/***/ }),

/***/ "./src/img/projects.png":
/*!******************************!*\
  !*** ./src/img/projects.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"979bc91b04737f690600.png\";\n\n//# sourceURL=webpack://new-mario/./src/img/projects.png?");

/***/ }),

/***/ "./src/img/python.png":
/*!****************************!*\
  !*** ./src/img/python.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c7fd8c154983274e690e.png\";\n\n//# sourceURL=webpack://new-mario/./src/img/python.png?");

/***/ }),

/***/ "./src/img/skills.png":
/*!****************************!*\
  !*** ./src/img/skills.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9b1dd12255e75e5b9350.png\";\n\n//# sourceURL=webpack://new-mario/./src/img/skills.png?");

/***/ }),

/***/ "./src/img/small11.png":
/*!*****************************!*\
  !*** ./src/img/small11.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f0e34b4479fa2b494683.png\";\n\n//# sourceURL=webpack://new-mario/./src/img/small11.png?");

/***/ }),

/***/ "./src/img/spriteRunLeft.png":
/*!***********************************!*\
  !*** ./src/img/spriteRunLeft.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c67ea51444aafa9bdcd5.png\";\n\n//# sourceURL=webpack://new-mario/./src/img/spriteRunLeft.png?");

/***/ }),

/***/ "./src/img/spriteRunRight.png":
/*!************************************!*\
  !*** ./src/img/spriteRunRight.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a2f75989924952a7e49c.png\";\n\n//# sourceURL=webpack://new-mario/./src/img/spriteRunRight.png?");

/***/ }),

/***/ "./src/img/spriteStandLeft.png":
/*!*************************************!*\
  !*** ./src/img/spriteStandLeft.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"11514f48f22f6d8e3cf7.png\";\n\n//# sourceURL=webpack://new-mario/./src/img/spriteStandLeft.png?");

/***/ }),

/***/ "./src/img/spriteStandRight.png":
/*!**************************************!*\
  !*** ./src/img/spriteStandRight.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"01e8f15e899155c68950.png\";\n\n//# sourceURL=webpack://new-mario/./src/img/spriteStandRight.png?");

/***/ }),

/***/ "./src/img/thank.png":
/*!***************************!*\
  !*** ./src/img/thank.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"caf6190b4aa33d606789.png\";\n\n//# sourceURL=webpack://new-mario/./src/img/thank.png?");

/***/ }),

/***/ "./src/img/video.png":
/*!***************************!*\
  !*** ./src/img/video.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1fb0c528a9ff2f0c7f80.png\";\n\n//# sourceURL=webpack://new-mario/./src/img/video.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;