import{w as s,a as d,e as r,u as c}from"./index-2056e04f.js";import{i as h,j as u,k as m}from"./lib-franklin-38131466.js";import{c as p}from"./scripts-b584a621.js";import"./index-b6208cf6.js";import"./index-d95f4d35.js";import"./_commonjsHelpers-87174ba5.js";import"./index-633d3215.js";import"./isEqual-ebac266f.js";import"./_getTag-5e1ca3fd.js";import"./uniq-2965a0d1.js";import"./index-7ef75b89.js";import"./preload-helper-41c905a7.js";const E={title:"Blocks/Header",parameters:{layout:"fullscreen"}},v=(a,e)=>{window.hlx||(window.hlx={}),window.hlx.suppressLoadPage=!0,window.hlx.suppressLoadHeaderFooter=!0;const o=p("header"),n=h("header","");return o.append(n),u(n),m(n,e.parameters.host),o},t={render:(a,e)=>v(a,e),play:async({canvasElement:a})=>{const e=s(a);await d(()=>{r(e.getByText("Rosalind")).toBeInTheDocument()});const o=document.querySelector(".logo");await d(()=>r(o).toBeInTheDocument());const n=document.querySelector(".nav-hamburger");r(n).toBeInTheDocument()}},i={parameters:{viewport:{defaultViewport:"xs"}},render:(a,e)=>v(a,e),play:async({canvasElement:a})=>{const e=s(a);await d(()=>{r(e.getByText("Rosalind")).toBeInTheDocument()});const o=document.querySelector(".nav-hamburger");r(o).toBeInTheDocument()}},l={parameters:{viewport:{defaultViewport:"xs"}},render:(a,e)=>v(a,e),play:async({canvasElement:a})=>{const e=s(a);await d(()=>{r(e.getByText("Rosalind")).toBeInTheDocument()});const o=document.querySelector(".nav-hamburger");r(o).toBeInTheDocument(),await c.click(o),r(e.getByText("Home")).toBeInTheDocument(),r(e.getByText("Tutorials")).toBeInTheDocument(),r(e.getByText("Storybook")).toBeInTheDocument()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: (args, context) => renderHeader(args, context),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      expect(canvas.getByText('Rosalind')).toBeInTheDocument();
    });
    const logo = document.querySelector('.logo');
    await waitFor(() => expect(logo).toBeInTheDocument());
    const hamburger = document.querySelector('.nav-hamburger');
    expect(hamburger).toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'xs'
    }
  },
  render: (args, context) => renderHeader(args, context),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      expect(canvas.getByText('Rosalind')).toBeInTheDocument();
    });
    const hamburger = document.querySelector('.nav-hamburger');
    expect(hamburger).toBeInTheDocument();
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'xs'
    }
  },
  render: (args, context) => renderHeader(args, context),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      expect(canvas.getByText('Rosalind')).toBeInTheDocument();
    });
    const hamburger = document.querySelector('.nav-hamburger');
    expect(hamburger).toBeInTheDocument();
    await userEvent.click(hamburger);
    expect(canvas.getByText('Home')).toBeInTheDocument();
    expect(canvas.getByText('Tutorials')).toBeInTheDocument();
    expect(canvas.getByText('Storybook')).toBeInTheDocument();
  }
}`,...l.parameters?.docs?.source}}};const H=["Header","HeaderMobile","HeaderMobileOpen"];export{t as Header,i as HeaderMobile,l as HeaderMobileOpen,H as __namedExportsOrder,E as default};
//# sourceMappingURL=header.stories-d224af8a.js.map
