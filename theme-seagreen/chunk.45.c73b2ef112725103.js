"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?a2407565c6e0adf600a5d3caf8be16a1") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?a2407565c6e0adf600a5d3caf8be16a1#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?a2407565c6e0adf600a5d3caf8be16a1") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?a2407565c6e0adf600a5d3caf8be16a1#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?a2407565c6e0adf600a5d3caf8be16a1") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?a2407565c6e0adf600a5d3caf8be16a1#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?a2407565c6e0adf600a5d3caf8be16a1") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?a2407565c6e0adf600a5d3caf8be16a1#vusion-icon-font") format("svg");\n}'},webpackJsonp([45],{515:function(s,t,a){var v="ICON-FONT-FILE-STYLE";function l(s){return(s||window.ICON_FONT_STYLE).styleContent||""}function _(s){var t=document.createElement("style"),a=document.getElementsByTagName("head")[0];t.innerHTML=l(s),t.id=v,t.type="text/css",a?a.appendChild(t):window.addEventListener("load",function(){a.appendChild(t)})}s.exports=function(){window.HAS_CREATE_FONT_STYLE||(_(),window.HAS_CREATE_FONT_STYLE=!0)}},539:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var v={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("u-article",[a("h1",[s._v("标签页 Tabs")]),a("h2",[s._v("示例")]),a("h3",[s._v("基本形式")]),a("div",{staticClass:"u-example"},[a("u-tabs",[a("u-tab",{attrs:{title:"模板"}},[s._v("模板内容")]),a("u-tab",{attrs:{title:"样式"}},[s._v("样式内容")]),a("u-tab",{attrs:{title:"逻辑"}},[s._v("逻辑内容")])],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tabs")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"模板"')]),s._v(">")]),s._v("模板内容"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"样式"')]),s._v(">")]),s._v("样式内容"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"逻辑"')]),s._v(">")]),s._v("逻辑内容"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tabs")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("Value")]),a("div",{staticClass:"u-example"},[a("u-tabs",{attrs:{value:"B"}},[a("u-tab",{attrs:{title:"模板",value:"A"}},[s._v("模板内容")]),a("u-tab",{attrs:{title:"样式",value:"B"}},[s._v("样式内容")]),a("u-tab",{attrs:{title:"逻辑",value:"C"}},[s._v("逻辑内容")])],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tabs")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"B"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"模板"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"A"')]),s._v(">")]),s._v("模板内容"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"样式"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"B"')]),s._v(">")]),s._v("样式内容"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"逻辑"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"C"')]),s._v(">")]),s._v("逻辑内容"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tabs")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("只读和禁用")]),a("div",{staticClass:"u-example"},[a("u-tabs",{attrs:{readonly:""}},[a("u-tab",{attrs:{title:"模板"}},[s._v("模板内容")]),a("u-tab",{attrs:{title:"样式"}},[s._v("样式内容")]),a("u-tab",{attrs:{title:"逻辑"}},[s._v("逻辑内容")])],1),a("u-tabs",{attrs:{disabled:""}},[a("u-tab",{attrs:{title:"模板"}},[s._v("模板内容")]),a("u-tab",{attrs:{title:"样式"}},[s._v("样式内容")]),a("u-tab",{attrs:{title:"逻辑"}},[s._v("逻辑内容")])],1),a("u-tabs",[a("u-tab",{attrs:{title:"模板"}},[s._v("模板内容")]),a("u-tab",{attrs:{title:"样式",disabled:""}},[s._v("样式内容")]),a("u-tab",{attrs:{title:"逻辑"}},[s._v("逻辑内容")])],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tabs")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("readonly")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"模板"')]),s._v(">")]),s._v("模板内容"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"样式"')]),s._v(">")]),s._v("样式内容"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"逻辑"')]),s._v(">")]),s._v("逻辑内容"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tabs")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tabs")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"模板"')]),s._v(">")]),s._v("模板内容"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"样式"')]),s._v(">")]),s._v("样式内容"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"逻辑"')]),s._v(">")]),s._v("逻辑内容"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tabs")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tabs")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"模板"')]),s._v(">")]),s._v("模板内容"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"样式"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(">")]),s._v("样式内容"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"逻辑"')]),s._v(">")]),s._v("逻辑内容"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tabs")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("可关闭")]),a("div",{staticClass:"u-example"},[a("u-tabs",{attrs:{closable:""}},[a("u-tab",{attrs:{title:"模板"}},[s._v("模板内容")]),a("u-tab",{attrs:{title:"样式"}},[s._v("样式内容")]),a("u-tab",{attrs:{title:"逻辑"}},[s._v("逻辑内容")]),a("u-tab",{attrs:{title:"文档"}},[s._v("文档内容")]),a("u-tab",{attrs:{title:"资源"}},[s._v("资源内容")])],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tabs")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("closable")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"模板"')]),s._v(">")]),s._v("模板内容"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"样式"')]),s._v(">")]),s._v("样式内容"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"逻辑"')]),s._v(">")]),s._v("逻辑内容"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"文档"')]),s._v(">")]),s._v("文档内容"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"资源"')]),s._v(">")]),s._v("资源内容"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tabs")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("路由")]),a("div",{staticClass:"u-example"},[a("u-tabs",{attrs:{router:""}},[a("u-tab",{attrs:{title:"Button",to:"u-button"}}),a("u-tab",{attrs:{title:"Checkbox",to:"u-checkbox"}}),a("u-tab",{attrs:{title:"Tabs",to:"u-tabs"}})],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tabs")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("router")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"Button"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("to")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"u-button"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"Checkbox"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("to")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"u-checkbox"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"Tabs"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("to")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"u-tabs"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tabs")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("插槽扩展")]),a("ul",[a("li",[s._v("在"),a("code",{pre:!0},[s._v("<u-tabs>")]),s._v("上可以使用"),a("code",{pre:!0},[s._v("extra")]),s._v("插槽，在右侧添加额外的内容；")]),a("li",[s._v("在"),a("code",{pre:!0},[s._v("<u-tab>")]),s._v("上可以使用"),a("code",{pre:!0},[s._v("title")]),s._v("插槽，自定义标签页的标题。")])]),a("p"),a("div",{staticClass:"u-example"},[a("u-tabs",{attrs:{value:"1"}},[a("u-tab",{attrs:{value:"0"}},[a("span",{attrs:{slot:"title"},slot:"title"},[s._v("模板 "),a("u-label",[s._v("1")])],1),s._v("\n        模板内容\n    ")]),a("u-tab",{attrs:{value:"1"}},[a("span",{attrs:{slot:"title"},slot:"title"},[s._v("样式 "),a("u-label",[s._v("6")])],1),s._v("\n        样式内容\n    ")]),a("u-tab",{attrs:{value:"2"}},[a("span",{attrs:{slot:"title"},slot:"title"},[s._v("逻辑 "),a("u-label",[s._v("3")])],1),s._v("\n        逻辑内容\n    ")]),a("u-checkbox",{attrs:{slot:"extra"},slot:"extra"},[s._v("全选")])],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tabs")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"title"')]),s._v(">")]),s._v("模板 "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-label")]),s._v(">")]),s._v("1"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-label")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n        模板内容\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"title"')]),s._v(">")]),s._v("样式 "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-label")]),s._v(">")]),s._v("6"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-label")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n        样式内容\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"2"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"title"')]),s._v(">")]),s._v("逻辑 "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-label")]),s._v(">")]),s._v("3"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-label")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n        逻辑内容\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tab")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-checkbox")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"extra"')]),s._v(">")]),s._v("全选"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-checkbox")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-tabs")]),s._v(">")]),s._v("\n")])]),a("h2",[s._v("Tabs API")]),a("h3",[s._v("Props/Attrs")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Prop/Attr")]),a("th",[s._v("Type")]),a("th",[s._v("Default")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("value.sync, v-model")]),a("td",[s._v("Any")]),a("td"),a("td",[s._v("选中标签页的值")])]),a("tr",[a("td",[s._v("readonly")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("false")])]),a("td",[s._v("是否只读")])]),a("tr",[a("td",[s._v("disabled")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("false")])]),a("td",[s._v("是否禁用")])]),a("tr",[a("td",[s._v("closable")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("false")])]),a("td",[s._v("是否可以关闭")])]),a("tr",[a("td",[s._v("router")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("false")])]),a("td",[s._v("是否根据vue-router来控制选择哪个标签页")])])])]),a("h3",[s._v("Slots")]),a("h4",[s._v("(default)")]),a("p",[s._v("插入"),a("code",{pre:!0},[s._v("<u-tab>")]),s._v("子组件。")]),a("h4",[s._v("extra")]),a("p",[s._v("在标签右侧可以附加组件。")]),a("h3",[s._v("Events")]),a("h4",[s._v("@before-select")]),a("p",[s._v("选择某一页前触发")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("value")]),a("td",[s._v("Any")]),a("td",[s._v("选中标签页的值")])]),a("tr",[a("td",[s._v("oldValue")]),a("td",[s._v("Any")]),a("td",[s._v("旧的值")])]),a("tr",[a("td",[s._v("itemVM")]),a("td",[s._v("Tab")]),a("td",[s._v("选中标签页实例")])]),a("tr",[a("td",[s._v("$event.preventDefault")]),a("td",[s._v("Function")]),a("td",[s._v("阻止选择流程")])])])]),a("h4",[s._v("@select")]),a("p",[s._v("选择某一页时触发")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("value")]),a("td",[s._v("Any")]),a("td",[s._v("选中标签页的值")])]),a("tr",[a("td",[s._v("oldValue")]),a("td",[s._v("Any")]),a("td",[s._v("旧的值")])]),a("tr",[a("td",[s._v("itemVM")]),a("td",[s._v("Tab")]),a("td",[s._v("选中标签页实例")])])])]),a("h4",[s._v("@before-close")]),a("p",[s._v("关闭某一页前触发")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("value")]),a("td",[s._v("Any")]),a("td",[s._v("待关闭标签页的值")])]),a("tr",[a("td",[s._v("oldValue")]),a("td",[s._v("Any")]),a("td",[s._v("旧的值")])]),a("tr",[a("td",[s._v("itemVM")]),a("td",[s._v("Tab")]),a("td",[s._v("待关闭的标签页实例")])]),a("tr",[a("td",[s._v("$event.preventDefault")]),a("td",[s._v("Function")]),a("td",[s._v("阻止关闭流程")])])])]),a("h4",[s._v("@close")]),a("p",[s._v("关闭某一页时触发")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("value")]),a("td",[s._v("Any")]),a("td",[s._v("关闭的标签页的值")])]),a("tr",[a("td",[s._v("oldValue")]),a("td",[s._v("Any")]),a("td",[s._v("旧的值")])]),a("tr",[a("td",[s._v("itemVM")]),a("td",[s._v("Tab")]),a("td",[s._v("关闭的标签页实例")])]),a("tr",[a("td",[s._v("$event.preventDefault")]),a("td",[s._v("Function")]),a("td",[s._v("阻止关闭后自动选择页的流程")])])])]),a("h2",[s._v("Tab API")]),a("h3",[s._v("Props/Attrs")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Prop/Attr")]),a("th",[s._v("Type")]),a("th",[s._v("Default")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("title")]),a("td",[s._v("String")]),a("td"),a("td",[s._v("标签页标题")])]),a("tr",[a("td",[s._v("value")]),a("td",[s._v("Any")]),a("td"),a("td",[s._v("标签页的值")])]),a("tr",[a("td",[s._v("disabled")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("false")])]),a("td",[s._v("是否禁用此标签页")])]),a("tr",[a("td",[s._v("href")]),a("td",[s._v("String")]),a("td"),a("td",[s._v("链接地址")])]),a("tr",[a("td",[s._v("target")]),a("td",[s._v("String")]),a("td"),a("td",[s._v("打开方式")])]),a("tr",[a("td",[s._v("to")]),a("td",[s._v("String, Location")]),a("td"),a("td",[s._v("需要vue-router，与"),a("code",{pre:!0},[s._v("<router-link>")]),s._v("的"),a("code",{pre:!0},[s._v("to")]),s._v("属性相同。可以是一个字符串或者是描述目标位置的对象。")])]),a("tr",[a("td",[s._v("replace")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("false")])]),a("td",[s._v("需要vue-router，与"),a("code",{pre:!0},[s._v("<router-link>")]),s._v("的"),a("code",{pre:!0},[s._v("replace")]),s._v("属性相同。如果为"),a("code",{pre:!0},[s._v("true")]),s._v("，当点击时，会调用"),a("code",{pre:!0},[s._v("router.replace()")]),s._v("而不是"),a("code",{pre:!0},[s._v("router.push()")]),s._v("，于是导航后不会留下"),a("code",{pre:!0},[s._v("history")]),s._v("记录。")])]),a("tr",[a("td",[s._v("exact")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("false")])]),a("td",[s._v("需要vue-router，与"),a("code",{pre:!0},[s._v("<router-link>")]),s._v("的"),a("code",{pre:!0},[s._v("exact")]),s._v("属性相同。是否与路由完全一致时才高亮显示。")])])])]),a("h3",[s._v("Slots")]),a("h4",[s._v("(default)")]),a("p",[s._v("插入文本或HTML。")]),a("h4",[s._v("title")]),a("p",[s._v("自定义标题文本。")])])},staticRenderFns:[]},l=a(0)(null,v,!1,null,null,null);t.default=l.exports}});