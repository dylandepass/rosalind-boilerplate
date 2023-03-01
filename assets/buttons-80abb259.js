import{j as n}from"./jsx-runtime-ccada58e.js";import{M as i,S as t}from"./index-a10c4dc9.js";import{AuthoredButtons as c,Primary as d,Secondary as l,Quiet as h,PrimaryIcon as p}from"./buttons.stories-989ac18c.js";import{u as a}from"./index-9ec211f2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./preload-helper-41c905a7.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-f8ff18ba.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-a224d31d.js";import"./chunk-XHUUYXNA-a398bfb0.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-3EFM6HRY-454626f5.js";import"./_baseToString-53b55ec4.js";import"./_getTag-7cbcf524.js";import"./isEqual-d0561132.js";import"./index-7fb38eb9.js";import"./uniq-74fc131e.js";import"./index-356e4a49.js";import"./index-84541fd3.js";import"./index-a6c8ef6f.js";import"./index-dd503cea.js";import"./lib-franklin-c0d56926.js";import"./scripts-bd5fbd8d.js";function X(o={}){const{wrapper:r}=Object.assign({},a(),o.components);return r?n.jsx(r,Object.assign({},o,{children:n.jsx(s,{})})):s();function s(){const e=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",a:"a",code:"code",h4:"h4",pre:"pre"},a(),o.components);return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Docs/Developers/Buttons"}),`
`,n.jsx(e.h1,{children:"Buttons"}),`
`,n.jsx(e.p,{children:"Buttons can be created one of two ways. By an author in a document or programatically in javascript by a developer."}),`
`,n.jsx(e.h2,{children:"Authored Button"}),`
`,n.jsx(e.p,{children:"Buttons can be created in authored documents (word doc) and have the ability to be styled as a primary, secondary or quiet button. To do this simply create a link in the document that is on its own line. Any links that are created inline with a paragraph of text will be rendered as hyperlinks and not as a button."}),`
`,n.jsx(e.h3,{children:"Demo"}),`
`,n.jsx(t,{of:c}),`
`,n.jsxs(e.p,{children:["The source document for this demo can be seen ",n.jsx(e.a,{href:"https://docs.google.com/document/d/10BJaKMVvzCg5EgG_09WrrssIAYlL46VB9zZpk_BF_bY/edit#heading=h.pfvofwquxuwe",children:"here"}),"."]}),`
`,n.jsx(e.h2,{children:"Buttons created in javascript"}),`
`,n.jsxs(e.p,{children:["Buttons can be constructed in javascript using the two classes ",n.jsx(e.code,{children:"button"})," and one of ",n.jsx(e.code,{children:"primary"}),", ",n.jsx(e.code,{children:"secondary"})," or ",n.jsx(e.code,{children:"quiet"}),". These classes can be used on an ",n.jsx(e.code,{children:"a"})," or a ",n.jsx(e.code,{children:"button"})," tag. The ",n.jsx(e.code,{children:"button-container"})," wrapper around the button adds margins around the button, it is added as part of the franklin decoration process so it is best to include it when buttons are created programatically."]}),`
`,n.jsx(e.h3,{children:"Primary Buttons"}),`
`,n.jsx(t,{of:d}),`
`,n.jsx(e.h4,{children:"Code Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<p class="button-container">
    <a title="primary" class="button primary">Primary</a>
</p>
`})}),`
`,n.jsx(e.h3,{children:"Secondary Buttons"}),`
`,n.jsx(t,{of:l}),`
`,n.jsx(e.h4,{children:"Code Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<p class="button-container">
    <a title="secondary" class="button secondary">Secondary</a>
</p>
`})}),`
`,n.jsx(e.h3,{children:"Quiet Buttons"}),`
`,n.jsx(t,{of:h}),`
`,n.jsx(e.h4,{children:"Code Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<p class="button-container">
    <a title="quiet" class="button quiet">Quiet</a>
</p>
`})}),`
`,n.jsx(e.h2,{children:"Icon Buttons created in javascript"}),`
`,n.jsxs(e.p,{children:["To include an icon in a button you can use the ",n.jsx(e.code,{children:"decorateIcons"})," function to decorate a ",n.jsx(e.code,{children:"span"})," element as an icon. The ",n.jsx(e.code,{children:"decorateIcons"})," function will load the icon form the ",n.jsx(e.code,{children:"icons"})," folder. In the example below the ",n.jsx(e.code,{children:"icon-plus"})," class tells ",n.jsx(e.code,{children:"decorateIcons"})," to look for ",n.jsx(e.code,{children:"plus.svg"})," in the ",n.jsx(e.code,{children:"/icons"})," directory and load it into the span."]}),`
`,n.jsx(t,{of:p}),`
`,n.jsx(e.h4,{children:"Code Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<p class="button-container">
    <a title="primary" class="button primary"><span class="icon icon-plus"></span>Primary</a>
</p>
`})}),`
`,n.jsxs(e.p,{children:["The HTMLElement above should then be passed into the ",n.jsx(e.code,{children:"decorateIcons"})," function to load the icon inside the span. Below is a full example."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { decorateIcons } from 'lib-franklin.js';

const container = document.createElement('p');
container.classList.add('button-container');
container.innerHTML = \`<a title="primary" class="button primary"><span class='icon icon-plus'></span>Primary</a>\`;
decorateIcons(container);
`})})]})}}export{X as default};
//# sourceMappingURL=buttons-80abb259.js.map
