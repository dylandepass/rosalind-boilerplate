import{c as o}from"./scripts-00f39e75.js";import d from"./library-utils-7f4d8b3f.js";import"./preload-helper-41c905a7.js";import"./lib-franklin-934bff3c.js";async function f(e){const t=await fetch(e);return t.ok?(await t.json()).data||[]:[]}async function b(e,t){(await f(e[0].path)).forEach(a=>{const r=o("p",{class:"item-title"},a.value),s=o("li",{class:"placeholder"},r),c=o("button",{class:"copy"});c.addEventListener("click",n=>{n.target.classList.add("copied"),setTimeout(()=>{n.target.classList.remove("copied")},3e3);const l=`{{${a.key}}}`,p=new Blob([l],{type:"text/plain"});d(p)}),s.append(c),t.append(s)})}export{b as default};
//# sourceMappingURL=placeholders-f03d4760.js.map
