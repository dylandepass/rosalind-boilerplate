import{j as i}from"./jsx-runtime-ccada58e.js";import{M as l,S as s}from"./index-a10c4dc9.js";import{TwelveColumns as r,TwoColumns as m,ResponsiveColumns as t}from"./grid.stories-a68185fd.js";import{u as o}from"./index-9ec211f2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./preload-helper-41c905a7.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-f8ff18ba.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-a224d31d.js";import"./chunk-XHUUYXNA-a398bfb0.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-3EFM6HRY-454626f5.js";import"./_baseToString-53b55ec4.js";import"./_getTag-7cbcf524.js";import"./isEqual-d0561132.js";import"./index-7fb38eb9.js";import"./uniq-74fc131e.js";import"./index-356e4a49.js";function X(e={}){const{wrapper:d}=Object.assign({},o(),e.components);return d?i.jsx(d,Object.assign({},e,{children:i.jsx(c,{})})):c();function c(){const n=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h3:"h3"},o(),e.components);return i.jsxs(i.Fragment,{children:[i.jsx(l,{title:"Docs/Developers/Mixins/Grid/grid-cols"}),`
`,i.jsx(n.h1,{children:"grid-cols"}),`
`,i.jsxs(n.p,{children:["The ",i.jsx(n.code,{children:"grid-cols"})," mixin can be used to create a CSS grid with the provided number of columns."]}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-css",children:`@mixin grid-cols {columns};
`})}),`
`,i.jsxs("div",{className:"table margin-bottom",children:[i.jsxs("div",{children:[i.jsx("div",{children:"Parameter"}),`
`,i.jsx("div",{children:"Options"})]}),i.jsxs("div",{children:[i.jsx("div",{children:i.jsx(n.code,{children:"columns"})}),`
`,i.jsx("div",{children:"The number of columns you want in the grid"})]})]}),`
`,i.jsx(n.h3,{children:"Responsive Grids"}),`
`,i.jsxs(n.p,{children:["The ",i.jsx(n.code,{children:"grid-cols"})," can be adjusted by breakpoint using the responsive versions of the ",i.jsx(n.code,{children:"grid-cols"})," mixins."]}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-css",children:`@mixin grid-{breakpoint}-cols {columns};
`})}),`
`,i.jsxs("div",{className:"table margin-bottom",children:[i.jsxs("div",{children:[i.jsx("div",{children:"Parameter"}),`
`,i.jsx("div",{children:"Options"})]}),i.jsxs("div",{children:[i.jsx("div",{children:i.jsx(n.code,{children:"breakpoint"})}),`
`,i.jsxs("div",{children:[i.jsx(n.code,{children:"sm"})," ",i.jsx(n.code,{children:"md"})," ",i.jsx(n.code,{children:"lg"})," ",i.jsx(n.code,{children:"xl"})," ",i.jsx(n.code,{children:"xxl"})]})]}),i.jsxs("div",{children:[i.jsx("div",{children:i.jsx(n.code,{children:"columns"})}),`
`,i.jsx("div",{children:"The number of columns to span"})]})]}),`
`,i.jsx(n.h3,{children:"Example with 12 columns"}),`
`,i.jsx(s,{of:r}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-html",children:`<div class="grid-demo-1">
    <div>col</div>
    <div>col</div>
    <div>col</div>
    <div>col</div>
    <div>col</div>
    <div>col</div>
    <div>col</div>
    <div>col</div>
    <div>col</div>
    <div>col</div>
    <div>col</div>
    <div>col</div>
</div>
`})}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-css",children:`.grid-demo-1 {
    display: grid;
    @mixin grid-cols 12;
}
`})}),`
`,i.jsx(n.h3,{children:"Example with 2 columns"}),`
`,i.jsx(s,{of:m}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-html",children:`<div class="grid-demo-2">
    <div>col</div>
    <div>col</div>
    <div>col</div>
    <div>col</div>
</div>
`})}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-css",children:`.grid-demo-2 {
    display: grid;
    @mixin grid-cols 2;
}
`})}),`
`,i.jsx(n.h3,{children:"Example with 8 responsive columns"}),`
`,i.jsx(n.p,{children:"The demo below shows how to implement as responsive grid that is 8 columns on large screens, 4 columns on medium screens, 2 columns on small screens and 1 column for everything else."}),`
`,i.jsx(s,{of:t}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-html",children:`<div class="grid-demo-responsive">
    <div>col</div>
    <div>col</div>
    <div>col</div>
    <div>col</div>
    <div>col</div>
    <div>col</div>
    <div>col</div>
    <div>col</div>
</div>
`})}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-css",children:`.grid-demo-responsive {
    display: grid;
    @mixin grid-cols 1;
    @mixin grid-sm-cols 2;
    @mixin grid-md-cols 4;
    @mixin grid-lg-cols 8;
    @mixin gap xs;
    & > div {
        @mixin layer-1;
        text-align: center;
    }
}
`})})]})}}export{X as default};
//# sourceMappingURL=grid-cols-3da29e03.js.map
