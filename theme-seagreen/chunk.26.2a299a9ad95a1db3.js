"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?f58674411ffcf0c4e34c81871531804b") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?f58674411ffcf0c4e34c81871531804b#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?f58674411ffcf0c4e34c81871531804b") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?f58674411ffcf0c4e34c81871531804b#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?f58674411ffcf0c4e34c81871531804b") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?f58674411ffcf0c4e34c81871531804b#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?f58674411ffcf0c4e34c81871531804b") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?f58674411ffcf0c4e34c81871531804b#vusion-icon-font") format("svg");\n}'},webpackJsonp([26],{473:function(s,t,a){function e(s){return(s||window.ICON_FONT_STYLE).styleContent||""}function i(s){var t=document.createElement("style"),a=document.getElementsByTagName("head")[0];t.innerHTML=e(s),t.id=h,t.type="text/css",a?a.appendChild(t):window.addEventListener("load",function(){a.appendChild(t)})}var h="ICON-FONT-FILE-STYLE";s.exports=function(){window.HAS_CREATE_FONT_STYLE||(i(),window.HAS_CREATE_FONT_STYLE=!0)}},532:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e={data:function(){return{title:"每星期访问量",xaxis:{key:"week"},yaxis:{min:0,name:"个"},series:[{key:"number"},{key:"num",hidden:!0}],data:[{week:"星期一",number:150,num:1200},{week:"星期二",number:300,num:1200},{week:"星期三",number:28,num:void 0},{week:"星期四",number:200,num:2e3},{week:"星期五",number:74,num:740},{week:"星期六",number:532,num:2e3},{week:"星期日",number:420,num:5e3}],smooth:!0}}},i={render:function(){var s=this.$createElement;return(this._self._c||s)("u-line-chart",{attrs:{border:"",legend:"",title:this.title,"x-axis":this.xaxis,"y-axis":this.yaxis,series:this.series,data:this.data,smooth:this.smooth}})},staticRenderFns:[]},h={components:{C9c2bfe:a(0)(e,i,!1,null,null,null).exports}},r={render:function(){var s=this.$createElement,t=this._self._c||s;return t("u-article",[t("p",[this._v("#线状图（LineChart）")]),t("h2",[this._v("示例")]),t("h3",[this._v("基本形式")]),t("div",{staticClass:"u-example"},[t("u-line-chart",{attrs:{border:"",legend:"",title:"每星期访问量","x-axis":{key:"week"},"y-axis":{min:0},series:[{key:"number"}],data:[{week:"星期一",number:150},{week:"星期二",number:300},{week:"星期三",number:28},{week:"星期四",number:200},{week:"星期五",number:74},{week:"星期六",number:532},{week:"星期日",number:420}]}})],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-line-chart")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("border")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("legend")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"每星期访问量"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":x-axis")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v("\"{ key: 'week' }\"")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":y-axis")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"{ min: 0 }"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":series")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v("\"[{ key: 'number' }]\"")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":data")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v("\"[{ week: '星期一', number: 150 }, { week: '星期二', number: 300 }, { week: '星期三', number: 28 }, { week: '星期四', number: 200 }, { week: '星期五', number: 74 }, { week: '星期六', number: 532 }, { week: '星期日', number: 420 }]\"")]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-line-chart")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("曲线图")]),t("div",{staticClass:"u-example"},[t("u-line-chart",{attrs:{border:"",legend:"",title:"每星期访问量","x-axis":{key:"week"},"y-axis":{min:0},smooth:!0,series:[{key:"number"}],data:[{week:"星期一",number:150},{week:"星期二",number:300},{week:"星期三",number:28},{week:"星期四",number:200},{week:"星期五",number:74},{week:"星期六",number:532},{week:"星期日",number:420}]}})],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-line-chart")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("border")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("legend")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"每星期访问量"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":x-axis")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v("\"{ key: 'week' }\"")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":y-axis")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"{ min: 0 }"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":smooth")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"true"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":series")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v("\"[{ key: 'number' }]\"")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":data")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v("\"[{ week: '星期一', number: 150 }, { week: '星期二', number: 300 }, { week: '星期三', number: 28 }, { week: '星期四', number: 200 }, { week: '星期五', number: 74 }, { week: '星期六', number: 532 }, { week: '星期日', number: 420 }]\"")]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-line-chart")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("填充下方区域")]),t("div",{staticClass:"u-example"},[t("u-line-chart",{attrs:{border:"",legend:"",title:"每星期访问量","x-axis":{key:"week"},"y-axis":{min:0},fill:!0,series:[{key:"number"}],data:[{week:"星期一",number:150},{week:"星期二",number:300},{week:"星期三",number:28},{week:"星期四",number:200},{week:"星期五",number:74},{week:"星期六",number:532},{week:"星期日",number:420}]}})],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-line-chart")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("border")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("legend")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"每星期访问量"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":x-axis")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v("\"{ key: 'week' }\"")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":y-axis")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"{ min: 0 }"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":fill")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"true"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":series")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v("\"[{ key: 'number' }]\"")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":data")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v("\"[{ week: '星期一', number: 150 }, { week: '星期二', number: 300 }, { week: '星期三', number: 28 }, { week: '星期四', number: 200 }, { week: '星期五', number: 74 }, { week: '星期六', number: 532 }, { week: '星期日', number: 420 }]\"")]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-line-chart")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("隐藏图例")]),t("div",{staticClass:"u-example"},[t("u-line-chart",{attrs:{border:"",legend:"",title:"每星期访问量",legend:!1,"x-axis":{key:"week"},"y-axis":{min:0},series:[{key:"number"}],data:[{week:"星期一",number:150},{week:"星期二",number:300},{week:"星期三",number:28},{week:"星期四",number:200},{week:"星期五",number:74},{week:"星期六",number:532},{week:"星期日",number:420}]}})],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-line-chart")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("border")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("legend")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"每星期访问量"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":legend")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"false"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":x-axis")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v("\"{ key: 'week' }\"")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":y-axis")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"{ min: 0 }"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":series")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v("\"[{ key: 'number' }]\"")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":data")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v("\"[{ week: '星期一', number: 150 }, { week: '星期二', number: 300 }, { week: '星期三', number: 28 }, { week: '星期四', number: 200 }, { week: '星期五', number: 74 }, { week: '星期六', number: 532 }, { week: '星期日', number: 420 }]\"")]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-line-chart")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("单位")]),t("div",{staticClass:"u-example"},[t("u-line-chart",{attrs:{border:"",legend:"",title:"每星期访问量","x-axis":{key:"week"},"y-axis":{min:0,name:"个"},series:[{key:"number"}],data:[{week:"星期一",number:150},{week:"星期二",number:300},{week:"星期三",number:28},{week:"星期四",number:200},{week:"星期五",number:74},{week:"星期六",number:532},{week:"星期日",number:420}]}})],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-line-chart")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("border")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("legend")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"每星期访问量"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":x-axis")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v("\"{ key: 'week' }\"")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":y-axis")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v("\"{ min: 0, name: '个' }\"")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":series")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v("\"[{ key: 'number' }]\"")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":data")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v("\"[{ week: '星期一', number: 150 }, { week: '星期二', number: 300 }, { week: '星期三', number: 28 }, { week: '星期四', number: 200 }, { week: '星期五', number: 74 }, { week: '星期六', number: 532 }, { week: '星期日', number: 420 }]\"")]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-line-chart")]),this._v(">")]),this._v("\n")])]),t("h4",[this._v("命令式")]),t("div",{staticClass:"u-example"},[t("C9c2bfe")],1),t("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-line-chart")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("border")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("legend")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"title"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":x-axis")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"xaxis"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":y-axis")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"yaxis"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":series")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"series"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":data")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"data"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":smooth")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"smooth"')]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-line-chart")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),t("span",{attrs:{class:"javascript"}},[this._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n\tdata() {\n\t\t"),t("span",{attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" {\n\t\t\t"),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'每星期访问量'")]),this._v(",\n\t\t\t"),t("span",{attrs:{class:"hljs-attr"}},[this._v("xaxis")]),this._v(": { "),t("span",{attrs:{class:"hljs-attr"}},[this._v("key")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'week'")]),this._v(" },\n\t\t\t"),t("span",{attrs:{class:"hljs-attr"}},[this._v("yaxis")]),this._v(": { "),t("span",{attrs:{class:"hljs-attr"}},[this._v("min")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("0")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("name")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'个'")]),this._v("},\n\t\t\t"),t("span",{attrs:{class:"hljs-attr"}},[this._v("series")]),this._v(": [{"),t("span",{attrs:{class:"hljs-attr"}},[this._v("key")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'number'")]),this._v("},{"),t("span",{attrs:{class:"hljs-attr"}},[this._v("key")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'num'")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("hidden")]),this._v(": "),t("span",{attrs:{class:"hljs-literal"}},[this._v("true")]),this._v(",} ],\n\t\t\t"),t("span",{attrs:{class:"hljs-attr"}},[this._v("data")]),this._v(": [\n\t\t\t\t{ "),t("span",{attrs:{class:"hljs-attr"}},[this._v("week")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'星期一'")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("number")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("150")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("num")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("1200")]),this._v(" },\n\t\t\t\t{ "),t("span",{attrs:{class:"hljs-attr"}},[this._v("week")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'星期二'")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("number")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("300")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("num")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("1200")]),this._v(" },\n\t\t\t\t{ "),t("span",{attrs:{class:"hljs-attr"}},[this._v("week")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'星期三'")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("number")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("28")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("num")]),this._v(":"),t("span",{attrs:{class:"hljs-literal"}},[this._v("undefined")]),this._v(" },\n\t\t\t\t{ "),t("span",{attrs:{class:"hljs-attr"}},[this._v("week")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'星期四'")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("number")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("200")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("num")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("2000")]),this._v(" },\n\t\t\t\t{ "),t("span",{attrs:{class:"hljs-attr"}},[this._v("week")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'星期五'")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("number")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("74")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("num")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("740")]),this._v(" },\n\t\t\t\t{ "),t("span",{attrs:{class:"hljs-attr"}},[this._v("week")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'星期六'")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("number")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("532")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("num")]),this._v(":"),t("span",{attrs:{class:"hljs-number"}},[this._v("2000")]),this._v(" },\n\t\t\t\t{ "),t("span",{attrs:{class:"hljs-attr"}},[this._v("week")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'星期日'")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("number")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("420")]),this._v(" ,"),t("span",{attrs:{class:"hljs-attr"}},[this._v("num")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("5000")]),this._v("},\n\t\t\t],\n\t\t\t"),t("span",{attrs:{class:"hljs-attr"}},[this._v("smooth")]),this._v(": "),t("span",{attrs:{class:"hljs-literal"}},[this._v("true")]),this._v(",\n\t\t}\n\t}\n};\n")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n")])]),t("h2",[this._v("API")]),t("h3",[this._v("Attrs/Props")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Prop")]),t("th",[this._v("Type")]),t("th",[this._v("Default")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("title")]),t("td",[this._v("String")]),t("td"),t("td",[this._v("图表的标题")])]),t("tr",[t("td",[this._v("caption")]),t("td",[this._v("String")]),t("td"),t("td",[this._v("图表的描述")])]),t("tr",[t("td",[this._v("data")]),t("td",[this._v("Array")]),t("td"),t("td",[this._v("图表需要显示的数据")])]),t("tr",[t("td",[this._v("xAxis")]),t("td",[this._v("Object")]),t("td"),t("td",[this._v("绘制X轴需要传入的数据，属性key的值为data数组中对象的某个属性，依据此值来绘制X轴的刻度尺")])]),t("tr",[t("td",[this._v("yAxis")]),t("td",[this._v("Object")]),t("td"),t("td",[this._v("绘制Y轴需要传入的数据，属性min，max表示Y轴的最大值和最小值，count表示Y轴最小值和最大值之间分成几段，默认值为8")])]),t("tr",[t("td",[this._v("series")]),t("td",[this._v("Array")]),t("td"),t("td",[this._v("传入绘制每条线的数据，数组中对象的属性key对象data数组中对象某个属性，hidden属性表示默认隐藏此选段，absent表示不显示此选段，默认作为tooltip显示的数据内容")])]),t("tr",[t("td",[this._v("border")]),t("td",[this._v("Boolean")]),t("td",[this._v("false")]),t("td",[this._v("是否有表框")])]),t("tr",[t("td",[this._v("legend")]),t("td",[this._v("Boolean")]),t("td",[this._v("false")]),t("td",[this._v("X轴下方是否显示每条线段对应的标签")])]),t("tr",[t("td",[this._v("width")]),t("td",[this._v("String")]),t("td",[t("code",{pre:!0},[this._v("100%")])]),t("td",[this._v("图表的宽度")])]),t("tr",[t("td",[this._v("height")]),t("td",[this._v("String")]),t("td",[t("code",{pre:!0},[this._v("480px")])]),t("td",[this._v("图表的高度")])]),t("tr",[t("td",[this._v("smooth")]),t("td",[this._v("Boolean")]),t("td",[this._v("false")]),t("td",[this._v("线段是否采用平滑方式绘制")])]),t("tr",[t("td",[this._v("fill")]),t("td",[this._v("Boolean")]),t("td",[this._v("false")]),t("td",[this._v("线段和X轴之间否填充")])]),t("tr",[t("td",[this._v("titleAlign")]),t("td",[this._v("String")]),t("td",[t("code",{pre:!0},[this._v("center")])]),t("td",[this._v("图表标题的对齐方式，默认是居中，值有:left,center,right")])]),t("tr",[t("td",[this._v("loading")]),t("td",[this._v("Boolean")]),t("td",[t("code",{pre:!0},[this._v("false")])]),t("td",[this._v("true表示正在加载中，false表示加载完成")])])])]),t("h3",[this._v("Slots")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Slot")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("tooltipTemplate + index（index为遍历data的索引）")]),t("td",[this._v("自定义tooltip内容")])])])]),t("table",[t("thead",[t("tr",[t("th",[this._v("Slot")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("operate")]),t("td",[this._v("自定义内容")])])])]),t("table",[t("thead",[t("tr",[t("th",[this._v("Slot")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("titleTemplate")]),t("td",[this._v("自定义标题内容")])])])]),t("table",[t("thead",[t("tr",[t("th",[this._v("Slot")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("captionTemplate")]),t("td",[this._v("自定义caption内容")])])])])])},staticRenderFns:[]},n=a(0)(h,r,!1,null,null,null);t.default=n.exports}});