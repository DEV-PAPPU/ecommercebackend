"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_backend_pages_ecommerce_product_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/ecommerce/product/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/ecommerce/product/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      products: []
    };
  },
  methods: {
    loadProduct: function loadProduct() {
      var _this = this;

      axios.get('/api/product').then(function (res) {
        _this.products = res.data;
        console.log(res);
      });
    },
    DeleteProduct: function DeleteProduct(product) {
      var _this2 = this;

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        if (result.isConfirmed) {
          axios["delete"]("/api/product/".concat(product.id));

          var index = _this2.products.indexOf(product);

          _this2.products.splice(index, 1);

          Swal.fire('Deleted!', 'Product Deleted.', 'success');
        }
      });
    }
  },
  mounted: function mounted() {
    this.loadProduct();
  }
});

/***/ }),

/***/ "./resources/js/components/backend/pages/ecommerce/product/index.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/backend/pages/ecommerce/product/index.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_5e9ade3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5e9ade3c& */ "./resources/js/components/backend/pages/ecommerce/product/index.vue?vue&type=template&id=5e9ade3c&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/pages/ecommerce/product/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _index_vue_vue_type_template_id_5e9ade3c___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_5e9ade3c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/pages/ecommerce/product/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/pages/ecommerce/product/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/backend/pages/ecommerce/product/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/ecommerce/product/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/backend/pages/ecommerce/product/index.vue?vue&type=template&id=5e9ade3c&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/backend/pages/ecommerce/product/index.vue?vue&type=template&id=5e9ade3c& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5e9ade3c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5e9ade3c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5e9ade3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=5e9ade3c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/ecommerce/product/index.vue?vue&type=template&id=5e9ade3c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/ecommerce/product/index.vue?vue&type=template&id=5e9ade3c&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/ecommerce/product/index.vue?vue&type=template&id=5e9ade3c& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container" },
    [
      _vm.Loading
        ? [_c("content-loading")]
        : _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header" }, [
              _vm._v("All Products Lists")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "card-body" }, [
                _c("table", { staticClass: "table" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _vm.products.length
                    ? _c(
                        "tbody",
                        _vm._l(_vm.products, function(product) {
                          return _c("tr", { key: product.id }, [
                            _c("td", [
                              _vm._v(" " + _vm._s(product.title) + " ")
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(" " + _vm._s(product.price) + " ")
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(" " + _vm._s(product.category.name) + " ")
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              product.status == 0
                                ? _c(
                                    "span",
                                    { staticClass: "badge badge-success" },
                                    [_vm._v("Publish")]
                                  )
                                : _c(
                                    "span",
                                    { staticClass: "badge badge-warning" },
                                    [_vm._v("Draft")]
                                  )
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              { staticStyle: { width: "170px" } },
                              [
                                _c(
                                  "router-link",
                                  {
                                    staticClass: "btn btn-primary btn-sm",
                                    attrs: {
                                      to: {
                                        name: "product-edit",
                                        params: { id: product.id }
                                      }
                                    }
                                  },
                                  [_vm._v("Edit")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass: "btn btn-danger btn-sm",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.DeleteProduct(product)
                                      }
                                    }
                                  },
                                  [_vm._v("Delete")]
                                )
                              ],
                              1
                            )
                          ])
                        }),
                        0
                      )
                    : _c("tbody", [_vm._m(1)])
                ])
              ])
            ])
          ])
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v(" Title ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Price ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Category ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Status ")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "170px" } }, [_vm._v(" Action ")])
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
          _vm._v("No Product found. ")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);