export default {
  title: 'Design System/Atoms/Forms',
};

export const TextField = {
  args: {
    label: 'First Name',
    help: 'A clever desciption of this field',
    required: false,
    disabled: false,
  },
  render: ({
    label, required, disabled, help, ...args
  }) =>/* html */`<form>
              <div class="group">
                <label for="name">${label}</label>
                <input type="text" id="name" placeholder="Placeholder" ${required ? 'required' : ''} ${disabled ? 'disabled' : ''}/>
                <span>${help}</span>
              </div>
            </form>`
  ,
};

export const TextArea = {
  args: {
    label: 'First Name',
    help: 'A clever desciption of this field',
    required: false,
    disabled: false,
  },
  render: ({
    label, required, disabled, help, ...args
  }) => /* html */`<form>
              <div class="group">
                <label for="name">${label}</label>
                <textarea type="text" id="name" placeholder="Placeholder" ${required ? 'required' : ''}  ${disabled ? 'disabled' : ''}></textarea>
                <span>${help}</span>
              </div>
            </form>`
  ,
};

export const Select = {
  args: {
    label: 'Favorite Car Manufacturer',
    value: 'Airplane Mode',
    help: 'A clever desciption of this field',
    required: false,
    disabled: false,
  },
  render: ({
    label, required, disabled, help, value, ...args
  }) => /* html */`<form>
              <div class="group">
                <label for="car">${label}</label>
                <div class="select">
                  <select id="car" ${required ? 'required' : ''}  ${disabled ? 'disabled' : ''}>
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
                <span>${help}</span>
              </div>
            </form>`
  ,
};

export const Checkbox = {
  args: {
    label: 'Agree to Terms',
    value: 'Completed Task',
    help: 'A clever desciption of this field',
    checked: false,
    required: false,
    disabled: false,
  },
  render: ({
    label, required, checked, disabled, help, value, ...args
  }) => /* html */`<form>
              <div class="group">
                <label for="terms">${label}</label>
                <div>
                  <input type="checkbox" id="terms" ${checked ? 'checked' : ''}  ${required ? 'required' : ''}  ${disabled ? 'disabled' : ''} onclick="(event) => event.target.checked = true">
                  <label for="terms">${value}</label>
                </div>
                <span>${help}</span>
              </div>
            </form>`
  ,
};

export const Switch = {
  args: {
    label: 'Wifi Settings',
    value: 'Airplane Mode',
    help: 'A clever desciption of this field',
    checked: false,
    required: false,
    disabled: false,
  },
  render: ({
    label, required, checked, disabled, help, value, ...args
  }) => /* html */`<form>
              <div class="group">
                <label for="wifi">${label}</label>
                <div>
                  <input type="checkbox" id="wifi" class="switch" ${checked ? 'checked' : ''} ${required ? 'required' : ''} ${disabled ? 'disabled' : ''}>
                  <label for="wifi">${value}</label>
                </div>
                <span>${help}</span>
              </div>
            </form>`
  ,
};

export const Radio = {
  args: {
    label: 'Meal Preference',
    values: ['Beef', 'Chicken', 'Fish'],
    help: 'A clever desciption of this field',
    checked: false,
    required: false,
    disabled: false,
  },
  render: ({
    label, required, checked, disabled, help, values, ...args
  }) => /* html */`<form>
              <div class="group">
                <label for="meal">${label}</label>
                <div>
                  ${values.map((value) => /* html */`
                              <input id="${value}" type="radio" name="meal" ${checked ? 'checked' : ''} ${required ? 'required' : ''}  ${disabled ? 'disabled' : ''}>
                              <label for="${value}">${value}</label>
                          `).join(' ')}
                </div>
                <span>${help}</span>
              </div>
            </form>`
  ,
};
