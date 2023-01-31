import{i as a,j as n,k as i}from"./lib-franklin-bc9f93bf.js";import"./preload-helper-41c905a7.js";const d={title:"Blocks/Footer",parameters:{layout:"fullscreen"}},o={render:(s,e)=>{const t=document.createElement("footer"),r=a("footer","");return t.append(r),n(r),i(r,e.parameters.host),t}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: (args, context) => {
    const footer = document.createElement('footer');
    const footerBlock = buildBlock('footer', '');
    footer.append(footerBlock);
    decorateBlock(footerBlock);
    loadBlock(footerBlock, context.parameters.host);
    return footer;
  }
}`,...o.parameters?.docs?.source}}};const c=["Footer"];export{o as Footer,c as __namedExportsOrder,d as default};
//# sourceMappingURL=footer.stories-0965c7ba.js.map
