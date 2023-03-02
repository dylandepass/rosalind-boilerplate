import{w as s,e as t,u as p}from"./index-ef93590f.js";import{d as h}from"./dedent-8ac136a4.js";import"./index-1a733ee4.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-356e4a49.js";import"./isEqual-d0561132.js";import"./_getTag-7cbcf524.js";import"./uniq-74fc131e.js";const A={title:"Design System/Atoms/Forms/TextField"},r=({label:e,required:n,disabled:a,help:u})=>h`
  <form>
    <div class="group">
      <label for="name">${e}</label>
      <input type="text" id="name" placeholder="Placeholder" ${n?"required":""} ${a?"disabled":""}/>
      <span>${u}</span>
    </div>
  </form>`,l={args:{label:"First Name",help:"A clever desciption of this field",required:!1,disabled:!1},render:e=>r(e),play:async({canvasElement:e})=>{const n=s(e);t(n.getByText("First Name")).toBeInTheDocument(),t(n.getByPlaceholderText("Placeholder")).toBeInTheDocument(),t(n.getByText("A clever desciption of this field")).toBeInTheDocument()}},c={args:{label:"First Name",help:"A clever desciption of this field",required:!1,disabled:!1},render:e=>r(e),play:async({canvasElement:e})=>{const a=s(e).getByPlaceholderText("Placeholder");p.type(a,"Johnny Appleseed"),t(a.value).toEqual("Johnny Appleseed")}},i={args:{label:"First Name",help:"A clever desciption of this field",required:!0,disabled:!1},render:e=>r(e),play:async({canvasElement:e})=>{const a=s(e).getByPlaceholderText("Placeholder");t(a.hasAttribute("required")).toBeTruthy(),p.click(a)}},o={args:{label:"First Name",help:"A clever desciption of this field",required:!0,disabled:!1},render:e=>r(e),play:async({canvasElement:e})=>{const a=s(e).getByPlaceholderText("Placeholder");t(a.hasAttribute("required")).toBeTruthy(),p.type(a,"Johnny Appleseed"),t(a.value).toEqual("Johnny Appleseed")}},d={args:{label:"First Name",help:"A clever desciption of this field",required:!1,disabled:!0},render:e=>r(e),play:async({canvasElement:e})=>{const a=s(e).getByPlaceholderText("Placeholder");p.type(a,"Johnny Appleseed"),t(a.value).toEqual("")}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    help: 'A clever desciption of this field',
    required: false,
    disabled: false
  },
  render: args => TextFieldExample(args),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('First Name')).toBeInTheDocument();
    expect(canvas.getByPlaceholderText('Placeholder')).toBeInTheDocument();
    expect(canvas.getByText('A clever desciption of this field')).toBeInTheDocument();
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    help: 'A clever desciption of this field',
    required: false,
    disabled: false
  },
  render: args => TextFieldExample(args),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Placeholder');
    userEvent.type(input, 'Johnny Appleseed');
    expect(input.value).toEqual('Johnny Appleseed');
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    help: 'A clever desciption of this field',
    required: true,
    disabled: false
  },
  render: args => TextFieldExample(args),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Placeholder');
    expect(input.hasAttribute('required')).toBeTruthy();
    userEvent.click(input);
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    help: 'A clever desciption of this field',
    required: true,
    disabled: false
  },
  render: args => TextFieldExample(args),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Placeholder');
    expect(input.hasAttribute('required')).toBeTruthy();
    userEvent.type(input, 'Johnny Appleseed');
    expect(input.value).toEqual('Johnny Appleseed');
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    help: 'A clever desciption of this field',
    required: false,
    disabled: true
  },
  render: args => TextFieldExample(args),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Placeholder');
    userEvent.type(input, 'Johnny Appleseed');
    expect(input.value).toEqual('');
  }
}`,...d.parameters?.docs?.source}}};const B=["Default","Filled","Required","Valid","Disabled"];export{l as Default,d as Disabled,c as Filled,i as Required,o as Valid,B as __namedExportsOrder,A as default};
//# sourceMappingURL=text-field.stories-f37dd20c.js.map
