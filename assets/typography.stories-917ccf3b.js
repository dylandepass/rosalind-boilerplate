var f={},A={get exports(){return f},set exports(y){f=y}};(function(y){function U(x){var o=void 0;typeof x=="string"?o=[x]:o=x.raw;for(var i="",t=0;t<o.length;t++)i+=o[t].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),t<(arguments.length<=1?0:arguments.length-1)&&(i+=arguments.length<=t+1?void 0:arguments[t+1]);var S=i.split(`
`),a=null;return S.forEach(function(s){var w=s.match(/^(\s+)\S+/);if(w){var T=w[1].length;a?a=Math.min(a,T):a=T}}),a!==null&&(i=S.map(function(s){return s[0]===" "?s.slice(a):s}).join(`
`)),i=i.trim(),i.replace(/\\n/g,`
`)}y.exports=U})(A);const e=f,k={title:"Design System/Atoms/Typography"},r={title:"Demo",render:()=>e`
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
    </div>`},n={title:"Display",render:()=>e`
    <div>
      <h1 class="display1">Display 1</h1>
      <h1 class="display2">Display 2</h1>
      <h1 class="display3">Display 3</h1>
    </div>`},u={title:"Headings",render:()=>e`
    <div class="story">
      <h1>h1. This is a very large header.</h1>
      <h2>h2. This is a large header</h2>
      <h3>h3. This is a medium header</h3>
      <h4>h4. This is a moderate header</h4>
      <h5>h5. This is a small header</h5>
    </div>`},l={title:"Subtitle",render:()=>e`
    <div class="story">
      <p class='subtitle'>Create videos with a single click. Add subtitles, transcript audio and more.</p>
    </div>`},d={title:"Eyebrow",render:()=>e`
    <div class="story">
      <p class='eyebrow'>Augmented Reality</p>
    </div>`},c={title:"Body",render:()=>e`
    <div class="story">
      <div class="block-wrapper">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>`},m={title:"Caption",render:()=>e`
    <div class="story">
      <p class="caption">This is a caption</p>
    </div>`},p={title:"Blockquote",render:()=>e`
    <div class="story">
      <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</blockquote>
    </div>`},h={title:"Code",render:()=>e`
    <div class="story">
      <code>const foo = \'bar\';</code>
    </div>`},v={title:"CSSUtility",render:()=>e`
    <div class="story">
      <h1>This is an h1</h1>
      <h2 class="h4">This is an h2, with the size of an h4</h2>
    </div>`},q={title:"FontSizeUtilities",parameters:{docs:{canvas:{sourceState:"shown"}}},render:()=>e`
    <div>
      <h1>This is an h1</h1>
      <h2 class="h4">This is an h2, with the size of an h4</h2>
    </div>`},g={title:"FontWeightUtilities",render:()=>e`
    <div class="story">
      <h3>This is an <span class="bold">h3</span></h3>
    </div>`},b={title:"TextAlignmentUtilities",render:()=>e`
    <div class="story">
      <div class="text-align-left">Let Aligned</div>
      <div class="text-align-center">Center Aligned</div>
      <div class="text-align-right">Right Aligned</div>
    </div>`};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  title: 'Demo',
  render: () => dedent /* html */\`
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
    </div>\`
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  title: 'Display',
  render: () => dedent /* html */\`
    <div>
      <h1 class="display1">Display 1</h1>
      <h1 class="display2">Display 2</h1>
      <h1 class="display3">Display 3</h1>
    </div>\`
}`,...n.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  title: 'Headings',
  render: () => dedent /* html */\`
    <div class="story">
      <h1>h1. This is a very large header.</h1>
      <h2>h2. This is a large header</h2>
      <h3>h3. This is a medium header</h3>
      <h4>h4. This is a moderate header</h4>
      <h5>h5. This is a small header</h5>
    </div>\`
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  title: 'Subtitle',
  render: () => dedent /* html */\`
    <div class="story">
      <p class='subtitle'>Create videos with a single click. Add subtitles, transcript audio and more.</p>
    </div>\`
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  title: 'Eyebrow',
  render: () => dedent /* html */\`
    <div class="story">
      <p class='eyebrow'>Augmented Reality</p>
    </div>\`
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  title: 'Body',
  render: () => dedent /* html */\`
    <div class="story">
      <div class="block-wrapper">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>\`
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  title: 'Caption',
  render: () => dedent /* html */\`
    <div class="story">
      <p class="caption">This is a caption</p>
    </div>\`
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  title: 'Blockquote',
  render: () => dedent /* html */\`
    <div class="story">
      <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</blockquote>
    </div>\`
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  title: 'Code',
  render: () => dedent /* html */\`
    <div class="story">
      <code>const foo = \\'bar\\';</code>
    </div>\`
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  title: 'CSSUtility',
  render: () => dedent /* html */\`
    <div class="story">
      <h1>This is an h1</h1>
      <h2 class="h4">This is an h2, with the size of an h4</h2>
    </div>\`
}`,...v.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  title: 'FontSizeUtilities',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  render: () => dedent /* html */\`
    <div>
      <h1>This is an h1</h1>
      <h2 class="h4">This is an h2, with the size of an h4</h2>
    </div>\`
}`,...q.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  title: 'FontWeightUtilities',
  render: () => dedent /* html */\`
    <div class="story">
      <h3>This is an <span class="bold">h3</span></h3>
    </div>\`
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  title: 'TextAlignmentUtilities',
  render: () => dedent /* html */\`
    <div class="story">
      <div class="text-align-left">Let Aligned</div>
      <div class="text-align-center">Center Aligned</div>
      <div class="text-align-right">Right Aligned</div>
    </div>\`
}`,...b.parameters?.docs?.source}}};const D=["Demo","Display","Headings","Subtitle","Eyebrow","Body","Caption","Blockquote","Code","CSSUtility","FontSizeUtilities","FontWeightUtilities","TextAlignmentUtilities"];export{p as Blockquote,c as Body,v as CSSUtility,m as Caption,h as Code,r as Demo,n as Display,d as Eyebrow,q as FontSizeUtilities,g as FontWeightUtilities,u as Headings,l as Subtitle,b as TextAlignmentUtilities,D as __namedExportsOrder,k as default};
//# sourceMappingURL=typography.stories-917ccf3b.js.map
