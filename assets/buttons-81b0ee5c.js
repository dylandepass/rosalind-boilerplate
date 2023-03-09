import{j as n}from"./jsx-runtime-f9d62efa.js";import{M as i,S as t}from"./index-e85d51fa.js";import{AuthoredButtons as c,Primary as d,Secondary as l,Quiet as h,PrimaryIcon as p}from"./buttons.stories-e5b4b42b.js";import{u as a}from"./index-8063ddaf.js";import"./index-0285b6c4.js";import"./_commonjsHelpers-87174ba5.js";import"./preload-helper-41c905a7.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-84070ec7.js";import"./index-d95f4d35.js";import"./memoizerific-6211ecf2.js";import"./index-a1177552.js";import"./chunk-RDJSMFWU-adca00a4.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-Y5O7ZP4P-e999ce82.js";import"./index-fdaea41f.js";import"./_baseToString-e7f1b41f.js";import"./_getTag-5e1ca3fd.js";import"./isEqual-ebac266f.js";import"./index-25e212b3.js";import"./_defineProperty-118703d3.js";import"./uniq-2965a0d1.js";import"./index-633d3215.js";import"./index-1013ef18.js";import"./index-2056e04f.js";import"./index-b6208cf6.js";import"./index-7ef75b89.js";import"./index-d2f0a3f4.js";import"./lib-franklin-9f927fae.js";import"./scripts-9b00f020.js";function V(o={}){const{wrapper:r}=Object.assign({},a(),o.components);return r?n.jsx(r,Object.assign({},o,{children:n.jsx(s,{})})):s();function s(){const e=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",a:"a",code:"code",h4:"h4",pre:"pre"},a(),o.components);return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Docs/Developers/Buttons"}),`
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
`})})]})}}export{V as default};
//# sourceMappingURL=buttons-81b0ee5c.js.map
