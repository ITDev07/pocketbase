import{S as E,i as G,s as I,F as K,c as A,m as B,t as H,a as N,d as T,C as M,q as J,e as c,w as q,b as k,f as u,r as L,g as b,h as _,u as h,v as O,j as Q,l as U,o as w,A as V,p as W,B as X,D as Y,x as Z,z as S}from"./index.307b4919.js";function y(f){let e,o,s;return{c(){e=q("for "),o=c("strong"),s=q(f[3]),u(o,"class","txt-nowrap")},m(l,t){b(l,e,t),b(l,o,t),_(o,s)},p(l,t){t&8&&Z(s,l[3])},d(l){l&&w(e),l&&w(o)}}}function x(f){let e,o,s,l,t,r,p,d;return{c(){e=c("label"),o=q("New password"),l=k(),t=c("input"),u(e,"for",s=f[8]),u(t,"type","password"),u(t,"id",r=f[8]),t.required=!0,t.autofocus=!0},m(n,i){b(n,e,i),_(e,o),b(n,l,i),b(n,t,i),S(t,f[0]),t.focus(),p||(d=h(t,"input",f[6]),p=!0)},p(n,i){i&256&&s!==(s=n[8])&&u(e,"for",s),i&256&&r!==(r=n[8])&&u(t,"id",r),i&1&&t.value!==n[0]&&S(t,n[0])},d(n){n&&w(e),n&&w(l),n&&w(t),p=!1,d()}}}function ee(f){let e,o,s,l,t,r,p,d;return{c(){e=c("label"),o=q("New password confirm"),l=k(),t=c("input"),u(e,"for",s=f[8]),u(t,"type","password"),u(t,"id",r=f[8]),t.required=!0},m(n,i){b(n,e,i),_(e,o),b(n,l,i),b(n,t,i),S(t,f[1]),p||(d=h(t,"input",f[7]),p=!0)},p(n,i){i&256&&s!==(s=n[8])&&u(e,"for",s),i&256&&r!==(r=n[8])&&u(t,"id",r),i&2&&t.value!==n[1]&&S(t,n[1])},d(n){n&&w(e),n&&w(l),n&&w(t),p=!1,d()}}}function te(f){let e,o,s,l,t,r,p,d,n,i,g,R,C,v,P,F,j,m=f[3]&&y(f);return r=new J({props:{class:"form-field required",name:"password",$$slots:{default:[x,({uniqueId:a})=>({8:a}),({uniqueId:a})=>a?256:0]},$$scope:{ctx:f}}}),d=new J({props:{class:"form-field required",name:"passwordConfirm",$$slots:{default:[ee,({uniqueId:a})=>({8:a}),({uniqueId:a})=>a?256:0]},$$scope:{ctx:f}}}),{c(){e=c("form"),o=c("div"),s=c("h4"),l=q(`Reset your admin password
                `),m&&m.c(),t=k(),A(r.$$.fragment),p=k(),A(d.$$.fragment),n=k(),i=c("button"),g=c("span"),g.textContent="Set new password",R=k(),C=c("div"),v=c("a"),v.textContent="Back to login",u(s,"class","m-b-xs"),u(o,"class","content txt-center m-b-sm"),u(g,"class","txt"),u(i,"type","submit"),u(i,"class","btn btn-lg btn-block"),i.disabled=f[2],L(i,"btn-loading",f[2]),u(e,"class","m-b-base"),u(v,"href","/login"),u(v,"class","link-hint"),u(C,"class","content txt-center")},m(a,$){b(a,e,$),_(e,o),_(o,s),_(s,l),m&&m.m(s,null),_(e,t),B(r,e,null),_(e,p),B(d,e,null),_(e,n),_(e,i),_(i,g),b(a,R,$),b(a,C,$),_(C,v),P=!0,F||(j=[h(e,"submit",O(f[4])),Q(U.call(null,v))],F=!0)},p(a,$){a[3]?m?m.p(a,$):(m=y(a),m.c(),m.m(s,null)):m&&(m.d(1),m=null);const z={};$&769&&(z.$$scope={dirty:$,ctx:a}),r.$set(z);const D={};$&770&&(D.$$scope={dirty:$,ctx:a}),d.$set(D),(!P||$&4)&&(i.disabled=a[2]),$&4&&L(i,"btn-loading",a[2])},i(a){P||(H(r.$$.fragment,a),H(d.$$.fragment,a),P=!0)},o(a){N(r.$$.fragment,a),N(d.$$.fragment,a),P=!1},d(a){a&&w(e),m&&m.d(),T(r),T(d),a&&w(R),a&&w(C),F=!1,V(j)}}}function se(f){let e,o;return e=new K({props:{$$slots:{default:[te]},$$scope:{ctx:f}}}),{c(){A(e.$$.fragment)},m(s,l){B(e,s,l),o=!0},p(s,[l]){const t={};l&527&&(t.$$scope={dirty:l,ctx:s}),e.$set(t)},i(s){o||(H(e.$$.fragment,s),o=!0)},o(s){N(e.$$.fragment,s),o=!1},d(s){T(e,s)}}}function le(f,e,o){let s,{params:l}=e,t="",r="",p=!1;async function d(){if(!p){o(2,p=!0);try{await W.admins.confirmPasswordReset(l==null?void 0:l.token,t,r),X("Successfully set a new admin password."),Y("/")}catch(g){W.errorResponseHandler(g)}o(2,p=!1)}}function n(){t=this.value,o(0,t)}function i(){r=this.value,o(1,r)}return f.$$set=g=>{"params"in g&&o(5,l=g.params)},f.$$.update=()=>{f.$$.dirty&32&&o(3,s=M.getJWTPayload(l==null?void 0:l.token).email||"")},[t,r,p,s,d,l,n,i]}class ae extends E{constructor(e){super(),G(this,e,le,se,I,{params:5})}}export{ae as default};
