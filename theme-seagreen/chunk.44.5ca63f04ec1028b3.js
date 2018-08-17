webpackJsonp([44],{711:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l={data:function(){return{value:"#EE867D",options:[{value:"#EE867D"},{value:"#805DCF"},{value:"#40CCCA"},{value:"#FFCA12"},{value:"#30A8DC"},{value:"#E1AEF6"},{value:"#D2D2D2"}]}},methods:{select:function(s){console.log(s),this.value=s}}},n={render:function(){var s=this,a=s.$createElement;return(s._self._c||a)("u-color-select",{attrs:{options:s.options,value:s.value},on:{select:function(a){s.select(a.value)}}})},staticRenderFns:[]},v={render:function(){var s=this.$createElement;return(this._self._c||s)("u-color-select",{attrs:{options:this.options,value:this.value}})},staticRenderFns:[]},r={render:function(){var s=this.$createElement,a=this._self._c||s;return a("u-linear-layout",[a("u-color-select",{attrs:{options:this.optionsOne,value:this.value,readonly:""}}),a("u-color-select",{attrs:{options:this.optionsOne,value:this.value,disabled:""}}),a("u-color-select",{attrs:{options:this.optionsTwo,value:this.value}})],1)},staticRenderFns:[]},_={components:{"c-3022b1d0":t(0)(l,n,!1,null,null,null).exports,"c-60ef4e85":t(0)({data:function(){return{value:"#EE867D",options:[{name:"粉色",value:"#EE867D"},{name:"粉色",value:"#805DCF"},{name:"粉色",value:"#40CCCA"},{name:"粉色",value:"#FFCA12"},{name:"粉色",value:"#30A8DC"},{name:"粉色",value:"#E1AEF6"},{name:"粉色",value:"#D2D2D2"}]}}},v,!1,null,null,null).exports,"c-2f104854":t(0)({data:function(){var s=[{value:"#EE867D"},{value:"#40CCCA"},{value:"#FFCA12"},{value:"#30A8DC"},{value:"#E1AEF6"},{value:"#D2D2D2"}];return{value:"#EE867D",optionsOne:s,optionsTwo:[{name:"我被禁用了",value:"#805DCF",disabled:!0}].concat(s)}}},r,!1,null,null,null).exports}},e={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("u-article",[t("h1",[s._v("颜色选择框 ColorSelect")]),t("h2",[s._v("示例")]),t("h3",[s._v("基本形式")]),t("u-example",[t("div",[t("c-3022b1d0")],1),t("div",{attrs:{slot:"code"},slot:"code"},[t("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-color-select")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":options")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"options"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(" @"),t("span",{attrs:{class:"hljs-attr"}},[s._v("select")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"select($event.value)"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-color-select")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'#EE867D'")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": [\n                {\n                    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'#EE867D'")]),s._v(",\n                },\n                {\n                    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(":"),t("span",{attrs:{class:"hljs-string"}},[s._v("'#805DCF'")]),s._v("\n                },\n                {\n                    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(":"),t("span",{attrs:{class:"hljs-string"}},[s._v("'#40CCCA'")]),s._v("\n                },\n                {\n                    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(":"),t("span",{attrs:{class:"hljs-string"}},[s._v("'#FFCA12'")]),s._v("\n                },\n                {\n                    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(":"),t("span",{attrs:{class:"hljs-string"}},[s._v("'#30A8DC'")]),s._v("\n                },\n                {\n                    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(":"),t("span",{attrs:{class:"hljs-string"}},[s._v("'#E1AEF6'")]),s._v("\n                },\n                {\n                    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(":"),t("span",{attrs:{class:"hljs-string"}},[s._v("'#D2D2D2'")]),s._v("\n                },\n            ],\n        };\n    },\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        select(value) {\n            "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(value);\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".value = value;\n        }\n    },\n};\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),t("h3",[s._v("文字")]),t("u-example",[t("div",[t("c-60ef4e85")],1),t("div",{attrs:{slot:"code"},slot:"code"},[t("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-color-select")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":options")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"options"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-color-select")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'#EE867D'")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": [\n                {\n                    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'粉色'")]),s._v(",\n                    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'#EE867D'")]),s._v(",\n                },\n                {\n                    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'粉色'")]),s._v(",\n                    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(":"),t("span",{attrs:{class:"hljs-string"}},[s._v("'#805DCF'")]),s._v("\n                },\n                {\n                    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'粉色'")]),s._v(",\n                    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(":"),t("span",{attrs:{class:"hljs-string"}},[s._v("'#40CCCA'")]),s._v("\n                },\n                {\n                    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'粉色'")]),s._v(",\n                    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(":"),t("span",{attrs:{class:"hljs-string"}},[s._v("'#FFCA12'")]),s._v("\n                },\n                {\n                    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'粉色'")]),s._v(",\n                    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(":"),t("span",{attrs:{class:"hljs-string"}},[s._v("'#30A8DC'")]),s._v("\n                },\n                {\n                    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'粉色'")]),s._v(",\n                    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(":"),t("span",{attrs:{class:"hljs-string"}},[s._v("'#E1AEF6'")]),s._v("\n                },\n                {\n                    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'粉色'")]),s._v(",\n                    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(":"),t("span",{attrs:{class:"hljs-string"}},[s._v("'#D2D2D2'")]),s._v("\n                },\n            ],\n        };\n    }\n};\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),t("h3",[s._v("只读、禁用、禁用某一项")]),t("u-example",[t("div",[t("c-2f104854")],1),t("div",{attrs:{slot:"code"},slot:"code"},[t("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-color-select")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":options")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"optionsOne"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("readonly")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-color-select")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-color-select")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":options")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"optionsOne"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-color-select")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-color-select")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":options")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"optionsTwo"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-color-select")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" option = [\n            {\n                "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'#EE867D'")]),s._v(",\n            },\n            {\n                "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(":"),t("span",{attrs:{class:"hljs-string"}},[s._v("'#40CCCA'")]),s._v("\n            },\n            {\n                "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(":"),t("span",{attrs:{class:"hljs-string"}},[s._v("'#FFCA12'")]),s._v("\n            },\n            {\n                "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(":"),t("span",{attrs:{class:"hljs-string"}},[s._v("'#30A8DC'")]),s._v("\n            },\n            {\n                "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(":"),t("span",{attrs:{class:"hljs-string"}},[s._v("'#E1AEF6'")]),s._v("\n            },\n            {\n                "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(":"),t("span",{attrs:{class:"hljs-string"}},[s._v("'#D2D2D2'")]),s._v("\n            },\n        ];\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'#EE867D'")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("optionsOne")]),s._v(": option,\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("optionsTwo")]),s._v(": [{\n                "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'我被禁用了'")]),s._v(",\n                "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(":"),t("span",{attrs:{class:"hljs-string"}},[s._v("'#805DCF'")]),s._v(",\n                "),t("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n            }, ...option]\n        };\n    }\n};\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),t("h2",[s._v("ColorSelect API")]),t("h3",[s._v("Props/Attrs")]),t("table",[t("thead",[t("tr",[t("th",[s._v("Prop/Attr")]),t("th",[s._v("Type")]),t("th",[s._v("Default")]),t("th",[s._v("Description")])])]),t("tbody",[t("tr",[t("td",[s._v("options")]),t("td",[s._v("Array< { value, ...arg } >")]),t("td"),t("td",[s._v("书写颜色哈希值的列表，可额外书写"),t("code",{pre:!0},[s._v("name")]),s._v(","),t("code",{pre:!0},[s._v("disabled")]),s._v("的值")])]),t("tr",[t("td",[s._v("value")]),t("td",[s._v("String")]),t("td"),t("td",[s._v("选中的颜色")])]),t("tr",[t("td",[s._v("width")]),t("td",[s._v("String/Number")]),t("td",[t("code",{pre:!0},[s._v("'160'")])]),t("td",[s._v("输入框长度")])]),t("tr",[t("td",[s._v("readonly")]),t("td",[s._v("Boolean")]),t("td",[t("code",{pre:!0},[s._v("false")])]),t("td",[s._v("是否只读")])]),t("tr",[t("td",[s._v("disabled")]),t("td",[s._v("Boolean")]),t("td",[t("code",{pre:!0},[s._v("false")])]),t("td",[s._v("是否禁用")])])])]),t("h3",[s._v("Events")]),t("h4",[s._v("@select")]),t("p",[s._v("选中列表项时触发")]),t("table",[t("thead",[t("tr",[t("th",[s._v("Param")]),t("th",[s._v("Type")]),t("th",[s._v("Description")])])]),t("tbody",[t("tr",[t("td",[s._v("$event.selected")]),t("td",[s._v("Object")]),t("td",[s._v("选中后的列表对象")])]),t("tr",[t("td",[s._v("$event.value")]),t("td",[s._v("String")]),t("td",[s._v("选中后的列表对象的值")])])])]),t("h4",[s._v("@change")]),t("p",[s._v("开关状态改变时触发")]),t("table",[t("thead",[t("tr",[t("th",[s._v("Param")]),t("th",[s._v("Type")]),t("th",[s._v("Description")])])]),t("tbody",[t("tr",[t("td",[s._v("$event.selected")]),t("td",[s._v("Object")]),t("td",[s._v("改变后的列表对象")])]),t("tr",[t("td",[s._v("$event.value")]),t("td",[s._v("String")]),t("td",[s._v("改变后的列表对象的值")])])])])],1)},staticRenderFns:[]},c=t(0)(_,e,!1,null,null,null);a.default=c.exports}});