import{_ as r}from"./preload-helper-41c905a7.js";import{a as d,w as m,l as u,d as f,b as p,c as h,e as s,s as c,g as l,f as _,h as w,_ as y,i as g}from"./lib-franklin-14c67339.js";const E=["hero"];window.hlx.RUM_GENERATION="project-1";function P(t){const e=t.querySelector(":scope > div:first-of-type"),o=e.querySelector("picture"),a=document.createElement("div"),n=g("hero",[[{elems:[...e.children]},o]]);n.classList.add("hero-2-cols"),a.append(n),e.remove(),t.prepend(a)}function C(t,e,o){const a=document.createElement(t);return o&&(o instanceof HTMLElement||o instanceof SVGElement||o instanceof DocumentFragment?a.append(o):Array.isArray(o)?a.append(...o):a.insertAdjacentHTML("beforeend",o)),e&&Object.entries(e).forEach(([n,i])=>{a.setAttribute(n,i)}),a}async function b(t,e){if(e)try{const o=new Promise(n=>{s(`${window.hlx.codeBasePath}/templates/${e}/${e}.css`,n)}),a=new Promise(n=>{(async()=>{try{const i=await y(Object.assign({"../templates/blog-post/blog-post.js":()=>r(()=>import("./blog-post-002df704.js"),["./blog-post-002df704.js","./lib-franklin-14c67339.js","./preload-helper-41c905a7.js"],import.meta.url),"../templates/hero-image/hero-image.js":()=>r(()=>import("./hero-image-e2ed353d.js"),["./hero-image-e2ed353d.js","./lib-franklin-14c67339.js","./preload-helper-41c905a7.js"],import.meta.url),"../templates/hero-image/hero-image.stories.js":()=>r(()=>import("./hero-image.stories-169e5195.js"),["./hero-image.stories-169e5195.js","./index-dd503cea.js","./hero-image-e2ed353d.js","./lib-franklin-14c67339.js","./preload-helper-41c905a7.js","./hero-image.stories-c5551795.css"],import.meta.url)}),`../templates/${e}/${e}.js`);i.default&&await i.default(t)}catch(i){console.log(`failed to load module for ${e}`,i)}n()})()});await Promise.all([o,a])}catch(o){console.log(`failed to load block ${e}`,o)}}async function S(t){const e=l("template");e&&e!=="home"&&await b(t,e)}function T(t){try{const e=l("template");if(!e)return;e==="home"&&P(t)}catch(e){console.error("Auto Blocking failed",e)}}function L(t){t.querySelectorAll("a").forEach(e=>{if(e.title=e.title||e.textContent,e.href!==e.textContent){const o=e.parentElement,a=e.parentElement.parentElement;e.querySelector("img")||(o.childNodes.length===1&&(o.tagName==="P"||o.tagName==="DIV")&&(e.className="button primary",o.classList.add("button-container")),o.childNodes.length===1&&o.tagName==="STRONG"&&a.childNodes.length===1&&a.tagName==="P"&&(e.className="button primary",a.classList.add("button-container")),o.childNodes.length===1&&o.tagName==="EM"&&a.childNodes.length===1&&a.tagName==="P"&&(e.className="button secondary",a.classList.add("button-container")),e.textContent===""&&e.classList.add("icon-only"))}})}function O(t){L(t),T(t),_(t),w(t)}function v(){const t=document.getElementById("theme"),e=localStorage.getItem("theme");e&&t&&t.setAttribute("href",`${window.hlx.codeBasePath}/styles/themes/${e}.css`)}function D(){return window.innerWidth<900}function B(){return window.location.pathname.includes("storybook")||window.__STORYBOOK_PREVIEW__}async function R(t){document.documentElement.lang="en",d(),v();const e=t.querySelector("main");await S(e),e&&(O(e),await m(E))}function A(t){const e=document.createElement("link");e.rel="icon",e.type="image/svg+xml",e.href=t;const o=document.querySelector('head link[rel="icon"]');o?o.parentElement.replaceChild(e,o):document.getElementsByTagName("head")[0].appendChild(e)}async function I(t){const e=t.querySelector("main");window.__STORYBOOK_PREVIEW__||await u(e),f(e);const{hash:o}=window.location,a=o?e.querySelector(o):!1;o&&a&&a.scrollIntoView(),B()||(p(t.querySelector("header")),h(t.querySelector("footer"))),s(`${window.hlx.codeBasePath}/styles/lazy-styles.css`),A(`${window.hlx.codeBasePath}/styles/favicon.svg`),c("lazy"),c.observe(e.querySelectorAll("div[data-block-name]")),c.observe(e.querySelectorAll("picture > img"))}function N(){window.setTimeout(()=>r(()=>import("./delayed-13d678ef.js"),["./delayed-13d678ef.js","./lib-franklin-14c67339.js","./preload-helper-41c905a7.js"],import.meta.url),3e3),window.hlx.performance||window.setTimeout(()=>r(()=>import("./delayed-13d678ef.js"),["./delayed-13d678ef.js","./lib-franklin-14c67339.js","./preload-helper-41c905a7.js"],import.meta.url),4e3)}async function k(){await R(document),await I(document),N()}if(!window.__STORYBOOK_PREVIEW__)k();else{const{href:t,search:e}=window.parent.location;window.hlx.codeBasePath=t.replace(e,"")}const x=new URLSearchParams(window.location.search);x.get("performance")&&(window.hlx.performance=!0,r(()=>import("./performance-b630883d.js"),[],import.meta.url).then(t=>{t.default&&t.default()}));export{C as c,D as i,k as l};
//# sourceMappingURL=scripts-9fb39b32.js.map
