"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-dark/vusion-icon-font.ttf?36601e94027a388b07aba1da29a471ae") format("truetype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.eot?36601e94027a388b07aba1da29a471ae#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.woff?36601e94027a388b07aba1da29a471ae") format("woff"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.svg?36601e94027a388b07aba1da29a471ae#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-dark/vusion-icon-font.ttf?36601e94027a388b07aba1da29a471ae") format("truetype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.eot?36601e94027a388b07aba1da29a471ae#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.woff?36601e94027a388b07aba1da29a471ae") format("woff"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.svg?36601e94027a388b07aba1da29a471ae#vusion-icon-font") format("svg");\n}'},webpackJsonp([21],{476:function(s,t,a){function i(s){return(s||window.ICON_FONT_STYLE).styleContent||""}function h(s){var t=document.createElement("style"),a=document.getElementsByTagName("head")[0];t.innerHTML=i(s),t.id=l,t.type="text/css",a?a.appendChild(t):window.addEventListener("load",function(){a.appendChild(t)})}var l="ICON-FONT-FILE-STYLE";s.exports=function(){window.HAS_CREATE_FONT_STYLE||(h(),window.HAS_CREATE_FONT_STYLE=!0)}},528:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(139),h={data:function(){return{modalVisible:!1}},methods:{open:function(){i.Modal.alert("test")}}},l={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("u-modal",{attrs:{visible:s.modalVisible,"mask-close":"",title:"提示"},on:{"update:visible":function(t){s.modalVisible=t}}},[a("span",[s._v("内容")])]),a("u-linear-layout",[a("u-button",{on:{click:function(t){s.modalVisible=!0}}},[s._v("Modal")]),a("u-button",{on:{click:function(t){s.open()}}},[s._v("Open")])],1)],1)},staticRenderFns:[]},n={render:function(){var s=this.$createElement,t=this._self._c||s;return t("div",[t("u-button",{attrs:{color:"primary"},on:{click:this.openAlert}},[this._v("alert")])],1)},staticRenderFns:[]},v={methods:{openConfirm:function(){this.$confirm("hello world","title").then(function(){console.log("确定")}).catch(function(){console.log("取消")})}}},r={render:function(){var s=this.$createElement,t=this._self._c||s;return t("div",[t("u-button",{attrs:{color:"primary"},on:{click:this.openConfirm}},[this._v("confirm")])],1)},staticRenderFns:[]},_={components:{C2693e6:a(0)(h,l,!1,null,null,null).exports,C2fdfc3:a(0)({methods:{openAlert:function(){this.$alert("hello world","title")}}},n,!1,null,null,null).exports,Cf8dde8:a(0)(v,r,!1,null,null,null).exports}},e={render:function(){var s=this.$createElement,t=this._self._c||s;return t("u-article",[t("h1",[this._v("弹窗 Modal")]),t("h2",[this._v("示例")]),t("h3",[this._v("基本形式")]),t("h4",[this._v("声明式")]),t("div",{staticClass:"u-example"},[t("C2693e6")],1),t("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-modal")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":visible.sync")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"modalVisible"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("mask-close")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"提示"')]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("span")]),this._v(">")]),this._v("内容"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("span")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-modal")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("@click")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"modalVisible = true"')]),this._v(">")]),this._v("Modal"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("@click")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"open()"')]),this._v(">")]),this._v("Open"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),t("span",{attrs:{class:"javascript"}},[this._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[this._v("import")]),this._v(" { Modal } "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("from")]),this._v(" "),t("span",{attrs:{class:"hljs-string"}},[this._v("'library'")]),this._v(";\n"),t("span",{attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n    data() {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" {\n            "),t("span",{attrs:{class:"hljs-attr"}},[this._v("modalVisible")]),this._v(": "),t("span",{attrs:{class:"hljs-literal"}},[this._v("false")]),this._v(",\n        };\n    },\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v("methods")]),this._v(": {\n        open() {\n            Modal.alert("),t("span",{attrs:{class:"hljs-string"}},[this._v("'test'")]),this._v(");\n        }\n    }\n};\n")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("Static")]),t("div",{staticClass:"u-example"},[t("u-modal",{attrs:{visible:"",static:""}},[this._v("静态显示，用于文档或局部展示")])],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-modal")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("visible")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("static")]),this._v(">")]),this._v("静态显示，用于文档或局部展示"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-modal")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("标题与内容")]),t("div",{staticClass:"u-example"},[t("u-modal",{attrs:{title:"标题",visible:"",static:""}},[this._v("内容")])],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-modal")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"标题"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("visible")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("static")]),this._v(">")]),this._v("内容"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-modal")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("图标、小标题与描述")]),t("div",{staticClass:"u-example"},[t("u-modal",{attrs:{title:"删除",heading:"确定删除该服务吗？",icon:"warning",visible:"",static:""}},[this._v("删除后不可恢复。")]),t("u-modal",{attrs:{title:"创建",heading:"创建成功",icon:"success",visible:"",static:""}})],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-modal")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"删除"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("heading")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"确定删除该服务吗？"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("icon")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"warning"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("visible")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("static")]),this._v(">")]),this._v("删除后不可恢复。"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-modal")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-modal")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"创建"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("heading")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"创建成功"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("icon")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"success"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("visible")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("static")]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-modal")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("自定义")]),t("div",{staticClass:"u-example"},[t("u-modal",{attrs:{visible:"",static:""}},[t("div",{attrs:{slot:"title"},slot:"title"},[this._v("自定义")]),t("div",{attrs:{slot:"foot"},slot:"foot"},[t("u-button",{attrs:{color:"primary"}},[this._v("关闭")])],1)])],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-modal")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("visible")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("static")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("slot")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"title"')]),this._v(">")]),this._v("自定义"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("slot")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"foot"')]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("color")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(">")]),this._v("关闭"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-modal")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("大小扩展")]),t("div",{staticClass:"u-example"},[t("u-modal",{attrs:{visible:"",static:"",size:"small"}},[this._v("\n    size 为small，大小是300px\n")]),t("u-modal",{attrs:{visible:"",static:"",size:"normal"}},[this._v("\n    size 为默认的normal,大小是400px\n")]),t("u-modal",{attrs:{visible:"",static:"",size:"large"}},[this._v("\n    size 为large,大小是600px\n")]),t("u-modal",{attrs:{visible:"",static:"",size:"huge"}},[this._v("\n    size 为huge,大小是800px\n")]),t("u-modal",{attrs:{visible:"",static:"",size:"auto"}},[this._v("\n    size 为auto\n")])],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-modal")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("visible")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("static")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("size")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"small"')]),this._v(">")]),this._v("\n    size 为small，大小是300px\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-modal")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-modal")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("visible")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("static")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("size")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"normal"')]),this._v(">")]),this._v("\n    size 为默认的normal,大小是400px\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-modal")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-modal")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("visible")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("static")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("size")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"large"')]),this._v(">")]),this._v("\n    size 为large,大小是600px\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-modal")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-modal")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("visible")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("static")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("size")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"huge"')]),this._v(">")]),this._v("\n    size 为huge,大小是800px\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-modal")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-modal")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("visible")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("static")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("size")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"auto"')]),this._v(">")]),this._v("\n    size 为auto\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-modal")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("简便使用方式")]),t("p",[this._v("调用$alert方法即可打开消息提示，它实现的是只有确定按钮的modal")]),t("div",{staticClass:"u-example"},[t("C2fdfc3")],1),t("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("color")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("@click")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"openAlert"')]),this._v(">")]),this._v("alert"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),t("span",{attrs:{class:"javascript"}},[this._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v("methods")]),this._v(": {\n        openAlert() {\n            "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".$alert("),t("span",{attrs:{class:"hljs-string"}},[this._v("'hello world'")]),this._v(", "),t("span",{attrs:{class:"hljs-string"}},[this._v("'title'")]),this._v(");\n        }\n    }\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n")])]),t("p",[this._v("调用$confirm方法即可打开确认提示，它实现的是有确定和取消按钮modal")]),t("div",{staticClass:"u-example"},[t("Cf8dde8")],1),t("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("color")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("@click")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"openConfirm"')]),this._v(">")]),this._v("confirm"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),t("span",{attrs:{class:"javascript"}},[this._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v("methods")]),this._v(": {\n        openConfirm() {\n            "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".$confirm("),t("span",{attrs:{class:"hljs-string"}},[this._v("'hello world'")]),this._v(", "),t("span",{attrs:{class:"hljs-string"}},[this._v("'title'")]),this._v(").then("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[this._v("()")]),this._v(" =>")]),this._v(" {\n                "),t("span",{attrs:{class:"hljs-comment"}},[this._v("// 点击确定按钮的逻辑")]),this._v("\n                "),t("span",{attrs:{class:"hljs-built_in"}},[this._v("console")]),this._v(".log("),t("span",{attrs:{class:"hljs-string"}},[this._v("'确定'")]),this._v(");\n            }).catch("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[this._v("()")]),this._v(" =>")]),this._v(" {\n                "),t("span",{attrs:{class:"hljs-comment"}},[this._v("// 点击取消按钮的逻辑")]),this._v("\n                "),t("span",{attrs:{class:"hljs-built_in"}},[this._v("console")]),this._v(".log("),t("span",{attrs:{class:"hljs-string"}},[this._v("'取消'")]),this._v(");\n            });\n        }\n    }\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n")])]),t("h2",[this._v("API")]),t("h3",[this._v("Attrs/Props")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Attr/Prop")]),t("th",[this._v("Type")]),t("th",[this._v("Default")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("title")]),t("td",[this._v("String")]),t("td",[t("code",{pre:!0},[this._v("'提示'")])]),t("td",[this._v("弹窗的标题")])]),t("tr",[t("td",[this._v("content")]),t("td",[this._v("String")]),t("td",[t("code",{pre:!0},[this._v("'提示内容'")])]),t("td",[this._v("弹窗的内容")])]),t("tr",[t("td",[this._v("heading")]),t("td",[this._v("String")]),t("td",[t("code",{pre:!0},[this._v("'提示内容'")])]),t("td",[this._v("弹窗的内容")])]),t("tr",[t("td",[this._v("visible.sync")]),t("td",[this._v("Boolean")]),t("td",[t("code",{pre:!0},[this._v("false")])]),t("td",[this._v("是否显示")])]),t("tr",[t("td",[this._v("okButton")]),t("td",[this._v("String")]),t("td",[t("code",{pre:!0},[this._v("'确定'")])]),t("td",[this._v("确定按钮文本，如果为空则不显示")])]),t("tr",[t("td",[this._v("cancelButton")]),t("td",[this._v("String")]),t("td",[t("code",{pre:!0},[this._v("'取消'")])]),t("td",[this._v("取消按钮文本，如果为空则不显示")])]),t("tr",[t("td",[this._v("size")]),t("td",[this._v("String")]),t("td",[t("code",{pre:!0},[this._v("'normal'")])]),t("td",[this._v("弹框的尺寸")])]),t("tr",[t("td",[this._v("icon")]),t("td",[this._v("String")]),t("td",[t("code",{pre:!0},[this._v("''")])]),t("td",[this._v("提示图标, 可选值："),t("code",{pre:!0},[this._v("success")]),this._v(", "),t("code",{pre:!0},[this._v("warning")]),this._v(", "),t("code",{pre:!0},[this._v("error")])])]),t("tr",[t("td",[this._v("maskClose")]),t("td",[this._v("Boolean")]),t("td",[t("code",{pre:!0},[this._v("false")])]),t("td",[this._v("点击遮罩层关闭弹窗，默认不可关闭，设置可关闭则需设置值为true")])])])]),t("h3",[this._v("Slots")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Slot")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("title")]),t("td",[this._v("弹窗标题自定义")])]),t("tr",[t("td",[this._v("head")]),t("td",[this._v("弹窗头部自定义")])]),t("tr",[t("td",[this._v("body")]),t("td",[this._v("弹窗中部自定义")])]),t("tr",[t("td",[this._v("foot")]),t("td",[this._v("弹窗尾部自定义")])]),t("tr",[t("td",[this._v("heading")]),t("td",[this._v("弹框小标题自定义")])]),t("tr",[t("td",[this._v("(default)")]),t("td",[this._v("弹窗内容自定义")])])])]),t("h3",[this._v("Events")]),t("h4",[this._v("@open")]),t("p",[this._v("打开弹窗时触发")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Param")]),t("th",[this._v("Type")]),t("th",[this._v("Description")])])]),t("tbody")]),t("h4",[this._v("@ok")]),t("p",[this._v("确定时触发")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Param")]),t("th",[this._v("Type")]),t("th",[this._v("Description")])])]),t("tbody")]),t("h4",[this._v("@cancel")]),t("p",[this._v("取消时触发")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Param")]),t("th",[this._v("Type")]),t("th",[this._v("Description")])])]),t("tbody")]),t("h4",[this._v("@before-close")]),t("p",[this._v("关闭弹窗前触发")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Param")]),t("th",[this._v("Type")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("$event.preventDefault")]),t("td",[this._v("Function")]),t("td",[this._v("阻止关闭流程")])])])]),t("h4",[this._v("@close")]),t("p",[this._v("关闭弹窗时触发")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Param")]),t("th",[this._v("Type")]),t("th",[this._v("Description")])])]),t("tbody")]),t("h3",[this._v("Methods")]),t("h4",[this._v("alert(content, title)")]),t("p",[this._v("打开只有确定按钮的消息提示")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Param")]),t("th",[this._v("Type")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("content")]),t("td",[this._v("String")]),t("td",[this._v("提示内容")])]),t("tr",[t("td",[this._v("title")]),t("td",[this._v("String")]),t("td",[this._v("提示标题")])])])]),t("h4",[this._v("confirm(content, title)")]),t("p",[this._v("打开有确定和取消按钮的消息提示")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Param")]),t("th",[this._v("Type")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("content")]),t("td",[this._v("String")]),t("td",[this._v("提示内容")])]),t("tr",[t("td",[this._v("title")]),t("td",[this._v("String")]),t("td",[this._v("提示标题")])])])])])},staticRenderFns:[]},c=a(0)(_,e,!1,null,null,null);t.default=c.exports}});