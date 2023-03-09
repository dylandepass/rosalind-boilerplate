import{w as i,a as T,e as a,u as I}from"./index-2056e04f.js";import{e as h}from"./index-d2f0a3f4.js";import{d as u}from"./lib-franklin-9f927fae.js";import{l as x,c as E}from"./scripts-9b00f020.js";import"./index-b6208cf6.js";import"./index-d95f4d35.js";import"./_commonjsHelpers-87174ba5.js";import"./index-633d3215.js";import"./isEqual-ebac266f.js";import"./_getTag-5e1ca3fd.js";import"./uniq-2965a0d1.js";import"./index-7ef75b89.js";import"./index-0285b6c4.js";import"./index-25e212b3.js";import"./_baseToString-e7f1b41f.js";import"./_defineProperty-118703d3.js";import"./index-fdaea41f.js";import"./memoizerific-6211ecf2.js";import"./preload-helper-41c905a7.js";function S(t){u(t),t.querySelector(":scope > div").classList.add("button-stories"),t.querySelectorAll(".button-container").forEach(e=>{const n=e.querySelector("a");n.href="javascript:void(0)",n.textContent.includes("Disabled")&&n.classList.add("disabled")}),t.parentElement.classList.remove("section"),t.parentElement.classList.add("story")}function c(t,e){const n=E("p");n.classList.add("button-container");let o;return e&&(o=`<span class='icon ${e}'></span>`),n.innerHTML=`<a href="javascript:void(0)" title=${t} class="button ${t}">${o||""}Primary</a>`,n}function s(t,e){const n=i(t);let o=0;const r=n.getByTitle(e);r.addEventListener("click",()=>{o=1}),a(r).toBeInTheDocument(),I.click(r),a(o).toEqual(1),r.blur()}const z={title:"Design System/Atoms/Buttons",parameters:{docs:{description:{component:"A block to display buttons"}}}},p={parameters:{path:"/storybook/buttons.plain.html",selector:"div",index:0},render:(t,e)=>h.FranklinTemplate(x,t,e,S),play:async({canvasElement:t})=>{const e=i(t);await T(()=>{a(e.getByText("Authored Buttons")).toBeInTheDocument()});const n=e.getByTitle("Primary");a(n).toBeInTheDocument();async function o(r){const g=e.getByTitle(r);a(g).toBeInTheDocument(),r.includes("Icon")&&(a(g.querySelector(".icon")).toBeInTheDocument(),await T(()=>{a(g.querySelector("svg")).toBeInTheDocument()}))}o("Primary"),o("Primary Icon Left"),o("Primary Icon Right"),o("Secondary"),o("Secondary Icon Left"),o("Secondary Icon Right"),o("Quiet"),o("Quiet Icon Left"),o("Quiet Icon Right")}},m={render:(t,e)=>c("primary"),play:async({canvasElement:t})=>{const n=i(t).getByTitle("primary");a(n).toBeInTheDocument(),s(t,"primary")}},d={render:(t,e)=>{const n=c("primary","icon-plus");return u(n),n},play:async({canvasElement:t})=>{s(t,"primary")}},y={render:(t,e)=>c("secondary"),play:async({canvasElement:t})=>{const n=i(t).getByTitle("secondary");a(n).toBeInTheDocument(),s(t,"secondary")}},l={render:(t,e)=>{const n=c("secondary","icon-plus");return u(n),n},play:async({canvasElement:t})=>{s(t,"secondary")}},B={render:(t,e)=>c("quiet"),play:async({canvasElement:t})=>{const n=i(t).getByTitle("quiet");a(n).toBeInTheDocument(),s(t,"quiet")}},v={render:(t,e)=>{const n=c("quiet","icon-plus");return u(n),n},play:async({canvasElement:t})=>{s(t,"quiet")}},b={render:(t,e)=>{const n=document.createElement("div"),o=document.createElement("div");o.append(c("primary","icon-plus")),o.append(c("secondary","icon-plus"));const r=document.createElement("div");return r.append(c("primary","icon-plus")),r.append(c("secondary","icon-plus")),n.append(o),n.append(r),u(n),n}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    path: '/storybook/buttons.plain.html',
    selector: 'div',
    index: 0
  },
  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      expect(canvas.getByText('Authored Buttons')).toBeInTheDocument();
    });
    const primary = canvas.getByTitle('Primary');
    expect(primary).toBeInTheDocument();
    async function testButtonByTitle(title) {
      const btn = canvas.getByTitle(title);
      expect(btn).toBeInTheDocument();
      if (title.includes('Icon')) {
        expect(btn.querySelector('.icon')).toBeInTheDocument();
        await waitFor(() => {
          expect(btn.querySelector('svg')).toBeInTheDocument();
        });
      }
    }
    testButtonByTitle('Primary');
    testButtonByTitle('Primary Icon Left');
    testButtonByTitle('Primary Icon Right');
    testButtonByTitle('Secondary');
    testButtonByTitle('Secondary Icon Left');
    testButtonByTitle('Secondary Icon Right');
    testButtonByTitle('Quiet');
    testButtonByTitle('Quiet Icon Left');
    testButtonByTitle('Quiet Icon Right');
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args, context) => {
    const button = createButton('primary');
    return button;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const primary = canvas.getByTitle('primary');
    expect(primary).toBeInTheDocument();
    testButton(canvasElement, 'primary');
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: (args, context) => {
    const button = createButton('primary', 'icon-plus');
    decorateIcons(button);
    return button;
  },
  play: async ({
    canvasElement
  }) => {
    testButton(canvasElement, 'primary');
  }
}`,...d.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: (args, context) => {
    const button = createButton('secondary');
    return button;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const primary = canvas.getByTitle('secondary');
    expect(primary).toBeInTheDocument();
    testButton(canvasElement, 'secondary');
  }
}`,...y.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: (args, context) => {
    const button = createButton('secondary', 'icon-plus');
    decorateIcons(button);
    return button;
  },
  play: async ({
    canvasElement
  }) => {
    testButton(canvasElement, 'secondary');
  }
}`,...l.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: (args, context) => {
    const button = createButton('quiet');
    return button;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const primary = canvas.getByTitle('quiet');
    expect(primary).toBeInTheDocument();
    testButton(canvasElement, 'quiet');
  }
}`,...B.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: (args, context) => {
    const button = createButton('quiet', 'icon-plus');
    decorateIcons(button);
    return button;
  },
  play: async ({
    canvasElement
  }) => {
    testButton(canvasElement, 'quiet');
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: (args, context) => {
    const container = document.createElement('div');
    const buttonGroup1 = document.createElement('div');
    buttonGroup1.append(createButton('primary', 'icon-plus'));
    buttonGroup1.append(createButton('secondary', 'icon-plus'));
    const buttonGroup2 = document.createElement('div');
    buttonGroup2.append(createButton('primary', 'icon-plus'));
    buttonGroup2.append(createButton('secondary', 'icon-plus'));
    container.append(buttonGroup1);
    container.append(buttonGroup2);
    decorateIcons(container);
    return container;
  }
}`,...b.parameters?.docs?.source}}};const J=["AuthoredButtons","Primary","PrimaryIcon","Secondary","SecondaryIcon","Quiet","QuietIcon","ButtonGroup"];export{p as AuthoredButtons,b as ButtonGroup,m as Primary,d as PrimaryIcon,B as Quiet,v as QuietIcon,y as Secondary,l as SecondaryIcon,J as __namedExportsOrder,z as default};
//# sourceMappingURL=buttons.stories-e5b4b42b.js.map
