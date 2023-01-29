import{e as r}from"./index-89406941.js";import{a}from"./lib-franklin-b2faad2e.js";import{l as n}from"./scripts-13826e21.js";import"./preload-helper-41c905a7.js";function i(e){a(e),e.querySelector(":scope > div").classList.add("button-stories"),e.querySelectorAll(".button-container").forEach(s=>{const t=s.querySelector("a");t.href="javascript:void(0)",t.textContent.includes("Disabled")&&t.classList.add("disabled"),t.textContent.includes("Quiet")&&(t.classList.add("quiet"),t.classList.remove("primary"))})}const p={title:"Design System/Atoms/Buttons",parameters:{docs:{description:{component:"A block to display buttons"}}}},o={parameters:{path:"/storybook/buttons.plain.html",selector:"div",index:0},render:(e,s)=>r.FranklinTemplate(n,e,s,i)};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    path: '/storybook/buttons.plain.html',
    selector: 'div',
    index: 0
  },
  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate)
}`,...o.parameters?.docs?.source}}};const u=["Buttons"];export{o as Buttons,u as __namedExportsOrder,p as default};
//# sourceMappingURL=buttons.stories-bbe71308.js.map
