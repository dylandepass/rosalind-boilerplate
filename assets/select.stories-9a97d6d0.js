import{w as s,e as a,u as c}from"./index-2056e04f.js";import{d}from"./dedent-8ac136a4.js";import"./index-b6208cf6.js";import"./index-d95f4d35.js";import"./_commonjsHelpers-87174ba5.js";import"./index-633d3215.js";import"./isEqual-ebac266f.js";import"./_getTag-5e1ca3fd.js";import"./uniq-2965a0d1.js";import"./index-7ef75b89.js";const b={title:"Design System/Atoms/Forms/Select"},l=({label:e,required:t,disabled:i,help:p})=>d`
    <form>
        <div class="group">
            <label for="car">${e}</label>
            <div class="select">
                <select id="car" ${t?"required":""}  ${i?"disabled":""}>
                <option value="" disabled selected hidden>Select car:</option>
                <option value="1">Audi</option>
                <option value="2">BMW</option>
                <option value="3">Citroen</option>
                <option value="4">Ford</option>
                <option value="5">Honda</option>
                <option value="6">Jaguar</option>
                <option value="7">Land Rover</option>
                <option value="8">Mercedes</option>
                <option value="9">Mini</option>
                <option value="10">Nissan</option>
                <option value="11">Toyota</option>
                <option value="12">Volvo</option>
                </select>
            </div>
            <span>${p}</span>
        </div>
    </form>`,n={args:{label:"Favorite Car Manufacturer",value:"Airplane Mode",help:"A clever desciption of this field",required:!1,disabled:!1},render:e=>l(e),play:async({canvasElement:e})=>{const t=s(e);a(t.getByText("Favorite Car Manufacturer")).toBeInTheDocument(),a(t.getByText("Select car:")).toBeInTheDocument(),a(t.getByText("BMW")).toBeInTheDocument(),a(t.getByText("A clever desciption of this field")).toBeInTheDocument()}},o={args:{label:"Favorite Car Manufacturer",value:"Airplane Mode",help:"A clever desciption of this field",required:!1,disabled:!1},render:e=>l(e),play:async({canvasElement:e})=>{s(e);const t=document.querySelector("select");await c.selectOptions(t,"BMW"),a(t?.value).toEqual("2")}},r={args:{label:"Favorite Car Manufacturer",help:"A clever desciption of this field",required:!1,disabled:!0},render:e=>l(e),play:async({canvasElement:e})=>{s(e);const t=document.querySelector("select");await c.selectOptions(t,"BMW"),a(t.value).toEqual("")}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite Car Manufacturer',
    value: 'Airplane Mode',
    help: 'A clever desciption of this field',
    required: false,
    disabled: false
  },
  render: args => SelectExample(args),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Favorite Car Manufacturer')).toBeInTheDocument();
    expect(canvas.getByText('Select car:')).toBeInTheDocument();
    expect(canvas.getByText('BMW')).toBeInTheDocument();
    expect(canvas.getByText('A clever desciption of this field')).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite Car Manufacturer',
    value: 'Airplane Mode',
    help: 'A clever desciption of this field',
    required: false,
    disabled: false
  },
  render: args => SelectExample(args),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = document.querySelector('select');
    await userEvent.selectOptions(select, 'BMW');
    expect(select?.value).toEqual('2');
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite Car Manufacturer',
    help: 'A clever desciption of this field',
    required: false,
    disabled: true
  },
  render: args => SelectExample(args),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = document.querySelector('select');
    await userEvent.selectOptions(select, 'BMW');
    expect(select.value).toEqual('');
  }
}`,...r.parameters?.docs?.source}}};const E=["Default","Selected","Disabled"];export{n as Default,r as Disabled,o as Selected,E as __namedExportsOrder,b as default};
//# sourceMappingURL=select.stories-9a97d6d0.js.map
