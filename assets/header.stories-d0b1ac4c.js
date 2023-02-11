import{w as s,a as d,e as r,u as v}from"./index-84541fd3.js";import{i as h,j as u,k as m}from"./lib-franklin-c9039eb4.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-356e4a49.js";import"./isEqual-d0561132.js";import"./_getTag-7cbcf524.js";import"./uniq-74fc131e.js";import"./index-a6c8ef6f.js";import"./preload-helper-41c905a7.js";const z={title:"Blocks/Header",parameters:{layout:"fullscreen"}},c=(a,e)=>{const o=document.createElement("header"),n=h("header","");return o.append(n),u(n),m(n,e.parameters.host),o},t={render:(a,e)=>c(a,e),play:async({canvasElement:a})=>{const e=s(a);await d(()=>{r(e.getByText("Rosalind")).toBeInTheDocument()});const o=document.querySelector(".logo");await d(()=>r(o).toBeInTheDocument());const n=document.querySelector(".nav-hamburger");r(n).toBeInTheDocument()}},i={parameters:{viewport:{defaultViewport:"xs"}},render:(a,e)=>c(a,e),play:async({canvasElement:a})=>{const e=s(a);await d(()=>{r(e.getByText("Rosalind")).toBeInTheDocument()});const o=document.querySelector(".nav-hamburger");r(o).toBeInTheDocument()}},l={parameters:{viewport:{defaultViewport:"xs"}},render:(a,e)=>c(a,e),play:async({canvasElement:a})=>{const e=s(a);await d(()=>{r(e.getByText("Rosalind")).toBeInTheDocument()});const o=document.querySelector(".nav-hamburger");r(o).toBeInTheDocument(),await v.click(o),r(e.getByText("Home")).toBeInTheDocument(),r(e.getByText("Tutorials")).toBeInTheDocument(),r(e.getByText("Storybook")).toBeInTheDocument()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const D=["Header","HeaderMobile","HeaderMobileOpen"];export{t as Header,i as HeaderMobile,l as HeaderMobileOpen,D as __namedExportsOrder,z as default};
//# sourceMappingURL=header.stories-d0b1ac4c.js.map
