"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_auth_login_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/login.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/login.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_social_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-social-auth */ "./node_modules/vue-social-auth/dist/vue-social-auth.es2017.js");
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
      errors: '',
      success: '',
      form: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    login: function login() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/user-login', this.form).then(function (response) {
        var token = response.data.token;
        var user_role = response.data.user.role;

        if (user_role !== "admin") {
          _this.errors = 'Make Sure Your Email & Password!';
        }

        if (user_role == "admin") {
          _this.$store.commit('SET_AUTHENTICATED', true);

          _this.$router.push({
            name: 'admin-dashboard'
          });

          _this.$store.commit('SET_USER', response.data.user);

          localStorage.setItem('token', token);
        }

        if (response.data.errors) {
          _this.errors = 'Make Sure Your Email & Password!';
        }
      })["catch"](function (e) {
        _this.errors = 'Make Sure Your Email & Password!';
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/login.vue?vue&type=style&index=0&id=6aa0b866&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/login.vue?vue&type=style&index=0&id=6aa0b866&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.login-page[data-v-6aa0b866]{\n    background: linear-gradient(to right, #141e30, #475d82);\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/login.vue?vue&type=style&index=0&id=6aa0b866&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/login.vue?vue&type=style&index=0&id=6aa0b866&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_6aa0b866_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login.vue?vue&type=style&index=0&id=6aa0b866&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/login.vue?vue&type=style&index=0&id=6aa0b866&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_6aa0b866_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_6aa0b866_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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

/***/ "./resources/js/components/auth/login.vue":
/*!************************************************!*\
  !*** ./resources/js/components/auth/login.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _login_vue_vue_type_template_id_6aa0b866_scoped_true_class_login_page___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=6aa0b866&scoped=true&class=login-page& */ "./resources/js/components/auth/login.vue?vue&type=template&id=6aa0b866&scoped=true&class=login-page&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./resources/js/components/auth/login.vue?vue&type=script&lang=js&");
/* harmony import */ var _login_vue_vue_type_style_index_0_id_6aa0b866_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.vue?vue&type=style&index=0&id=6aa0b866&scoped=true&lang=css& */ "./resources/js/components/auth/login.vue?vue&type=style&index=0&id=6aa0b866&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _login_vue_vue_type_template_id_6aa0b866_scoped_true_class_login_page___WEBPACK_IMPORTED_MODULE_0__.render,
  _login_vue_vue_type_template_id_6aa0b866_scoped_true_class_login_page___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6aa0b866",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/auth/login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/auth/login.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/auth/login.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/auth/login.vue?vue&type=style&index=0&id=6aa0b866&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/auth/login.vue?vue&type=style&index=0&id=6aa0b866&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_6aa0b866_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login.vue?vue&type=style&index=0&id=6aa0b866&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/login.vue?vue&type=style&index=0&id=6aa0b866&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/auth/login.vue?vue&type=template&id=6aa0b866&scoped=true&class=login-page&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/auth/login.vue?vue&type=template&id=6aa0b866&scoped=true&class=login-page& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_6aa0b866_scoped_true_class_login_page___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_6aa0b866_scoped_true_class_login_page___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_6aa0b866_scoped_true_class_login_page___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login.vue?vue&type=template&id=6aa0b866&scoped=true&class=login-page& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/login.vue?vue&type=template&id=6aa0b866&scoped=true&class=login-page&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/login.vue?vue&type=template&id=6aa0b866&scoped=true&class=login-page&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/login.vue?vue&type=template&id=6aa0b866&scoped=true&class=login-page& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "flex  justify-content-center login-page h-full" },
    [
      _c("div", { staticClass: "mt-44 lg:w-5/12 w-10/12" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header" }, [
            _vm.errors
              ? _c("div", { staticClass: "error text-danger" }, [
                  _vm._v(_vm._s(_vm.errors))
                ])
              : _c("div", { staticClass: "title" }, [_vm._v("Login")])
          ]),
          _vm._v(" "),
          _vm.success
            ? _c(
                "div",
                {
                  staticClass:
                    "ml-3 mr-3 mt-3 alert alert-success alert-dismissible fade show flex items-center",
                  attrs: { role: "alert" }
                },
                [
                  _c("strong", [_vm._v(_vm._s(_vm.success))]),
                  _vm._v(" "),
                  _vm._m(0)
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.login.apply(null, arguments)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                    _vm._v("Email")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.email,
                        expression: "form.email"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "email",
                      placeholder: "Enter email",
                      required: ""
                    },
                    domProps: { value: _vm.form.email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "email", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.email
                    ? _c("small", { staticClass: "form-text text-danger" }, [
                        _vm._v(_vm._s(_vm.errors.email[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "password" } }, [
                    _vm._v("Password")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.password,
                        expression: "form.password"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "password",
                      placeholder: "password",
                      required: ""
                    },
                    domProps: { value: _vm.form.password },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "password", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.password
                    ? _c("small", { staticClass: "form-text text-danger" }, [
                        _vm._v(_vm._s(_vm.errors.password[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _vm._m(1)
              ]
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "alert",
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v("Login")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-social-auth/dist/vue-social-auth.es2017.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vue-social-auth/dist/vue-social-auth.es2017.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "VueSocialauth": () => (/* binding */ VueSocialauth)
/* harmony export */ });
/*!
 * vue-social-auth v1.4.3
 * https://github.com/diadal/vue-social-auth
 * Released under the MIT License.
 */

if (typeof Object.assign != 'function') {
  Object.assign = function(target, varArgs) {
    'use strict';
    var arguments$1 = arguments;

    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments$1[index];

      if (nextSource != null) { // Skip over if undefined or null
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
    return to;
  };
}

function camelCase(name) {
  return name.replace(/([\:\-\_]+(.))/g, function (_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  });
}

function isUndefined(value) {
  return typeof value === 'undefined'
}





function isString(value) {
  return typeof value === 'string'
}



function isFunction(value) {
  return typeof value === 'function'
}

function objectExtend(a, b) {

  // Don't touch 'null' or 'undefined' objects.
  if (a == null || b == null) {
    return a;
  }

  Object.keys(b).forEach(function (key) {
    if (Object.prototype.toString.call(b[key]) == '[object Object]') {
      if (Object.prototype.toString.call(a[key]) != '[object Object]') {
        a[key] = b[key];
      } else {
        a[key] = objectExtend(a[key], b[key]);
      }
    } else {
      a[key] = b[key];
    }
  });

  return a;
}

/**
 * Assemble url from two segments
 * 
 * @author Sahat Yalkabov <https://github.com/sahat>
 * @copyright Method taken from https://github.com/sahat/satellizer
 * 
 * @param  {String} baseUrl Base url
 * @param  {String} url     URI
 * @return {String}
 */
function joinUrl(baseUrl, url) {
  if (/^(?:[a-z]+:)?\/\//i.test(url)) {
    return url;
  }
  var joined = [baseUrl, url].join('/');
  var normalize = function (str) {
    return str
      .replace(/[\/]+/g, '/')
      .replace(/\/\?/g, '?')
      .replace(/\/\#/g, '#')
      .replace(/\:\//g, '://');
  };
  return normalize(joined);
}

/**
 * Get full path based on current location
 * 
 * @author Sahat Yalkabov <https://github.com/sahat>
 * @copyright Method taken from https://github.com/sahat/satellizer
 * 
 * @param  {Location} location
 * @return {String}
 */
function getFullUrlPath(location) {
  var isHttps = location.protocol === 'https:';
  return location.protocol + '//' + location.hostname +
    ':' + (location.port || (isHttps ? '443' : '80')) +
    (/^\//.test(location.pathname) ? location.pathname : '/' + location.pathname);
}

/**
 * Parse query string variables
 * 
 * @author Sahat Yalkabov <https://github.com/sahat>
 * @copyright Method taken from https://github.com/sahat/satellizer
 * 
 * @param  {String} Query string
 * @return {String}
 */
function parseQueryString(str) {
  var obj = {};
  var key;
  var value;
  (str || '').split('&').forEach(function (keyValue) {
    if (keyValue) {
      value = keyValue.split('=');
      key = decodeURIComponent(value[0]);
      obj[key] = (!!value[1]) ? decodeURIComponent(value[1]) : true;
    }
  });
  return obj;
}

/**
 * Decode base64 string
 * @author Sahat Yalkabov <https://github.com/sahat>
 * @copyright Method taken from https://github.com/sahat/satellizer
 * 
 * @param  {String} str base64 encoded string
 * @return {Object}
 */


function parseCookies(str) {
  if (str.length === 0) { return {}; }
  var parsed = {};
  var pattern = new RegExp('\\s*;\\s*');
  str.split(pattern).forEach(function (i) {
    var ref = i.split('=');
    var encodedKey = ref[0];
    var encodedValue = ref[1];
    var key = decodeURIComponent(encodedKey);
    var value = decodeURIComponent(encodedValue);
    parsed[key] = value;
  });
  return parsed;
}

function formatOptions(options) {
  var path = options.path;
  var domain = options.domain;
  var expires = options.expires;
  var secure = options.secure;
  return [
    typeof path === 'undefined' || path === null
      ? '' : ';path=' + path,
    typeof domain === 'undefined' || domain === null
      ? '' : ';domain=' + domain,
    typeof expires === 'undefined' || expires === null
      ? '' : ';expires=' + expires.toUTCString(),
    typeof secure === 'undefined' || secure === null || secure === false
      ? '' : ';secure'
  ].join('');
}

function formatCookie(key, value, options) {
  return [
    encodeURIComponent(key),
    '=',
    encodeURIComponent(value),
    formatOptions(options)
  ].join('');
}

// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;

function noop() {}

// Polyfill for Function.prototype.bind
function bind(fn, thisArg) {
  return function () {
    fn.apply(thisArg, arguments);
  };
}

function Promise$1(fn) {
  if (typeof this !== 'object') { throw new TypeError('Promises must be constructed via new'); }
  if (typeof fn !== 'function') { throw new TypeError('not a function'); }
  this._state = 0;
  this._handled = false;
  this._value = undefined;
  this._deferreds = [];

  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }
  if (self._state === 0) {
    self._deferreds.push(deferred);
    return;
  }
  self._handled = true;
  Promise$1._immediateFn(function () {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }
    var ret;
    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self) { throw new TypeError('A promise cannot be resolved with itself.'); }
    if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
      var then = newValue.then;
      if (newValue instanceof Promise$1) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }
    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise$1._immediateFn(function() {
      if (!self._handled) {
        Promise$1._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }
  self._deferreds = null;
}

function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, self) {
  var done = false;
  try {
    fn(function (value) {
      if (done) { return; }
      done = true;
      resolve(self, value);
    }, function (reason) {
      if (done) { return; }
      done = true;
      reject(self, reason);
    });
  } catch (ex) {
    if (done) { return; }
    done = true;
    reject(self, ex);
  }
}

Promise$1.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};

Promise$1.prototype.then = function (onFulfilled, onRejected) {
  var prom = new (this.constructor)(noop);

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise$1.all = function (arr) {
  var args = Array.prototype.slice.call(arr);

  return new Promise$1(function (resolve, reject) {
    if (args.length === 0) { return resolve([]); }
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then;
          if (typeof then === 'function') {
            then.call(val, function (val) {
              res(i, val);
            }, reject);
            return;
          }
        }
        args[i] = val;
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise$1.resolve = function (value) {
  if (value && typeof value === 'object' && value.constructor === Promise$1) {
    return value;
  }

  return new Promise$1(function (resolve) {
    resolve(value);
  });
};

Promise$1.reject = function (value) {
  return new Promise$1(function (resolve, reject) {
    reject(value);
  });
};

Promise$1.race = function (values) {
  return new Promise$1(function (resolve, reject) {
    for (var i = 0, len = values.length; i < len; i++) {
      values[i].then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
Promise$1._immediateFn = (typeof setImmediate === 'function' && function (fn) { setImmediate(fn); }) ||
  function (fn) {
    setTimeoutFunc(fn, 0);
  };

Promise$1._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

/**
 * Set the immediate function to execute callbacks
 * @param fn {function} Function to execute
 * @deprecated
 */
Promise$1._setImmediateFn = function _setImmediateFn(fn) {
  Promise$1._immediateFn = fn;
};

/**
 * Change the function to execute on unhandled rejection
 * @param {function} fn Function to execute on unhandled rejection
 * @deprecated
 */
Promise$1._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
  Promise$1._unhandledRejectionFn = fn;
};

/**
 * Default configuration
 */
var defaultOptions = {
  baseUrl: null,
  tokenName: 'token',
  tokenPrefix: 'vueauth',
  tokenHeader: 'Authorization',
  tokenType: 'Bearer',
  loginUrl: '/auth/login',
  registerUrl: '/auth/register',
  logoutUrl: null,
  storageType: 'localStorage',
  storageNamespace: 'vue-social-auth',
  cookieStorage: {
    domain: window.location.hostname,
    path: '/',
    secure: false
  },
  requestDataKey: 'data',
  responseDataKey: 'data',

  /**
   * Default request interceptor for Axios library
   * @context {VueSocialauth}
   */
  bindRequestInterceptor: function ($auth) {

    var tokenHeader = $auth.options.tokenHeader;

    $auth.$http.interceptors.request.use(function (config) {
      delete config.headers[tokenHeader];
      return config
    });


  },

  /**
   * Default response interceptor for Axios library
   * @contect {VueSocialauth}
   */
  bindResponseInterceptor: function ($auth) {
    $auth.$http.interceptors.response.use(function (response) {
      return response
    });
  },

  providers: {
    facebook: {
      name: 'facebook',
      url: '/auth/facebook',
      authorizationEndpoint: 'https://www.facebook.com/v2.5/dialog/oauth',
      redirectUri: window.location.origin + '/',
      requiredUrlParams: ['display', 'scope'],
      scope: ['email'],
      scopeDelimiter: ',',
      display: 'popup',
      oauthType: '2.0',
      popupOptions: { width: 580, height: 400 }
    },

    google: {
      name: 'google',
      url: '/auth/google',
      authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
      redirectUri: window.location.origin,
      requiredUrlParams: ['scope'],
      optionalUrlParams: ['display'],
      scope: ['profile', 'email'],
      scopePrefix: 'openid',
      scopeDelimiter: ' ',
      display: 'popup',
      oauthType: '2.0',
      popupOptions: { width: 452, height: 633 }
    },

    github: {
      name: 'github',
      url: '/auth/github',
      authorizationEndpoint: 'https://github.com/login/oauth/authorize',
      redirectUri: window.location.origin,
      optionalUrlParams: ['scope'],
      scope: ['user:email'],
      scopeDelimiter: ' ',
      oauthType: '2.0',
      popupOptions: { width: 1020, height: 618 }
    },

    instagram: {
      name: 'instagram',
      url: '/auth/instagram',
      authorizationEndpoint: 'https://api.instagram.com/oauth/authorize',
      redirectUri: window.location.origin,
      requiredUrlParams: ['scope'],
      scope: ['basic'],
      scopeDelimiter: '+',
      oauthType: '2.0',
      popupOptions: { width: null, height: null }
    },

    twitter: {
      name: 'twitter',
      url: '/auth/twitter',
      authorizationEndpoint: 'https://api.twitter.com/oauth/authenticate',
      redirectUri: window.location.origin,
      oauthType: '1.0',
      popupOptions: { width: 495, height: 645 }
    },

    bitbucket: {
      name: 'bitbucket',
      url: '/auth/bitbucket',
      authorizationEndpoint: 'https://bitbucket.org/site/oauth2/authorize',
      redirectUri: window.location.origin + '/',
      optionalUrlParams: ['scope'],
      scope: ['email'],
      scopeDelimiter: ' ',
      oauthType: '2.0',
      popupOptions: { width: 1020, height: 618 }
    },

    linkedin: {
      name: 'linkedin',
      url: '/auth/linkedin',
      authorizationEndpoint: 'https://www.linkedin.com/oauth/v2/authorization',
      redirectUri: window.location.origin,
      requiredUrlParams: ['state','scope'],
      scope: ['r_emailaddress'],
      scopeDelimiter: ' ',
      state: 'STATE',
      oauthType: '2.0',
      popupOptions: { width: 527, height: 582 }
    },

    vkontakte: {
      name: 'vkontakte',
      url: '/auth/vkontakte',
      authorizationEndpoint: 'https://oauth.vk.com/authorize',
      redirectUri: window.location.origin + '/',
      requiredUrlParams: ['scope'],
      scope: ['email'],
      scopeDelimiter: ',',
      display: 'popup',
      oauthType: '2.0',
      popupOptions: { width: 580, height: 400 }
    },

    live: {
      name: 'live',
      url: '/auth/live',
      authorizationEndpoint: 'https://login.live.com/oauth20_authorize.srf',
      redirectUri: window.location.origin,
      requiredUrlParams: ['display', 'scope'],
      scope: ['wl.emails'],
      scopeDelimiter: ' ',
      display: 'popup',
      oauthType: '2.0',
      popupOptions: { width: 500, height: 560 }
    },

    oauth1: {
      name: null,
      url: '/auth/oauth1',
      authorizationEndpoint: null,
      redirectUri: window.location.origin,
      oauthType: '1.0',
      popupOptions: null
    },

    oauth2: {
      name: null,
      url: '/auth/oauth2',
      clientId: null,
      redirectUri: window.location.origin,
      authorizationEndpoint: null,
      defaultUrlParams: ['response_type', 'client_id', 'redirect_uri'],
      requiredUrlParams: null,
      optionalUrlParams: null,
      scope: null,
      scopePrefix: null,
      scopeDelimiter: null,
      state: null,
      oauthType: '2.0',
      popupOptions: null,
      responseType: 'code',
      responseParams: {
        code: 'code',
        clientId: 'clientId',
        redirectUri: 'redirectUri'
      }
    }
  }
};

var CookieStorage = function CookieStorage(defaultOptions) {
  this._defaultOptions = objectExtend({
    domain: window.location.hostname,
    expires: null,
    path: '/',
    secure: false
  }, defaultOptions);
};

CookieStorage.prototype.setItem = function setItem (key, value) {
  var options = objectExtend({}, this._defaultOptions);
  var cookie = formatCookie(key, value, options);
  this._setCookie(cookie);
};

CookieStorage.prototype.getItem = function getItem (key) {
  var cookies = parseCookies(this._getCookie());
  return cookies.hasOwnProperty(key) ? cookies[key] : null;
};

CookieStorage.prototype.removeItem = function removeItem (key) {
  var value = '';
  var defaultOptions = objectExtend({}, this._defaultOptions);
  var options = objectExtend(defaultOptions, {
    expires: new Date(0)
  });
  var cookie = formatCookie(key, value, options);
  this._setCookie(cookie);
};

CookieStorage.prototype._getCookie = function _getCookie () {
  return typeof document === 'undefined'
    ? '' : typeof document.cookie === 'undefined'
      ? '' : document.cookie;
};

CookieStorage.prototype._setCookie = function _setCookie (cookie) {
  document.cookie = cookie;
};

var LocalStorage = function LocalStorage(namespace) {
  this.namespace = namespace || null;
};

LocalStorage.prototype.setItem = function setItem (key, value) {
  window.localStorage.setItem(this._getStorageKey(key), value);
};

LocalStorage.prototype.getItem = function getItem (key) {
  return window.localStorage.getItem(this._getStorageKey(key))
};

LocalStorage.prototype.removeItem = function removeItem (key) {
  window.localStorage.removeItem(this._getStorageKey(key));
};

LocalStorage.prototype._getStorageKey = function _getStorageKey (key) {
  if (this.namespace) {
    return [this.namespace, key].join('.')
  }
  return key;
};

var MemoryStorage = function MemoryStorage(namespace) {
  this.namespace = namespace || null;
  this._storage = {};
};

MemoryStorage.prototype.setItem = function setItem (key, value) {
  this._storage[this._getStorageKey(key)] = value;
};

MemoryStorage.prototype.getItem = function getItem (key) {
  return this._storage[this._getStorageKey(key)]
};

MemoryStorage.prototype.removeItem = function removeItem (key) {
  delete this._storage[this._getStorageKey(key)];
};

MemoryStorage.prototype._getStorageKey = function _getStorageKey (key) {
  if (this.namespace) {
    return [this.namespace, key].join('.')
  }
  return key;
};

var LocalStorage$2 = function LocalStorage(namespace) {
  this.namespace = namespace || null;
};

LocalStorage$2.prototype.setItem = function setItem (key, value) {
  window.sessionStorage.setItem(this._getStorageKey(key), value);
};

LocalStorage$2.prototype.getItem = function getItem (key) {
  return window.sessionStorage.getItem(this._getStorageKey(key))
};

LocalStorage$2.prototype.removeItem = function removeItem (key) {
  window.sessionStorage.removeItem(this._getStorageKey(key));
};

LocalStorage$2.prototype._getStorageKey = function _getStorageKey (key) {
  if (this.namespace) {
    return [this.namespace, key].join('.')
  }
  return key;
};

function StorageFactory(options) {
  switch (options.storageType) {
    case 'localStorage':
      try {
        window.localStorage.setItem('testKey', 'test');
        window.localStorage.removeItem('testKey');
        return new LocalStorage(options.storageNamespace)
      } catch(e) {}

    case 'sessionStorage':
      try {
        window.sessionStorage.setItem('testKey', 'test');
        window.sessionStorage.removeItem('testKey');
        return new LocalStorage$2(options.storageNamespace)
      } catch (e) {}
      
    case 'cookieStorage':
      return new CookieStorage(options.cookieStorage);

    case 'memoryStorage': 
    default:
      return new MemoryStorage(options.storageNamespace)
      break;
  }
}

/**
 * OAuth2 popup management class
 * 
 * @author Sahat Yalkabov <https://github.com/sahat>
 * @copyright Class mostly taken from https://github.com/sahat/satellizer 
 * and adjusted to fit vue-social-auth library
 */
var OAuthPopup = function OAuthPopup(url, name, popupOptions) {
  this.popup = null;
  this.url = url;
  this.name = name;
  this.popupOptions = popupOptions;
};

OAuthPopup.prototype.open = function open (redirectUri, skipPooling) {
  try {
    this.popup = window.open(this.url, this.name, this._stringifyOptions());
    if (this.popup && this.popup.focus) {
      this.popup.focus();
    }

    if (skipPooling) {
      return Promise$1.resolve()
    } else {
      return this.pooling(redirectUri)
    }
  } catch(e) {
    return Promise$1.reject(new Error('OAuth popup error occurred'))
  }
};

OAuthPopup.prototype.pooling = function pooling (redirectUri) {
    var this$1 = this;

  return new Promise$1(function (resolve, reject) {
    var redirectUriParser = document.createElement('a');
    redirectUriParser.href = redirectUri;
    var redirectUriPath = getFullUrlPath(redirectUriParser);

    var poolingInterval = setInterval(function () {
      if (!this$1.popup || this$1.popup.closed || this$1.popup.closed === undefined) {
        clearInterval(poolingInterval);
        poolingInterval = null;
        reject(new Error('Auth popup window closed'));
      }

      try {
        var popupWindowPath = getFullUrlPath(this$1.popup.location);

        if (popupWindowPath === redirectUriPath) {
          if (this$1.popup.location.search || this$1.popup.location.hash) {
            var query = parseQueryString(this$1.popup.location.search.substring(1).replace(/\/$/, ''));
            var hash = parseQueryString(this$1.popup.location.hash.substring(1).replace(/[\/$]/, ''));
            var params = objectExtend({}, query);
            params = objectExtend(params, hash);

            if (params.error) {
              reject(new Error(params.error));
            } else {
              resolve(params);
            }
          } else {
            reject(new Error('OAuth redirect has occurred but no query or hash parameters were found.'));
          }

          clearInterval(poolingInterval);
          poolingInterval = null;
          this$1.popup.close();
        }
      } catch(e) {
        // Ignore DOMException: Blocked a frame with origin from accessing a cross-origin frame.
      }
    }, 250);
  })
};

OAuthPopup.prototype._stringifyOptions = function _stringifyOptions () {
    var this$1 = this;

  var options = [];
  for (var optionKey in this$1.popupOptions) {
    if (!isUndefined(this$1.popupOptions[optionKey])) {
      options.push((optionKey + "=" + (this$1.popupOptions[optionKey])));
    }
  }
  return options.join(',')
};

var defaultProviderConfig = {
  name: null,
  url: null,
  authorizationEndpoint: null,
  scope: null,
  scopePrefix: null,
  scopeDelimiter: null,
  redirectUri: null,
  requiredUrlParams: null,
  defaultUrlParams: null,
  oauthType: '1.0',
  popupOptions: {}
};

var OAuth = function OAuth($http, storage, providerConfig, options) {
  this.$http = $http;
  this.storage = storage;
  this.providerConfig = objectExtend({}, defaultProviderConfig);
  this.providerConfig = objectExtend(this.providerConfig, providerConfig);
  this.options = options;
};

/**
 * Initialize OAuth1 process 
 * @param{Object} userData User data
 * @return {Promise}
 */
OAuth.prototype.init = function init (userData) {
    var this$1 = this;

  this.oauthPopup = new OAuthPopup('about:blank', this.providerConfig.name, this.providerConfig.popupOptions);

  if (window && !window['cordova']) {
    this.oauthPopup.open(this.providerConfig.redirectUri, true);
  }

  return this.getRequestToken().then(function (response) {
    return this$1.openPopup(response).then(function (popupResponse) {
      return this$1.exchangeForToken(popupResponse, userData)
    })
  })
};

/**
 * Get OAuth1 request token
 * @return {Promise}
 */
OAuth.prototype.getRequestToken = function getRequestToken () {
  var requestOptions = {};
  requestOptions.method = 'POST';
  requestOptions[this.options.requestDataKey] = objectExtend({}, this.providerConfig);
  requestOptions.withCredentials = this.options.withCredentials;
  if (this.options.baseUrl) {
    requestOptions.url = joinUrl(this.options.baseUrl, this.providerConfig.url);
  } else {
    requestOptions.url = this.providerConfig.url;
  }

  return this.$http(requestOptions)
};

/**
 * Open OAuth1 popup
 * @param{Object} response Response object containing request token
 * @return {Promise}
 */
OAuth.prototype.openPopup = function openPopup (response) {
  var url = [this.providerConfig.authorizationEndpoint, this.buildQueryString(response[this.options.responseDataKey])].join('?');

  this.oauthPopup.popup.location = url;
  if (window && window['cordova']) {
    return this.oauthPopup.open(this.providerConfig.redirectUri)
  } else {
    return this.oauthPopup.pooling(this.providerConfig.redirectUri)
  }
};

/**
 * Exchange token and token verifier for access token
 * @param{Object} oauth  OAuth data containing token and token verifier
 * @param{Object} userData User data
 * @return {Promise}
 */
OAuth.prototype.exchangeForToken = function exchangeForToken (oauth, userData) {
  var payload = objectExtend({}, userData);
  payload = objectExtend(payload, oauth);
  var requestOptions = {};
  requestOptions.method = 'POST';
  requestOptions[this.options.requestDataKey] = payload;
  requestOptions.withCredentials = this.options.withCredentials;
  if (this.options.baseUrl) {
    requestOptions.url = joinUrl(this.options.baseUrl, this.providerConfig.url);
  } else {
    requestOptions.url = this.providerConfig.url;
  }
  return this.$http(requestOptions)
};

OAuth.prototype.buildQueryString = function buildQueryString (params) {
  var parsedParams = [];
  for (var key in params) {
    var value = params[key];
    parsedParams.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
  }
  return parsedParams.join('&');
};

/**
 * Default provider configuration
 * @type {Object}
 */
var defaultProviderConfig$1 = {
  name: null,
  url: null,
  clientId: null,
  authorizationEndpoint: null,
  redirectUri: null,
  scope: null,
  scopePrefix: null,
  scopeDelimiter: null,
  state: null,
  requiredUrlParams: null,
  defaultUrlParams: ['response_type', 'client_id', 'redirect_uri'],
  responseType: 'code',
  responseParams: {
    code: 'code',
    clientId: 'clientId',
    redirectUri: 'redirectUri'
  },
  oauthType: '2.0',
  popupOptions: {}
};

var OAuth2 = function OAuth2($http, storage, providerConfig, options) {
  this.$http = $http;
  this.storage = storage;
  this.providerConfig = objectExtend({}, defaultProviderConfig$1);
  this.providerConfig = objectExtend(this.providerConfig, providerConfig);
  this.options = options;
};

OAuth2.prototype.init = function init (userData) {
    var this$1 = this;

  var stateName = this.providerConfig.name + '_state';
  if (isFunction(this.providerConfig.state)) {
    this.storage.setItem(stateName, this.providerConfig.state());
  } else if (isString(this.providerConfig.state)) {
    this.storage.setItem(stateName, this.providerConfig.state);
  }

  var url = [this.providerConfig.authorizationEndpoint, this._stringifyRequestParams()].join('?');

  this.oauthPopup = new OAuthPopup(url, this.providerConfig.name, this.providerConfig.popupOptions);
    
  return new Promise(function (resolve, reject) {
    this$1.oauthPopup.open(this$1.providerConfig.redirectUri).then(function (response) {
      if (this$1.providerConfig.responseType === 'code' || !this$1.providerConfig.url) {
        return resolve(response)
      }

      if (response.state && response.state !== this$1.storage.getItem(stateName)) {
        return reject(new Error('State parameter value does not match original OAuth request state value'))
      }

      resolve(this$1.exchangeForToken(response, userData));
    }).catch(function (err) {
      reject(err);
    });
  })
};

/**
 * Exchange temporary oauth data for access token
 * @author Sahat Yalkabov <https://github.com/sahat>
 * @copyright Method taken from https://github.com/sahat/satellizer
 * 
 * @param{[type]} oauth  [description]
 * @param{[type]} userData [description]
 * @return {[type]}        [description]
 */
OAuth2.prototype.exchangeForToken = function exchangeForToken (oauth, userData) {
    var this$1 = this;

  var payload = objectExtend({}, userData);

  for (var key in defaultProviderConfig$1.responseParams) {
    var value = defaultProviderConfig$1[key];

    switch(key) {
      case 'code':
        payload[key] = oauth.code;
        break
      case 'clientId':
        payload[key] = this$1.providerConfig.clientId;
        break
      case 'redirectUri':
        payload[key] = this$1.providerConfig.redirectUri;
        break
      default:
        payload[key] = oauth[key];
    }
  }

  if (oauth.state) {
    payload.state = oauth.state;
  }

  var exchangeTokenUrl;
  if (this.options.baseUrl) {
    exchangeTokenUrl = joinUrl(this.options.baseUrl, this.providerConfig.url);
  } else {
    exchangeTokenUrl = this.providerConfig.url;
  }

  return this.$http.post(exchangeTokenUrl, payload, {
    withCredentials: this.options.withCredentials
  })
};

/**
 * Stringify oauth params
 * @author Sahat Yalkabov <https://github.com/sahat>
 * @copyright Method taken from https://github.com/sahat/satellizer
 * 
 * @return {String}
 */
OAuth2.prototype._stringifyRequestParams = function _stringifyRequestParams () {
    var this$1 = this;

  var keyValuePairs = [];
  var paramCategories = ['defaultUrlParams', 'requiredUrlParams', 'optionalUrlParams'];

  paramCategories.forEach(function (categoryName) {
    if (!this$1.providerConfig[categoryName]) { return }
    if (!Array.isArray(this$1.providerConfig[categoryName])) { return }

    this$1.providerConfig[categoryName].forEach(function (paramName) {
      var camelCaseParamName = camelCase(paramName);
      var paramValue = isFunction(this$1.providerConfig[paramName]) ? this$1.providerConfig[paramName]() : this$1.providerConfig[camelCaseParamName];

      if (paramName === 'redirect_uri' && !paramValue) { return }

      if (paramName === 'state') {
        var stateName = this$1.providerConfig.name + '_state';
        paramValue = encodeURIComponent(this$1.storage.getItem(stateName));
      }
      if (paramName === 'scope' && Array.isArray(paramValue)) {
        paramValue = paramValue.join(this$1.providerConfig.scopeDelimiter);
        if (this$1.providerConfig.scopePrefix) {
          paramValue = [this$1.providerConfig.scopePrefix, paramValue].join(this$1.providerConfig.scopeDelimiter);
        }
      }

      keyValuePairs.push([paramName, paramValue]);
    });
  });

  return keyValuePairs.map(function (param) {
    return param.join('=')
  }).join('&')
};

var VueSocialauth = function VueSocialauth($http, overrideOptions) {
  var options = objectExtend({}, defaultOptions);
  options = objectExtend(options, overrideOptions);
  var storage = StorageFactory(options);

  Object.defineProperties(this, {
    $http: {
      get: function get() {
        return $http
      }
    },

    options: {
      get: function get() {
        return options
      }
    },

    storage: {
      get: function get() {
        return storage
      }
    },

    tokenName: {
      get: function get() {
        if (this.options.tokenPrefix) {
          return [this.options.tokenPrefix, this.options.tokenName].join('_')
        } else {
          return this.options.tokenName
        }
      }
    }
  });

  // Setup request interceptors
  if (this.options.bindRequestInterceptor && isFunction(this.options.bindRequestInterceptor) &&
      this.options.bindResponseInterceptor && isFunction(this.options.bindResponseInterceptor)) {

    this.options.bindRequestInterceptor.call(this, this);
    this.options.bindResponseInterceptor.call(this, this);
  } else {
    throw new Error('Both request and response interceptors must be functions')
  }
};

/**
 * Check if user is authenticated
 * @author Sahat Yalkabov <https://github.com/sahat>
 * @copyright Method taken from https://github.com/sahat/satellizer
 * @return {Boolean}
 */
// isAuthenticated() {
// let token = this.storage.getItem(this.tokenName)

// if (token) {// Token is present
//   if (token.split('.').length === 3) {// Token with a valid JWT format XXX.YYY.ZZZ
//     try { // Could be a valid JWT or an access token with the same format
//       const base64Url = token.split('.')[1];
//       const base64 = base64Url.replace('-', '+').replace('_', '/');
//       const exp = JSON.parse(window.atob(base64)).exp;
//       if (typeof exp === 'number') {// JWT with an optonal expiration claims
//         return Math.round(new Date().getTime() / 1000) < exp;
//       }
//     } catch (e) {
//       return true;// Pass: Non-JWT token that looks like JWT
//     }
//   }
//   return true;// Pass: All other tokens
// }
// return false
// }

/**
 * Get token if user is authenticated
 * @return {String} Authentication token
 */
VueSocialauth.prototype.getToken = function getToken () {
  return this.storage.getItem(this.tokenName)
};

/**
 * Set new authentication token
 * @param {String|Object} token
 */
// setToken(response) {
// if (response[this.options.responseDataKey]) {
//   response = response[this.options.responseDataKey];
// }
    
// let token;
// if (response.access_token) {
//   if (isObject(response.access_token) && isObject(response.access_token[this.options.responseDataKey])) {
//     response = response.access_token
//   } else if (isString(response.access_token)) {
//     token = response.access_token
//   }
// }

// if (!token && response) {
//   token = response[this.options.tokenName]
// }

// if (token) {
//   this.storage.setItem(this.tokenName, token)
// }
// }

// getPayload() {
// const token = this.storage.getItem(this.tokenName);

// if (token && token.split('.').length === 3) {
//   try {
//     const base64Url = token.split('.')[1];
//     const base64 = base64Url.replace('-', '+').replace('_', '/');
//     return JSON.parse(decodeBase64(base64));
//   } catch (e) {}
// }
// }
  
/**
 * Login user using email and password
 * @param{Object} user         User data
 * @param{Object} requestOptions Request options
 * @return {Promise}             Request promise
 */
// login(user, requestOptions) {
// requestOptions = requestOptions || {}
// requestOptions.url = requestOptions.url ? requestOptions.url : joinUrl(this.options.baseUrl, this.options.loginUrl)
// requestOptions[this.options.requestDataKey] = user || requestOptions[this.options.requestDataKey]
// requestOptions.method = requestOptions.method || 'POST'
// requestOptions.withCredentials = requestOptions.withCredentials || this.options.withCredentials

// return this.$http(requestOptions).then((response) => {
//   this.setToken(response)
//   return response
// })
// }

/**
 * Register new user
 * @param{Object} user         User data
 * @param{Object} requestOptions Request options
 * @return {Promise}             Request promise
 */
// register(user, requestOptions) {
// requestOptions = requestOptions || {}
// requestOptions.url = requestOptions.url ? requestOptions.url : joinUrl(this.options.baseUrl, this.options.registerUrl)
// requestOptions[this.options.requestDataKey] = user || requestOptions[this.options.requestDataKey]
// requestOptions.method = requestOptions.method || 'POST'
// requestOptions.withCredentials = requestOptions.withCredentials || this.options.withCredentials

// return this.$http(requestOptions).then((response) => {
//   this.setToken(response)
//   return response
// })
// }

/**
 * Logout current user
 * @param{Object} requestOptionsLogout request options object
 * @return {Promise}              Request promise
 */
// logout(requestOptions) {
// if (!this.isAuthenticated()) {
//   return Promise.reject(new Error('There is no currently authenticated user'))
// }

// requestOptions = requestOptions || {}
// requestOptions.url = requestOptions.logoutUrl || this.options.logoutUrl

// if (requestOptions.url) {
//   requestOptions.method = requestOptions.method || 'POST'
//   requestOptions.withCredentials = requestOptions.withCredentials || this.options.withCredentials

//   return this.$http(requestOptions).then((response) => {
//     this.storage.removeItem(this.tokenName)
//   })
// } else {
//   this.storage.removeItem(this.tokenName)
//   return Promise.resolve();
// }
// }

/**
 * Authenticate user using authentication provider
 * 
 * @param{String} provider     Provider name
 * @param{Object} userData     User data
 * @param{Object} requestOptions Request options
 * @return {Promise}             Request promise
 */
VueSocialauth.prototype.authenticate = function authenticate (provider, userData, requestOptions) {
    var this$1 = this;

  return new Promise$1(function (resolve, reject) {
    var providerConfig = this$1.options.providers[provider];
    if (!providerConfig) {
      return reject(new Error('Unknown provider'))
    }

    var providerInstance;
    switch (providerConfig.oauthType) {
      case '1.0':
        providerInstance = new OAuth(this$1.$http, this$1.storage, providerConfig, this$1.options);
        break
      case '2.0':
        providerInstance = new OAuth2(this$1.$http, this$1.storage, providerConfig, this$1.options);
        break
      default:
        return reject(new Error('Invalid OAuth type'))
        break
    }

    return providerInstance.init(userData).then(function (response) {
      return resolve(response)

    }).catch(function (err) { return reject(err); })
  })
};

/**
 * VueSocialauth plugin
 * @param {Object} Vue
 * @param {Object} options
 */
function plugin(Vue, options) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true;

  var property = options.property || '$auth';

  var vueAuthInstance = null;
  Object.defineProperties(Vue.prototype, ( obj = {}, obj[property] = {
      get: function get() {
        if (!vueAuthInstance) {
          // Request handler library not found, throw error
          // verified vue or nuxt instance
          if (this.$axios) {
            vueAuthInstance = new VueSocialauth(this.$axios, options);
          } else if (this.$http) {
            vueAuthInstance = new VueSocialauth(this.$http, options);
          } else {
            throw new Error('Request handler instance not found')
          }
        }
        return vueAuthInstance
      }
    }, obj ));
  var obj;
}

/**
 * External factory helper for ES5 and CommonJS
 * @param  {Object} $http     Instance of request handling library
 * @param  {Object} options   Configuration object
 * @return {VueSocialauth}  VueSocialauth instance
 */
plugin.factory = function ($http, options) {
  return new VueSocialauth($http, options)
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugin);



/***/ })

}]);