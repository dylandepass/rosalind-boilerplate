import{w as i,a as s,e as a}from"./index-84541fd3.js";import{i as c,j as m,k as l}from"./lib-franklin-0f15b75e.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-356e4a49.js";import"./isEqual-d0561132.js";import"./_getTag-7cbcf524.js";import"./uniq-74fc131e.js";import"./index-a6c8ef6f.js";import"./preload-helper-41c905a7.js";const k={title:"Blocks/Footer",parameters:{layout:"fullscreen"}},e={render:(n,o)=>{const t=document.createElement("footer"),r=c("footer","");return t.append(r),m(r),l(r,o.parameters.host),t},play:async({canvasElement:n})=>{const o=i(n);await s(()=>{a(o.getByText("Tutorials")).toBeInTheDocument()});const t=o.getByText("Newsletter",{selector:"#newsletter"});a(t).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: (args, context) => {
    const footer = document.createElement('footer');
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
}`,...e.parameters?.docs?.source}}};const y=["Footer"];export{e as Footer,y as __namedExportsOrder,k as default};
//# sourceMappingURL=footer.stories-bf36647d.js.map
