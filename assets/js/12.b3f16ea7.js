(window.webpackJsonp=window.webpackJsonp||[]).push([[12,15,17,44,51,57],{348:function(t,e,i){},349:function(t,e,i){"use strict";i.r(e);i(2),i(84);var s=i(24),n={props:{item:{required:!0}},computed:{link(){return Object(s.c)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link}},methods:{isExternal:s.g,isMailto:s.h,isTel:s.i,focusoutAction(){this.$emit("focusout")}}},a=i(1),o=Object(a.a)(n,(function(){var t=this,e=t._self._c;return t.isExternal(t.link)?e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),e("OutboundLink")],1):e("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v(t._s(t.item.text))])}),[],!1,null,null,null);e.default=o.exports},350:function(t,e,i){},351:function(t,e,i){"use strict";i.r(e);var s={name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}},n=(i(352),i(1)),a=Object(n.a)(s,(function(){return(0,this._self._c)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.default=a.exports},352:function(t,e,i){"use strict";i(348)},356:function(t,e,i){},361:function(t,e,i){"use strict";i(350)},369:function(t,e,i){},374:function(t,e,i){"use strict";i.r(e);var s=i(349),n=i(351),a=i(157),o=i.n(a),l={components:{NavLink:s.default,DropdownTransition:n.default},data:()=>({open:!1,isMQMobile:!1}),props:{item:{required:!0}},computed:{dropdownAriaLabel(){return this.item.ariaLabel||this.item.text}},beforeMount(){this.isMQMobile=window.innerWidth<720,window.addEventListener("resize",()=>{this.isMQMobile=window.innerWidth<720})},methods:{toggle(){this.isMQMobile&&(this.open=!this.open)},isLastItemOfArray:(t,e)=>o()(e)===t},watch:{$route(){this.open=!1}}},r=(i(361),i(1)),u=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[e("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.toggle}},[t.item.link?e("router-link",{staticClass:"link-title",attrs:{to:t.item.link}},[t._v(t._s(t.item.text))]):t._e(),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.item.link,expression:"!item.link"}],staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),e("span",{staticClass:"arrow",class:t.open?"down":"right"})],1),t._v(" "),e("DropdownTransition",[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(i,s){return e("li",{key:i.link||s,staticClass:"dropdown-item"},["links"===i.type?e("h4",[t._v(t._s(i.text))]):t._e(),t._v(" "),"links"===i.type?e("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(i.items,(function(s){return e("li",{key:s.link,staticClass:"dropdown-subitem"},[e("NavLink",{attrs:{item:s},on:{focusout:function(e){t.isLastItemOfArray(s,i.items)&&t.isLastItemOfArray(i,t.item.items)&&t.toggle()}}})],1)})),0):e("NavLink",{attrs:{item:i},on:{focusout:function(e){t.isLastItemOfArray(i,t.item.items)&&t.toggle()}}})],1)})),0)])],1)}),[],!1,null,null,null);e.default=u.exports},378:function(t,e,i){"use strict";i(356)},383:function(t,e,i){"use strict";i.r(e);i(2),i(25),i(84);var s=i(374),n=i(24),a={components:{NavLink:i(349).default,DropdownLink:s.default},computed:{userNav(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,i=this.$router.options.routes,s=this.$site.themeConfig.locales||{},n={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(t).map(n=>{const a=t[n],o=s[n]&&s[n].label||a.lang;let l;return a.lang===this.$lang?l=e:(l=e.replace(this.$localeConfig.path,n),i.some(t=>t.path===l)||(l=n)),{text:o,link:l}})};return[...this.userNav,n]}return this.userNav},userLinks(){return(this.nav||[]).map(t=>Object.assign(Object(n.k)(t),{items:(t.items||[]).map(n.k)}))},repoLink(){const{repo:t}=this.$site.themeConfig;return t?/^https?:/.test(t)?t:"https://github.com/"+t:null},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"];for(let i=0;i<e.length;i++){const s=e[i];if(new RegExp(s,"i").test(t))return s}return"Source"}}},o=(i(378),i(1)),l=Object(o.a)(a,(function(){var t=this,e=t._self._c;return t.userLinks.length||t.repoLink?e("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?e("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),e("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null);e.default=l.exports},400:function(t,e,i){"use strict";i(369)},401:function(t,e,i){},418:function(t,e,i){"use strict";i.r(e);i(400);var s=i(1),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar-button",attrs:{title:"目录"},on:{click:function(e){return t.$emit("toggle-sidebar")}}},[e("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[e("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null);e.default=n.exports},431:function(t,e,i){"use strict";i(401)},459:function(t,e,i){"use strict";i.r(e);var s=i(458),n=i(418),a=i(383);function o(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var l={components:{SidebarButton:n.default,NavLinks:a.default,SearchBox:s.a,AlgoliaSearchBox:{}},data:()=>({linksWrapMaxWidth:null}),mounted(){const t=parseInt(o(this.$el,"paddingLeft"))+parseInt(o(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)},computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},r=(i(431),i(1)),u=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"navbar blur"},[e("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),e("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?e("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?e("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),e("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?e("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox"):t._e(),t._v(" "),e("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null);e.default=u.exports}}]);