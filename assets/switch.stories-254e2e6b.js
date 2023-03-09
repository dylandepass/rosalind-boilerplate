import{u as l,e as n}from"./index-2056e04f.js";import{d as m}from"./dedent-8ac136a4.js";import"./index-b6208cf6.js";import"./index-d95f4d35.js";import"./_commonjsHelpers-87174ba5.js";import"./index-633d3215.js";import"./isEqual-ebac266f.js";import"./_getTag-5e1ca3fd.js";import"./uniq-2965a0d1.js";import"./index-7ef75b89.js";const y={title:"Design System/Atoms/Forms/Switch"},t=({label:e,required:a,checked:c,disabled:o,help:d,value:p})=>m`
    <form>
      <div class="group">
        <label for="wifi">${e}</label>
        <div>
          <input type="checkbox" id="wifi" class="switch" ${c?"checked":""} ${a?"required":""} ${o?"disabled":""}>
          <label for="wifi">${p}</label>
        </div>
        <span>${d}</span>
      </div>
    </form>`,s={args:{label:"Wifi Settings",value:"Airplane Mode",help:"A clever desciption of this field",checked:!1,required:!1,disabled:!1},render:e=>t(e)},i={args:{label:"Wifi Settings",value:"Airplane Mode",help:"A clever desciption of this field",required:!1,disabled:!1},render:e=>t(e),play:async({canvasElement:e})=>{const a=document.querySelector("#wifi");await l.click(a),n(a.checked).toEqual(!0)}},r={args:{label:"Wifi Settings",value:"Airplane Mode",help:"A clever desciption of this field",required:!1,disabled:!0},render:e=>t(e),play:async({canvasElement:e})=>{const a=document.querySelector("#wifi");await l.click(a),n(a.checked).toEqual(!1)}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Wifi Settings',
    value: 'Airplane Mode',
    help: 'A clever desciption of this field',
    checked: false,
    required: false,
    disabled: false
  },
  render: args => SwitchExample(args)
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Wifi Settings',
    value: 'Airplane Mode',
    help: 'A clever desciption of this field',
    required: false,
    disabled: false
  },
  render: args => SwitchExample(args),
  play: async ({
    canvasElement
  }) => {
    const switchElement = document.querySelector('#wifi');
    await userEvent.click(switchElement);
    expect(switchElement.checked).toEqual(true);
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Wifi Settings',
    value: 'Airplane Mode',
    help: 'A clever desciption of this field',
    required: false,
    disabled: true
  },
  render: args => SwitchExample(args),
  play: async ({
    canvasElement
  }) => {
    const switchElement = document.querySelector('#wifi');
    await userEvent.click(switchElement);
    expect(switchElement.checked).toEqual(false);
  }
}`,...r.parameters?.docs?.source}}};const A=["Default","Selected","Disabled"];export{s as Default,r as Disabled,i as Selected,A as __namedExportsOrder,y as default};
//# sourceMappingURL=switch.stories-254e2e6b.js.map
