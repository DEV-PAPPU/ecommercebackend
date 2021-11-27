"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_admin_user_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/user/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/user/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.es.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      all_users: {},
      form: new vform__WEBPACK_IMPORTED_MODULE_0__.default({
        name: '',
        email: '',
        password: '',
        role: ''
      })
    };
  },
  methods: {
    loadall_users: function loadall_users() {
      var _this = this;

      axios.get('/api/users').then(function (response) {
        _this.all_users = response.data;
      });
    },
    deleteuser: function deleteuser(user) {
      var _this2 = this;

      axios["delete"]("/api/user/".concat(user.id)).then(function () {
        _this2.$toast.success({
          title: 'Success!',
          message: 'user deleted successfully.'
        });
      });
      var index = this.all_users.indexOf(user);
      this.all_users.splice(index, 1);
    }
  },
  mounted: function mounted() {
    this.loadall_users();
  }
});

/***/ }),

/***/ "./resources/js/pages/admin/user/index.vue":
/*!*************************************************!*\
  !*** ./resources/js/pages/admin/user/index.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_1f950ab7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1f950ab7& */ "./resources/js/pages/admin/user/index.vue?vue&type=template&id=1f950ab7&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/user/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _index_vue_vue_type_template_id_1f950ab7___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_1f950ab7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/user/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/user/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/admin/user/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/user/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/admin/user/index.vue?vue&type=template&id=1f950ab7&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/admin/user/index.vue?vue&type=template&id=1f950ab7& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1f950ab7___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1f950ab7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1f950ab7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=1f950ab7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/user/index.vue?vue&type=template&id=1f950ab7&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/user/index.vue?vue&type=template&id=1f950ab7&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/user/index.vue?vue&type=template&id=1f950ab7& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("div", {}, [
    _c("div", { staticClass: "container" }, [
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.createproduct.apply(null, arguments)
            }
          }
        },
        [
          _c("div", { staticClass: "product" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-8" }, [
                _c("div", { staticClass: "card card-primary" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c("table", { staticClass: "table" }, [
                      _vm._m(1),
                      _vm._v(" "),
                      _vm.all_users.length
                        ? _c(
                            "tbody",
                            _vm._l(_vm.all_users, function(user) {
                              return _c("tr", { key: user.id }, [
                                _c("td", { staticStyle: { width: "100px" } }, [
                                  _vm._v(" " + _vm._s(user.id) + " ")
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(" " + _vm._s(user.name) + " ")
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(" " + _vm._s(user.email) + " ")
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  user.role == 0
                                    ? _c(
                                        "span",
                                        { staticClass: "badge badge-success" },
                                        [_vm._v("Admin")]
                                      )
                                    : _c(
                                        "span",
                                        { staticClass: "badge badge-warning" },
                                        [_vm._v("Customer")]
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
                                            name: "user-edit",
                                            params: { id: user.id }
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
                                            return _vm.deleteuser(user)
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
                        : _c("tbody", [_vm._m(2)])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-4" }, [
                _c("div", { staticClass: "card card-primary" }, [
                  _vm._m(3),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c("div", [
                      _c("label", { attrs: { for: "role" } }, [_vm._v("Name")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.name,
                            expression: "form.name"
                          }
                        ],
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.form.errors.has("name") },
                        attrs: {
                          type: "text",
                          name: "name",
                          placeholder: "name"
                        },
                        domProps: { value: _vm.form.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "name", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.form.errors.has("name")
                        ? _c("div", {
                            domProps: {
                              innerHTML: _vm._s(_vm.form.errors.get("name"))
                            }
                          })
                        : _vm._e()
                    ]),
                    _c("br"),
                    _vm._v(" "),
                    _c("div", [
                      _c("label", { attrs: { for: "role" } }, [
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
                        class: { "is-invalid": _vm.form.errors.has("email") },
                        attrs: {
                          type: "text",
                          name: "email",
                          placeholder: "email"
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
                      _vm.form.errors.has("email")
                        ? _c("div", {
                            domProps: {
                              innerHTML: _vm._s(_vm.form.errors.get("email"))
                            }
                          })
                        : _vm._e()
                    ]),
                    _c("br"),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "role" } }, [_vm._v("Role")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.role,
                              expression: "form.role"
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.form.errors.has("role") },
                          attrs: { name: "role", id: "role" },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.form,
                                "role",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c(
                            "option",
                            { attrs: { value: "0", selected: "" } },
                            [
                              _vm._v(
                                "Admin\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "option",
                            { attrs: { value: "1", selected: "" } },
                            [
                              _vm._v(
                                "Customer\n                                        "
                              )
                            ]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "submit" }
                      },
                      [_vm._v("Submit")]
                    )
                  ])
                ])
              ])
            ])
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("Product Info")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { width: "100px" } }, [_vm._v(" Id ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Name ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Email ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Role ")]),
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
          _vm._v("No users found.")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("Add User")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);