"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?f58674411ffcf0c4e34c81871531804b") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?f58674411ffcf0c4e34c81871531804b#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?f58674411ffcf0c4e34c81871531804b") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?f58674411ffcf0c4e34c81871531804b#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?f58674411ffcf0c4e34c81871531804b") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?f58674411ffcf0c4e34c81871531804b#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?f58674411ffcf0c4e34c81871531804b") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?f58674411ffcf0c4e34c81871531804b#vusion-icon-font") format("svg");\n}'},webpackJsonp([59],{473:function(e,t,n){function o(e){return(e||window.ICON_FONT_STYLE).styleContent||""}function i(e){var t=document.createElement("style"),n=document.getElementsByTagName("head")[0];t.innerHTML=o(e),t.id=s,t.type="text/css",n?n.appendChild(t):window.addEventListener("load",function(){n.appendChild(t)})}var s="ICON-FONT-FILE-STYLE";e.exports=function(){window.HAS_CREATE_FONT_STYLE||(i(),window.HAS_CREATE_FONT_STYLE=!0)}},480:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("u-article",[t("h1",[this._v("基础 Base")]),t("h3",[this._v("统一样式")]),t("p",[this._v("原型组件库以"),t("u-link",{attrs:{href:"http://necolas.github.io/normalize.css"}},[this._v("normalize.css")]),this._v("为基础，使初始样式在各个浏览器下保持统一，然后对HTML元素的默认样式作了进一步优化。")],1),t("p",[this._v("类似"),t("u-link",{attrs:{href:"https://getbootstrap.com"}},[this._v("Bootstrap")]),this._v("，将"),t("code",{pre:!0},[this._v("box-sizing: border-box")]),this._v("应用到所有元素，于是元素的宽高便不会受到"),t("code",{pre:!0},[this._v("padding")]),this._v("的影响。")],1),t("p",[this._v("使用Vue的"),t("code",{pre:!0},[this._v("preserveWhitespace: false")]),this._v("，将所有元素之间空格清除，这样在"),t("code",{pre:!0},[this._v("inline-block")]),this._v("的元素之间不会有空隙。")]),t("h3",[this._v("黑名单")]),t("p",[this._v("为了支持语义化，同时又为了满足正交性（组件元素之间互不影响的原则），以下元素被拉入黑名单："),t("code",{pre:!0},[this._v("<a>")]),this._v("、"),t("code",{pre:!0},[this._v("<dl>")]),this._v("、"),t("code",{pre:!0},[this._v("<dt>")]),this._v("、"),t("code",{pre:!0},[this._v("<dd>")]),this._v("、"),t("code",{pre:!0},[this._v("<ul>")]),this._v("、"),t("code",{pre:!0},[this._v("<ol>")]),this._v("、"),t("code",{pre:!0},[this._v("<li>")]),this._v("。它们的样式被清除，并且要求在组件中封装后使用，而不是直接在业务中使用。")])])},staticRenderFns:[]},i=n(0)(null,o,!1,null,null,null);t.default=i.exports}});