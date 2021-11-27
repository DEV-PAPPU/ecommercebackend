"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_frontend_pages_shop_product_of_category_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/shop/product_of_category.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/shop/product_of_category.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      products: []
    };
  },
  methods: {
    loadproduct: function loadproduct() {
      var _this = this;

      var slug = this.$route.params.slug;
      axios.get("/api/category/single/".concat(slug)).then(function (response) {
        _this.products = response.data;
      });
    }
  },
  mounted: function mounted() {
    this.loadproduct();
  }
});

/***/ }),

/***/ "./resources/js/components/frontend/pages/shop/product_of_category.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/frontend/pages/shop/product_of_category.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _product_of_category_vue_vue_type_template_id_1d7c8d0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product_of_category.vue?vue&type=template&id=1d7c8d0a& */ "./resources/js/components/frontend/pages/shop/product_of_category.vue?vue&type=template&id=1d7c8d0a&");
/* harmony import */ var _product_of_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product_of_category.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/pages/shop/product_of_category.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _product_of_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _product_of_category_vue_vue_type_template_id_1d7c8d0a___WEBPACK_IMPORTED_MODULE_0__.render,
  _product_of_category_vue_vue_type_template_id_1d7c8d0a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/pages/shop/product_of_category.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/pages/shop/product_of_category.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/frontend/pages/shop/product_of_category.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_of_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./product_of_category.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/shop/product_of_category.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_of_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/frontend/pages/shop/product_of_category.vue?vue&type=template&id=1d7c8d0a&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/frontend/pages/shop/product_of_category.vue?vue&type=template&id=1d7c8d0a& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_of_category_vue_vue_type_template_id_1d7c8d0a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_of_category_vue_vue_type_template_id_1d7c8d0a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_of_category_vue_vue_type_template_id_1d7c8d0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./product_of_category.vue?vue&type=template&id=1d7c8d0a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/shop/product_of_category.vue?vue&type=template&id=1d7c8d0a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/shop/product_of_category.vue?vue&type=template&id=1d7c8d0a&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/shop/product_of_category.vue?vue&type=template&id=1d7c8d0a& ***!
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
  return _c("div", { staticClass: "shop site-padding" }, [
    _vm.products.length
      ? _c(
          "div",
          {
            staticClass:
              "grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-10"
          },
          _vm._l(_vm.products, function(product) {
            return _c("div", { key: product.id }, [
              _c("div", { staticClass: "my-8" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden  shadow-lg hover:shadow-2xl"
                  },
                  [
                    _c("img", {
                      staticClass: "product-image",
                      attrs: { src: product.image }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "p-6" },
                      [
                        _c("h2", {
                          staticClass:
                            "tracking-widest text-xs title-font font-medium text-gray-400 mb-2"
                        }),
                        _vm._v(" "),
                        _c(
                          "h1",
                          {
                            staticClass:
                              "title-font text-lg font-medium text-gray-900 mb-1"
                          },
                          [_vm._v(" " + _vm._s(product.title))]
                        ),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            staticClass: "btn btn-primary btn-block mt-3",
                            attrs: {
                              to: {
                                name: "product-single",
                                params: { slug: product.slug }
                              }
                            }
                          },
                          [_vm._v("View Product")]
                        )
                      ],
                      1
                    )
                  ]
                )
              ])
            ])
          }),
          0
        )
      : _c("tbody", [_vm._m(0)])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { attrs: { colspan: "6" } }, [
        _c("h5", { staticClass: "text-center mt-4 mb-4" }, [
          _vm._v("No product Found.")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);