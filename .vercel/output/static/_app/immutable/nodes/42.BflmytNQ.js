import"../chunks/disclose-version.Bg9kRutz.js";import{a,t as x,s as d,d as E,f as z,b as A}from"../chunks/template.CYbmh4h0.js";import{p as N,a as Q,t as l,X as tt,c as D,g as K,s as lt,b as ut,d as pt,u as Z}from"../chunks/runtime.DjgYXsSk.js";import{a as P,d as ct}from"../chunks/render.B8uQQetn.js";import{e as mt}from"../chunks/each.CVL6L7bf.js";import{a as B}from"../chunks/actions.DlEPaH3k.js";import{a as L,r as et,d as rt,s as at,e as dt}from"../chunks/attributes.BNVf-LtF.js";import{s as U,m as G,a as I}from"../chunks/store.9ZQN09u1.js";import{a3 as ft,ae as _t,a5 as ot,a6 as st,a7 as vt,af as bt,c as xt}from"../chunks/messages.CGgarydI.js";import{D as yt}from"../chunks/dashboard-sub-section.BTSYr39U.js";import{e as Y,I as $t}from"../chunks/client.dtU0Iyvs.js";import{a as H}from"../chunks/input.Bzsu9ohX.js";import{D as nt,T as it,P as gt}from"../chunks/translations-tabs.D3nqOhD0.js";import{F as J}from"../chunks/field.r2CZdIq6.js";import{r as M}from"../chunks/ripple.DEHVMGsW.js";import{p as ht}from"../chunks/proxy.Cn1c9iIJ.js";import{b as Ft}from"../chunks/this.C2iGNKnu.js";import{p as jt}from"../chunks/stores.yKo6NxPo.js";import{W as Tt}from"../chunks/wrench.BLQihNIX.js";import{X as Pt}from"../chunks/x.DtZFMutn.js";var It=x("<button> <!></button>"),Dt=x("<input>"),wt=x("<textarea></textarea>"),St=x("<!> <!>",1);function kt(w,p){N(p,!0);const y=U(),c=()=>I(O,"$constraints",y),f=()=>I(S,"$form",y),C=Y(p.data,{dataType:"json",invalidateAll:!0,resetForm:!0}),{form:S,constraints:O}=C;nt(w,{form:C,action:"?/create",root:(u,o=tt)=>{var $=It();let _;var g=A($);l(()=>P(g,`${ft()??""} `));var v=d(g);gt(v,{}),l(()=>_=L($,_,{class:"button button-dashed rounded-full",type:"button",...o()},!0,"")),B($,e=>M(e)),a(u,$)},title:u=>{var o=E(u);l(()=>P(o,_t())),a(u,o)},children:(u,o)=>{it(u,{tab:(_,g)=>{let v=()=>g==null?void 0:g().lang;var e=St(),b=z(e);J(b,{label:t=>{var r=E(t);l(()=>P(r,ot())),a(t,r)},children:(t,r)=>{var s=Dt();et(s);let n;l(()=>{var m,F;return n=L(s,n,{type:"text",class:"input",...(F=(m=c().translations)==null?void 0:m[v()])==null?void 0:F.description},!0,"")}),H(s,()=>f().translations[v()].title,m=>G(S,D(f).translations[v()].title=m,D(f))),a(t,s)},$$slots:{default:!0}});var k=d(d(b,!0));J(k,{label:t=>{var r=E(t);l(()=>P(r,st())),a(t,r)},children:(t,r)=>{var s=wt();rt(s);let n;l(()=>{var m,F;return n=L(s,n,{class:"input",rows:"5",...(F=(m=c().translations)==null?void 0:m[v()])==null?void 0:F.description},!0,"")}),H(s,()=>f().translations[v()].description,m=>G(S,D(f).translations[v()].description=m,D(f))),a(t,s)},$$slots:{default:!0}}),a(_,e)}})},$$slots:{default:!0}}),Q()}var qt=(w,p)=>{confirm(p.type_delete_confirm())||w.preventDefault()},At=x('<div class="button nest pr-input-nest rounded-full"><button></button> <!> <button class="button button-ghost aspect-square rounded-full" data-danger="" name="delete" formaction="?/delete"><!></button></div>'),Ct=x("<input>"),Wt=x("<textarea></textarea>"),Xt=x("<!> <!>",1);function Et(w,p){N(p,!0);const y=U(),c=()=>I(o,"$form",y),f=()=>I(jt,"$page",y),C=()=>I(W,"$parentFormId",y),S=()=>I(X,"$parentSubmitter",y),O=()=>I($,"$constraints",y),{formId:W,submitter:X}=p.projectTypesForm,u=Y(p.projectTypeFormData,{dataType:"json",resetForm:!1}),{form:o,constraints:$}=u;let _=ut(void 0);nt(w,{form:u,action:"?/update",root:(e,b=tt)=>{var k=At(),h=A(k);let t;var r=d(d(h,!0));Tt(r,{});var s=d(r,!0),n=d(s);Ft(n,i=>lt(_,ht(i)),()=>K(_)),n.__click=[qt,vt];var m=A(n),F=pt(()=>S()===K(_));$t(m,{icon:Pt,get busy(){return K(F)}}),l(()=>{t=L(h,t,{class:"fill",type:"button",...b()},!0,""),P(s,` ${c().translations[f().data.lang].title??""} `),at(n,"form",C()),dt(n,c().id)}),B(k,i=>M(i)),B(n,i=>M(i)),a(e,k)},title:e=>{var b=E(e);l(()=>P(b,bt())),a(e,b)},children:(e,b)=>{it(e,{tab:(h,t)=>{let r=()=>t==null?void 0:t().lang;var s=Xt(),n=z(s);J(n,{label:i=>{var q=E(i);l(()=>P(q,ot())),a(i,q)},children:(i,q)=>{var j=Ct();et(j);let R;l(()=>{var T,V;return R=L(j,R,{type:"text",class:"input",...(V=(T=O().translations)==null?void 0:T[r()])==null?void 0:V.description},!0,"")}),H(j,()=>c().translations[r()].title,T=>G(o,D(c).translations[r()].title=T,D(c))),a(i,j)},$$slots:{default:!0}});var m=d(d(n,!0));J(m,{label:i=>{var q=E(i);l(()=>P(q,st())),a(i,q)},children:(i,q)=>{var j=Wt();rt(j);let R;l(()=>{var T,V;return R=L(j,R,{class:"input",rows:"5",...(V=(T=O().translations)==null?void 0:T[r()])==null?void 0:V.description},!0,"")}),H(j,()=>c().translations[r()].description,T=>G(o,D(c).translations[r()].description=T,D(c))),a(i,j)},$$slots:{default:!0}}),a(h,s)}})},$$slots:{default:!0}}),Q()}ct(["click"]);var Lt=x(`<h2> </h2> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quidem doloribus nisi
			consequatur amet blanditiis sed alias. Eum, numquam magnam!</p>`,1),Ot=x("<li><!></li>"),Rt=x('<form class="sr-only" method="POST"></form> <ul class="gap-gap flex flex-row flex-wrap"><li><!></li> <!></ul>',1);function ie(w,p){N(p,!0);const y=U(),c=()=>I(C,"$formId",y),f=Y(p.data.projectTypesForm,{invalidateAll:!0}),{formId:C,enhance:S}=f;yt(w,{header:W=>{var X=Lt(),u=z(X),o=A(u);l(()=>P(o,xt())),a(W,X)},children:(W,X)=>{var u=Rt(),o=z(u),$=d(d(o,!0)),_=A($),g=A(_);kt(g,{get data(){return p.data.projectTypeCreateForm}});var v=d(d(_,!0));mt(v,71,()=>p.data.projectTypeForms,(e,b)=>Z(e).id,(e,b,k)=>{var h=Ot(),t=A(h);Et(t,{get projectTypeFormData(){return Z(b)},projectTypesForm:f}),a(e,h)}),l(()=>at(o,"id",c())),B(o,e=>S(e)),a(W,u)},$$slots:{default:!0}}),Q()}export{ie as component};
