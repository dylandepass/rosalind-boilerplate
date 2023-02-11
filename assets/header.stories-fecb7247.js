import{w as s,a as d,e as o,u as v}from"./index-84541fd3.js";import{i as h,j as u,k as m}from"./lib-franklin-4cd0594f.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-356e4a49.js";import"./isEqual-d0561132.js";import"./_getTag-7cbcf524.js";import"./uniq-74fc131e.js";import"./index-a6c8ef6f.js";import"./preload-helper-41c905a7.js";const T={title:"Blocks/Header",parameters:{layout:"fullscreen"}},c=(a,e)=>{const r=document.createElement("header"),n=h("header","");return r.append(n),u(n),m(n,e.parameters.host),r},t={render:(a,e)=>c(a,e),play:async({canvasElement:a})=>{const e=s(a);await d(()=>{o(e.getByText("Rosalind")).toBeInTheDocument()});const r=document.querySelector(".logo");await d(()=>o(r).toBeInTheDocument());const n=document.querySelector(".nav-hamburger");o(n).toBeInTheDocument()}},i={parameters:{viewport:{defaultViewport:"xs"}},render:(a,e)=>c(a,e),play:async({canvasElement:a})=>{const e=s(a);await d(()=>{o(e.getByText("Rosalind")).toBeInTheDocument()});const r=document.querySelector(".nav-hamburger");o(r).toBeInTheDocument()}},l={parameters:{viewport:{defaultViewport:"xs"}},render:(a,e)=>c(a,e),play:async({canvasElement:a})=>{const e=s(a);await d(()=>{o(e.getByText("Rosalind")).toBeInTheDocument()});const r=document.querySelector(".nav-hamburger");o(r).toBeInTheDocument(),await v.click(r),o(e.getByText("Home")).toBeInTheDocument(),o(e.getByText("Tutorials")).toBeInTheDocument()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
  }
}`,...l.parameters?.docs?.source}}};const D=["Header","HeaderMobile","HeaderMobileOpen"];export{t as Header,i as HeaderMobile,l as HeaderMobileOpen,D as __namedExportsOrder,T as default};
//# sourceMappingURL=header.stories-fecb7247.js.map
