"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_backend_pages_slider_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/assets/droppable_image/Drop_single_image.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/assets/droppable_image/Drop_single_image.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['image'],
  data: function data() {
    return {
      filelist: '',
      files: '',
      isEdit: false
    };
  },
  methods: {
    addFile: function addFile(e) {
      var _this = this;

      var droppedFiles = e.dataTransfer.files;
      if (!droppedFiles) return;
      e.currentTarget.classList.add('bg-green-300');

      _toConsumableArray(droppedFiles).forEach(function (f) {
        _this.files.push(f);
      });

      console.log(this.files);
    },
    removeFile: function removeFile(file) {
      this.files = this.files.filter(function (f) {
        return f != file;
      });
    },
    onChange: function onChange() {
      this.filelist = _toConsumableArray(this.$refs.file.files);
      this.$emit('image', this.filelist[0]);
    },
    remove: function remove() {
      this.filelist = '';
    },
    dragover: function dragover(event) {
      event.preventDefault(); // Add some visual fluff to show the user can drop its files

      if (!event.currentTarget.classList.contains('bg-green-300')) {
        event.currentTarget.classList.remove('bg-gray-100');
        event.currentTarget.classList.add('bg-green-300');
      }
    },
    dragleave: function dragleave(event) {
      // Clean up
      event.currentTarget.classList.add('bg-gray-100');
      event.currentTarget.classList.remove('bg-green-300');
    },
    drop: function drop(event) {
      event.preventDefault();
      this.$refs.file.files = event.dataTransfer.files;
      this.onChange(); // Trigger the onChange event manually
      // Clean up

      event.currentTarget.classList.add('bg-gray-100');
      event.currentTarget.classList.remove('bg-green-300');
    }
  },
  computed: {
    img: function img() {
      return this.filelist;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/slider/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/slider/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_droppable_image_Drop_single_image_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/droppable_image/Drop_single_image.vue */ "./resources/js/components/assets/droppable_image/Drop_single_image.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    Dropimage: _assets_droppable_image_Drop_single_image_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      sliders: [],
      form: {
        image: ''
      },
      errors: ''
    };
  },
  methods: {
    loadSliders: function loadSliders() {
      var _this = this;

      axios.get('/api/sliders').then(function (response) {
        _this.sliders = response.data;
      });
    },
    // Our method to GET results from a Laravel endpoint
    getResults: function getResults() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get('/api/category/results?page=' + page).then(function (response) {
        _this2.sliders = response.data;
      });
    },
    deleteSlider: function deleteSlider(slider) {
      var _this3 = this;

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
          axios.post("/api/slider-delete/".concat(slider.id));

          var index = _this3.sliders.indexOf(slider);

          _this3.sliders.splice(index, 1);

          Swal.fire('Deleted!', 'Slider Deleted.', 'success');
        }
      });
    },
    createcategory: function createcategory() {
      var _this4 = this;

      var data = new FormData();
      data.append('image', this.form.image);
      axios.post('/api/add-slider', data).then(function (response) {
        _this4.form = '';
        _this4.errors = '';

        _this4.loadSliders();

        Toast.fire({
          icon: 'success',
          title: 'Slider Added successfully.'
        });
      })["catch"](function (e) {
        _this4.errors = e.response.data.errors;
      });
    },
    image: function image(event) {
      console.log(event);
      this.form.image = event;
    }
  },
  mounted: function mounted() {
    this.loadSliders();
  }
});

/***/ }),

/***/ "./resources/js/components/assets/droppable_image/Drop_single_image.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/assets/droppable_image/Drop_single_image.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Drop_single_image_vue_vue_type_template_id_70800fdb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Drop_single_image.vue?vue&type=template&id=70800fdb& */ "./resources/js/components/assets/droppable_image/Drop_single_image.vue?vue&type=template&id=70800fdb&");
/* harmony import */ var _Drop_single_image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Drop_single_image.vue?vue&type=script&lang=js& */ "./resources/js/components/assets/droppable_image/Drop_single_image.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Drop_single_image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Drop_single_image_vue_vue_type_template_id_70800fdb___WEBPACK_IMPORTED_MODULE_0__.render,
  _Drop_single_image_vue_vue_type_template_id_70800fdb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/assets/droppable_image/Drop_single_image.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/pages/slider/index.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/backend/pages/slider/index.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_da13a916___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=da13a916& */ "./resources/js/components/backend/pages/slider/index.vue?vue&type=template&id=da13a916&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/pages/slider/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _index_vue_vue_type_template_id_da13a916___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_da13a916___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/pages/slider/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/assets/droppable_image/Drop_single_image.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/assets/droppable_image/Drop_single_image.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Drop_single_image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Drop_single_image.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/assets/droppable_image/Drop_single_image.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Drop_single_image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/backend/pages/slider/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/backend/pages/slider/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/slider/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/assets/droppable_image/Drop_single_image.vue?vue&type=template&id=70800fdb&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/assets/droppable_image/Drop_single_image.vue?vue&type=template&id=70800fdb& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Drop_single_image_vue_vue_type_template_id_70800fdb___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Drop_single_image_vue_vue_type_template_id_70800fdb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Drop_single_image_vue_vue_type_template_id_70800fdb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Drop_single_image.vue?vue&type=template&id=70800fdb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/assets/droppable_image/Drop_single_image.vue?vue&type=template&id=70800fdb&");


/***/ }),

/***/ "./resources/js/components/backend/pages/slider/index.vue?vue&type=template&id=da13a916&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/backend/pages/slider/index.vue?vue&type=template&id=da13a916& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_da13a916___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_da13a916___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_da13a916___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=da13a916& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/slider/index.vue?vue&type=template&id=da13a916&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/assets/droppable_image/Drop_single_image.vue?vue&type=template&id=70800fdb&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/assets/droppable_image/Drop_single_image.vue?vue&type=template&id=70800fdb& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass:
        "flex items-center justify-center text-center mt-2 align-middle"
    },
    [
      _c(
        "div",
        {
          staticClass:
            "p-6 bg-gray-100 rounded-lg border-dotted border-4  border-blue-500 w-full py-16",
          on: {
            dragover: _vm.dragover,
            dragleave: _vm.dragleave,
            drop: _vm.drop
          }
        },
        [
          _c("input", {
            ref: "file",
            staticClass: "opacity-0 overflow-hidden absolute",
            attrs: {
              type: "file",
              name: "fields[assetsFieldHandle][]",
              id: "assetsFieldHandle",
              accept: ".pdf,.jpg,.jpeg,.png"
            },
            on: { change: _vm.onChange }
          }),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          this.filelist.length
            ? _c("ul", { staticClass: "mt-4" }, [
                _c("div", { staticClass: "image" }, [
                  _vm._v(
                    "\n                " + _vm._s(_vm.filelist[0].name) + " "
                  ),
                  _c(
                    "button",
                    {
                      staticClass: "ml-2",
                      attrs: { type: "button", title: "Remove file" },
                      on: {
                        click: function($event) {
                          return _vm.remove()
                        }
                      }
                    },
                    [_vm._v("remove")]
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.isEdit
            ? _c("div", { staticClass: "image flex gap-3" }, [
                _c("img", {
                  staticClass: "mx-auto",
                  staticStyle: { width: "60px" },
                  attrs: { src: _vm.image, alt: "", srcset: "" }
                })
              ])
            : _vm._e()
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass: "block cursor-pointer",
        attrs: { for: "assetsFieldHandle" }
      },
      [
        _c("div", [
          _vm._v("\n                Drop your file\n                or "),
          _c("span", { staticClass: "underline" }, [_vm._v("click here")])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/slider/index.vue?vue&type=template&id=da13a916&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/slider/index.vue?vue&type=template&id=da13a916& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "lg:flex gap-5" }, [
    _c("div", { staticClass: "lg:w-8/12" }, [
      _c("div", { staticClass: "card" }, [
        _c(
          "div",
          { staticClass: "card-header flex items-center justify-between" },
          [
            _vm._v(
              "\n                        Slider Lists\n                    "
            )
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("table", { staticClass: "table" }, [
              _vm._m(0),
              _vm._v(" "),
              _vm.sliders.length
                ? _c(
                    "tbody",
                    [
                      _vm._l(_vm.sliders, function(slider) {
                        return _c("tr", { key: slider.id }, [
                          _c("td", [_vm._v(" " + _vm._s(slider.id) + " ")]),
                          _vm._v(" "),
                          _c("td", { staticStyle: { width: "100px" } }, [
                            _c("img", {
                              attrs: { src: slider.slider, alt: "", srcset: "" }
                            })
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(" " + _vm._s(slider.created_at) + " ")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticStyle: { width: "170px" } }, [
                            _c(
                              "a",
                              {
                                staticClass: "btn btn-danger btn-sm",
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.deleteSlider(slider)
                                  }
                                }
                              },
                              [_vm._v("Delete")]
                            )
                          ])
                        ])
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "card-footer" },
                        [
                          _c("pagination", {
                            attrs: { data: _vm.sliders },
                            on: { "pagination-change-page": _vm.getResults }
                          })
                        ],
                        1
                      )
                    ],
                    2
                  )
                : _c("tbody", [
                    _c("tr", [
                      _c(
                        "td",
                        { attrs: { colspan: "4" } },
                        [
                          _vm.Loading
                            ? [_c("content-loading")]
                            : _c(
                                "h5",
                                { staticClass: "text-center mt-4 mb-4" },
                                [_vm._v("No sliders found.")]
                              )
                        ],
                        2
                      )
                    ])
                  ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form lg:w-4/12" }, [
      _c("div", { staticClass: "card-header" }, [
        _vm._v("\n            Slider Form\n        ")
      ]),
      _vm._v(" "),
      _c(
        "form",
        { staticClass: "p-10 bg-white" },
        [
          _c("Dropimage", {
            on: {
              image: function($event) {
                return _vm.image($event)
              }
            }
          }),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "text-sm btn btn-lg btn-primary mt-3",
              attrs: { type: "submit" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.createcategory()
                }
              }
            },
            [_vm._v("Submit")]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { width: "100px" } }, [_vm._v("Image")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Name ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Slug ")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "170px" } }, [_vm._v(" Action ")])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);