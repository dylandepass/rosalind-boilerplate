import{w as i,a as T,e as o,u as I}from"./index-84541fd3.js";import{e as h}from"./index-dd503cea.js";import{d as g}from"./lib-franklin-c0d56926.js";import{l as b}from"./scripts-bd5fbd8d.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-356e4a49.js";import"./isEqual-d0561132.js";import"./_getTag-7cbcf524.js";import"./uniq-74fc131e.js";import"./index-a6c8ef6f.js";import"./preload-helper-41c905a7.js";function x(t){g(t),t.querySelector(":scope > div").classList.add("button-stories"),t.querySelectorAll(".button-container").forEach(e=>{const n=e.querySelector("a");n.href="javascript:void(0)",n.textContent.includes("Disabled")&&n.classList.add("disabled")}),t.parentElement.classList.remove("section"),t.parentElement.classList.add("story")}function c(t,e){const n=document.createElement("p");n.classList.add("button-container");let r;return e&&(r=`<span class='icon ${e}'></span>`),n.innerHTML=`<a href="javascript:void(0)" title=${t} class="button ${t}">${r||""}Primary</a>`,n}function s(t,e){const n=i(t);let r=0;const a=n.getByTitle(e);a.addEventListener("click",()=>{r=1}),o(a).toBeInTheDocument(),I.click(a),o(r).toEqual(1),a.blur()}const $={title:"Design System/Atoms/Buttons",parameters:{docs:{description:{component:"A block to display buttons"}}}},u={parameters:{path:"/storybook/buttons.plain.html",selector:"div",index:0},render:(t,e)=>h.FranklinTemplate(b,t,e,x),play:async({canvasElement:t})=>{const e=i(t);await T(()=>{o(e.getByText("Authored Buttons")).toBeInTheDocument()});const n=e.getByTitle("Primary");o(n).toBeInTheDocument();async function r(a){const v=e.getByTitle(a);o(v).toBeInTheDocument(),a.includes("Icon")&&(o(v.querySelector(".icon")).toBeInTheDocument(),await T(()=>{o(v.querySelector("svg")).toBeInTheDocument()}))}r("Primary"),r("Primary Icon Left"),r("Primary Icon Right"),r("Secondary"),r("Secondary Icon Left"),r("Secondary Icon Right"),r("Quiet"),r("Quiet Icon Left"),r("Quiet Icon Right")}},m={render:(t,e)=>c("primary"),play:async({canvasElement:t})=>{const n=i(t).getByTitle("primary");o(n).toBeInTheDocument(),s(t,"primary")}},y={render:(t,e)=>{const n=c("primary","icon-plus");return g(n),n},play:async({canvasElement:t})=>{s(t,"primary")}},p={render:(t,e)=>c("secondary"),play:async({canvasElement:t})=>{const n=i(t).getByTitle("secondary");o(n).toBeInTheDocument(),s(t,"secondary")}},l={render:(t,e)=>{const n=c("secondary","icon-plus");return g(n),n},play:async({canvasElement:t})=>{s(t,"secondary")}},d={render:(t,e)=>c("quiet"),play:async({canvasElement:t})=>{const n=i(t).getByTitle("quiet");o(n).toBeInTheDocument(),s(t,"quiet")}},B={render:(t,e)=>{const n=c("quiet","icon-plus");return g(n),n},play:async({canvasElement:t})=>{s(t,"quiet")}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};const k=["AuthoredButtons","Primary","PrimaryIcon","Secondary","SecondaryIcon","Quiet","QuietIcon"];export{u as AuthoredButtons,m as Primary,y as PrimaryIcon,d as Quiet,B as QuietIcon,p as Secondary,l as SecondaryIcon,k as __namedExportsOrder,$ as default};
//# sourceMappingURL=buttons.stories-989ac18c.js.map
