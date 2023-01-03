import docs from './form.mdx';

export default {
  title: 'Form/Radio',
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
                <label>Meal Preference</label>
                <div>
                    <input id="beef" type="radio" name="meal">
                    <label for="beef">Beef</label>
                    <input id="chicken" type="radio" name="meal">
                    <label for="chicken">Chicken</label>
                    <input id="fish" type="radio" name="meal">
                    <label for="fish">Fish</label>
                </div>
                <span>A clever desciption of this field</span>
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
                <label>Meal Preference</label>
                <div>
                    <input id="beef-2" type="radio" name="meal" required>
                    <label for="beef-2">Beef</label>
                    <input id="chicken-2" type="radio" name="meal">
                    <label for="chicken-2">Chicken</label>
                    <input id="fish-2" type="radio" name="meal">
                    <label for="fish-2">Fish</label>
                </div>
                <span>A clever desciption of this field</span>
            </form>`,
};
