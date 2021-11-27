"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_auth_userdashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/userdashboard.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/userdashboard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      orders: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios.get('/api/user-orders', {
      headers: {
        authorization: 'Bearer' + localStorage.getItem('token')
      }
    }).then(function (response) {
      _this.orders = response.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/userdashboard.vue?vue&type=style&index=0&id=76e448e6&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/userdashboard.vue?vue&type=style&index=0&id=76e448e6&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.nav-pills-custom .nav-link[data-v-76e448e6] {\n    color: #aaa;\n    background: #fff;\n    position: relative;\n}\n.nav-pills-custom .nav-link.active[data-v-76e448e6] {\n    color: #45b649;\n    background: #fff;\n}\n\n\n/* Add indicator arrow for the active tab */\n@media (min-width: 992px) {\n.nav-pills-custom .nav-link[data-v-76e448e6]::before {\n        content: '';\n        display: block;\n        border-top: 8px solid transparent;\n        border-left: 10px solid #fff;\n        border-bottom: 8px solid transparent;\n        position: absolute;\n        top: 30%;\n        right: -10px;\n        transform: translateY(-50%);\n        opacity: 0;\n}\n}\n.nav-pills-custom .nav-link.active[data-v-76e448e6]::before {\n    opacity: 1;\n}\n\n\n\n\n\n/*\n*\n* ==========================================\n* FOR DEMO PURPOSE\n* ==========================================\n*/\nbody[data-v-76e448e6] {\n    min-height: 100vh;\n    background: linear-gradient(to left, #dce35b, #45b649);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/userdashboard.vue?vue&type=style&index=0&id=76e448e6&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/userdashboard.vue?vue&type=style&index=0&id=76e448e6&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_userdashboard_vue_vue_type_style_index_0_id_76e448e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./userdashboard.vue?vue&type=style&index=0&id=76e448e6&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/userdashboard.vue?vue&type=style&index=0&id=76e448e6&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_userdashboard_vue_vue_type_style_index_0_id_76e448e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_userdashboard_vue_vue_type_style_index_0_id_76e448e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/js/components/auth/userdashboard.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/auth/userdashboard.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _userdashboard_vue_vue_type_template_id_76e448e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userdashboard.vue?vue&type=template&id=76e448e6&scoped=true& */ "./resources/js/components/auth/userdashboard.vue?vue&type=template&id=76e448e6&scoped=true&");
/* harmony import */ var _userdashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userdashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/auth/userdashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _userdashboard_vue_vue_type_style_index_0_id_76e448e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userdashboard.vue?vue&type=style&index=0&id=76e448e6&scoped=true&lang=css& */ "./resources/js/components/auth/userdashboard.vue?vue&type=style&index=0&id=76e448e6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _userdashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _userdashboard_vue_vue_type_template_id_76e448e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _userdashboard_vue_vue_type_template_id_76e448e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "76e448e6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/auth/userdashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/auth/userdashboard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/auth/userdashboard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userdashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./userdashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/userdashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userdashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/auth/userdashboard.vue?vue&type=style&index=0&id=76e448e6&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/auth/userdashboard.vue?vue&type=style&index=0&id=76e448e6&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_userdashboard_vue_vue_type_style_index_0_id_76e448e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./userdashboard.vue?vue&type=style&index=0&id=76e448e6&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/userdashboard.vue?vue&type=style&index=0&id=76e448e6&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/auth/userdashboard.vue?vue&type=template&id=76e448e6&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/auth/userdashboard.vue?vue&type=template&id=76e448e6&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_userdashboard_vue_vue_type_template_id_76e448e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_userdashboard_vue_vue_type_template_id_76e448e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_userdashboard_vue_vue_type_template_id_76e448e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./userdashboard.vue?vue&type=template&id=76e448e6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/userdashboard.vue?vue&type=template&id=76e448e6&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/userdashboard.vue?vue&type=template&id=76e448e6&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/userdashboard.vue?vue&type=template&id=76e448e6&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c(
      "section",
      { staticClass: "py-5" },
      [
        _vm.Loading
          ? [_c("content-loading")]
          : _c("div", { staticClass: "container" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-9" }, [
                  _c(
                    "div",
                    {
                      staticClass: "tab-content",
                      attrs: { id: "v-pills-tabContent" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "tab-pane fade shadow rounded bg-white show active p-5",
                          attrs: {
                            id: "v-pills-home",
                            role: "tabpanel",
                            "aria-labelledby": "v-pills-home-tab"
                          }
                        },
                        [
                          _c("h4", { staticClass: "font-italic mb-4" }, [
                            _vm._v("Personal information")
                          ]),
                          _vm._v(" "),
                          _c(
                            "p",
                            { staticClass: "font-italic text-muted mb-2" },
                            [_vm._v(_vm._s(_vm.AuthUser.email))]
                          ),
                          _vm._v(" "),
                          _c("p", {
                            staticClass: "font-italic text-muted mb-2"
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _vm._m(2),
                      _vm._v(" "),
                      _vm._m(3),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "tab-pane fade shadow rounded bg-white p-5",
                          attrs: {
                            id: "v-pills-settings",
                            role: "tabpanel",
                            "aria-labelledby": "v-pills-settings-tab"
                          }
                        },
                        [
                          _c("h4", { staticClass: "font-italic mb-4" }, [
                            _vm._v("Orders")
                          ]),
                          _vm._v(" "),
                          _c("table", { staticClass: "table" }, [
                            _vm._m(4),
                            _vm._v(" "),
                            _vm.orders.length
                              ? _c(
                                  "tbody",
                                  _vm._l(_vm.orders, function(order) {
                                    return _c("tr", { key: order.id }, [
                                      _c("td", [
                                        _vm._v(
                                          "#" + _vm._s(order.tracking) + " "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          " " +
                                            _vm._s(
                                              _vm._f("dateformat")(
                                                order.created_at
                                              )
                                            ) +
                                            " "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "$ " + _vm._s(order.subtotal) + " "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        order.status == 0
                                          ? _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "badge badge-primary"
                                              },
                                              [_vm._v("Processing")]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        order.status == 1
                                          ? _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "badge badge-warning"
                                              },
                                              [
                                                _vm._v(
                                                  "On\n                                                hold"
                                                )
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        order.status == 2
                                          ? _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "badge badge-danger"
                                              },
                                              [
                                                _vm._v(
                                                  "Pending\n                                                payment"
                                                )
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        order.status == 3
                                          ? _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "badge badge-success"
                                              },
                                              [_vm._v("Complated")]
                                            )
                                          : _vm._e()
                                      ])
                                    ])
                                  }),
                                  0
                                )
                              : _c("tbody", [_vm._m(5)])
                          ])
                        ]
                      )
                    ]
                  )
                ])
              ])
            ])
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "text-center mb-5 pb-3 text-black" }, [
      _c("h5", { staticClass: "display-4" }, [_vm._v("Manage Your Account")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c(
        "div",
        {
          staticClass: "nav flex-column nav-pills nav-pills-custom",
          attrs: {
            id: "v-pills-tab",
            role: "tablist",
            "aria-orientation": "vertical"
          }
        },
        [
          _c(
            "a",
            {
              staticClass: "nav-link mb-3 p-3 shadow active",
              attrs: {
                id: "v-pills-home-tab",
                "data-toggle": "pill",
                href: "#v-pills-home",
                role: "tab",
                "aria-controls": "v-pills-home",
                "aria-selected": "true"
              }
            },
            [
              _c("i", { staticClass: "fa fa-user-circle-o mr-2" }),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "font-weight-bold small text-uppercase" },
                [_vm._v("Personal information")]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "nav-link mb-3 p-3 shadow",
              attrs: {
                id: "v-pills-profile-tab",
                "data-toggle": "pill",
                href: "#v-pills-profile",
                role: "tab",
                "aria-controls": "v-pills-profile",
                "aria-selected": "false"
              }
            },
            [
              _c("i", { staticClass: "fa fa-calendar-minus-o mr-2" }),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "font-weight-bold small text-uppercase" },
                [_vm._v("Bookings")]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "nav-link mb-3 p-3 shadow",
              attrs: {
                id: "v-pills-messages-tab",
                "data-toggle": "pill",
                href: "#v-pills-messages",
                role: "tab",
                "aria-controls": "v-pills-messages",
                "aria-selected": "false"
              }
            },
            [
              _c("i", { staticClass: "fa fa-star mr-2" }),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "font-weight-bold small text-uppercase" },
                [_vm._v("Reviews")]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "nav-link mb-3 p-3 shadow",
              attrs: {
                id: "v-pills-settings-tab",
                "data-toggle": "pill",
                href: "#v-pills-settings",
                role: "tab",
                "aria-controls": "v-pills-settings",
                "aria-selected": "false"
              }
            },
            [
              _c("i", { staticClass: "fa fa-check mr-2" }),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "font-weight-bold small text-uppercase" },
                [_vm._v("Orders")]
              )
            ]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "tab-pane fade shadow rounded bg-white p-5",
        attrs: {
          id: "v-pills-profile",
          role: "tabpanel",
          "aria-labelledby": "v-pills-profile-tab"
        }
      },
      [
        _c("h4", { staticClass: "font-italic mb-4" }, [_vm._v("Bookings")]),
        _vm._v(" "),
        _c("p", { staticClass: "font-italic text-muted mb-2" }, [
          _vm._v(
            "Lorem ipsum dolor sit amet, consectetur\n                                adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit\n                                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "tab-pane fade shadow rounded bg-white p-5",
        attrs: {
          id: "v-pills-messages",
          role: "tabpanel",
          "aria-labelledby": "v-pills-messages-tab"
        }
      },
      [
        _c("h4", { staticClass: "font-italic mb-4" }, [_vm._v("Reviews")]),
        _vm._v(" "),
        _c("p", { staticClass: "font-italic text-muted mb-2" }, [
          _vm._v(
            "Lorem ipsum dolor sit amet, consectetur\n                                adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit\n                                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v(" #Order ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Date ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Subtotal ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Status ")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { attrs: { colspan: "4" } }, [
        _c("h5", { staticClass: "text-center mt-4 mb-4" }, [
          _vm._v("No Orders found.")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);