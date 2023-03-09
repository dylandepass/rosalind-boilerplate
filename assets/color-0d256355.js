import{j as e}from"./jsx-runtime-f9d62efa.js";import{M as a}from"./index-ae9ef16c.js";import{t as s}from"./rosalind-light-61e38815.js";import{C as d}from"./index-1664e58b.js";import{u as l}from"./index-8063ddaf.js";import"./index-0285b6c4.js";import"./_commonjsHelpers-87174ba5.js";import"./preload-helper-41c905a7.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-84070ec7.js";import"./index-d95f4d35.js";import"./memoizerific-6211ecf2.js";import"./index-a1177552.js";import"./chunk-RDJSMFWU-adca00a4.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-Y5O7ZP4P-e999ce82.js";import"./index-fdaea41f.js";import"./_baseToString-e7f1b41f.js";import"./_getTag-5e1ca3fd.js";import"./isEqual-ebac266f.js";import"./index-25e212b3.js";import"./_defineProperty-118703d3.js";import"./uniq-2965a0d1.js";import"./index-633d3215.js";import"./index-1013ef18.js";function z(i={}){const{wrapper:c}=Object.assign({},l(),i.components);return c?e.jsx(c,Object.assign({},i,{children:e.jsx(t,{})})):t();function t(){const o=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre"},l(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Docs/Developers/Mixins/Color"}),`
`,e.jsx(o.h1,{children:"Color Mixins"}),`
`,e.jsx(o.p,{children:"Rosalind provides the following mixins to work with colors."}),`
`,e.jsx(o.h2,{children:"Background Color Mixins"}),`
`,e.jsxs(o.p,{children:["The Rosalind Design System supplies three primary background color types: ",e.jsx(o.code,{children:"base"}),", ",e.jsx(o.code,{children:"layer-1"}),", and ",e.jsx(o.code,{children:"layer-2"}),". The ",e.jsx(o.code,{children:"background-color"})," mixin can be utilized to select one of these color types and avoid having to work with the tokens directly."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`@mixin background-color {type};
`})}),`
`,e.jsxs("div",{className:"table margin-top",children:[e.jsxs("div",{children:[e.jsx("div",{children:"Parameter"}),`
`,e.jsx("div",{children:"Options"})]}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(o.code,{children:"type"})}),`
`,e.jsx("div",{children:Object.entries(s.semantic.color.background).map(([r,n])=>e.jsx(d,{k:r,value:n,url:"/?path=/docs/docs-developers-tokens-color--docs#background-color-tokens"}))})]})]}),`
`,e.jsx(o.h2,{children:"Foreground Color Mixins"}),`
`,e.jsxs(o.p,{children:["Each background color may require a different foreground color for typography and icons. In addition, there are different levels of foreground color including ",e.jsx(o.code,{children:"default"}),", ",e.jsx(o.code,{children:"subtle"})," and ",e.jsx(o.code,{children:"muted"}),"."]}),`
`,e.jsxs(o.p,{children:["To this end, the ",e.jsx(o.code,{children:"foreground-color"})," mixin can be used to select the correct foreground color given the layer type it sits on."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`@mixin foreground-color {type}, {style};
`})}),`
`,e.jsxs("div",{className:"table margin-top",children:[e.jsxs("div",{children:[e.jsx("div",{children:"Parameter"}),`
`,e.jsx("div",{children:"Options"}),`
`,e.jsx("div",{children:"Default"})]}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(o.code,{children:"type"})}),`
`,e.jsx("div",{children:Object.entries(s.semantic.color.foreground).map(([r,n])=>e.jsx(d,{k:r,value:n,url:"/?path=/docs/docs-developers-tokens-color--docs#foreground-color-tokens"}))}),`
`,e.jsx("div",{children:e.jsx(o.code,{children:"base"})})]}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(o.code,{children:"style"})}),`
`,e.jsx("div",{children:Object.entries(s.semantic.color.foreground["on-layer-1"]).map(([r,n])=>e.jsx(d,{k:r,value:n,url:"/?path=/docs/docs-developers-tokens-color--docs#foreground-color-tokens"}))}),`
`,e.jsx("div",{children:e.jsx(o.code,{children:"default"})})]})]})]})}}export{z as default};
//# sourceMappingURL=color-0d256355.js.map
