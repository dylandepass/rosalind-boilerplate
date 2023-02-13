import{t as i}from"./rosalind-light-374e77ca.js";const r={title:"Design System/Atoms/Spacing"},n={title:"Spacing",render:()=>Object.entries(i.semantic.spacing.around.component).map(([t,e])=>`<div class='space'>
        <div>${t} (${e})</div>
        <div><span style="width:${e}"/></div>
      </div>`).join(" ")},s={title:"Gaps",render:()=>Object.entries(i.semantic.spacing.gap.component).map(([t,e])=>`<div class='space'>
        <div>${t} (${e})</div>
        <div><span style="width:${e}"/></div>
      </div>`).join(" ")};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  title: 'Spacing',
  render: () => {
    const options = Object.entries(theme.semantic.spacing.around.component).map(([key, value]) => /* html */\`<div class='space'>
        <div>\${key} (\${value})</div>
        <div><span style="width:\${value}"/></div>
      </div>\`).join(' ');
    return options;
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  title: 'Gaps',
  render: () => {
    const options = Object.entries(theme.semantic.spacing.gap.component).map(([key, value]) => /* html */\`<div class='space'>
        <div>\${key} (\${value})</div>
        <div><span style="width:\${value}"/></div>
      </div>\`).join(' ');
    return options;
  }
}`,...s.parameters?.docs?.source}}};const p=["Spacing","Gaps"];export{s as Gaps,n as Spacing,p as __namedExportsOrder,r as default};
//# sourceMappingURL=spacing.stories-9ccaade6.js.map
