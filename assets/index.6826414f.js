var de=Object.defineProperty,ce=Object.defineProperties;var ue=Object.getOwnPropertyDescriptors;var J=Object.getOwnPropertySymbols;var fe=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var K=(e,t,a)=>t in e?de(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))fe.call(t,a)&&K(e,a,t[a]);if(J)for(var a of J(t))he.call(t,a)&&K(e,a,t[a]);return e},V=(e,t)=>ce(e,ue(t));import{s as r,u as me,j as n,F as pe,a as o,r as f,H as g}from"./index.00c63a39.js";import{p as Q,u as U,R as ge}from"./Routes.30e6198a.js";import{S as ve}from"./SpyGlass.080312c7.js";const ye=Q({opt:"homepage",setOption:e=>ye.opt=e}),c=Q({st:!1,setTrue:()=>c.st=!0,setFalse:()=>c.st=!1,reverse:()=>c.st=!c.st}),xe=r.header`
  grid-area: header;
  line-height: 60px;
  height: 60px;
  text-align: center;
  color: ${e=>e.color||"#fff4a3"};
  background-color: ${e=>e.bg||"#000000"};
  letter-spacing: 5px;
  font-weight: bolder;
  text-transform: uppercase;
`,be=r.footer`
  grid-area: footer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  text-transform: uppercase;
  color: ${e=>e.color||"#fff4a3"};
  background-color: ${e=>e.bg||"#000000"};
`,we=r.aside`
 grid-area: aside;
 display: flex;
 flex-direction: column;
 align-items: center;
 color: ${e=>e.color};
 background-color: ${e=>e.bg};
`;function ke(e){const t=me(),{pathname:a}=t,i=e.options.filter(l=>l.path!==a);return n(pe,{children:n(_e,{children:n("div",{className:"nav",children:i.map((l,d)=>n("ul",{className:"nav__list",children:o("li",{className:"nav__item",children:[n("div",{className:"nav__icon",children:l.icon}),n("div",{className:"nav__link",children:l.link})]})},d))})})})}const _e=r.div`
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  .nav__list {
    margin: 1em 0;
  }
  .nav__item {
    display: flex;
  }
  .nav__icon {
    color: white;
    margin: 1.3em 1em 0 1em;
  }
  .nav__link {
    margin: 1em 1em 0 0;
    color: white;
  }
`;function Ce(e){const t=U(c),{st:a,setFalse:i}=t;return n(Se,{children:n("div",{className:a?"opened":"closed",onClick:i,children:n(ke,{options:e.options})})})}const Se=r.nav`
  .opened {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #00000099;
    transition: all 1s;
    transform: translateX(0);
    z-index: 10;
    width: 100%;
    @media (min-width: 600px) {
      width: 20%;
    }
  }
  .closed {
    display: none;
    transform: translateX(-40%);
  }
`,ze=({st:e,reverse:t})=>n(Ne,{children:o("button",{onClick:()=>t(),children:[n("div",{className:e?"opened":"closed"}),n("div",{className:e?"opened":"closed"}),n("div",{className:e?"opened":"closed"})]})});var je=ze;const Ne=r.div`
  button {
    position: absolute;
    right: 0.6em;
    top: 0;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
    width: 200px;
    height: 40px;
    background-color: transparent;
    cursor: pointer;
    z-index: 10;

    &:focus {
      outline: none;
    }
  }
  .opened {
    width: 1.5rem;
    height: 0.2rem;
    background: #00ffff;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    left: -15px;
    top: 10px;

    transform-origin: 0;

    :first-child {
      transform: rotate(45deg);
    }

    :nth-child(2) {
      opacity: 0;
      transform: translateX(20px);
    }

    :nth-child(3) {
      transform: rotate(-45deg);
    }
  }

  .closed {
    width: 1.5rem;
    height: 0.2rem;
    background: #fff4a3;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    left: -15px;
    top: 10px;

    transform-origin: 0;

    :first-child {
      transform: rotate(0);
    }

    :nth-child(2) {
      opacity: 1;
      transform: translateX(0);
    }

    :nth-child(3) {
      transform: rotate(0);
    }
  }
`;function Ee(e){return f.exports.createElement("svg",p({viewBox:"0 0 32 32",width:e.width||"1em",length:e.height||"auto"},e),f.exports.createElement("path",{fill:e.color,d:"M16 2c-.504 0-.996.184-1.375.563l-2.813 2.843c-.152.082-.28.2-.374.344l-8.876 8.875a1.947 1.947 0 000 2.75l12.063 12.063a1.955 1.955 0 002.75 0l12.063-12.063a1.947 1.947 0 000-2.75L17.374 2.562A1.923 1.923 0 0016 2zm0 2.031L27.969 16 16 27.969 4.031 16l8.282-8.281 1.75 1.75A1.98 1.98 0 0014 10c0 .738.402 1.371 1 1.719v8.562c-.598.348-1 .98-1 1.719a1.999 1.999 0 104 0c0-.738-.402-1.371-1-1.719v-7.843l3.063 3.062A1.999 1.999 0 0022 18c1.104 0 1.999-.895 1.999-2a1.999 1.999 0 00-2.5-1.938L17.937 10.5A1.999 1.999 0 0016 8a1.98 1.98 0 00-.53.063l-1.75-1.75z"}))}function qe(e){return f.exports.createElement("svg",p({viewBox:"0 0 32 32",width:e.width||"1em",length:e.height||"auto"},e),f.exports.createElement("path",{fill:e.color,d:"M16 6c-3.766 0-7.094.39-9.125.688-1.68.246-3.035 1.511-3.344 3.187C3.27 11.301 3 13.387 3 16s.27 4.7.531 6.125c.309 1.676 1.664 2.945 3.344 3.188 2.04.296 5.379.687 9.125.687 3.746 0 7.086-.39 9.125-.688 1.68-.242 3.035-1.511 3.344-3.187.261-1.43.531-3.52.531-6.125s-.266-4.695-.531-6.125c-.309-1.676-1.664-2.941-3.344-3.188C23.094 6.391 19.765 6 16 6zm0 2c3.633 0 6.879.371 8.844.656A1.966 1.966 0 0126.5 10.25c.242 1.32.5 3.277.5 5.75 0 2.469-.258 4.43-.5 5.75a1.957 1.957 0 01-1.656 1.594C22.87 23.629 19.609 24 16 24c-3.61 0-6.875-.371-8.844-.656A1.962 1.962 0 015.5 21.75C5.258 20.43 5 18.477 5 16c0-2.48.258-4.43.5-5.75a1.962 1.962 0 011.656-1.594C9.117 8.371 12.367 8 16 8zm-3 2.281V21.72l1.5-.844 7-4L23 16l-1.5-.875-7-4zm2 3.438L18.969 16 15 18.281z"}))}var ee={};function Ae(e){if(!e||typeof window=="undefined")return;const t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t),e}Object.defineProperty(ee,"__esModule",{value:!0});var s=f.exports;function Le(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var u=Le(s);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var v=function(){return v=Object.assign||function(t){for(var a,i=1,l=arguments.length;i<l;i++){a=arguments[i];for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&(t[d]=a[d])}return t},v.apply(this,arguments)};Ae(`.marquee-container {
  overflow-x: hidden !important;
  display: flex !important;
  flex-direction: row !important;
  position: relative;
  width: 100%;
}
.marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.overlay::before, .overlay::after {
  background: linear-gradient(to right, var(--gradient-color));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
}
.overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.overlay::before {
  left: 0;
  top: 0;
}

.marquee {
  flex: 0 0 auto;
  min-width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}`);var Re=function(e){var t,a,i,l,d=e.style,te=d===void 0?{}:d,C=e.className,ne=C===void 0?"":C,S=e.play,h=S===void 0?!0:S,z=e.pauseOnHover,j=z===void 0?!1:z,N=e.pauseOnClick,E=N===void 0?!1:N,q=e.direction,A=q===void 0?"left":q,L=e.speed,R=L===void 0?20:L,$=e.delay,M=$===void 0?0:$,O=e.loop,m=O===void 0?0:O,F=e.gradient,ae=F===void 0?!0:F,H=e.gradientColor,y=H===void 0?[255,255,255]:H,I=e.gradientWidth,x=I===void 0?200:I,re=e.onFinish,ie=e.onCycleComplete,W=e.children,B=s.useState(0),P=B[0],oe=B[1],T=s.useState(0),G=T[0],le=T[1],X=s.useState(!1),b=X[0],se=X[1],w=s.useRef(null),k=s.useRef(null);s.useEffect(function(){if(!!b){var _=function(){k.current&&w.current&&(oe(w.current.getBoundingClientRect().width),le(k.current.getBoundingClientRect().width))};return _(),window.addEventListener("resize",_),function(){window.removeEventListener("resize",_)}}},[b]),s.useEffect(function(){se(!0)},[]);var Y="rgba("+y[0]+", "+y[1]+", "+y[2],D=G<P?P/R:G/R;return u.default.createElement(s.Fragment,null,b?u.default.createElement("div",{ref:w,style:v(v({},te),(t={},t["--pause-on-hover"]=!h||j?"paused":"running",t["--pause-on-click"]=!h||j&&!E||E?"paused":"running",t)),className:ne+" marquee-container"},ae&&u.default.createElement("div",{style:(a={},a["--gradient-color"]=Y+", 1), "+Y+", 0)",a["--gradient-width"]=typeof x=="number"?x+"px":x,a),className:"overlay"}),u.default.createElement("div",{ref:k,style:(i={},i["--play"]=h?"running":"paused",i["--direction"]=A==="left"?"normal":"reverse",i["--duration"]=D+"s",i["--delay"]=M+"s",i["--iteration-count"]=m?""+m:"infinite",i),className:"marquee",onAnimationIteration:ie,onAnimationEnd:re},W),u.default.createElement("div",{style:(l={},l["--play"]=h?"running":"paused",l["--direction"]=A==="left"?"normal":"reverse",l["--duration"]=D+"s",l["--delay"]=M+"s",l["--iteration-count"]=m?""+m:"infinite",l),className:"marquee","aria-hidden":"true"},W)):null)},$e=ee.default=Re;const Me=`Hello my name is Giovani, i began learning c++ in 2017 and it was my
first experience with Arduino boards. But it was a kind of
hobby until year 2019 that i began studying web programming with a
better purpose in mind. So that Node js was my pick, i have been
studying back-end frameworks like Express, and related libraries to
afford security and functionality, besides very useful concepts to
reuse logic such as middlewares and i have had experience working with
ORM or ODM to abstract databases such as Sequelize or Mongoose. I have
designed and abstracted databases for a System that will afford PKI
services in Cuba. `,Oe=`React is open-sourced by Facebook just a shy a few years ago, it\u2019s
already become the number one choice for JavaScript devs around the
globe. And i have picked to work with this wonderful technology that
brings so many advantages. However Technology changes, and it changes
quickly. I am open-minded to new technologies in order to learn them
and then also take advantage of them. I currently use react libraries
such as react-hook-form, react-query, valtio, zustand,
styled-components and the popular react-router-dom.`,Fe=`Tell me and I will forget, show me and I may
 remenber, involve me and I will understand`;function He(e){const{text:t}=e;return n(Ie,V(p({},e),{children:n("p",{children:t})}))}const Ie=r.div`
  width: 100%;
  color: ${e=>e.color||"#c40550"};
  font-weight: bolder;
  font-size: ${e=>e.size||"16px"};
  text-transform: uppercase;
  text-align: ${e=>e.align||"center"};
  padding: ${e=>e.p};
  margin: ${e=>e.m};

  p {
    overflow: hidden;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: 0.15em; /* Adjust as needed */
    animation: typing 2s steps(40, end);
    font-family: ${e=>e.fontfam};
    text-shadow: ${e=>e.shadow?"10px 1px 10px #000000":""};
  }

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;function et(){const e=U(c),{st:t,reverse:a}=e;return o(We,{children:[o(xe,{bg:"#2c3343",children:["gfouz portfolio",n(je,{st:t,reverse:a})]}),o(Be,{children:[o(Pe,{children:[n(Te,{}),n(g,{size:"1.3em",center:!0,color:"#451a23",bolder:!0,spacing:"5px",fontfam:"signika",children:n(He,{color:"#451a23",text:"Fullstack developer"})}),n(Je,{children:o("p",{children:['"',Fe,'"']})}),n(Ke,{})]}),n(Ge,{children:n(ve,{fontSize:"40px",color:"#451a23"})}),n(g,{center:!0,bolder:!0,upper:!0,m:"0 0 2em 0",children:"Technologies"}),n($e,{children:n(g,{bolder:!0,color:"#451a23",spacing:"6px",upper:!0,fontfam:"signika",children:"ReactJS styled-components valtio react-query react-hook-form axios eslint prettier typescript ExpressJS"})})]}),o(we,{bg:"#2c3343",children:[o(Z,{children:[n(g,{upper:!0,children:"Overview"}),o("p",{children:[" ",Me," "]})]}),o(Xe,{children:[o(Ye,{children:["YouTube Channel",n(qe,{fontSize:"30px",color:"#c40550"})]}),o(De,{children:["Github Projects",n(Ee,{fontSize:"30px",color:"#222222"})]})]}),n(Z,{children:o("p",{children:[" ",Oe," "]})})]}),n(Ce,{options:ge}),o(be,{bg:"#2c3343",children:["Portfolio \xA9 ",new Date().getFullYear()]})]})}const We=r.div`
  min-height: 100vh;
  background-color: #c2c5aa;
  display: grid;
  grid-template-areas:
    'header '
    'main'
    'aside'
    'footer';
  grid-template-rows: 60px 1fr 1fr 60px;
  grid-template-columns: 1fr;

  @media (min-width: 700px) {
    & {
      grid-template-columns: 1fr;
      width: 100%;
      grid-template-areas:
        'header  header  header'
        'main    main    aside'
        'footer  footer  footer';
      grid-template-rows: 60px 1fr 60px;
      grid-template-columns: 1fr;
    }
  }
  @font-face {
    font-family: 'signika';
    src: local('signika'), url('./fonts/signika.ttf') format('truetype');
    font-weight: bolder;
    font-display: block;
  }
`,Be=r.main`
  grid-area: main;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Pe=r.div`
 
`,Te=r.img.attrs({src:"./images/homepage.jpg",alt:"knightman"})`
  margin: 0 auto;
  max-width: 100%;
  height: auto;
`,Z=r.div`
  text-align: left;
  color: #451a23;
  color: #c2c5aa;
  border: none;
  border-radius: 15px;
  box-shadow: 1px 1px 35px #2c3343;
  max-width: 400px;
  padding: 1em;
  min-width: 320px;
  font-weight: bolder;
  font-family: signika;
  background-color: #2c3343;
`,Ge=r.div`
  display: flex;
  justify-content: center;
  padding: 3em 0;
`,Xe=r.div`
  width: 100%;
  padding: 0.5em;
  display: flex;
  justify-content: center;
  font-family: signika;
  background-color: #ffffff;
`,Ye=r.a.attrs({href:"https://youtube.com/@giovanifouz5033"})`
 margin: 0 1em;
 color: #c40550;
 font-weight: bolder;
`,De=r.a.attrs({href:"https://github.com/gfouz"})`
 margin: 0 1em;
 font-weight: bolder;
`,Je=r.div`
 font-weight: bolder;
 font-family: signika;
`,Ke=r.div`
  width: 100%;
  height: 1px;
  background-color: #222222;
`;export{et as default};
