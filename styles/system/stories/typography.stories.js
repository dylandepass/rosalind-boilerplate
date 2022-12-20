export default {
  title: 'Typography',
};

const Template = ({ content }) => content;

export const Headings = Template.bind({});
Headings.parameters = {
  title: 'Typograph/Headings',
};
Headings.args = {
  content: /* html */`
        <div class="section">
          <div class="block-wrapper">
            <div class="row">
                <div class="col-12 col-md-6">
                <h1 class="eyebrow">Eyebrow</h1>
                    <h1>h1. This is a very large header.</h1>
                    <h2>h2. This is a large header</h2>
                    <h3>h3. This is a medium header</h3>
                    <h4>h4. This is a moderate header</h4>
                    <h5>h5. This is a small header</h5>
                </div>
                <div class="col-12 col-md-6">
                    <h1 class="display1">Display 1</h1>
                    <h1 class="display2">Display 2</h1>
                    <h1 class="display3">Display 3</h1>
                </div>
                <h1 class="subtitle">Subtitle</h1>
                <h1 class="eyebrow">Eyebrow</h1>
                <p class="body">This is body text</p>
                <p class="caption">This is a caption</p>
                <p class="source-code">This is source code</p>
            </div> 
          </div>
        </div>`,
};

export const Body = Template.bind({});
Body.parameters = {
  title: 'Typograph/Body',
};
Body.args = {
  content: /* html */`
        <div class="section">
          <div class="block-wrapper">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>    
          </div>
        </div>`,
};

export const Code = Template.bind({});
Code.parameters = {
  title: 'Typograph/Code',
};
Code.args = {
  content: /* html */`
        <div class="section">
          <div class="block-wrapper">
            <code>const foo = 'bar';</code>
          </div>
        </div>`,
};

export const Eyebrow = Template.bind({});
Eyebrow.parameters = {
  title: 'Typograph/Eyebrow',
};
Eyebrow.args = {
  content: /* html */`
        <div class="section">
          <div class="block-wrapper">
            <p class='eyebrow'>Augmented Reality</p>
            <h1>A new world all around you</h1>
          </div>
        </div>`,
};

export const Subtitle = Template.bind({});
Subtitle.parameters = {
  title: 'Typograph/Subtitle',
};
Subtitle.args = {
  content: /* html */`
        <div class="section">
          <div class="block-wrapper">
            <h1>Video editing made simple</h1>
            <p class='subtitle'>Create videos with a single click. Add subtitles, transcript audio and more.</p>
          </div>
        </div>`,
};

export const Blockquote = Template.bind({});
Blockquote.parameters = {
  title: 'Typograph/Blockquote',
};
Blockquote.args = {
  content: /* html */`
        <div class="section">
          <div class="block-wrapper">
            <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</blockquote>
          </div>
        </div>`,
};

export const Demo = Template.bind({});
Demo.parameters = {
  title: 'Typograph/Demo',
};
Demo.args = {
  content: /* html */`
        <div class="section">
          <div class="block-wrapper">
            <p class='eyebrow'>Augmented Reality</p>
            <h1>A new world all around you</h1>
            <hr>
            <p>Sed ut perspiciatis unde omnis iste natus <a href="google.com">error sit voluptatem accusantium</a> doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>    
            <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</blockquote>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>    
          </div>
        </div>`,
};
