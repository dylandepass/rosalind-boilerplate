import{u as i,e as t}from"./index-84541fd3.js";import{d as f}from"./dedent-8ac136a4.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-356e4a49.js";import"./isEqual-d0561132.js";import"./_getTag-7cbcf524.js";import"./uniq-74fc131e.js";import"./index-a6c8ef6f.js";const S={title:"Design System/Atoms/Forms/Radio"},o=({label:e,required:a,checked:r,disabled:d,help:p,values:u})=>f`
    <form>
        <div class="group">
        <label for="meal">${e}</label>
        <div>
            ${u.map(l=>`
                        <input id="${l.toLowerCase()}" type="radio" name="meal" ${r?"checked":""} ${a?"required":""}  ${d?"disabled":""}>
                        <label for="${l.toLowerCase()}">${l}</label>
                    `).join(" ")}
        </div>
        <span>${p}</span>
        </div>
    </form>`,s={args:{label:"Meal Preference",values:["Beef","Chicken","Fish"],help:"A clever desciption of this field",checked:!1,required:!1,disabled:!1},render:e=>o(e)},c={args:{label:"Agree to Terms",values:["Beef","Chicken","Fish"],help:"A clever desciption of this field",required:!1,disabled:!1},render:e=>o(e),play:async({canvasElement:e})=>{const a=document.querySelector("#chicken");await i.click(a);const r=document.querySelector("#beef");await i.click(r),t(a.checked).toEqual(!1),t(r.checked).toEqual(!0)}},n={args:{label:"Agree to Terms",values:["Beef","Chicken","Fish"],help:"A clever desciption of this field",required:!1,disabled:!0},render:e=>o(e),play:async({canvasElement:e})=>{const a=document.querySelector("#chicken");await i.click(a),t(a.checked).toEqual(!1)}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Meal Preference',
    values: ['Beef', 'Chicken', 'Fish'],
    help: 'A clever desciption of this field',
    checked: false,
    required: false,
    disabled: false
  },
  render: args => RadioExample(args)
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const A=["Default","Selected","Disabled"];export{s as Default,n as Disabled,c as Selected,A as __namedExportsOrder,S as default};
//# sourceMappingURL=radio.stories-d6759f41.js.map
