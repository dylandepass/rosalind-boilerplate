import{u as l,e as n}from"./index-ef93590f.js";import{d as m}from"./dedent-8ac136a4.js";import"./index-1a733ee4.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-356e4a49.js";import"./isEqual-d0561132.js";import"./_getTag-7cbcf524.js";import"./uniq-74fc131e.js";const q={title:"Design System/Atoms/Forms/Switch"},t=({label:e,required:a,checked:c,disabled:o,help:d,value:p})=>m`
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
}`,...r.parameters?.docs?.source}}};const y=["Default","Selected","Disabled"];export{s as Default,r as Disabled,i as Selected,y as __namedExportsOrder,q as default};
//# sourceMappingURL=switch.stories-71280b8b.js.map
