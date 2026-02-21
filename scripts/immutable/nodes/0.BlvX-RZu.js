import"../chunks/DsnmJJEf.js";import{N as B,w as O,bi as U,o as C,Q as K,aa as M,A as T,y as z,P as Q,M as W,p as F,d as b,e as X,f as E,g as f,a as y,s as x,r as h,t as N,b as R,u as H,c as w,al as Y,aK as G,bj as J}from"../chunks/DMucjYnI.js";import{s as Z}from"../chunks/CEo5zdez.js";import{i as V}from"../chunks/DjPDfx9E.js";import{a as _,e as A}from"../chunks/B4K5adKN.js";import{s as I,c as $}from"../chunks/CXJpA9QI.js";import{e as L}from"../chunks/lom2f_IR.js";import{a as ee,t as te}from"../chunks/BC4M4ZfT.js";import{s as P,S}from"../chunks/18qZlL5z.js";import{p as u}from"../chunks/BV3Y6Z9T.js";import{d as ae,s as j}from"../chunks/BPMTC5_A.js";import{e as oe}from"../chunks/DIr2FkkK.js";import{g as se,o as re}from"../chunks/CODHMdVD.js";import{r as D}from"../chunks/DbkiC8m2.js";function ne(s,d){let m=null,r=C;var t;if(C){m=Q;for(var e=W(document.head);e!==null&&(e.nodeType!==K||e.data!==s);)e=M(e);if(e===null)T(!1);else{var o=M(e);e.remove(),z(o)}}C||(t=document.head.appendChild(B()));try{O(()=>d(t),U)}finally{r&&(T(!0),z(m))}}const ie=!1,le=!0,ce=async()=>({now:Date.now()}),Ve=Object.freeze(Object.defineProperty({__proto__:null,load:ce,prerender:le,ssr:ie},Symbol.toStringTag,{value:"Module"})),de=(s,d=!0,m=!1)=>{let r=null;return()=>{r===null&&(typeof s=="string"?(r=document.createElement("template"),r.innerHTML=s.trim()):r=s);const t=r.content.cloneNode(!0),e={};if(m&&document.adoptNode(t),d){const o=t.querySelectorAll("[data-ref]");for(const c of o){const p=c.getAttribute("data-ref");if(p)if(p.endsWith("[]")){const l=p.slice(0,-2),n=Array.isArray(e[l])?e[l]:[];n.push(c),e[l]=n}else e[p]=c}}return{fragment:t,refs:e}}},me=`
  :host(:popover-open) {
    --bg-opacity: 80%;
    left: unset;
    top: unset;
    right: 0.8em;
    bottom: 0.8em;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 0.8em;
    padding: 0;
    border: none;
    background: none;
    overflow: visible;
  }

  :host([data-mode="dark"]) .container {
    --t-color: #fff;
    --a-color: hsl(215deg 28% 17% / var(--bg-opacity));
    --bg: radial-gradient(circle at 10% 35%, var(--a-color), hsl(215deg 28% 17% / var(--bg-opacity)) 60%);
  }

  :host([data-mode="dark"]) .container[data-type="info"] {
    --a-color: hsl(208deg 99.05% 25.73% / var(--bg-opacity));
  }

  :host([data-mode="dark"]) .container[data-type="success"] {
    --a-color: hsl(104deg 26.71% 32.22% / var(--bg-opacity));
  }

  :host([data-mode="dark"]) .container[data-type="warning"] {
    --a-color: hsl(36deg 71.34% 20.3% / var(--bg-opacity));
  }

  :host([data-mode="dark"]) .container[data-type="error"] {
    --a-color: hsl(357deg 61.22% 22.73% / var(--bg-opacity));
  }

  :host([data-mode="light"]) .container {
    --t-color: var(--color-text);
    --a-color: hsl(0deg 0% 100% / var(--bg-opacity));
    --bg: radial-gradient(circle at 10% 25%, var(--a-color), hsl(0deg 0% 100% / var(--bg-opacity)) 60%);
  }

  :host([data-mode="light"]) .container[data-type="info"] {
    --a-color: hsl(217deg 100% 93.57% / var(--bg-opacity));
  }

  :host([data-mode="light"]) .container[data-type="success"] {
    --a-color: hsl(104deg 79.17% 88.56% / var(--bg-opacity));
  }

  :host([data-mode="light"]) .container[data-type="warning"] {
    --a-color: hsl(47deg 100% 83.73% / var(--bg-opacity));
  }

  :host([data-mode="light"]) .container[data-type="error"] {
    --a-color: hsl(0deg 100% 89.62% / var(--bg-opacity));
  }

  .container {
    max-width: 100%;
    padding-block: 0.8em;
    padding-inline: 1.4em;
    border-radius: 0.3em;
    box-shadow: 0 3px 3px -2px #0003, 0 3px 4px #00000024, 0 1px 8px #0000001f;
    display: flex;
    align-items: center;
    gap: 0.8em;
    background: var(--bg);
    backdrop-filter: blur(2px);
    color: var(--t-color);
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.6em;
    height: 2.6em;
    padding: 0.6em;
    margin-inline-start: -0.6em;
    background: color-mix(in oklab, var(--t-color) 5%, transparent);
    border-radius: 0.3em;
    box-sizing: border-box;
  }

  @keyframes loader {
    0% {
      rotate: 0deg;
    }
    100% {
      rotate: 360deg;
    }
  }

  .spinner {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    border: .1em solid;
    border-color: 
      color-mix(in oklab, currentColor 20%, transparent)
      color-mix(in oklab, currentColor 20%, transparent) currentColor;
    animation: loader 1.1s infinite linear;
    box-sizing: border-box;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.4em;
  }

  .message {
    font-weight: 400;
    font-size: 1em;
    white-space: break-spaces;
  }

  .details {
    font-size: 0.875em;
    white-space: break-spaces;
  }

  :is(.icon, .details):empty {
    display: none;
  }

  .close {
    position: absolute;
    top: 0;
    right: 0;
    width: 1.5em;
    height: 1.5em;
    background: none;
    border: none;
    padding: 0.45em;
    line-height: 0;
    cursor: pointer;
    color: var(--t-color);
  }

  .close svg {
    width: 100%;
    height: 100%;
  }
`,pe=de(`
  <div data-ref="toast" id="" class="container" role="alert" aria-live="assertive" aria-atomic="true">
    <button data-ref="close" type="button" class="close" aria-label="Close notification">
      <svg><use href="${P}#close-x"></use></svg>
    </button>
    <div data-ref="icon" class="icon"></div>
    <div class="wrapper">
      <div data-ref="message" class="message"></div>
      <div data-ref="details" class="details"></div>
    </div>
  </div>
`),fe=({onToastMessage:s,onToastClose:d})=>{class m extends HTMLElement{#e=new Map;#t=null;#a;#o;connectedCallback(){if(!this.shadowRoot?.childElementCount){const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=me,t.append(e)}this.#a=s(this.show),this.#o=d(this.close)}disconnectedCallback(){this.#a?.(),this.#o?.()}show=({key:t=String(Date.now()+Math.random()),type:e="toast",message:o,details:c="",icon:p="",loader:l=!1,duration:n=5e3})=>{if(!this.isConnected||!this.shadowRoot)return;const{fragment:i,refs:a}=pe();a.icon.innerHTML=l?'<span class="spinner"></span>':p,a.message.textContent=o,a.details.innerHTML=c,a.toast.setAttribute("data-type",e),a.close.addEventListener("click",()=>{this.close(t)}),this.#e.has(t)&&this.#e.get(t)?.remove(),this.shadowRoot.append(i),this.contains(document.activeElement)&&(this.#t=document.activeElement),this.#e.set(t,a.toast),this.showPopover(),this.contains(document.activeElement)||(this.#t=document.activeElement,this.focus()),n>0&&setTimeout(()=>{this.close(t)},n)};close=t=>{if(!this.isConnected||!t)return;const e=this.#e.get(t);e&&(e.remove(),this.#e.delete(t),this.#e.size<1&&(this.hidePopover(),this.#t&&(this.contains(document.activeElement)&&this.#t.focus(),this.#t=null)))}}return m},ue=fe({onToastMessage:s=>L.on(ee,s),onToastClose:s=>L.on(te,s)});customElements.define("toast-messages",ue);const ge=""+new URL("../assets/Montserrat-VariableFont_wght.DcaoeaBt.ttf",import.meta.url).href,he=""+new URL("../assets/Montserrat-Italic-VariableFont_wght.C-ARXqaC.ttf",import.meta.url).href,ve=106348324;var be=w('<button type="button" class="h-13.5 flex flex-col items-center justify-center gap-1 px-1 flex-1 rounded-md bg-accent-primary text-background"><!> <span class="text-tiny"> </span></button>'),ye=w('<a><!> <span class="text-tiny"> </span></a>'),xe=w('<nav class="bottom-navigation fixed z-50 bottom-0 left-0 right-0 bg-surface border-t border-border-light shadow-xl pt-1 px-1 rounded-t"><div class="flex justify-around gap-2"></div></nav>');function we(s,d){F(d,!0);const m=H(()=>[{to:"/activity",label:"Журнал",iconName:"calendar",isAction:!1,isActive:u.url.pathname.includes("/activity")},{to:"/clients",label:"Клиенты",iconName:"profile",isAction:!1,isActive:u.url.pathname.includes("/clients")},{to:(()=>{switch(!0){case u.url.pathname.includes("/clients"):return"/new/client";case u.url.pathname.includes("/packages"):return"/new/package";default:return"/new/session"}})(),label:"Добавить",iconName:"plus-squared",isAction:!0,isActive:!1},{to:"/dashboard",label:"Сводка",iconName:"status-up",isAction:!1,isActive:u.url.pathname.includes("/dashboard")},{to:"/settings",label:"Настройки",iconName:"settings",isAction:!1,isActive:u.url.pathname.includes("/settings")}]);var r=xe(),t=b(r);oe(t,21,()=>f(m),e=>e.to,(e,o)=>{var c=X(),p=E(c);{var l=i=>{var a=be();a.__click=()=>{se(D(f(o).to),{state:{returnTo:u.url.pathname}})};var g=b(a);S(g,{get name(){return f(o).iconName},class:"size-6.5"});var v=x(g,2),k=b(v,!0);h(v),h(a),N(()=>j(k,f(o).label)),y(i,a)},n=i=>{var a=ye(),g=b(a);S(g,{get name(){return f(o).iconName},class:"size-6.5"});var v=x(g,2),k=b(v,!0);h(v),h(a),N(q=>{_(a,"href",q),I(a,1,$(["h-13.5 flex flex-col items-center justify-center gap-1 px-1 flex-1 rounded-md",f(o).isActive&&"bg-accent-primary/15"])),j(k,f(o).label)},[()=>D(f(o).to)]),y(i,a)};V(p,i=>{f(o).isAction?i(l):i(n,!1)})}y(e,c)}),h(t),h(r),y(s,r),R()}ae(["click"]);var _e=w('<link rel="preload" as="image" type="image/svg+xml" crossorigin="anonymous"/> <link rel="preload" as="font" type="font/ttf" crossorigin="anonymous"/> <link rel="preload" as="font" type="font/ttf" crossorigin="anonymous"/>',1),ke=w('<div class="layout min-h-screen"><main class="container mx-auto px-3.5 pt-4 pb-14 max-w-4xl"><!></main></div> <!> <toast-messages></toast-messages>',3);function Ie(s,d){F(d,!0);const m=H(()=>!u.url.pathname.includes("/new")&&!u.url.pathname.includes("/edit"));Y(()=>{window.ym?.(ve,"hit",u.url.pathname)}),re(n=>{if(document.startViewTransition)return new Promise(i=>{document.startViewTransition(async()=>{i(),await n.complete})})});var r=ke();ne("12qhfyh",n=>{var i=_e(),a=E(i),g=x(a,2),v=x(g,2);N(()=>{_(a,"href",P),_(g,"href",ge),_(v,"href",he)}),G(()=>{J.title="Fitness Trainer Desk"}),y(n,i)});var t=E(r),e=b(t),o=b(e);Z(o,()=>d.children),h(e),h(t);var c=x(t,2);{var p=n=>{we(n,{})};V(c,n=>{f(m)&&n(p)})}var l=x(c,2);I(l,1,"safe-margin-bottom bottom-18 right-2 text-xs"),A(l,"popover","manual"),A(l,"tabIndex",-1),A(l,"data-mode","dark"),y(s,r),R()}export{Ie as component,Ve as universal};
