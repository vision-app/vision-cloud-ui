"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?a2407565c6e0adf600a5d3caf8be16a1") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?a2407565c6e0adf600a5d3caf8be16a1#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?a2407565c6e0adf600a5d3caf8be16a1") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?a2407565c6e0adf600a5d3caf8be16a1#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?a2407565c6e0adf600a5d3caf8be16a1") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?a2407565c6e0adf600a5d3caf8be16a1#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?a2407565c6e0adf600a5d3caf8be16a1") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?a2407565c6e0adf600a5d3caf8be16a1#vusion-icon-font") format("svg");\n}'},webpackJsonp([46],{515:function(s,t,a){var n="ICON-FONT-FILE-STYLE";function e(s){return(s||window.ICON_FONT_STYLE).styleContent||""}function l(s){var t=document.createElement("style"),a=document.getElementsByTagName("head")[0];t.innerHTML=e(s),t.id=n,t.type="text/css",a?a.appendChild(t):window.addEventListener("load",function(){a.appendChild(t)})}s.exports=function(){window.HAS_CREATE_FONT_STYLE||(l(),window.HAS_CREATE_FONT_STYLE=!0)}},541:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("u-article",[a("h1",[s._v("步骤条 Steps")]),a("h2",[s._v("示例")]),a("h3",[s._v("基本形式")]),a("p",[s._v("步骤从"),a("code",{pre:!0},[s._v("0")]),s._v("开始。")]),a("div",{staticClass:"u-example"},[a("u-steps",{attrs:{value:1}},[a("u-step",{attrs:{title:"Step1"}},[s._v("Content1")]),a("u-step",{attrs:{title:"Step2"}},[s._v("Content2")]),a("u-step",{attrs:{title:"Step3"}},[s._v("Content3")])],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-steps")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-step")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"Step1"')]),s._v(">")]),s._v("Content1"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-step")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-step")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"Step2"')]),s._v(">")]),s._v("Content2"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-step")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-step")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"Step3"')]),s._v(">")]),s._v("Content3"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-step")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-steps")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("自定义标题")]),a("div",{staticClass:"u-example"},[a("u-steps",{attrs:{value:1}},[a("u-step",[a("span",{attrs:{slot:"title"},slot:"title"},[s._v("Step "),a("u-label",[s._v("1")])],1),s._v("\n        Content1\n    ")]),a("u-step",[a("span",{attrs:{slot:"title"},slot:"title"},[s._v("Step "),a("u-label",[s._v("2")])],1),s._v("\n        Content2\n    ")]),a("u-step",[a("span",{attrs:{slot:"title"},slot:"title"},[s._v("Step "),a("u-label",[s._v("3")])],1),s._v("\n        Content3\n    ")])],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-steps")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-step")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"title"')]),s._v(">")]),s._v("Step "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-label")]),s._v(">")]),s._v("1"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-label")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n        Content1\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-step")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-step")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"title"')]),s._v(">")]),s._v("Step "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-label")]),s._v(">")]),s._v("2"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-label")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n        Content2\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-step")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-step")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"title"')]),s._v(">")]),s._v("Step "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-label")]),s._v(">")]),s._v("3"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-label")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n        Content3\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-step")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-steps")]),s._v(">")]),s._v("\n")])]),a("h2",[s._v("Steps API")]),a("h3",[s._v("Props/Attrs")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Prop/Attr")]),a("th",[s._v("Type")]),a("th",[s._v("Default")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("value")]),a("td",[s._v("Number")]),a("td",[a("code",{pre:!0},[s._v("0")])]),a("td",[s._v("当前步骤数")])])])]),a("h3",[s._v("Slots")]),a("h4",[s._v("(default)")]),a("p",[s._v("插入"),a("code",{pre:!0},[s._v("<u-step>")]),s._v("子组件。")]),a("h3",[s._v("Events")]),a("h4",[s._v("@change")]),a("p",[s._v("步骤数改变后触发")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("value")]),a("td",[s._v("Number")]),a("td",[s._v("当前步骤数")])]),a("tr",[a("td",[s._v("oldValue")]),a("td",[s._v("Number")]),a("td",[s._v("旧的步骤数")])])])]),a("h2",[s._v("Step API")]),a("h3",[s._v("Props/Attrs")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Prop/Attr")]),a("th",[s._v("Type")]),a("th",[s._v("Default")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("title")]),a("td",[s._v("String")]),a("td"),a("td",[s._v("步骤名")])])])]),a("h3",[s._v("Slots")]),a("h4",[s._v("(default)")]),a("p",[s._v("插入文本或HTML。")]),a("h4",[s._v("title")]),a("p",[s._v("自定义标题文本。")])])},staticRenderFns:[]},e=a(0)(null,n,!1,null,null,null);t.default=e.exports}});