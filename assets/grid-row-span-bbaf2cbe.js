import{j as n}from"./jsx-runtime-fea6ae26.js";import{M as d,S as c}from"./index-3ab93b07.js";import{SpanRows as t}from"./grid.stories-a68185fd.js";import{u as o}from"./index-29c21c16.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./preload-helper-41c905a7.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-4c1fe476.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-8e5264e2.js";import"./chunk-XHUUYXNA-a69ea0a7.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-3EFM6HRY-454626f5.js";import"./_getTag-3f51d055.js";import"./index-3cd2bd67.js";import"./index-356e4a49.js";function S(s={}){const{wrapper:e}=Object.assign({},o(),s.components);return e?n.jsx(e,Object.assign({},s,{children:n.jsx(r,{})})):r();function r(){const i=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h3:"h3"},o(),s.components);return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"Docs/Developers/Mixins/Grid/grid-row-span"}),`
`,n.jsx(i.h1,{children:"grid-row-span"}),`
`,n.jsxs(i.p,{children:["The ",n.jsx(i.code,{children:"grid-row-span"})," mixin can be used to span grid row."]}),`
`,n.jsx(c,{of:t}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-html",children:`<div class="grid-demo-span-rows">
    <div>col (row 3)</div>
    <div>col (span 9)</div>
    <div>col (span 9)</div>
    <div>col (span 9)</div>
</div>
`})}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-css",children:`.grid-demo-span-rows {
    display: grid;
    @mixin grid-cols 12;

    & > div {
        &:first-of-type {
            @mixin grid-row-span 3;
        }

        &:not(:first-of-type) {
            @mixin grid-col-span 11;
        }
    }
}
`})}),`
`,n.jsx(i.h3,{children:"Responsive Row Span"}),`
`,n.jsx(i.p,{children:"The column span can be adjusted by breakpoint using the responsive versions of the row span mixins."}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-css",children:`@mixin grid-{breakpoint}-row-span {rows};
`})}),`
`,n.jsxs("div",{className:"table margin-bottom",children:[n.jsxs("div",{children:[n.jsx("div",{children:"Parameter"}),`
`,n.jsx("div",{children:"Options"})]}),n.jsxs("div",{children:[n.jsx("div",{children:n.jsx(i.code,{children:"breakpoint"})}),`
`,n.jsxs("div",{children:[n.jsx(i.code,{children:"sm"})," ",n.jsx(i.code,{children:"md"})," ",n.jsx(i.code,{children:"lg"})," ",n.jsx(i.code,{children:"xl"})," ",n.jsx(i.code,{children:"xxl"})]})]}),n.jsxs("div",{children:[n.jsx("div",{children:n.jsx(i.code,{children:"rows"})}),`
`,n.jsx("div",{children:"The number of rows to span"})]})]})]})}}export{S as default};
//# sourceMappingURL=grid-row-span-bbaf2cbe.js.map
