import{w as p,e as a,u as o}from"./index-84541fd3.js";import{d as u}from"./dedent-8ac136a4.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-356e4a49.js";import"./isEqual-d0561132.js";import"./_getTag-7cbcf524.js";import"./uniq-74fc131e.js";import"./index-a6c8ef6f.js";const E={title:"Design System/Atoms/Forms/Checkbox"},n=({label:e,required:t,checked:l,disabled:d,help:i,value:m})=>u`
    <form>
      <div class="group">
        <label for="terms">${e}</label>
        <div>
          <input type="checkbox" id="terms" ${l?"checked":""}  ${t?"required":""}  ${d?"disabled":""} onclick="(event) => event.target.checked = true">
          <label for="terms">${m}</label>
        </div>
        <span>${i}</span>
      </div>
    </form>`,s={args:{label:"Agree to Terms",value:"Completed Task",help:"A clever desciption of this field",checked:!1,required:!1,disabled:!1},render:e=>n(e),play:async({canvasElement:e})=>{const t=p(e);a(t.getByText("Completed Task")).toBeInTheDocument(),a(t.getByText("Agree to Terms")).toBeInTheDocument(),a(t.getByText("A clever desciption of this field")).toBeInTheDocument()}},r={args:{label:"Agree to Terms",value:"Completed Task",help:"A clever desciption of this field",required:!1,disabled:!1},render:e=>n(e),play:async({canvasElement:e})=>{const t=document.querySelector("#terms");await o.click(t),a(t.checked).toEqual(!0)}},c={args:{label:"Agree to Terms",value:"Completed Task",help:"A clever desciption of this field",required:!1,disabled:!0},render:e=>n(e),play:async({canvasElement:e})=>{const t=document.querySelector("#terms");await o.click(t),a(t.checked).toEqual(!1)}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Agree to Terms',
    value: 'Completed Task',
    help: 'A clever desciption of this field',
    checked: false,
    required: false,
    disabled: false
  },
  render: args => CheckboxExample(args),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Completed Task')).toBeInTheDocument();
    expect(canvas.getByText('Agree to Terms')).toBeInTheDocument();
    expect(canvas.getByText('A clever desciption of this field')).toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Agree to Terms',
    value: 'Completed Task',
    help: 'A clever desciption of this field',
    required: false,
    disabled: false
  },
  render: args => CheckboxExample(args),
  play: async ({
    canvasElement
  }) => {
    const checkbox = document.querySelector('#terms');
    await userEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
  }
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Agree to Terms',
    value: 'Completed Task',
    help: 'A clever desciption of this field',
    required: false,
    disabled: true
  },
  render: args => CheckboxExample(args),
  play: async ({
    canvasElement
  }) => {
    const checkbox = document.querySelector('#terms');
    await userEvent.click(checkbox);
    expect(checkbox.checked).toEqual(false);
  }
}`,...c.parameters?.docs?.source}}};const A=["Default","Selected","Disabled"];export{s as Default,c as Disabled,r as Selected,A as __namedExportsOrder,E as default};
//# sourceMappingURL=checkbox.stories-e1bdeadb.js.map
