(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{392:function(t,o,e){},411:function(t,o,e){"use strict";var s=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var e=arguments[o];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},n="undefined"==typeof window,i={version:"1.1.1",storage:n?null:window.localStorage,session:{storage:n?null:window.sessionStorage}},r={set:function(t,o){if(!this.disabled)return void 0===o?this.remove(t):(this.storage.setItem(t,function(t){return JSON.stringify(t)}(o)),o)},get:function(t,o){if(this.disabled)return o;var e=function(t){if("string"!=typeof t)return;try{return JSON.parse(t)}catch(o){return t||void 0}}(this.storage.getItem(t));return void 0===e?o:e},has:function(t){return void 0!==this.get(t)},remove:function(t){this.disabled||this.storage.removeItem(t)},clear:function(){this.disabled||this.storage.clear()},getAll:function(){if(this.disabled)return null;var t={};return this.forEach((function(o,e){t[o]=e})),t},forEach:function(t){if(!this.disabled)for(var o=0;o<this.storage.length;o++){var e=this.storage.key(o);t(e,this.get(e))}}};s(i,r),s(i.session,r);try{var l="__storejs__";i.set(l,l),i.get(l)!==l&&(i.disabled=!0),i.remove(l)}catch(t){i.disabled=!0}o.a=i},425:function(t,o,e){"use strict";e(392)},462:function(t,o,e){"use strict";e.r(o);var s=e(85),n=e.n(s),i=e(411);var r={data:()=>({threshold:100,scrollTop:null,showCommentBut:!1,commentTop:null,currentMode:"",showModeBox:!1,modeList:[{name:"跟随系统",icon:"icon-zidong",KEY:"auto"},{name:"浅色模式",icon:"icon-rijianmoshi",KEY:"light"},{name:"深色模式",icon:"icon-yejianmoshi",KEY:"dark"},{name:"阅读模式",icon:"icon-yuedu",KEY:"read"}],_scrollTimer:null,_textareaEl:null,_recordScrollTop:null,COMMENT_SELECTOR_1:"#vuepress-plugin-comment",COMMENT_SELECTOR_2:"#valine-vuepress-comment",COMMENT_SELECTOR_3:".vssue"}),mounted(){if(this.currentMode=i.a.get("mode")||this.$themeConfig.defaultMode||"auto",this.scrollTop=this.getScrollTop(),window.addEventListener("scroll",n()(()=>{this.scrollTop=this.getScrollTop()},100)),window.addEventListener("load",()=>{this.getCommentTop()}),document.documentElement.clientWidth<719){this.$refs.modeBox.onclick=()=>{this.showModeBox=!1},window.addEventListener("scroll",n()(()=>{this.showModeBox&&(this.showModeBox=!1)},100))}const t=document.querySelectorAll(".buttons .button");for(let o=0;o<t.length;o++){const e=t[o];e.addEventListener("touchstart",(function(){e.classList.add("hover")})),e.addEventListener("touchend",(function(){setTimeout(()=>{e.classList.remove("hover")},150)}))}},computed:{showToTop(){return this.scrollTop>this.threshold}},methods:{toggleMode(t){this.currentMode=t,this.$emit("toggle-theme-mode",t)},getScrollTop:()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,scrollToTop(){window.scrollTo({top:0,behavior:"smooth"}),this.scrollTop=0},getCommentTop(){setTimeout(()=>{let t=document.querySelector(this.COMMENT_SELECTOR_1)||document.querySelector(this.COMMENT_SELECTOR_2)||document.querySelector(this.COMMENT_SELECTOR_3);t&&(this.showCommentBut=!1!==this.$frontmatter.comment&&!0!==this.$frontmatter.home,this.commentTop=t.offsetTop-58)},500)},scrollToComment(){window.scrollTo({top:this.commentTop,behavior:"smooth"}),this._textareaEl=document.querySelector(this.COMMENT_SELECTOR_1+" textarea")||document.querySelector(this.COMMENT_SELECTOR_2+" input")||document.querySelector(this.COMMENT_SELECTOR_3+" textarea"),this._textareaEl&&this.getScrollTop()!==this._recordScrollTop?document.addEventListener("scroll",this._handleListener):this._textareaEl&&this.getScrollTop()===this._recordScrollTop&&this._handleFocus()},_handleListener(){clearTimeout(this._scrollTimer),this._scrollTimer=setTimeout(()=>{document.removeEventListener("scroll",this._handleListener),this._recordScrollTop=this.getScrollTop(),this._handleFocus()},30)},_handleFocus(){this._textareaEl.focus(),this._textareaEl.classList.add("yellowBorder"),setTimeout(()=>{this._textareaEl.classList.remove("yellowBorder")},500)}},watch:{"$route.path"(){this.showCommentBut=!1,this.getCommentTop()}}},l=(e(425),e(1)),c=Object(l.a)(r,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"buttons"},[o("transition",{attrs:{name:"fade"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.showToTop,expression:"showToTop"}],staticClass:"button blur go-to-top iconfont icon-fanhuidingbu",attrs:{title:"返回顶部"},on:{click:t.scrollToTop}})]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showCommentBut,expression:"showCommentBut"}],staticClass:"button blur go-to-comment iconfont icon-pinglun",attrs:{title:"去评论"},on:{click:t.scrollToComment}}),t._v(" "),o("div",{staticClass:"button blur theme-mode-but iconfont icon-zhuti",attrs:{title:"主题模式"},on:{mouseenter:function(o){t.showModeBox=!0},mouseleave:function(o){t.showModeBox=!1},click:function(o){t.showModeBox=!0}}},[o("transition",{attrs:{name:"mode"}},[o("ul",{directives:[{name:"show",rawName:"v-show",value:t.showModeBox,expression:"showModeBox"}],ref:"modeBox",staticClass:"select-box",on:{click:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()}}},t._l(t.modeList,(function(e){return o("li",{key:e.KEY,staticClass:"iconfont",class:[e.icon,{active:e.KEY===t.currentMode}],on:{click:function(o){return t.toggleMode(e.KEY)}}},[t._v("\n          "+t._s(e.name)+"\n        ")])})),0)])],1)],1)}),[],!1,null,null,null);o.default=c.exports}}]);