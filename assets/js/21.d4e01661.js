(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{362:function(t,e){t.exports=function(t){return null==t}},370:function(t,e,i){},402:function(t,e,i){"use strict";i(370)},415:function(t,e,i){"use strict";i.r(e);var a=i(362),s=i.n(a),n=i(24),r={name:"PageEdit",computed:{tags(){return this.$frontmatter.tags},categories(){return this.$frontmatter.categories},lastUpdated(){return this.$page.lastUpdated},lastUpdatedText(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink(){const t=s()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,{repo:e,docsDir:i="",docsBranch:a="master",docsRepo:n=e}=this.$site.themeConfig;return t&&n&&this.$page.relativePath?this.createEditLink(e,n,i,a,this.$page.relativePath):null},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink(t,e,i,a,s){if(/bitbucket.org/.test(e)){return e.replace(n.b,"")+"/src"+`/${a}/`+(i?i.replace(n.b,"")+"/":"")+s+`?mode=edit&spa=0&at=${a}&fileviewer=file-view-default`}if(/gitlab.com/.test(e)){return e.replace(n.b,"")+"/-/edit"+`/${a}/`+(i?i.replace(n.b,"")+"/":"")+s}const r=/gitee.com/;if(r.test(e)){return e.replace(r,"gitee.com/-/ide/project")+"/edit"+`/${a}/-/`+(i?i.replace(n.b,"")+"/":"")+s}return(n.j.test(e)?e:"https://github.com/"+e).replace(n.b,"")+"/edit"+`/${a}/`+(i?i.replace(n.b,"")+"/":"")+s}}},o=(i(402),i(1)),d=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-edit"},[t.editLink?e("div",{staticClass:"edit-link"},[e("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),e("OutboundLink")],1):t._e(),t._v(" "),!1!==t.$themeConfig.tag&&t.tags&&t.tags[0]?e("div",{staticClass:"tags"},[t._v("\n    关键词：\n    "),t._l(t.tags,(function(i,a){return e("router-link",{key:a,attrs:{to:"/tags/?tag="+encodeURIComponent(i),title:"点我获取更多相关标签文章"}},[t._v("#"+t._s(i))])}))],2):t._e(),t._v(" "),!1!==t.$themeConfig.category&&t.categories&&t.categories[0]?e("div",{staticClass:"tags"},[t._v("\n    主题分类：\n    "),t._l(t.categories,(function(i,a){return e("router-link",{key:a,attrs:{to:"/categories/?category="+encodeURIComponent(i),title:"点我获取更多相关分类文章"}},[t._v("#"+t._s(i))])}))],2):t._e(),t._v(" "),t.lastUpdated&&!1!==t.$frontmatter.lastUpdated?e("div",{staticClass:"last-updated"},[e("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null);e.default=d.exports}}]);