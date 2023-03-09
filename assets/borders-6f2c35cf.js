import{j as e}from"./jsx-runtime-f9d62efa.js";import{M as a}from"./index-ae9ef16c.js";import{t as i}from"./rosalind-light-61e38815.js";import{C as n}from"./index-1664e58b.js";import"./chunk-YFKH3BW3-dff9d29b.js";import{u as l}from"./index-8063ddaf.js";import"./index-0285b6c4.js";import"./_commonjsHelpers-87174ba5.js";import"./preload-helper-41c905a7.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-84070ec7.js";import"./index-d95f4d35.js";import"./memoizerific-6211ecf2.js";import"./index-a1177552.js";import"./chunk-RDJSMFWU-adca00a4.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-Y5O7ZP4P-e999ce82.js";import"./index-fdaea41f.js";import"./_baseToString-e7f1b41f.js";import"./_getTag-5e1ca3fd.js";import"./isEqual-ebac266f.js";import"./index-25e212b3.js";import"./_defineProperty-118703d3.js";import"./uniq-2965a0d1.js";import"./index-633d3215.js";import"./index-1013ef18.js";function F(o={}){const{wrapper:c}=Object.assign({},l(),o.components);return c?e.jsx(c,Object.assign({},o,{children:e.jsx(t,{})})):t();function t(){const r=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre"},l(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Docs/Developers/Mixins/Border"}),`
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
`,e.jsx("div",{children:Object.entries(i.semantic["border-radius"]).map(([s,d])=>e.jsx(n,{k:s,value:d,url:"/?path=/docs/docs-developers-tokens-border--docs#border-radius-tokens"}))})]})]})]})}}export{F as default};
//# sourceMappingURL=borders-6f2c35cf.js.map
