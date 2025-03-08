import{u as h,i as w}from"./action-cd384d03.js";import{d as A,y as E,z as U,r as u,c as v,w as i,f as z,v as a,j as r,C,E as B,T as s}from"./tool-4bde39df.js";import{p as c}from"./pako.esm-ff523c99.js";import"./modulepreload-polyfill-3cfb730f.js";const H=A({__name:"Encoder",async setup(b){let l,p;const t=h(([l,p]=E(()=>w({input:C("text"),deflate:!1,output:B("base64")})),l=await l,p(),l)),m=U(()=>{if(t.current.input.text.isEmpty())return s.empty();if(t.current.input.text.isError())return t.current.input.text;try{if(!t.current.input.text.isText())throw new Error("input content must text / text file");let n;return t.current.deflate?n=s.fromUint8Array(c.deflate(t.current.input.text.toUint8Array())):n=s.fromUint8Array(c.gzip(t.current.input.text.toUint8Array())),n.setExtension(".gz"),n}catch(n){return s.fromError($error(n))}});return(n,e)=>{const d=u("TextInput"),f=u("Bool"),x=u("Display"),_=u("TextOutput"),y=u("Align"),g=u("HeightResize");return z(),v(g,{reduce:5},{default:i(({small:V,large:T})=>[a(y,{direction:"vertical"},{default:i(()=>[a(x,null,{extra:i(()=>[a(f,{modelValue:r(t).current.deflate,"onUpdate:modelValue":e[1]||(e[1]=o=>r(t).current.deflate=o),label:"Deflate"},null,8,["modelValue"])]),default:i(()=>[a(d,{modelValue:r(t).current.input,"onUpdate:modelValue":e[0]||(e[0]=o=>r(t).current.input=o),height:V,upload:"file",encoding:""},null,8,["modelValue","height"])]),_:2},1024),a(_,{modelValue:r(t).current.output,"onUpdate:modelValue":e[2]||(e[2]=o=>r(t).current.output=o),allow:["base64","hex","down"],content:m.value,height:T,onSuccess:e[3]||(e[3]=o=>r(t).save())},null,8,["modelValue","content","height"])]),_:2},1024)]),_:1})}}});export{H as default};
