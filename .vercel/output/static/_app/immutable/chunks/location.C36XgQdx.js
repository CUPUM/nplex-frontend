import{a as i,l as e}from"./runtime.C5pWVHTL.js";function g(a){const[n,t,...r]=a.split("/");return{lang:i.includes(t)?t:void 0,tail:`/${r.join("/")}`}}function l(a){const{lang:n,tail:t}=g(a);return n?t:a}function f(a,n=e()){return a.startsWith("/")?`/${n}${a}`:a}export{l as r,f as w};
