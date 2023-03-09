import{j as i}from"./jsx-runtime-f9d62efa.js";import{M as p}from"./index-ae9ef16c.js";import{t as r}from"./rosalind-light-61e38815.js";import{C as d}from"./index-1664e58b.js";import{u as c}from"./index-8063ddaf.js";import"./index-0285b6c4.js";import"./_commonjsHelpers-87174ba5.js";import"./preload-helper-41c905a7.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-84070ec7.js";import"./index-d95f4d35.js";import"./memoizerific-6211ecf2.js";import"./index-a1177552.js";import"./chunk-RDJSMFWU-adca00a4.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-Y5O7ZP4P-e999ce82.js";import"./index-fdaea41f.js";import"./_baseToString-e7f1b41f.js";import"./_getTag-5e1ca3fd.js";import"./isEqual-ebac266f.js";import"./index-25e212b3.js";import"./_defineProperty-118703d3.js";import"./uniq-2965a0d1.js";import"./index-633d3215.js";import"./index-1013ef18.js";function F(a={}){const{wrapper:t}=Object.assign({},c(),a.components);return t?i.jsx(t,Object.assign({},a,{children:i.jsx(o,{})})):o();function o(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",h3:"h3",pre:"pre",h4:"h4"},c(),a.components);return i.jsxs(i.Fragment,{children:[i.jsx(p,{title:"Docs/Developers/Mixins/Spacing"}),`
`,i.jsx(n.h1,{children:"Spacing Mixins"}),`
`,i.jsx(n.p,{children:"Rosalind provides the following mixins to work with paddings, margin and gutters."}),`
`,i.jsx(n.h2,{children:"Padding Mixins"}),`
`,i.jsxs(n.p,{children:["Each mixins includes a required ",i.jsx(n.code,{children:"size"})," parameter that is used to determine this size of the padding to use."]}),`
`,i.jsx(n.h3,{children:"Mixins"}),`
`,i.jsx(n.p,{children:"Set the padding on all sides (padding-top, padding-right, padding-bottom, padding-left)."}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-css",children:`@mixin padding {size};
`})}),`
`,i.jsx(n.p,{children:"Set the padding of an individual side."}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-css",children:`@mixin padding-top {size};

@mixin padding-bottom {size};

@mixin padding-left {size};

@mixin padding-right {size};
`})}),`
`,i.jsx(n.p,{children:"Set the vertical or horizontal padding."}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-css",children:`@mixin padding-vertical {size};

@mixin padding-horizontal {size};
`})}),`
`,i.jsx(n.h4,{children:"Size Parameter"}),`
`,i.jsxs("div",{className:"table margin-top",children:[i.jsxs("div",{children:[i.jsx("div",{children:"Parameter"}),`
`,i.jsx("div",{children:"Options"})]}),i.jsxs("div",{children:[i.jsx("div",{children:i.jsx(n.code,{children:"size"})}),`
`,i.jsx("div",{children:Object.entries(r.semantic.spacing.around.component).map(([e,s])=>i.jsx(d,{k:e,value:s,url:"/?path=/docs/synergy-design-system-developer-docs-tokens-space--docs#space-around-components-tokens"}))})]})]}),`
`,i.jsx(n.h4,{children:"Padding by breakpoint"}),`
`,i.jsx(n.p,{children:"Setting the padding based on a breakpoint is also supported."}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-css",children:`@mixin padding-{breakpoint} {size};

@mixin padding-{breakpoint}-top {size};

@mixin padding-{breakpoint}-bottom {size};

@mixin padding-{breakpoint}-left {size};

@mixin padding-{breakpoint}-right {size};

@mixin padding-{breakpoint}-vertical {size};

@mixin padding-{breakpoint}-horizontal {size};
`})}),`
`,i.jsx(n.h4,{children:"Parameters"}),`
`,i.jsxs("div",{className:"table margin-top",children:[i.jsxs("div",{children:[i.jsx("div",{children:"Parameter"}),`
`,i.jsx("div",{children:"Options"})]}),i.jsxs("div",{children:[i.jsx("div",{children:i.jsx(n.code,{children:"breakpoint"})}),`
`,i.jsx("div",{children:Object.entries(r.semantic.size.breakpoints).map(([e,s])=>i.jsx(d,{k:e,value:s,url:"/?path=/docs/synergy-design-system-developer-docs-tokens-size--docs#breakpoint-tokens"}))})]}),i.jsxs("div",{children:[i.jsx("div",{children:i.jsx(n.code,{children:"size"})}),`
`,i.jsx("div",{children:Object.entries(r.semantic.spacing.around.component).map(([e,s])=>i.jsx(d,{k:e,value:s,url:"/?path=/docs/synergy-design-system-developer-docs-tokens-space--docs#space-around-components-tokens"}))})]})]}),`
`,i.jsx(n.h2,{children:"Margin Mixins"}),`
`,i.jsx(n.p,{children:"Rosalind provides the following mixins to work with margins."}),`
`,i.jsxs(n.p,{children:["Each mixins includes a required ",i.jsx(n.code,{children:"size"})," parameter that is used to determine this size of the padding to use."]}),`
`,i.jsx(n.h3,{children:"Mixins"}),`
`,i.jsx(n.p,{children:"Set the margin on all sides (margin-top, margin-right, margin-bottom, padding-left)."}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-css",children:`@mixin margin {size};
`})}),`
`,i.jsx(n.p,{children:"Set the margin of an individual side."}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-css",children:`@mixin margin-top {size};

@mixin margin-bottom {size};

@mixin margin-left {size};

@mixin margin-right {size};
`})}),`
`,i.jsx(n.p,{children:"Set the vertical or horizontal margin."}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-css",children:`@mixin margin-vertical {size};

@mixin margin-horizontal {size};
`})}),`
`,i.jsx(n.h4,{children:"Size Parameter"}),`
`,i.jsxs("div",{className:"table margin-top",children:[i.jsxs("div",{children:[i.jsx("div",{children:"Parameter"}),`
`,i.jsx("div",{children:"Options"})]}),i.jsxs("div",{children:[i.jsx("div",{children:i.jsx(n.code,{children:"size"})}),`
`,i.jsx("div",{children:Object.entries(r.semantic.spacing.around.component).map(([e,s])=>i.jsx(d,{k:e,value:s,url:"/?path=/docs/synergy-design-system-developer-docs-tokens-space--docs#space-around-components-tokens"}))})]})]}),`
`,i.jsx(n.h4,{children:"Margin by breakpoint"}),`
`,i.jsx(n.p,{children:"Setting the margin based on a breakpoint is also supported."}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-css",children:`@mixin margin-{breakpoint} {size};

@mixin margin-{breakpoint}-top {size};

@mixin margin-{breakpoint}-bottom {size};

@mixin margin-{breakpoint}-left {size};

@mixin margin-{breakpoint}-right {size};

@mixin margin-{breakpoint}-vertical {size};

@mixin margin-{breakpoint}-horizontal {size};
`})}),`
`,i.jsx(n.h4,{children:"Parameters"}),`
`,i.jsxs("div",{className:"table margin-top",children:[i.jsxs("div",{children:[i.jsx("div",{children:"Parameter"}),`
`,i.jsx("div",{children:"Options"})]}),i.jsxs("div",{children:[i.jsx("div",{children:i.jsx(n.code,{children:"breakpoint"})}),`
`,i.jsx("div",{children:Object.entries(r.semantic.size.breakpoints).map(([e,s])=>i.jsx(d,{k:e,value:s,url:"/?path=/docs/docs-developers-tokens-space--docs#breakpoint-tokens"}))})]}),i.jsxs("div",{children:[i.jsx("div",{children:i.jsx(n.code,{children:"size"})}),`
`,i.jsx("div",{children:Object.entries(r.semantic.spacing.around.component).map(([e,s])=>i.jsx(d,{k:e,value:s,url:"/?path=/docs/docs-developers-tokens-space--docs#space-around-components-tokens"}))})]})]})]})}}export{F as default};
//# sourceMappingURL=spacing-9c12369f.js.map
