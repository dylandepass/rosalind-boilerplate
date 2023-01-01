import docs from './form.mdx';

export default {
  title: 'Form/Checkbox',
  parameters: {
    docs: {
      page: docs,
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
                <label>Agree to Terms</label>
                <div>
                  <input type="checkbox" id="checkbox">
                  <label for="checkbox">Completed Task</label>
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
                <label>Terms and Conditions</label>
                <div>
                  <input type="checkbox" id="checkbox" required>
                  <label for="checkbox">I accept the terms and conditions</label>
                </div>
                <span>A clever desciption of this field</span>
              </div>
            </form>`,
};
