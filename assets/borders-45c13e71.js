import{j as e}from"./jsx-runtime-fea6ae26.js";import{M as a}from"./index-3ab93b07.js";import{t as i}from"./rosalind-light-3d0e7749.js";import{C as n}from"./index-fe87295f.js";import"./chunk-YFKH3BW3-10eb10af.js";import{u as l}from"./index-29c21c16.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./preload-helper-41c905a7.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-4c1fe476.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-8e5264e2.js";import"./chunk-XHUUYXNA-a69ea0a7.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-3EFM6HRY-454626f5.js";import"./_getTag-3f51d055.js";import"./index-3cd2bd67.js";import"./index-356e4a49.js";function D(o={}){const{wrapper:c}=Object.assign({},l(),o.components);return c?e.jsx(c,Object.assign({},o,{children:e.jsx(t,{})})):t();function t(){const r=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre"},l(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Docs/Developers/Mixins/Border"}),`
`,e.jsx(r.h1,{children:"Border Mixins"}),`
`,e.jsx(r.p,{children:"Rosalind provides the following mixin to work with borders."}),`
`,e.jsx(r.h2,{children:"Border Default"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"border-default"})," mixin creates a default border for the brand. This includes a ",e.jsx(r.code,{children:"sm"})," border width, a ",e.jsx(r.code,{children:"md"})," border radius and the ",e.jsx(r.code,{children:"base"})," border color."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`@mixin border-default;
`})}),`
`,e.jsx(r.h2,{children:"Border Color"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"border-color"})," mixin can be used to set a borders color."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`@mixin border-color {type};
`})}),`
`,e.jsxs("div",{className:"table margin-top",children:[e.jsxs("div",{children:[e.jsx("div",{children:"Parameter"}),`
`,e.jsx("div",{children:"Options"})]}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(r.code,{children:"type"})}),`
`,e.jsx("div",{children:Object.entries(i.semantic.color.border).map(([s,d])=>e.jsx(n,{k:s,value:d,url:"/?path=/docs/docs-developers-tokens-border--docs#border-color-tokens"}))})]})]}),`
`,e.jsx(r.h2,{children:"Border Width"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"border-width"})," mixin can be used to set an elements border width."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`@mixin border-width {size};
`})}),`
`,e.jsxs("div",{className:"table margin-top",children:[e.jsxs("div",{children:[e.jsx("div",{children:"Parameter"}),`
`,e.jsx("div",{children:"Options"})]}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(r.code,{children:"size"})}),`
`,e.jsx("div",{children:Object.entries(i.semantic["border-width"]).map(([s,d])=>e.jsx(n,{k:s,value:d,url:"/?path=/docs/docs-developers-tokens-border--docs#border-width-tokens"}))})]})]}),`
`,e.jsx(r.h2,{children:"Border Radius"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"border-radius"})," mixin can be used to set the border radius on all sides of an element"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`@mixin border-radius {size};
`})}),`
`,e.jsxs("div",{className:"table margin-top",children:[e.jsxs("div",{children:[e.jsx("div",{children:"Parameter"}),`
`,e.jsx("div",{children:"Options"})]}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(r.code,{children:"size"})}),`
`,e.jsx("div",{children:Object.entries(i.semantic["border-radius"]).map(([s,d])=>e.jsx(n,{k:s,value:d,url:"/?path=/docs/docs-developers-tokens-border--docs#border-radius-tokens"}))})]})]}),`
`,e.jsx(r.h2,{children:"Border Radius Top"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"border-radius-top"})," mixin can be used to set the border radius on the top corners of an element."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`@mixin border-radius-top {size};
`})}),`
`,e.jsxs("div",{className:"table margin-top",children:[e.jsxs("div",{children:[e.jsx("div",{children:"Parameter"}),`
`,e.jsx("div",{children:"Options"})]}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(r.code,{children:"size"})}),`
`,e.jsx("div",{children:Object.entries(i.semantic["border-radius"]).map(([s,d])=>e.jsx(n,{k:s,value:d,url:"/?path=/docs/docs-developers-tokens-border--docs#border-radius-tokens"}))})]})]}),`
`,e.jsx(r.h2,{children:"Border Radius Bottom"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"border-radius-bottom"})," mixin can be used to set the border radius on the bottom corners of an element."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`@mixin border-radius-bottom {size};
`})}),`
`,e.jsxs("div",{className:"table margin-top",children:[e.jsxs("div",{children:[e.jsx("div",{children:"Parameter"}),`
`,e.jsx("div",{children:"Options"})]}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(r.code,{children:"size"})}),`
`,e.jsx("div",{children:Object.entries(i.semantic["border-radius"]).map(([s,d])=>e.jsx(n,{k:s,value:d,url:"/?path=/docs/docs-developers-tokens-border--docs#border-radius-tokens"}))})]})]}),`
`,e.jsx(r.h2,{children:"Border Radius Left"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"border-radius-left"})," mixin can be used to set the border radius on the left corners of an element."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`@mixin border-radius-left {size};
`})}),`
`,e.jsxs("div",{className:"table margin-top",children:[e.jsxs("div",{children:[e.jsx("div",{children:"Parameter"}),`
`,e.jsx("div",{children:"Options"})]}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(r.code,{children:"size"})}),`
`,e.jsx("div",{children:Object.entries(i.semantic["border-radius"]).map(([s,d])=>e.jsx(n,{k:s,value:d,url:"/?path=/docs/docs-developers-tokens-border--docs#border-radius-tokens"}))})]})]}),`
`,e.jsx(r.h2,{children:"Border Radius Right"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"border-radius-right"})," mixin can be used to set the border radius on the right corners of an element."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`@mixin border-radius-left {size};
`})}),`
`,e.jsxs("div",{className:"table margin-top",children:[e.jsxs("div",{children:[e.jsx("div",{children:"Parameter"}),`
`,e.jsx("div",{children:"Options"})]}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(r.code,{children:"size"})}),`
`,e.jsx("div",{children:Object.entries(i.semantic["border-radius"]).map(([s,d])=>e.jsx(n,{k:s,value:d,url:"/?path=/docs/docs-developers-tokens-border--docs#border-radius-tokens"}))})]})]})]})}}export{D as default};
//# sourceMappingURL=borders-45c13e71.js.map
