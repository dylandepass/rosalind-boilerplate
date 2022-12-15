export default {
  title: 'Buttons',
};

const Template = ({ content }) => content;

export const Headings = Template.bind({});
Headings.parameters = {
  title: 'Buttons',
};
Headings.args = {
  content: /* html */`
        <div class="section">
          <div class="block-wrapper">
            <div class="grid grid-cols-6">
              <div class="">
                Primary
              </div>
              <div>
                <p class="button-container">
                  <strong>
                    <a href="https://google.com" title="Get Started" class="button primary">Get Started</a>
                  </strong>
                </p>
              </div>
              <div>
                <p class="button-container">
                  <strong>
                    <a href="https://google.com" title="Get Started" class="button primary">Get Started</a>
                  </strong>
                </p>
              </div>
              <div>
                <p class="button-container">
                  <strong>
                    <a href="https://google.com" title="Get Started" class="button primary">Get Started</a>
                  </strong>
                </p>
              </div>
              <div>
                <p class="button-container">
                  <strong>
                    <a href="https://google.com" title="Get Started" class="button primary">Get Started</a>
                  </strong>
                </p>
              </div>
            </div>
            
          </div>
        </div>`,
};
