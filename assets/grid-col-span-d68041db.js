import{j as n}from"./jsx-runtime-f9d62efa.js";import{M as d,S as c}from"./index-e85d51fa.js";import{SpanColumns as l}from"./grid.stories-a68185fd.js";import{u as r}from"./index-8063ddaf.js";import"./index-0285b6c4.js";import"./_commonjsHelpers-87174ba5.js";import"./preload-helper-41c905a7.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-84070ec7.js";import"./index-d95f4d35.js";import"./memoizerific-6211ecf2.js";import"./index-a1177552.js";import"./chunk-RDJSMFWU-adca00a4.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-Y5O7ZP4P-e999ce82.js";import"./index-fdaea41f.js";import"./_baseToString-e7f1b41f.js";import"./_getTag-5e1ca3fd.js";import"./isEqual-ebac266f.js";import"./index-25e212b3.js";import"./_defineProperty-118703d3.js";import"./uniq-2965a0d1.js";import"./index-633d3215.js";import"./index-1013ef18.js";function E(s={}){const{wrapper:e}=Object.assign({},r(),s.components);return e?n.jsx(e,Object.assign({},s,{children:n.jsx(o,{})})):o();function o(){const i=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h3:"h3"},r(),s.components);return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"Docs/Developers/Mixins/Grid/grid-col-span"}),`
`,n.jsx(i.h1,{children:"grid-col-span"}),`
`,n.jsxs(i.p,{children:["The ",n.jsx(i.code,{children:"grid-col-span"})," mixin can be used to span grid columns."]}),`
`,n.jsx(c,{of:l}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-html",children:`<div class="grid-demo-span-columns">
    <div>col (span 3)</div>
    <div>col (span 9)</div>
    <div>col (span 3)</div>
    <div>col (span 9)</div>
</div>
`})}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-css",children:`.grid-demo-span-columns {
    display: grid;
    @mixin grid-cols 12;

    & > div {
        &:nth-child(even) {
            @mixin grid-col-span 9;
        }

        &:nth-child(odd) {
            @mixin grid-col-span 3;
        }
    }
}
`})}),`
`,n.jsx(i.h3,{children:"Responsive Column Span"}),`
`,n.jsx(i.p,{children:"The column span can be adjusted by breakpoint using the responsive versions of the column span mixins."}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-css",children:`@mixin grid-{breakpoint}-col-span {columns};
`})}),`
`,n.jsxs("div",{className:"table margin-bottom",children:[n.jsxs("div",{children:[n.jsx("div",{children:"Parameter"}),`
`,n.jsx("div",{children:"Options"})]}),n.jsxs("div",{children:[n.jsx("div",{children:n.jsx(i.code,{children:"breakpoint"})}),`
`,n.jsxs("div",{children:[n.jsx(i.code,{children:"sm"})," ",n.jsx(i.code,{children:"md"})," ",n.jsx(i.code,{children:"lg"})," ",n.jsx(i.code,{children:"xl"})," ",n.jsx(i.code,{children:"xxl"})]})]}),n.jsxs("div",{children:[n.jsx("div",{children:n.jsx(i.code,{children:"columns"})}),`
`,n.jsx("div",{children:"The number of columns to span"})]})]})]})}}export{E as default};
//# sourceMappingURL=grid-col-span-d68041db.js.map
