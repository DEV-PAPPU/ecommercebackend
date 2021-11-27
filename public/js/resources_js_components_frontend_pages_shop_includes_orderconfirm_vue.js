"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_frontend_pages_shop_includes_orderconfirm_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/shop/includes/orderconfirm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/shop/includes/orderconfirm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      order: {},
      orderItems: '',
      tax: 12
    };
  },
  methods: {
    loadorder: function loadorder() {
      var _this = this;

      axios.get('/api/order-confirm', {
        headers: {
          authorization: 'Bearer' + localStorage.getItem('token')
        }
      }).then(function (response) {
        _this.order = response.data.order;
        _this.orderItems = response.data.orderitems;
        console.log(order);
      });
    }
  },
  computed: {
    orderinfo: function orderinfo() {
      return this.order;
    }
  },
  mounted: function mounted() {
    this.loadorder();
  }
});

/***/ }),

/***/ "./resources/js/components/frontend/pages/shop/includes/orderconfirm.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/frontend/pages/shop/includes/orderconfirm.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _orderconfirm_vue_vue_type_template_id_394af56a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orderconfirm.vue?vue&type=template&id=394af56a& */ "./resources/js/components/frontend/pages/shop/includes/orderconfirm.vue?vue&type=template&id=394af56a&");
/* harmony import */ var _orderconfirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orderconfirm.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/pages/shop/includes/orderconfirm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _orderconfirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _orderconfirm_vue_vue_type_template_id_394af56a___WEBPACK_IMPORTED_MODULE_0__.render,
  _orderconfirm_vue_vue_type_template_id_394af56a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/pages/shop/includes/orderconfirm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/pages/shop/includes/orderconfirm.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/frontend/pages/shop/includes/orderconfirm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_orderconfirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./orderconfirm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/shop/includes/orderconfirm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_orderconfirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/frontend/pages/shop/includes/orderconfirm.vue?vue&type=template&id=394af56a&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/frontend/pages/shop/includes/orderconfirm.vue?vue&type=template&id=394af56a& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_orderconfirm_vue_vue_type_template_id_394af56a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_orderconfirm_vue_vue_type_template_id_394af56a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_orderconfirm_vue_vue_type_template_id_394af56a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./orderconfirm.vue?vue&type=template&id=394af56a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/shop/includes/orderconfirm.vue?vue&type=template&id=394af56a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/shop/includes/orderconfirm.vue?vue&type=template&id=394af56a&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/pages/shop/includes/orderconfirm.vue?vue&type=template&id=394af56a& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row justify-content-center mt-10" }, [
      _c("div", { staticClass: "modal-content" }, [
        _c("div", { staticClass: "modal-body " }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "px-4 py-5" }, [
            _c("h5", { staticClass: "text-uppercase" }, [
              _vm._v("Hi " + _vm._s(_vm.order[0].first_name))
            ]),
            _vm._v(" "),
            _c("h4", { staticClass: "mt-5 theme-color mb-5" }, [
              _vm._v("Thanks for your order. "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v(" Tracking Id #" + _vm._s(_vm.order[0].tracking))
              ])
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "theme-color" }, [
              _vm._v("Payment Summary")
            ]),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "d-flex justify-content-between" }, [
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("Subtotal")
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "text-muted" }, [
                _vm._v("$" + _vm._s(_vm.order[0].subtotal) + ".00")
              ])
            ]),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _vm._m(3),
            _vm._v(" "),
            _c("div", { staticClass: "d-flex justify-content-between mt-3" }, [
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("Total")
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "font-weight-bold theme-color" }, [
                _vm._v("$" + _vm._s(_vm.order.subtotal + _vm.tax))
              ])
            ]),
            _vm._v(" "),
            _vm._m(4)
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-right" }, [
      _c("i", {
        staticClass: "fa fa-close close",
        attrs: { "data-dismiss": "modal" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-3" }, [
      _c("hr", { staticClass: "new1" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex justify-content-between" }, [
      _c("small", [_vm._v("Shipping")]),
      _vm._v(" "),
      _c("small", [_vm._v("$10.00")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex justify-content-between" }, [
      _c("small", [_vm._v("Tax")]),
      _vm._v(" "),
      _c("small", [_vm._v("$2.00")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center mt-5" }, [
      _c("button", { staticClass: "btn btn-primary" }, [
        _vm._v("Track your order")
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);