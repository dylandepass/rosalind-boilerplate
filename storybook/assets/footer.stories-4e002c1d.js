import{b as a,d as n,l as i}from"./lib-franklin-b2faad2e.js";import"./preload-helper-41c905a7.js";const m={title:"Blocks/Footer",parameters:{layout:"fullscreen"}},o={render:(s,e)=>{const t=document.createElement("footer"),r=a("footer","");return t.append(r),n(r),i(r,e.parameters.host),t}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: (args, context) => {
    const footer = document.createElement('footer');
    const footerBlock = buildBlock('footer', '');
    footer.append(footerBlock);
    decorateBlock(footerBlock);
    loadBlock(footerBlock, context.parameters.host);
    return footer;
  }
}`,...o.parameters?.docs?.source}}};const c=["Footer"];export{o as Footer,c as __namedExportsOrder,m as default};
//# sourceMappingURL=footer.stories-4e002c1d.js.map
