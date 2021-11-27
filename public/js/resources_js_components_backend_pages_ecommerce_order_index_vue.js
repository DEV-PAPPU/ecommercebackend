"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_backend_pages_ecommerce_order_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/ecommerce/order/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/ecommerce/order/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
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
      orders: {}
    };
  },
  methods: {
    // Our method to GET results from a Laravel endpoint
    loadorders: function loadorders() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/order?page=' + page).then(function (response) {
        _this.orders = response.data;
      });
    },
    orderdelete: function orderdelete(order) {
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
          axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/delete-order/".concat(order.id)).then(function () {
            _this2.loadorders();
          });
          Swal.fire('Deleted!', 'order Deleted Success.', 'success');
        }
      });
    }
  },
  mounted: function mounted() {
    // Fetch initial orders
    this.loadorders();
  }
});

/***/ }),

/***/ "./resources/js/components/backend/pages/ecommerce/order/index.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/backend/pages/ecommerce/order/index.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_c623b2fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=c623b2fe& */ "./resources/js/components/backend/pages/ecommerce/order/index.vue?vue&type=template&id=c623b2fe&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/pages/ecommerce/order/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _index_vue_vue_type_template_id_c623b2fe___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_c623b2fe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/pages/ecommerce/order/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/pages/ecommerce/order/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/backend/pages/ecommerce/order/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/ecommerce/order/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/backend/pages/ecommerce/order/index.vue?vue&type=template&id=c623b2fe&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/backend/pages/ecommerce/order/index.vue?vue&type=template&id=c623b2fe& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c623b2fe___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c623b2fe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c623b2fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=c623b2fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/ecommerce/order/index.vue?vue&type=template&id=c623b2fe&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/ecommerce/order/index.vue?vue&type=template&id=c623b2fe&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/ecommerce/order/index.vue?vue&type=template&id=c623b2fe& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
            _c("div", { staticClass: "card-header" }, [_vm._v("All orders")]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "card-body" }, [
                _c("table", { staticClass: "table" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _vm.orders
                    ? _c(
                        "tbody",
                        [
                          _vm._l(_vm.orders.data, function(order) {
                            return _c("tr", { key: order.id }, [
                              _c("td", [
                                _vm._v("#" + _vm._s(order.tracking) + " ")
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(" " + _vm._s(order.email) + " ")
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(_vm._f("currency")(order.subtotal)) +
                                    " "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "span",
                                  { staticClass: "badge badge-primary" },
                                  [_vm._v(_vm._s(order.status))]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "td",
                                {
                                  staticClass: "flex gap-3",
                                  staticStyle: { width: "170px" }
                                },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "btn btn-primary btn-sm",
                                      attrs: {
                                        to: {
                                          name: "order-edit",
                                          params: { id: order.id }
                                        }
                                      }
                                    },
                                    [_vm._v("View")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-info btn-sm",
                                      on: {
                                        click: function($event) {
                                          return _vm.orderdelete(order)
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
                          _vm._v(" "),
                          _c(
                            "tfoot",
                            { staticClass: "absolute" },
                            [
                              _c("pagination", {
                                attrs: { data: _vm.orders },
                                on: { "pagination-change-page": _vm.loadorders }
                              })
                            ],
                            1
                          )
                        ],
                        2
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
        _c("th", [_vm._v(" #Order ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Email ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Subtotal ")]),
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
          _vm._v("No Orders found.")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);