"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_backend_pages_user_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/user/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/user/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
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
      user_id: '',
      isForm: '',
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
          axios.post("/api/user/delete/".concat(user.id));

          var index = _this2.all_users.indexOf(user);

          _this2.all_users.splice(index, 1);

          Swal.fire('Deleted!', 'User has been deleted.', 'success');
        }
      });
    },
    EditUser: function EditUser(user) {
      document.getElementById("formTitle").innerHTML = "Update User!";
      document.getElementById("password").style.display = "none";
      this.user_id = user.id;
      this.form.name = user.name, this.form.email = user.email, this.form.role = user.role;
    },
    updateUser: function updateUser() {
      var _this3 = this;

      var id = this.user_id;
      this.form.post("/api/user/update/".concat(id)).then(function () {
        _this3.form.reset();

        _this3.user_id = '';
        document.getElementById("formTitle").innerHTML = "Add User";
        document.getElementById("password").style.display = "block";

        _this3.loadall_users();

        Toast.fire({
          icon: 'success',
          title: 'User Updated.'
        });
      });
    }
  },
  mounted: function mounted() {
    this.loadall_users();
  }
});

/***/ }),

/***/ "./node_modules/vform/dist/vform.es.js":
/*!*********************************************!*\
  !*** ./node_modules/vform/dist/vform.es.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Errors": () => (/* binding */ y),
/* harmony export */   "Form": () => (/* binding */ g)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,s=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,o=(t,s,r)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[s]=r,i=(e,i)=>{for(var a in i||(i={}))t.call(i,a)&&o(e,a,i[a]);if(s)for(var a of s(i))r.call(i,a)&&o(e,a,i[a]);return e};const n=e=>void 0===e,c=e=>Array.isArray(e),l=e=>e&&"number"==typeof e.size&&"string"==typeof e.type&&"function"==typeof e.slice,u=(e,t,s,r)=>((t=t||{}).indices=!n(t.indices)&&t.indices,t.nullsAsUndefineds=!n(t.nullsAsUndefineds)&&t.nullsAsUndefineds,t.booleansAsIntegers=!n(t.booleansAsIntegers)&&t.booleansAsIntegers,t.allowEmptyArrays=!n(t.allowEmptyArrays)&&t.allowEmptyArrays,s=s||new FormData,n(e)||(null===e?t.nullsAsUndefineds||s.append(r,""):(e=>"boolean"==typeof e)(e)?t.booleansAsIntegers?s.append(r,e?1:0):s.append(r,e):c(e)?e.length?e.forEach(((e,o)=>{const i=r+"["+(t.indices?o:"")+"]";u(e,t,s,i)})):t.allowEmptyArrays&&s.append(r+"[]",""):(e=>e instanceof Date)(e)?s.append(r,e.toISOString()):!(e=>e===Object(e))(e)||(e=>l(e)&&"string"==typeof e.name&&("object"==typeof e.lastModifiedDate||"number"==typeof e.lastModified))(e)||l(e)?s.append(r,e):Object.keys(e).forEach((o=>{const i=e[o];if(c(i))for(;o.length>2&&o.lastIndexOf("[]")===o.length-2;)o=o.substring(0,o.length-2);u(i,t,s,r?r+"["+o+"]":o)}))),s);var h={serialize:u};function d(e){if(null===e||"object"!=typeof e)return e;const t=Array.isArray(e)?[]:{};return Object.keys(e).forEach((s=>{t[s]=d(e[s])})),t}function f(e){return Array.isArray(e)?e:[e]}function p(e){return e instanceof File||e instanceof Blob||e instanceof FileList||"object"==typeof e&&null!==e&&void 0!==Object.values(e).find((e=>p(e)))}class y{constructor(){this.errors={},this.errors={}}set(e,t){"object"==typeof e?this.errors=e:this.set(i(i({},this.errors),{[e]:f(t)}))}all(){return this.errors}has(e){return Object.prototype.hasOwnProperty.call(this.errors,e)}hasAny(...e){return e.some((e=>this.has(e)))}any(){return Object.keys(this.errors).length>0}get(e){if(this.has(e))return this.getAll(e)[0]}getAll(e){return f(this.errors[e]||[])}only(...e){const t=[];return e.forEach((e=>{const s=this.get(e);s&&t.push(s)})),t}flatten(){return Object.values(this.errors).reduce(((e,t)=>e.concat(t)),[])}clear(e){const t={};e&&Object.keys(this.errors).forEach((s=>{s!==e&&(t[s]=this.errors[s])})),this.set(t)}}class g{constructor(e={}){this.originalData={},this.busy=!1,this.successful=!1,this.recentlySuccessful=!1,this.recentlySuccessfulTimeoutId=void 0,this.errors=new y,this.progress=void 0,this.update(e)}static make(e){return new this(e)}update(e){this.originalData=Object.assign({},this.originalData,d(e)),Object.assign(this,e)}fill(e={}){this.keys().forEach((t=>{this[t]=e[t]}))}data(){return this.keys().reduce(((e,t)=>i(i({},e),{[t]:this[t]})),{})}keys(){return Object.keys(this).filter((e=>!g.ignore.includes(e)))}startProcessing(){this.errors.clear(),this.busy=!0,this.successful=!1,this.progress=void 0,this.recentlySuccessful=!1,clearTimeout(this.recentlySuccessfulTimeoutId)}finishProcessing(){this.busy=!1,this.successful=!0,this.progress=void 0,this.recentlySuccessful=!0,this.recentlySuccessfulTimeoutId=setTimeout((()=>{this.recentlySuccessful=!1}),g.recentlySuccessfulTimeout)}clear(){this.errors.clear(),this.successful=!1,this.recentlySuccessful=!1,this.progress=void 0,clearTimeout(this.recentlySuccessfulTimeoutId)}reset(){Object.keys(this).filter((e=>!g.ignore.includes(e))).forEach((e=>{this[e]=d(this.originalData[e])}))}get(e,t={}){return this.submit("get",e,t)}post(e,t={}){return this.submit("post",e,t)}patch(e,t={}){return this.submit("patch",e,t)}put(e,t={}){return this.submit("put",e,t)}delete(e,t={}){return this.submit("delete",e,t)}submit(e,t,s={}){return this.startProcessing(),s=i({data:{},params:{},url:this.route(t),method:e,onUploadProgress:this.handleUploadProgress.bind(this)},s),"get"===e.toLowerCase()?s.params=i(i({},this.data()),s.params):(s.data=i(i({},this.data()),s.data),p(s.data)&&(s.transformRequest=[e=>h.serialize(e)])),new Promise(((e,t)=>{(g.axios||(axios__WEBPACK_IMPORTED_MODULE_0___default())).request(s).then((t=>{this.finishProcessing(),e(t)})).catch((e=>{this.handleErrors(e),t(e)}))}))}handleErrors(e){this.busy=!1,this.progress=void 0,e.response&&this.errors.set(this.extractErrors(e.response))}extractErrors(e){return e.data&&"object"==typeof e.data?e.data.errors?i({},e.data.errors):e.data.message?{error:e.data.message}:i({},e.data):{error:g.errorMessage}}handleUploadProgress(e){this.progress={total:e.total,loaded:e.loaded,percentage:Math.round(100*e.loaded/e.total)}}route(e,t={}){let s=e;return Object.prototype.hasOwnProperty.call(g.routes,e)&&(s=decodeURI(g.routes[e])),"object"!=typeof t&&(t={id:t}),Object.keys(t).forEach((e=>{s=s.replace(`{${e}}`,t[e])})),s}onKeydown(e){const t=e.target;t.name&&this.errors.clear(t.name)}}g.routes={},g.errorMessage="Something went wrong. Please try again.",g.recentlySuccessfulTimeout=2e3,g.ignore=["busy","successful","errors","progress","originalData","recentlySuccessful","recentlySuccessfulTimeoutId"];/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (g);


/***/ }),

/***/ "./resources/js/components/backend/pages/user/index.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/backend/pages/user/index.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_bc2f47c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=bc2f47c2& */ "./resources/js/components/backend/pages/user/index.vue?vue&type=template&id=bc2f47c2&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/pages/user/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _index_vue_vue_type_template_id_bc2f47c2___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_bc2f47c2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/pages/user/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/pages/user/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/backend/pages/user/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/user/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/backend/pages/user/index.vue?vue&type=template&id=bc2f47c2&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/backend/pages/user/index.vue?vue&type=template&id=bc2f47c2& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_bc2f47c2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_bc2f47c2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_bc2f47c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=bc2f47c2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/user/index.vue?vue&type=template&id=bc2f47c2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/user/index.vue?vue&type=template&id=bc2f47c2&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/user/index.vue?vue&type=template&id=bc2f47c2& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      { staticClass: "container" },
      [
        _vm.Loading
          ? [_c("content-loading")]
          : _c(
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
                                      _c(
                                        "td",
                                        { staticStyle: { width: "100px" } },
                                        [_vm._v(" " + _vm._s(user.id) + " ")]
                                      ),
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
                                        user.role == "admin"
                                          ? _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "badge badge-success"
                                              },
                                              [_vm._v("Admin")]
                                            )
                                          : _c(
                                              "span",
                                              {
                                                staticClass: "badge badge-info"
                                              },
                                              [_vm._v("Customer")]
                                            )
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        { staticStyle: { width: "170px" } },
                                        [
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "btn btn-primary btn-sm",
                                              attrs: { href: "#" },
                                              on: {
                                                click: function($event) {
                                                  $event.preventDefault()
                                                  return _vm.EditUser(user)
                                                }
                                              }
                                            },
                                            [_vm._v("Edit")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "btn btn-danger btn-sm",
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
                                        ]
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
                            _c("label", { attrs: { for: "role" } }, [
                              _vm._v("Name")
                            ]),
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
                              class: {
                                "is-invalid": _vm.form.errors.has("name")
                              },
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
                                  _vm.$set(
                                    _vm.form,
                                    "name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.form.errors.has("name")
                              ? _c("div", {
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.form.errors.get("name")
                                    )
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
                              class: {
                                "is-invalid": _vm.form.errors.has("email")
                              },
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
                                  _vm.$set(
                                    _vm.form,
                                    "email",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.form.errors.has("email")
                              ? _c("div", {
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.form.errors.get("email")
                                    )
                                  }
                                })
                              : _vm._e()
                          ]),
                          _c("br"),
                          _vm._v(" "),
                          _c("div", { attrs: { id: "password" } }, [
                            _c("label", { attrs: { for: "role" } }, [
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
                                placeholder: "password"
                              },
                              domProps: { value: _vm.form.password },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "password",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]),
                          _c("br"),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { attrs: { for: "role" } }, [
                              _vm._v("Role")
                            ]),
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
                                class: {
                                  "is-invalid": _vm.form.errors.has("role")
                                },
                                attrs: { name: "role", id: "role" },
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
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
                                  {
                                    staticStyle: { display: "none" },
                                    attrs: { value: "", selected: "" }
                                  },
                                  [_vm._v("Select Role ")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "option",
                                  { attrs: { value: "admin", selected: "" } },
                                  [
                                    _vm._v(
                                      "Admin\n                                        "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "option",
                                  {
                                    attrs: { value: "customer", selected: "" }
                                  },
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
                          _vm.user_id
                            ? _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary",
                                  attrs: { type: "submit" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.updateUser()
                                    }
                                  }
                                },
                                [_vm._v("Update User")]
                              )
                            : _c(
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
      _c("h3", { staticClass: "card-title", attrs: { id: "formTitle" } }, [
        _vm._v("Add User")
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);