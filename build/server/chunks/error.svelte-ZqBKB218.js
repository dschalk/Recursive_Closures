import { e as escape_html } from './attributes-DxuHxdEJ.js';
import { p as push, d as pop, g as getContext } from './index2-BqrdGpFb.js';
import { _, w as writable } from './index-Bt2GOrJO.js';
import './exports-DFDLMVzA.js';

var t=Object.defineProperty,__name=(e,r)=>t(e,"name",{value:r,configurable:true});function create_updated_store(){const{set:t,subscribe:e}=writable(false);return {subscribe:e,check:__name((async()=>false),"check")}}__name(create_updated_store,"create_updated_store");function get(t,e=JSON.parse){try{return e(sessionStorage[t])}catch{}}(_.toString().includes("$$")||/function \w+\(\) \{\}/.test(_.toString()))&&new URL("https://example.com"),__name(get,"get"),get("sveltekit:scroll"),get("sveltekit:snapshot");function context(){return getContext("__request__")}create_updated_store().check,__name(context,"context");const a={get error(){return context().page.error},get status(){return context().page.status}};function Error$1(t,r){push(),t.out+=`<h1>${escape_html(a.status)}</h1> <p>${escape_html(a.error?.message)}</p>`,pop();}__name(Error$1,"Error$1");

export { Error$1 as default };
//# sourceMappingURL=error.svelte-ZqBKB218.js.map
