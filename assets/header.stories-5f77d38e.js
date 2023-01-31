import{i as n,j as t,k as i}from"./lib-franklin-a133619f.js";import"./preload-helper-41c905a7.js";const v={title:"Blocks/Header",parameters:{layout:"fullscreen"}},e={render:(l,o)=>{const r=document.createElement("header"),a=n("header","");return r.append(a),t(a),i(a,o.parameters.host),r}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: (args, context) => {
    const header = document.createElement('header');
    const headerBlock = buildBlock('header', '');
    header.append(headerBlock);
    decorateBlock(headerBlock);
    loadBlock(headerBlock, context.parameters.host);
    return header;
  }
}`,...e.parameters?.docs?.source}}};const h=["Header"];export{e as Header,h as __namedExportsOrder,v as default};
//# sourceMappingURL=header.stories-5f77d38e.js.map
