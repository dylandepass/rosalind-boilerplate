import mdx from './form.mdx';

export default {
  title: 'Form/Text Area',
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
                <label for="description">Description</label>
                <textarea type="text" id="description" placeholder="Placeholder"></textarea>
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
                <label for="description">Description</label>
                <textarea type="text" id="description" placeholder="Placeholder" required></textarea>
                <span>A clever desciption of this field</span>
              </div>
            </form>`,
};
