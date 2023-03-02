import{j as n}from"./jsx-runtime-04624988.js";import{M as d,S as c}from"./index-788d7a01.js";import{SpanRows as t}from"./grid.stories-a68185fd.js";import{u as o}from"./index-210c8183.js";import"./index-42dd39f4.js";import"./_commonjsHelpers-042e6b4d.js";import"./preload-helper-41c905a7.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-804ed8e8.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-f7a5e4df.js";import"./chunk-RDJSMFWU-a20c41ee.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-Y5O7ZP4P-a6d59b06.js";import"./_baseToString-53b55ec4.js";import"./_getTag-7cbcf524.js";import"./isEqual-d0561132.js";import"./index-7fb38eb9.js";import"./uniq-74fc131e.js";import"./index-356e4a49.js";function T(s={}){const{wrapper:r}=Object.assign({},o(),s.components);return r?n.jsx(r,Object.assign({},s,{children:n.jsx(e,{})})):e();function e(){const i=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h3:"h3"},o(),s.components);return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"Docs/Developers/Mixins/Grid/grid-row-span"}),`
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
`,n.jsx("div",{children:"The number of rows to span"})]})]})]})}}export{T as default};
//# sourceMappingURL=grid-row-span-33041628.js.map
