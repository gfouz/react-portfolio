var oe=Object.defineProperty;var q=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var N=(e,t,n)=>t in e?oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,M=(e,t)=>{for(var n in t||(t={}))se.call(t,n)&&N(e,n,t[n]);if(q)for(var n of q(t))ce.call(t,n)&&N(e,n,t[n]);return e};import{r as y,R as fe,j as O,L as x}from"./index.00c63a39.js";const _=Symbol(),le=Symbol(),F=Symbol();let ue=(e,t)=>new Proxy(e,t);const B=Object.getPrototypeOf,K=new WeakMap,I=e=>e&&(K.has(e)?K.get(e):B(e)===Object.prototype||B(e)===Array.prototype),X=e=>typeof e=="object"&&e!==null,Y=new WeakMap,J=e=>e[F]||e,Q=(e,t,n)=>{if(!I(e))return e;const c=J(e),f=(s=>Object.isFrozen(s)||Object.values(Object.getOwnPropertyDescriptors(s)).some(u=>!u.writable))(c);let o=n&&n.get(c);return o&&o[1].f===f||(o=((s,u)=>{const h={f:u};let r=!1;const g=(w,d)=>{if(!r){let p=h.a.get(s);p||(p=new Set,h.a.set(s,p)),d&&p.has(_)||p.add(w)}},b={get:(w,d)=>d===F?s:(g(d),Q(w[d],h.a,h.c)),has:(w,d)=>d===le?(r=!0,h.a.delete(s),!0):(g(d),d in w),getOwnPropertyDescriptor:(w,d)=>(g(d,!0),Object.getOwnPropertyDescriptor(w,d)),ownKeys:w=>(g(_),Reflect.ownKeys(w))};return u&&(b.set=b.deleteProperty=()=>!1),[b,h]})(c,f),o[1].p=ue(f?(s=>{let u=Y.get(s);if(!u){if(Array.isArray(s))u=Array.from(s);else{const h=Object.getOwnPropertyDescriptors(s);Object.values(h).forEach(r=>{r.configurable=!0}),u=Object.create(B(s),h)}Y.set(s,u)}return u})(c):c,o[0]),n&&n.set(c,o)),o[1].a=t,o[1].c=n,o[1].p},ie=(e,t)=>{const n=Reflect.ownKeys(e),c=Reflect.ownKeys(t);return n.length!==c.length||n.some((f,o)=>f!==c[o])},Z=(e,t,n,c)=>{if(Object.is(e,t))return!1;if(!X(e)||!X(t))return!0;const f=n.get(J(e));if(!f)return!0;if(c){const s=c.get(e);if(s&&s.n===t)return s.g;c.set(e,{n:t,g:!1})}let o=null;for(const s of f){const u=s===_?ie(e,t):Z(e[s],t[s],n,c);if(u!==!0&&u!==!1||(o=u),o)break}return o===null&&(o=!0),c&&c.set(e,{n:t,g:o}),o},ee=e=>I(e)&&e[F]||null,C=(e,t=!0)=>{K.set(e,t)};var te={exports:{}},ne={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P=y.exports;function ae(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var de=typeof Object.is=="function"?Object.is:ae,he=P.useState,pe=P.useEffect,ge=P.useLayoutEffect,we=P.useDebugValue;function ye(e,t){var n=t(),c=he({inst:{value:n,getSnapshot:t}}),f=c[0].inst,o=c[1];return ge(function(){f.value=n,f.getSnapshot=t,W(f)&&o({inst:f})},[e,n,t]),pe(function(){return W(f)&&o({inst:f}),e(function(){W(f)&&o({inst:f})})},[e]),we(n),n}function W(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!de(e,n)}catch{return!0}}function Se(e,t){return t()}var Ee=typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"?Se:ye;ne.useSyncExternalStore=P.useSyncExternalStore!==void 0?P.useSyncExternalStore:Ee;te.exports=ne;var be=te.exports;const k=e=>typeof e=="object"&&e!==null,E=Symbol(),z=new WeakSet,me=(e=Object.is,t=(r,g)=>new Proxy(r,g),n=r=>k(r)&&!z.has(r)&&(Array.isArray(r)||!(Symbol.iterator in r))&&!(r instanceof WeakMap)&&!(r instanceof WeakSet)&&!(r instanceof Error)&&!(r instanceof Number)&&!(r instanceof Date)&&!(r instanceof String)&&!(r instanceof RegExp)&&!(r instanceof ArrayBuffer),c=r=>{switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:throw r}},f=new WeakMap,o=(r,g,b,w=c)=>{const d=f.get(g);if((d==null?void 0:d[0])===b)return d[1];const p=Array.isArray(r)?[]:Object.create(Object.getPrototypeOf(r));return C(p,!0),f.set(g,[b,p]),Reflect.ownKeys(r).forEach(R=>{const S=Reflect.get(r,R,g);z.has(S)?(C(S,!1),p[R]=S):S instanceof Promise?Object.defineProperty(p,R,{get(){return w(S)}}):S!=null&&S[E]?p[R]=$(S,w):p[R]=S}),Object.freeze(p)},s=new WeakMap,u=[1],h=r=>{if(!k(r))throw new Error("object required");const g=s.get(r);if(g)return g;let b=u[0];const w=new Set,d=(a,l=++u[0])=>{b!==l&&(b=l,w.forEach(i=>i(a,l)))},p=new Map,R=a=>{let l=p.get(a);return l||(l=(i,m)=>{const v=[...i];v[1]=[a,...v[1]],d(v,m)},p.set(a,l)),l},S=a=>{const l=p.get(a);return p.delete(a),l},U=Array.isArray(r)?[]:Object.create(Object.getPrototypeOf(r)),V=t(U,{get(a,l,i){return l===E?[a,i,b,o,w]:Reflect.get(a,l,i)},deleteProperty(a,l){var i;const m=Reflect.get(a,l),v=(i=m==null?void 0:m[E])==null?void 0:i[4];v&&v.delete(S(l));const L=Reflect.deleteProperty(a,l);return L&&d(["delete",[l],m]),L},set(a,l,i,m){var v,L;const re=Reflect.has(a,l),D=Reflect.get(a,l,m);if(re&&e(D,i))return!0;const T=(v=D==null?void 0:D[E])==null?void 0:v[4];T&&T.delete(S(l)),k(i)&&(i=ee(i)||i);let j=i;return(L=Object.getOwnPropertyDescriptor(a,l))!=null&&L.set||(i instanceof Promise?i.then(A=>{i.status="fulfilled",i.value=A,d(["resolve",[l],A])}).catch(A=>{i.status="rejected",i.reason=A,d(["reject",[l],A])}):(!(i!=null&&i[E])&&n(i)&&(j=Oe(i)),j!=null&&j[E]&&j[E][4].add(R(l)))),Reflect.set(a,l,j,m),d(["set",[l],i,D]),!0}});return s.set(r,V),Reflect.ownKeys(r).forEach(a=>{const l=Object.getOwnPropertyDescriptor(r,a);l.get||l.set?Object.defineProperty(U,a,l):V[a]=r[a]}),V})=>[h,E,z,e,t,n,c,f,o,s,u],[ve]=me();function Oe(e={}){return ve(e)}function Re(e,t,n){({BASE_URL:"/react-portfolio/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&!(e!=null&&e[E])&&console.warn("Please use proxy object");let c;const f=[],o=e[E][4],s=u=>{if(f.push(u),n){t(f.splice(0));return}c||(c=Promise.resolve().then(()=>{c=void 0,o.has(s)&&t(f.splice(0))}))};return o.add(s),()=>o.delete(s)}function $(e,t){({BASE_URL:"/react-portfolio/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&!(e!=null&&e[E])&&console.warn("Please use proxy object");const[n,c,f,o]=e[E];return o(n,c,f,t)}const G=fe.experimental_use,{useSyncExternalStore:Pe}=be,Le=(e,t)=>{const n=[],c=new WeakSet,f=(o,s)=>{if(c.has(o))return;let u;typeof o=="object"&&o!==null&&(c.add(o),u=t.get(ee(o)||o)),u?u.forEach(h=>{"value"in(Object.getOwnPropertyDescriptor(o,h)||{})&&f(o[h],s?[...s,h]:[h])}):s&&n.push(s)};return f(e),n},je=(e,t)=>{const n=y.exports.useRef();y.exports.useEffect(()=>{n.current=Le(e,t)}),y.exports.useDebugValue(n.current)};function We(e,t){const n=t==null?void 0:t.sync,c=y.exports.useRef(),f=y.exports.useRef();let o=!0;const s=Pe(y.exports.useCallback(r=>{const g=Re(e,r,n);return r(),g},[e,n]),()=>{const r=$(e,G);try{if(!o&&c.current&&f.current&&!Z(c.current,r,f.current,new WeakMap))return c.current}catch{}return r},()=>$(e,G));o=!1;const u=new WeakMap;y.exports.useEffect(()=>{c.current=s,f.current=u}),({BASE_URL:"/react-portfolio/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&je(s,u);const h=y.exports.useMemo(()=>new WeakMap,[]);return Q(s,u,h)}function Ae(e){return y.exports.createElement("svg",M({viewBox:"0 0 576 512",width:e.width||"1em",length:e.height||"auto"},e),y.exports.createElement("path",{fill:e.color||"#666666",fillRule:"evenodd",d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"}))}function De(e){return y.exports.createElement("svg",M({viewBox:"0 0 512 512",width:e.width||"1em",length:e.height||"auto"},e),y.exports.createElement("path",{fill:e.color||"#666666",fillRule:"evenodd",d:"M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22 18.2 6.8 31.3 24.4 31.3 45 0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7 54.4-11.4 98.3-55.4 109.7-109.7 17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9 129.4 7 233.4 112 240.9 241.5.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9 76.8 6.3 138 68.2 144.9 145.2.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3-8.4-110.1-96.5-198.2-206.6-206.7z"}))}function H(e){return y.exports.createElement("svg",M({viewBox:"0 0 20 20",width:e.width||"1em",length:e.height||"auto"},e),y.exports.createElement("path",{fill:e.color,d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}))}const ke=[{path:"/",icon:O(Ae,{color:"#ffffff"}),link:O(x,{to:"/",children:"Homepage"})},{path:"/about",icon:O(H,{color:"#ffffff"}),link:O(x,{to:"/about",children:"About"})},{path:"/work",icon:O(H,{color:"#ffffff"}),link:O(x,{to:"/work",children:"Work"})},{path:"/blog",icon:O(De,{color:"#ffffff"}),link:O("a",{href:"https://gfouz.github.io/next-blog-2023",children:"Blog"})}];export{ke as R,Oe as p,We as u};
