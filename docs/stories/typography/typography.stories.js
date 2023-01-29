/* eslint-disable import/no-extraneous-dependencies, no-unused-vars */

import dedent from 'dedent';

export default {
  title: 'Design System/Atoms/Typography',
};

export const Demo = {
  title: 'Demo',
  render: () => dedent/* html */`
    <div class="story">
      <div class="block-wrapper">
        <p class='eyebrow'>Augmented Reality</p>
        <h1>A new world all around you</h1>
        <p class='subtitle'>Create videos with a single click. Add subtitles, transcript audio and more.</p>
        <hr>
        <p>Sed ut perspiciatis unde omnis iste natus <a href="google.com">error sit voluptatem accusantium</a> doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>    
        <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</blockquote>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>    
      </div>
    </div>`,
};

export const Display = {
  title: 'Display',
  render: () => dedent/* html */`
    <div>
      <h1 class="display1">Display 1</h1>
      <h1 class="display2">Display 2</h1>
      <h1 class="display3">Display 3</h1>
    </div>`,
};

export const Headings = {
  title: 'Headings',
  render: () => dedent/* html */`
    <div class="story">
      <h1>h1. This is a very large header.</h1>
      <h2>h2. This is a large header</h2>
      <h3>h3. This is a medium header</h3>
      <h4>h4. This is a moderate header</h4>
      <h5>h5. This is a small header</h5>
    </div>`,
};

export const Subtitle = {
  title: 'Subtitle',
  render: () => dedent/* html */`
    <div class="story">
      <p class='subtitle'>Create videos with a single click. Add subtitles, transcript audio and more.</p>
    </div>`,
};

export const Eyebrow = {
  title: 'Eyebrow',
  render: () => dedent/* html */`
    <div class="story">
      <p class='eyebrow'>Augmented Reality</p>
    </div>`,
};

export const Body = {
  title: 'Body',
  render: () => dedent/* html */`
    <div class="story">
      <div class="block-wrapper">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>`,
};

export const Caption = {
  title: 'Caption',
  render: () => dedent/* html */`
    <div class="story">
      <p class="caption">This is a caption</p>
    </div>`,
};

export const Blockquote = {
  title: 'Blockquote',
  render: () => dedent/* html */`
    <div class="story">
      <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</blockquote>
    </div>`,
};

export const Code = {
  title: 'Code',
  render: () => dedent/* html */`
    <div class="story">
      <code>const foo = \'bar\';</code>
    </div>`,
};

export const CSSUtility = {
  title: 'CSSUtility',
  render: () => dedent/* html */`
    <div class="story">
      <h1>This is an h1</h1>
      <h2 class="h4">This is an h2, with the size of an h4</h2>
    </div>`,
};

export const FontSizeUtilities = {
  title: 'FontSizeUtilities',
  parameters: { docs: { canvas: { sourceState: 'shown' } } },
  render: () => dedent/* html */`
    <div>
      <h1>This is an h1</h1>
      <h2 class="h4">This is an h2, with the size of an h4</h2>
    </div>`,
};

export const FontWeightUtilities = {
  title: 'FontWeightUtilities',
  render: () => dedent/* html */`
    <div class="story">
      <h3>This is an <span class="bold">h3</span></h3>
    </div>`,
};

export const TextAlignmentUtilities = {
  title: 'TextAlignmentUtilities',
  render: () => dedent/* html */`
    <div class="story">
      <div class="text-align-left">Let Aligned</div>
      <div class="text-align-center">Center Aligned</div>
      <div class="text-align-right">Right Aligned</div>
    </div>`,
};
