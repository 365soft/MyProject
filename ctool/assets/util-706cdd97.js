import{a as l}from"./proxy-51a354d5.js";const h=(r,u,n,c)=>{if(!r||r.startsWith("#"))return r;if(!c)return n+r;const o=u*2;let s="";for(let e=0;e<r.length;e+=o){const a=r.slice(e,e+o);for(let t=a.length;t>0;t-=2)s+=a.slice(t-2,t)}return n+s},f=(r,u,{response:n,prefix_0x:c=!1,swap_endian:o=!1})=>{var a,t;if(n==="")return"";let s=(t=(a=n[r])==null?void 0:a[u])==null?void 0:t[1];if(s===void 0)return"";if(!c&&!o)return s;const e={arm64:4,arm:4,armbe:4,thumb:2,thumbbe:2};return s.split(`
`).map(i=>h(i,e[u],c?"0x":"",o)).join(`
`)},b=r=>l().post("https://armconverter.com/api/convert",r);export{f as h,b as r};
