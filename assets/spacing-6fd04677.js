import{j as n}from"./jsx-runtime-fea6ae26.js";import{M as l}from"./index-3ab93b07.js";import{t as r}from"./rosalind-light-3d0e7749.js";import{C as d}from"./index-fe87295f.js";import{u as c}from"./index-29c21c16.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./preload-helper-41c905a7.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-4c1fe476.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-8e5264e2.js";import"./chunk-XHUUYXNA-a69ea0a7.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-3EFM6HRY-454626f5.js";import"./_getTag-3f51d055.js";import"./index-3cd2bd67.js";import"./index-356e4a49.js";function D(a={}){const{wrapper:t}=Object.assign({},c(),a.components);return t?n.jsx(t,Object.assign({},a,{children:n.jsx(o,{})})):o();function o(){const i=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",h3:"h3",pre:"pre",h4:"h4"},c(),a.components);return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"Docs/Developers/Mixins/Spacing"}),`
`,n.jsx(i.h1,{children:"Spacing Mixins"}),`
`,n.jsx(i.p,{children:"Rosalind provides the following mixins to work with paddings, margin and gutters."}),`
`,n.jsx(i.h2,{children:"Padding Mixins"}),`
`,n.jsxs(i.p,{children:["Each mixins includes a required ",n.jsx(i.code,{children:"size"})," parameter that is used to determine this size of the padding to use."]}),`
`,n.jsx(i.h3,{children:"Mixins"}),`
`,n.jsx(i.p,{children:"Set the padding on all sides (padding-top, padding-right, padding-bottom, padding-left)."}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-css",children:`@mixin padding {size};
`})}),`
`,n.jsx(i.p,{children:"Set the padding of an individual side."}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-css",children:`@mixin padding-top {size};

@mixin padding-bottom {size};

@mixin padding-left {size};

@mixin padding-right {size};
`})}),`
`,n.jsx(i.p,{children:"Set the vertical or horizontal padding."}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-css",children:`@mixin padding-vertical {size};

@mixin padding-horizontal {size};
`})}),`
`,n.jsx(i.h4,{children:"Size Parameter"}),`
`,n.jsxs("div",{className:"table margin-top",children:[n.jsxs("div",{children:[n.jsx("div",{children:"Parameter"}),`
`,n.jsx("div",{children:"Options"})]}),n.jsxs("div",{children:[n.jsx("div",{children:n.jsx(i.code,{children:"size"})}),`
`,n.jsx("div",{children:Object.entries(r.semantic.spacing.around.component).map(([e,s])=>n.jsx(d,{k:e,value:s,url:"/?path=/docs/synergy-design-system-developer-docs-tokens-space--docs#space-around-components-tokens"}))})]})]}),`
`,n.jsx(i.h4,{children:"Padding by breakpoint"}),`
`,n.jsx(i.p,{children:"Setting the padding based on a breakpoint is also supported."}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-css",children:`@mixin padding-{breakpoint} {size};

@mixin padding-{breakpoint}-top {size};

@mixin padding-{breakpoint}-bottom {size};

@mixin padding-{breakpoint}-left {size};

@mixin padding-{breakpoint}-right {size};

@mixin padding-{breakpoint}-vertical {size};

@mixin padding-{breakpoint}-horizontal {size};
`})}),`
`,n.jsx(i.h4,{children:"Parameters"}),`
`,n.jsxs("div",{className:"table margin-top",children:[n.jsxs("div",{children:[n.jsx("div",{children:"Parameter"}),`
`,n.jsx("div",{children:"Options"})]}),n.jsxs("div",{children:[n.jsx("div",{children:n.jsx(i.code,{children:"breakpoint"})}),`
`,n.jsx("div",{children:Object.entries(r.semantic.size.breakpoints).map(([e,s])=>n.jsx(d,{k:e,value:s,url:"/?path=/docs/synergy-design-system-developer-docs-tokens-size--docs#breakpoint-tokens"}))})]}),n.jsxs("div",{children:[n.jsx("div",{children:n.jsx(i.code,{children:"size"})}),`
`,n.jsx("div",{children:Object.entries(r.semantic.spacing.around.component).map(([e,s])=>n.jsx(d,{k:e,value:s,url:"/?path=/docs/synergy-design-system-developer-docs-tokens-space--docs#space-around-components-tokens"}))})]})]}),`
`,n.jsx(i.h2,{children:"Margin Mixins"}),`
`,n.jsx(i.p,{children:"Rosalind provides the following mixins to work with margins."}),`
`,n.jsxs(i.p,{children:["Each mixins includes a required ",n.jsx(i.code,{children:"size"})," parameter that is used to determine this size of the padding to use."]}),`
`,n.jsx(i.h3,{children:"Mixins"}),`
`,n.jsx(i.p,{children:"Set the margin on all sides (margin-top, margin-right, margin-bottom, padding-left)."}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-css",children:`@mixin margin {size};
`})}),`
`,n.jsx(i.p,{children:"Set the margin of an individual side."}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-css",children:`@mixin margin-top {size};

@mixin margin-bottom {size};

@mixin margin-left {size};

@mixin margin-right {size};
`})}),`
`,n.jsx(i.p,{children:"Set the vertical or horizontal margin."}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-css",children:`@mixin margin-vertical {size};

@mixin margin-horizontal {size};
`})}),`
`,n.jsx(i.h4,{children:"Size Parameter"}),`
`,n.jsxs("div",{className:"table margin-top",children:[n.jsxs("div",{children:[n.jsx("div",{children:"Parameter"}),`
`,n.jsx("div",{children:"Options"})]}),n.jsxs("div",{children:[n.jsx("div",{children:n.jsx(i.code,{children:"size"})}),`
`,n.jsx("div",{children:Object.entries(r.semantic.spacing.around.component).map(([e,s])=>n.jsx(d,{k:e,value:s,url:"/?path=/docs/synergy-design-system-developer-docs-tokens-space--docs#space-around-components-tokens"}))})]})]}),`
`,n.jsx(i.h4,{children:"Margin by breakpoint"}),`
`,n.jsx(i.p,{children:"Setting the margin based on a breakpoint is also supported."}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-css",children:`@mixin margin-{breakpoint} {size};

@mixin margin-{breakpoint}-top {size};

@mixin margin-{breakpoint}-bottom {size};

@mixin margin-{breakpoint}-left {size};

@mixin margin-{breakpoint}-right {size};

@mixin margin-{breakpoint}-vertical {size};

@mixin margin-{breakpoint}-horizontal {size};
`})}),`
`,n.jsx(i.h4,{children:"Parameters"}),`
`,n.jsxs("div",{className:"table margin-top",children:[n.jsxs("div",{children:[n.jsx("div",{children:"Parameter"}),`
`,n.jsx("div",{children:"Options"})]}),n.jsxs("div",{children:[n.jsx("div",{children:n.jsx(i.code,{children:"breakpoint"})}),`
`,n.jsx("div",{children:Object.entries(r.semantic.size.breakpoints).map(([e,s])=>n.jsx(d,{k:e,value:s,url:"/?path=/docs/docs-developers-tokens-space--docs#breakpoint-tokens"}))})]}),n.jsxs("div",{children:[n.jsx("div",{children:n.jsx(i.code,{children:"size"})}),`
`,n.jsx("div",{children:Object.entries(r.semantic.spacing.around.component).map(([e,s])=>n.jsx(d,{k:e,value:s,url:"/?path=/docs/docs-developers-tokens-space--docs#space-around-components-tokens"}))})]})]})]})}}export{D as default};
//# sourceMappingURL=spacing-6fd04677.js.map
