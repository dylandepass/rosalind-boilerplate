import docs from './form.mdx';

export default {
  title: 'Form/Text Field',
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
                <label for="name">Name</label>
                <input type="text" id="name" placeholder="Placeholder"/>
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
                <label for="name">Name</label>
                <input type="text" id="name" placeholder="Placeholder" required/>
                <span>A clever desciption of this field</span>
              </div>
            </form>`,
};
