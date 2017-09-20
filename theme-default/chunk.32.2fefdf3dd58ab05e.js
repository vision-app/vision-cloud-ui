webpackJsonp([32],{

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(671);

/***/ }),

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_89c2f842_hasScoped_false_vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_README_md__ = __webpack_require__(672);
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = null
/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_89c2f842_hasScoped_false_vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_README_md__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('u-article', [_c('h1', [_vm._v("颜色选择扩展（SelectColor）")]), _vm._v(" "), _c('h2', [_vm._v("示例")]), _vm._v(" "), _c('h3', [_vm._v("基本形式")]), _vm._v(" "), _c('h3', [_vm._v("方法")]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs lang-vue"
    }
  }, [_c('code', {
    attrs: {
      "v-pre": ""
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-color-select")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":options")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"options\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"value\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("@select")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"select($event.value)\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-color-select")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("script")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "javascript"
    }
  }, [_vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("default")]), _vm._v(" {\n    data() {\n        "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("return")]), _vm._v(" {\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'#EE867D'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("options")]), _vm._v(": [\n                {\n                    "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'#EE867D'")]), _vm._v(",\n                },\n                {\n                    "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(":"), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'#805DCF'")]), _vm._v("\n                },\n                {\n                    "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(":"), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'#40CCCA'")]), _vm._v("\n                },\n                {\n                    "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(":"), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'#FFCA12'")]), _vm._v("\n                },\n                {\n                    "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(":"), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'#30A8DC'")]), _vm._v("\n                },\n                {\n                    "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(":"), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'#E1AEF6'")]), _vm._v("\n                },\n                {\n                    "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(":"), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'#D2D2D2'")]), _vm._v("\n                },\n            ],\n        };\n    },\n    "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("methods")]), _vm._v(": {\n        select(value) {\n            "), _c('span', {
    attrs: {
      "class": "hljs-built_in"
    }
  }, [_vm._v("console")]), _vm._v(".log(value);\n            "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("this")]), _vm._v(".value = value;\n        }\n    },\n};\n")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("script")]), _vm._v(">")]), _vm._v("\n")])])])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});