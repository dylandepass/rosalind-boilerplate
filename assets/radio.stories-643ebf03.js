import{u as o,e as d}from"./index-ef93590f.js";import{d as f}from"./dedent-8ac136a4.js";import"./index-1a733ee4.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-356e4a49.js";import"./isEqual-d0561132.js";import"./_getTag-7cbcf524.js";import"./uniq-74fc131e.js";const S={title:"Design System/Atoms/Forms/Radio"},i=({label:e,required:a,checked:r,disabled:p,help:u,values:m})=>f`
    <form>
        <div class="group">
        <label for="meal">${e}</label>
        <div>
            ${m.map(t=>`
                        <input id="${t.toLowerCase()}" type="radio" name="meal" ${r?"checked":""} ${a?"required":""}  ${p?"disabled":""}>
                        <label for="${t.toLowerCase()}">${t}</label>
                    `).join(" ")}
        </div>
        <span>${u}</span>
        </div>
    </form>`,s={args:{label:"Meal Preference",values:["Beef","Chicken","Fish"],help:"A clever desciption of this field",checked:!1,required:!1,disabled:!1},render:e=>i(e)},n={args:{label:"Agree to Terms",values:["Beef","Chicken","Fish"],help:"A clever desciption of this field",required:!1,disabled:!1},render:e=>i(e),play:async({canvasElement:e})=>{const a=document.querySelector("#chicken");await o.click(a);const r=document.querySelector("#beef");await o.click(r),d(a.checked).toEqual(!1),d(r.checked).toEqual(!0)}},c={args:{label:"Agree to Terms",values:["Beef","Chicken","Fish"],help:"A clever desciption of this field",required:!0,disabled:!1},render:e=>i(e),play:async({canvasElement:e})=>{}},l={args:{label:"Agree to Terms",values:["Beef","Chicken","Fish"],help:"A clever desciption of this field",required:!1,disabled:!0},render:e=>i(e),play:async({canvasElement:e})=>{const a=document.querySelector("#chicken");await o.click(a),d(a.checked).toEqual(!1)}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Meal Preference',
    values: ['Beef', 'Chicken', 'Fish'],
    help: 'A clever desciption of this field',
    checked: false,
    required: false,
    disabled: false
  },
  render: args => RadioExample(args)
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Agree to Terms',
    values: ['Beef', 'Chicken', 'Fish'],
    help: 'A clever desciption of this field',
    required: false,
    disabled: false
  },
  render: args => RadioExample(args),
  play: async ({
    canvasElement
  }) => {
    const chicken = document.querySelector('#chicken');
    await userEvent.click(chicken);
    const beef = document.querySelector('#beef');
    await userEvent.click(beef);
    expect(chicken.checked).toEqual(false);
    expect(beef.checked).toEqual(true);
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Agree to Terms',
    values: ['Beef', 'Chicken', 'Fish'],
    help: 'A clever desciption of this field',
    required: true,
    disabled: false
  },
  render: args => RadioExample(args),
  play: async ({
    canvasElement
  }) => {}
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Agree to Terms',
    values: ['Beef', 'Chicken', 'Fish'],
    help: 'A clever desciption of this field',
    required: false,
    disabled: true
  },
  render: args => RadioExample(args),
  play: async ({
    canvasElement
  }) => {
    const radio = document.querySelector('#chicken');
    await userEvent.click(radio);
    expect(radio.checked).toEqual(false);
  }
}`,...l.parameters?.docs?.source}}};const x=["Default","Selected","Required","Disabled"];export{s as Default,l as Disabled,c as Required,n as Selected,x as __namedExportsOrder,S as default};
//# sourceMappingURL=radio.stories-643ebf03.js.map
