"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_gallery_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/gallery.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/gallery.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      filelist: [],
      files: [],
      gallery_data: {},
      form: {
        images: []
      }
    };
  },
  methods: {
    remove_exist_image: function remove_exist_image(i) {
      this.gallery_images.splice(i, 1);
    }
  },
  mounted: function mounted() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/images").then(function (res) {
      _this.gallery_data = res.data;
      console.log(res);
    });
  }
});

/***/ }),

/***/ "./resources/js/components/gallery.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/gallery.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gallery_vue_vue_type_template_id_18100052___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery.vue?vue&type=template&id=18100052& */ "./resources/js/components/gallery.vue?vue&type=template&id=18100052&");
/* harmony import */ var _gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery.vue?vue&type=script&lang=js& */ "./resources/js/components/gallery.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _gallery_vue_vue_type_template_id_18100052___WEBPACK_IMPORTED_MODULE_0__.render,
  _gallery_vue_vue_type_template_id_18100052___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/gallery.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/gallery.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/gallery.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./gallery.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/gallery.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/gallery.vue?vue&type=template&id=18100052&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/gallery.vue?vue&type=template&id=18100052& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_template_id_18100052___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_template_id_18100052___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_template_id_18100052___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./gallery.vue?vue&type=template&id=18100052& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/gallery.vue?vue&type=template&id=18100052&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/gallery.vue?vue&type=template&id=18100052&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/gallery.vue?vue&type=template&id=18100052& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "flex gap-20 bg-gray-300 p-20" }, [
    _c("div", { staticClass: "data w-2/6" }, [
      _c(
        "div",
        {
          staticClass:
            "shadow overflow-hidden bgallery-b bgallery-gray-200 sm:rounded-lg"
        },
        [
          _c("table", { staticClass: "min-w-full divide-y divide-gray-200" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              { staticClass: "bg-white divide-y divide-gray-200 text-left" },
              _vm._l(_vm.gallery_data, function(gallery) {
                return _c("tr", { key: gallery.id }, [
                  _c("td", { staticClass: "px-6 py-4 whitespace-nowrap" }, [
                    _vm._v(
                      "\n                            " +
                        _vm._s(gallery.id) +
                        "\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "td",
                    { staticClass: "px-6 py-4 whitespace-nowrap" },
                    _vm._l(gallery.image, function(image) {
                      return _c("div", { key: image.id }, [
                        _c("img", {
                          staticStyle: { width: "20px" },
                          attrs: { src: image.image, alt: "", srcset: "" }
                        })
                      ])
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    { staticClass: "px-6 py-4 whitespace-nowrap" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass:
                            "text-white inline-block rounded tex-lg bg-green-600 hover:bg-green-700 py-1 px-3",
                          attrs: {
                            to: {
                              name: "Single-gallery",
                              params: { id: gallery.id }
                            }
                          }
                        },
                        [_c("i", { staticClass: "las la-eye" })]
                      )
                    ],
                    1
                  )
                ])
              }),
              0
            ),
            _vm._v(" "),
            _c("tfoot", { staticClass: "mx-10" })
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "flex px-24 items-center justify-center text-center mt-2"
      },
      [
        _c("form", { attrs: { action: "" } }, [
          _c(
            "div",
            {
              staticClass:
                "p-6 bg-gray-100 rounded-lg bgallery-dotted bgallery-4  bgallery-blue-500 w-full",
              on: {
                dragover: _vm.dragover,
                dragleave: _vm.dragleave,
                drop: _vm.drop
              }
            },
            [
              _c("input", {
                ref: "file",
                staticClass: "w-px h-px opacity-0 overflow-hidden absolute",
                attrs: {
                  type: "file",
                  name: "fields[assetsFieldHandle][]",
                  id: "assetsFieldHandle",
                  accept: ".pdf,.jpg,.jpeg,.png"
                },
                on: { change: _vm.onChange }
              }),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              this.form.images.length
                ? _c(
                    "div",
                    { staticClass: "image flex gap-3" },
                    _vm._l(_vm.gallery_images, function(file) {
                      return _c(
                        "div",
                        { key: file, staticClass: "text-sm mt-4" },
                        [
                          _c("img", {
                            staticStyle: { width: "60px" },
                            attrs: { src: file.image, alt: "", srcset: "" }
                          }),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              on: {
                                click: function($event) {
                                  _vm.remove_exist_image(
                                    _vm.gallery_images.indexOf(file)
                                  )
                                }
                              }
                            },
                            [_vm._v("remove")]
                          )
                        ]
                      )
                    }),
                    0
                  )
                : _c(
                    "div",
                    {
                      staticClass: "my-3 mr-2 flex items-center justify-center"
                    },
                    [
                      _c("img", {
                        staticStyle: { width: "70px" },
                        attrs: {
                          src: _vm.websiteaddress + "images/upload-icon.png",
                          alt: "",
                          srcset: ""
                        }
                      })
                    ]
                  )
            ]
          ),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "text-white py-2 px-4  mt-5 bg-green-600" },
            [_vm._v("Submit")]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "bg-gray-50" }, [
      _c("tr", [
        _c(
          "th",
          {
            staticClass:
              "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
            attrs: { scope: "col" }
          },
          [_vm._v("\n                            Id\n                        ")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
            attrs: { scope: "col" }
          },
          [
            _vm._v(
              "\n                            Gallery\n                        "
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
            attrs: { scope: "col" }
          },
          [
            _vm._v(
              "\n                            Edit\n                        "
            )
          ]
        )
      ])
    ])
  },
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
          _vm._v(
            "\n                        Drop your file\n                        or "
          ),
          _c("span", { staticClass: "underline" }, [_vm._v("click here")])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ })

}]);