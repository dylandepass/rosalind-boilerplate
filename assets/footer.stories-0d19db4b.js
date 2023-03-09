import{w as i,a as s,e as a}from"./index-2056e04f.js";import{i as f,j as d,k as l}from"./lib-franklin-38131466.js";import{c}from"./scripts-b584a621.js";import"./index-b6208cf6.js";import"./index-d95f4d35.js";import"./_commonjsHelpers-87174ba5.js";import"./index-633d3215.js";import"./isEqual-ebac266f.js";import"./_getTag-5e1ca3fd.js";import"./uniq-2965a0d1.js";import"./index-7ef75b89.js";import"./preload-helper-41c905a7.js";const T={title:"Blocks/Footer",parameters:{layout:"fullscreen"}},e={render:(n,o)=>{window.hlx||(window.hlx={}),window.hlx.suppressLoadPage=!0,window.hlx.suppressLoadHeaderFooter=!0;const t=c("footer"),r=f("footer","");return t.append(r),d(r),l(r,o.parameters.host),t},play:async({canvasElement:n})=>{const o=i(n);await s(()=>{a(o.getByText("Tutorials")).toBeInTheDocument()});const t=o.getByText("Newsletter",{selector:"#newsletter"});a(t).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: (args, context) => {
    if (!window.hlx) window.hlx = {};
    window.hlx.suppressLoadPage = true;
    window.hlx.suppressLoadHeaderFooter = true;
    const footer = createTag('footer');
    const footerBlock = buildBlock('footer', '');
    footer.append(footerBlock);
    decorateBlock(footerBlock);
    loadBlock(footerBlock, context.parameters.host);
    return footer;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      expect(canvas.getByText('Tutorials')).toBeInTheDocument();
    });
    const newsLetterLabel = canvas.getByText('Newsletter', {
      selector: '#newsletter'
    });
    expect(newsLetterLabel).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const L=["Footer"];export{e as Footer,L as __namedExportsOrder,T as default};
//# sourceMappingURL=footer.stories-0d19db4b.js.map
