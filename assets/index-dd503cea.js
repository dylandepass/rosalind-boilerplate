var b={},p={};Object.defineProperty(p,"__esModule",{value:!0});p.Template=h;async function m(r,a,c,o,d,i){const{selector:l,index:f}=c,{sectionClasses:s,blockClasses:n}=a,e=document.createElement("div"),u=d.querySelectorAll(l).item(f)||d.querySelector(l);return o.appendChild(e),e.innerHTML=c.root?u.parentNode.innerHTML:u.outerHTML,await r(),s&&(Array.isArray(s)?s.forEach(t=>e.classList.add(t)):e.classList.add(s)),n&&e.querySelectorAll(".block").forEach(t=>{Array.isArray(n)?n.forEach(y=>t.classList.add(y)):t.classList.add(n)}),i&&i(c.autoBlock?o.querySelector(".block"):e.querySelector(l)),o.querySelectorAll('.section[data-section-status="initialized"]').forEach(t=>{t.setAttribute("data-section-status","loaded")}),o.querySelectorAll('.block[data-block-status="initialized"]').forEach(t=>{t.setAttribute("data-block-status","loaded")}),o}function h(r,a,c,o){const d=new DOMParser,i=document.createElement("main"),{parameters:l}=c,{path:f,host:s}=l;if(a.content&&a.updated)Promise.resolve().then(async()=>{const n=d.parseFromString(a.content,"text/html");try{return m(r,a,l,i,n.body,o)}catch(e){return console.error(e),e}});else{const n=`${s}${f}`;fetch(n).then(e=>{e.text().then(async u=>{const t=new RegExp("./media","g");u=u.replace(t,`${s}/media`);const y=d.parseFromString(u,"text/html");return m(r,a,l,i,y.body,o)})})}return i}(function(r){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"FranklinTemplate",{enumerable:!0,get:function(){return a.Template}}),r.default=void 0;var a=p,c={};r.default=c})(b);export{b as e};
//# sourceMappingURL=index-dd503cea.js.map
