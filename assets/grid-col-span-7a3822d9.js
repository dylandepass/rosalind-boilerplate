import{j as n}from"./jsx-runtime-fea6ae26.js";import{M as r,S as c}from"./index-3ab93b07.js";import{SpanColumns as l}from"./grid.stories-a68185fd.js";import{u as d}from"./index-29c21c16.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./preload-helper-41c905a7.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-4c1fe476.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-8e5264e2.js";import"./chunk-XHUUYXNA-a69ea0a7.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-3EFM6HRY-454626f5.js";import"./_getTag-3f51d055.js";import"./index-3cd2bd67.js";import"./index-356e4a49.js";function k(s={}){const{wrapper:e}=Object.assign({},d(),s.components);return e?n.jsx(e,Object.assign({},s,{children:n.jsx(o,{})})):o();function o(){const i=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h3:"h3"},d(),s.components);return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Docs/Developers/Mixins/Grid/grid-col-span"}),`
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
`,n.jsx("div",{children:"The number of columns to span"})]})]})]})}}export{k as default};
//# sourceMappingURL=grid-col-span-7a3822d9.js.map
