import{j as n}from"./jsx-runtime-ccada58e.js";import{M as d,S as c}from"./index-a10c4dc9.js";import{SpanColumns as l}from"./grid.stories-a68185fd.js";import{u as r}from"./index-9ec211f2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./preload-helper-41c905a7.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-f8ff18ba.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-a224d31d.js";import"./chunk-XHUUYXNA-a398bfb0.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-3EFM6HRY-454626f5.js";import"./_baseToString-53b55ec4.js";import"./_getTag-7cbcf524.js";import"./isEqual-d0561132.js";import"./index-7fb38eb9.js";import"./uniq-74fc131e.js";import"./index-356e4a49.js";function R(s={}){const{wrapper:e}=Object.assign({},r(),s.components);return e?n.jsx(e,Object.assign({},s,{children:n.jsx(o,{})})):o();function o(){const i=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h3:"h3"},r(),s.components);return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"Docs/Developers/Mixins/Grid/grid-col-span"}),`
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
`,n.jsx("div",{children:"The number of columns to span"})]})]})]})}}export{R as default};
//# sourceMappingURL=grid-col-span-1c28647d.js.map
