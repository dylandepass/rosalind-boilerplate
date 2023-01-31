const f={title:"Design System/Atoms/Forms"},o={args:{label:"First Name",help:"A clever desciption of this field",required:!1,disabled:!1},render:({label:e,required:a,disabled:l,help:n})=>`<form>
              <div class="group">
                <label for="name">${e}</label>
                <input type="text" id="name" placeholder="Placeholder" ${a?"required":""} ${l?"disabled":""}/>
                <span>${n}</span>
              </div>
            </form>`},d={args:{label:"First Name",help:"A clever desciption of this field",required:!1,disabled:!1},render:({label:e,required:a,disabled:l,help:n})=>`<form>
              <div class="group">
                <label for="name">${e}</label>
                <textarea type="text" id="name" placeholder="Placeholder" ${a?"required":""}  ${l?"disabled":""}></textarea>
                <span>${n}</span>
              </div>
            </form>`},s={args:{label:"Favorite Car Manufacturer",value:"Airplane Mode",help:"A clever desciption of this field",required:!1,disabled:!1},render:({label:e,required:a,disabled:l,help:n})=>`<form>
              <div class="group">
                <label for="car">${e}</label>
                <div class="select">
                  <select id="car" ${a?"required":""}  ${l?"disabled":""}>
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
                <span>${n}</span>
              </div>
            </form>`},t={args:{label:"Agree to Terms",value:"Completed Task",help:"A clever desciption of this field",checked:!1,required:!1,disabled:!1},render:({label:e,required:a,checked:l,disabled:n,help:r,value:i})=>`<form>
              <div class="group">
                <label for="terms">${e}</label>
                <div>
                  <input type="checkbox" id="terms" ${l?"checked":""}  ${a?"required":""}  ${n?"disabled":""} onclick="(event) => event.target.checked = true">
                  <label for="terms">${i}</label>
                </div>
                <span>${r}</span>
              </div>
            </form>`},p={args:{label:"Wifi Settings",value:"Airplane Mode",help:"A clever desciption of this field",checked:!1,required:!1,disabled:!1},render:({label:e,required:a,checked:l,disabled:n,help:r,value:i})=>`<form>
              <div class="group">
                <label for="wifi">${e}</label>
                <div>
                  <input type="checkbox" id="wifi" class="switch" ${l?"checked":""} ${a?"required":""} ${n?"disabled":""}>
                  <label for="wifi">${i}</label>
                </div>
                <span>${r}</span>
              </div>
            </form>`},c={args:{label:"Meal Preference",values:["Beef","Chicken","Fish"],help:"A clever desciption of this field",checked:!1,required:!1,disabled:!1},render:({label:e,required:a,checked:l,disabled:n,help:r,values:i})=>`<form>
              <div class="group">
                <label for="meal">${e}</label>
                <div>
                  ${i.map(u=>`
                              <input id="${u}" type="radio" name="meal" ${l?"checked":""} ${a?"required":""}  ${n?"disabled":""}>
                              <label for="${u}">${u}</label>
                          `).join(" ")}
                </div>
                <span>${r}</span>
              </div>
            </form>`};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    help: 'A clever desciption of this field',
    required: false,
    disabled: false
  },
  render: ({
    label,
    required,
    disabled,
    help
  }) => /* html */\`<form>
              <div class="group">
                <label for="name">\${label}</label>
                <input type="text" id="name" placeholder="Placeholder" \${required ? 'required' : ''} \${disabled ? 'disabled' : ''}/>
                <span>\${help}</span>
              </div>
            </form>\`
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    help: 'A clever desciption of this field',
    required: false,
    disabled: false
  },
  render: ({
    label,
    required,
    disabled,
    help
  }) => /* html */\`<form>
              <div class="group">
                <label for="name">\${label}</label>
                <textarea type="text" id="name" placeholder="Placeholder" \${required ? 'required' : ''}  \${disabled ? 'disabled' : ''}></textarea>
                <span>\${help}</span>
              </div>
            </form>\`
}`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite Car Manufacturer',
    value: 'Airplane Mode',
    help: 'A clever desciption of this field',
    required: false,
    disabled: false
  },
  render: ({
    label,
    required,
    disabled,
    help
  }) => /* html */\`<form>
              <div class="group">
                <label for="car">\${label}</label>
                <div class="select">
                  <select id="car" \${required ? 'required' : ''}  \${disabled ? 'disabled' : ''}>
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
                <span>\${help}</span>
              </div>
            </form>\`
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Agree to Terms',
    value: 'Completed Task',
    help: 'A clever desciption of this field',
    checked: false,
    required: false,
    disabled: false
  },
  render: ({
    label,
    required,
    checked,
    disabled,
    help,
    value
  }) => /* html */\`<form>
              <div class="group">
                <label for="terms">\${label}</label>
                <div>
                  <input type="checkbox" id="terms" \${checked ? 'checked' : ''}  \${required ? 'required' : ''}  \${disabled ? 'disabled' : ''} onclick="(event) => event.target.checked = true">
                  <label for="terms">\${value}</label>
                </div>
                <span>\${help}</span>
              </div>
            </form>\`
}`,...t.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Wifi Settings',
    value: 'Airplane Mode',
    help: 'A clever desciption of this field',
    checked: false,
    required: false,
    disabled: false
  },
  render: ({
    label,
    required,
    checked,
    disabled,
    help,
    value
  }) => /* html */\`<form>
              <div class="group">
                <label for="wifi">\${label}</label>
                <div>
                  <input type="checkbox" id="wifi" class="switch" \${checked ? 'checked' : ''} \${required ? 'required' : ''} \${disabled ? 'disabled' : ''}>
                  <label for="wifi">\${value}</label>
                </div>
                <span>\${help}</span>
              </div>
            </form>\`
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Meal Preference',
    values: ['Beef', 'Chicken', 'Fish'],
    help: 'A clever desciption of this field',
    checked: false,
    required: false,
    disabled: false
  },
  render: ({
    label,
    required,
    checked,
    disabled,
    help,
    values
  }) => /* html */\`<form>
              <div class="group">
                <label for="meal">\${label}</label>
                <div>
                  \${values.map(value => /* html */\`
                              <input id="\${value}" type="radio" name="meal" \${checked ? 'checked' : ''} \${required ? 'required' : ''}  \${disabled ? 'disabled' : ''}>
                              <label for="\${value}">\${value}</label>
                          \`).join(' ')}
                </div>
                <span>\${help}</span>
              </div>
            </form>\`
}`,...c.parameters?.docs?.source}}};const b=["TextField","TextArea","Select","Checkbox","Switch","Radio"];export{t as Checkbox,c as Radio,s as Select,p as Switch,d as TextArea,o as TextField,b as __namedExportsOrder,f as default};
//# sourceMappingURL=forms.stories-3c3c54e2.js.map
