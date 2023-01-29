import{b as n,d as t,l as i}from"./lib-franklin-b2faad2e.js";import"./preload-helper-41c905a7.js";const v={title:"Blocks/Header",parameters:{layout:"fullscreen"}},a={render:(l,r)=>{console.log(r);const o=document.createElement("header"),e=n("header","");return o.append(e),t(e),i(e,r.parameters.host),console.log(e),o}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: (args, context) => {
    console.log(context);
    const header = document.createElement('header');
    const headerBlock = buildBlock('header', '');
    header.append(headerBlock);
    decorateBlock(headerBlock);
    loadBlock(headerBlock, context.parameters.host);
    console.log(headerBlock);
    return header;
  }
}`,...a.parameters?.docs?.source}}};const h=["Header"];export{a as Header,h as __namedExportsOrder,v as default};
//# sourceMappingURL=header.stories-3392a76e.js.map
