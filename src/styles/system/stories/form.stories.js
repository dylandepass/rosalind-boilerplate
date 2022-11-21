export default {
  title: 'Form',
};

const Template = ({ content }) => content;

export const InputField = Template.bind({});
InputField.parameters = {
  title: 'Form/Input',
};
InputField.args = {
  content: /* html */`
        <div class="section">
          <div class="block-wrapper">
            <form class="row">
              <div class="col-12 group">
                <label for="email">Email</label>
                <input type="text" id="email" placeholder="Placeholder"/>
                <span>This is some help text that breaks onto a new line and may extend more than one line.</span>
              </div>
              <div class="col-12 group">
                <label for="email">Description</label>
                <textarea type="text" id="email" placeholder="Placeholder"></textarea>
                <span>This is some help text that breaks onto a new line and may extend more than one line.</span>
              </div>
            </form>
          </div>
        </div>`,
};

export const Checkbox = Template.bind({});
Checkbox.parameters = {
  title: 'Form/Checkbox',
};
Checkbox.args = {
  content: /* html */`
        <div class="section">
          <div class="block-wrapper">
            <form>  
              <div class="group">
                <label for="email">Email</label>
                <input type="text" id="email" placeholder="Placeholder"/>
                <span>This is some help text that breaks onto a new line and may extend more than one line.</span>
              </div>
              <div class="group">
                <label for="email">Description</label>
                <textarea type="text" id="email" placeholder="Placeholder"></textarea>
                <span>This is some help text that breaks onto a new line and may extend more than one line.</span>
              </div>
              <div class="group">
                <div>
                  <input type="checkbox" id="checkbox">
                  <label for="checkbox">Pure CSS Checkbox</label>
                </div>
                <div>
                  <input type="checkbox" id="switch" class="switch">
                  <label for="switch">Pure CSS Switch</label>
                </div>
                <div>
                  <input id="r1d" type="radio" name="radiod">
                  <label for="r1d">Radio 1</label>
                  <input id="r2d" type="radio" name="radiod">
                  <label for="r2d">Radio 2</label>
                </div>
                <span>This is some help text that breaks onto a new line and may extend more than one line.</span>
              </div>
              <div class="group">
                <div class="select">
                  <select>
                    <option value="0">Select car:</option>
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
            </form>
          </div>
        </div>`,
};
