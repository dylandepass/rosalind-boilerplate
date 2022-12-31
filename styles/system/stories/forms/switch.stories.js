import mdx from './form.mdx';

export default {
  title: 'Form/Switch',
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
                <label>Wifi Settings</label>
                <div>
                  <input type="checkbox" id="switch" class="switch">
                  <label for="switch">Airplane Mode</label>
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
                <label>Wifi Settings</label>
                <div>
                  <input type="checkbox" id="switch" class="switch" required>
                  <label for="switch">Airplane Mode</label>
                </div>
                <span>A clever desciption of this field</span>
              </div>
            </form>`,
};
