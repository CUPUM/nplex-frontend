import{i as S,e as y,j as D,u as L,l as A,n as C,g as N}from"./template.CYbmh4h0.js";import{W,C as j,k as q,m as B,ac as k,Z as H,af as E,ag as I,ah as M,ai as P,y as V,p as Y,a as $,aj as Z,e as z}from"./runtime.DjgYXsSk.js";function F(e,a,n,s){function t(r){if(s.capture||h.call(a,r),!r.cancelBubble)return n.call(this,r)}return e.startsWith("pointer")||e==="wheel"?j(()=>{a.addEventListener(e,t,s)}):a.addEventListener(e,t,s),t}function Q(e,a,n,s,t){var r={capture:s,passive:t},c=F(e,a,n,r);(a===document.body||a===window||a===document)&&W(()=>{a.removeEventListener(e,c,r)})}function U(e){for(var a=0;a<e.length;a++)R.add(e[a]);for(var n of g)n(e)}function h(e){var b;var a=this,n=a.ownerDocument,s=e.type,t=((b=e.composedPath)==null?void 0:b.call(e))||[],r=t[0]||e.target,c=0,d=e.__root;if(d){var u=t.indexOf(d);if(u!==-1&&(a===document||a===window)){e.__root=a;return}var f=t.indexOf(a);if(f===-1)return;u<=f&&(c=u)}if(r=t[c]||e.target,r!==a){q(e,"currentTarget",{configurable:!0,get(){return r||n}});try{for(var _,o=[];r!==null;){var l=r.parentNode||r.host||null;try{var i=r["__"+s];if(i!==void 0&&!r.disabled)if(B(i)){var[p,...O]=i;p.apply(r,[e,...O])}else i.call(r,e)}catch(v){_?o.push(v):_=v}if(e.cancelBubble||l===a||l===null)break;r=l}if(_){for(let v of o)queueMicrotask(()=>{throw v});throw _}}finally{e.__root=a,r=a}}}const R=new Set,g=new Set;let m=!0;function X(e){m=e}function x(e,a){(e.__t??(e.__t=e.nodeValue))!==a&&(e.nodeValue=e.__t=a)}function ee(e,a,n,s){a===void 0||a(e,n)}function G(e,a){const n=a.anchor??a.target.appendChild(S());return k(()=>T(e,{...a,anchor:n}),!1)}function ae(e,a){const n=a.target,s=N;try{return k(()=>{y(!0);for(var t=n.firstChild;t&&(t.nodeType!==8||t.data!==H);)t=t.nextSibling;if(!t)throw E;const r=D(t),c=T(e,{...a,anchor:r});return y(!1),c},!1)}catch(t){if(t===E)return a.recover===!1&&I(),L(),A(n),y(!1),G(e,a);throw t}finally{y(!!s),C(s)}}function T(e,{target:a,anchor:n,props:s={},events:t,context:r,intro:c=!1}){L();const d=new Set,u=o=>{for(let l=0;l<o.length;l++){const i=o[l],p=Z.includes(i);d.has(i)||(d.add(i),a.addEventListener(i,h,{passive:p}),document.addEventListener(i,h,{passive:p}))}};u(M(R)),g.add(u);let f;const _=P(()=>(V(()=>{if(r){Y({});var o=z;o.c=r}t&&(s.$$events=t),m=c,f=e(n,s)||{},m=!0,r&&$()}),()=>{for(const o of d)a.removeEventListener(o,h),document.removeEventListener(o,h);g.delete(u),w.delete(f)}));return w.set(f,_),f}let w=new WeakMap;function re(e){const a=w.get(e);a==null||a()}export{x as a,X as b,F as c,U as d,Q as e,m as f,ae as h,G as m,ee as s,re as u};
