import mdx from './form.mdx';

export default {
  title: 'Form/Select',
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

const Template = ({ content }) => content;

export const Default = Template.bind({});
Default.parameters = {
  title: 'Default',
};
Default.args = {
  content: /* html */`
            <form>  
              <div class="group">
                <label>Favorite Car Manufacturer</label>
                <div class="select">
                  <select id="car">
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
                <span>A clever desciption of this field</span>
              </div>
            </form>`,
};

export const Required = Template.bind({});
Required.parameters = {
  title: 'Required',
};
Required.args = {
  content: /* html */`
            <form>  
              <div class="group">
                <label for="car">Favorite Car Manufacturer</label>
                <div class="select">
                  <select id="car" required>
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
                <span>A clever desciption of this field</span>
              </div>
            </form>`,
};
