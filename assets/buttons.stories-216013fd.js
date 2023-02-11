import{w as u,a as c,e as r}from"./index-84541fd3.js";import{e as m}from"./index-dd503cea.js";import{d as l}from"./lib-franklin-c9039eb4.js";import{l as y}from"./scripts-de5a0511.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-356e4a49.js";import"./isEqual-d0561132.js";import"./_getTag-7cbcf524.js";import"./uniq-74fc131e.js";import"./index-a6c8ef6f.js";import"./preload-helper-41c905a7.js";function p(n){l(n),n.querySelector(":scope > div").classList.add("button-stories"),n.querySelectorAll(".button-container").forEach(o=>{const e=o.querySelector("a");e.href="javascript:void(0)",e.textContent.includes("Disabled")&&e.classList.add("disabled"),e.textContent.includes("Quiet")&&(e.classList.add("quiet"),e.classList.remove("primary"))})}const w={title:"Design System/Atoms/Buttons",parameters:{docs:{description:{component:"A block to display buttons"}}}},a={parameters:{path:"/storybook/buttons.plain.html",selector:"div",index:0},render:(n,o)=>m.FranklinTemplate(y,n,o,p),play:async({canvasElement:n})=>{const o=u(n);await c(()=>{r(o.getByText("Buttons")).toBeInTheDocument()});const e=o.getByTitle("Primary");r(e).toBeInTheDocument();async function t(s){const i=o.getByTitle(s);r(i).toBeInTheDocument(),s.includes("Icon")&&(r(i.querySelector(".icon")).toBeInTheDocument(),await c(()=>{r(i.querySelector("svg")).toBeInTheDocument()}))}t("Primary"),t("Primary Icon Left"),t("Primary Icon Right"),t("Secondary"),t("Secondary Icon Left"),t("Secondary Icon Right"),t("Quiet"),t("Quiet Icon Left"),t("Quiet Icon Right")}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
      expect(canvas.getByText('Buttons')).toBeInTheDocument();
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
}`,...a.parameters?.docs?.source}}};const L=["Buttons"];export{a as Buttons,L as __namedExportsOrder,w as default};
//# sourceMappingURL=buttons.stories-216013fd.js.map
