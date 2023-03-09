import{j as i}from"./jsx-runtime-f9d62efa.js";import{M as l,S as d}from"./index-ae9ef16c.js";import{Gap as o,GapX as x,GapY as a}from"./grid.stories-a68185fd.js";import{u as r}from"./index-8063ddaf.js";import"./index-0285b6c4.js";import"./_commonjsHelpers-87174ba5.js";import"./preload-helper-41c905a7.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-84070ec7.js";import"./index-d95f4d35.js";import"./memoizerific-6211ecf2.js";import"./index-a1177552.js";import"./chunk-RDJSMFWU-adca00a4.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-Y5O7ZP4P-e999ce82.js";import"./index-fdaea41f.js";import"./_baseToString-e7f1b41f.js";import"./_getTag-5e1ca3fd.js";import"./isEqual-ebac266f.js";import"./index-25e212b3.js";import"./_defineProperty-118703d3.js";import"./uniq-2965a0d1.js";import"./index-633d3215.js";import"./index-1013ef18.js";function S(n={}){const{wrapper:s}=Object.assign({},r(),n.components);return s?i.jsx(s,Object.assign({},n,{children:i.jsx(c,{})})):c();function c(){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3"},r(),n.components);return i.jsxs(i.Fragment,{children:[i.jsx(l,{title:"Docs/Developers/Mixins/Grid/gap"}),`
`,i.jsx(e.h1,{children:"gap"}),`
`,i.jsxs(e.p,{children:["The ",i.jsx(e.code,{children:"gap"}),", ",i.jsx(e.code,{children:"gap-x"})," and ",i.jsx(e.code,{children:"gap-y"})," mixins can be used to add spacing between grid/flex columns and rows."]}),`
`,i.jsx(e.h2,{children:"Gap"}),`
`,i.jsxs(e.p,{children:["The ",i.jsx(e.code,{children:"gap"})," mixin can be used to add uniform spacing between grid columns and rows."]}),`
`,i.jsx(d,{of:o}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-html",children:`<div class="grid-demo-gap">
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
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-css",children:`.grid-demo-gap {
    display: grid;
    @mixin grid-cols 4;
    @mixin gap 2xl;

    & > div {
        @mixin layer-1;
        text-align: center;
    }
}
`})}),`
`,i.jsx(e.h3,{children:"Responsive Gap"}),`
`,i.jsxs(e.p,{children:["The ",i.jsx(e.code,{children:"gap"})," can be adjusted by breakpoint using the responsive versions of the ",i.jsx(e.code,{children:"gap"})," mixins."]}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-css",children:`@mixin gap-{breakpoint} {size};
`})}),`
`,i.jsxs("div",{className:"table margin-bottom",children:[i.jsxs("div",{children:[i.jsx("div",{children:"Parameter"}),`
`,i.jsx("div",{children:"Options"})]}),i.jsxs("div",{children:[i.jsx("div",{children:i.jsx(e.code,{children:"breakpoint"})}),`
`,i.jsxs("div",{children:[i.jsx(e.code,{children:"sm"})," ",i.jsx(e.code,{children:"md"})," ",i.jsx(e.code,{children:"lg"})," ",i.jsx(e.code,{children:"xl"})," ",i.jsx(e.code,{children:"xxl"})]})]}),i.jsxs("div",{children:[i.jsx("div",{children:i.jsx(e.code,{children:"size"})}),`
`,i.jsxs("div",{children:["The gap size, one of ",i.jsx(e.code,{children:"sm"})," ",i.jsx(e.code,{children:"md"})," ",i.jsx(e.code,{children:"lg"})," ",i.jsx(e.code,{children:"xl"})," ",i.jsx(e.code,{children:"xxl"})]})]})]}),`
`,i.jsx(e.h2,{children:"Gap X"}),`
`,i.jsxs(e.p,{children:["The ",i.jsx(e.code,{children:"gap-x"})," mixin can be used to add spacing between grid columns."]}),`
`,i.jsx(d,{of:x}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-html",children:`<div class="grid-demo-gap-x">
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
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-css",children:`.grid-demo-gap-x {
    display: grid;
    @mixin grid-cols 4;
    @mixin gap-x 2xl;
    
    & > div {
        @mixin layer-1;
        text-align: center;
    }
}
`})}),`
`,i.jsx(e.h3,{children:"Responsive Gap X"}),`
`,i.jsxs(e.p,{children:["The ",i.jsx(e.code,{children:"gap-x"})," can be adjusted by breakpoint using the responsive versions of the ",i.jsx(e.code,{children:"gap-x"})," mixins."]}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-css",children:`@mixin gap-{breakpoint}-x {size};
`})}),`
`,i.jsxs("div",{className:"table margin-bottom",children:[i.jsxs("div",{children:[i.jsx("div",{children:"Parameter"}),`
`,i.jsx("div",{children:"Options"})]}),i.jsxs("div",{children:[i.jsx("div",{children:i.jsx(e.code,{children:"breakpoint"})}),`
`,i.jsxs("div",{children:[i.jsx(e.code,{children:"sm"})," ",i.jsx(e.code,{children:"md"})," ",i.jsx(e.code,{children:"lg"})," ",i.jsx(e.code,{children:"xl"})," ",i.jsx(e.code,{children:"xxl"})]})]}),i.jsxs("div",{children:[i.jsx("div",{children:i.jsx(e.code,{children:"size"})}),`
`,i.jsxs("div",{children:["The gap size, one of ",i.jsx(e.code,{children:"sm"})," ",i.jsx(e.code,{children:"md"})," ",i.jsx(e.code,{children:"lg"})," ",i.jsx(e.code,{children:"xl"})," ",i.jsx(e.code,{children:"xxl"})]})]})]}),`
`,i.jsx(e.h2,{children:"Gap Y"}),`
`,i.jsxs(e.p,{children:["The ",i.jsx(e.code,{children:"gap-y"})," mixin can be used to add spacing between grid rows."]}),`
`,i.jsx(d,{of:a}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-html",children:`<div class="grid-demo-gap-y">
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
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-css",children:`.grid-demo-gap-y {
    display: grid;
    @mixin grid-cols 4;
    @mixin gap-y 2xl;
    
    & > div {
        @mixin layer-1;
        text-align: center;
    }
}
`})}),`
`,i.jsx(e.h3,{children:"Responsive Gap Y"}),`
`,i.jsxs(e.p,{children:["The ",i.jsx(e.code,{children:"gap-y"})," can be adjusted by breakpoint using the responsive versions of the ",i.jsx(e.code,{children:"gap-y"})," mixins."]}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-css",children:`@mixin gap-{breakpoint}-y {size};
`})}),`
`,i.jsxs("div",{className:"table margin-bottom",children:[i.jsxs("div",{children:[i.jsx("div",{children:"Parameter"}),`
`,i.jsx("div",{children:"Options"})]}),i.jsxs("div",{children:[i.jsx("div",{children:i.jsx(e.code,{children:"breakpoint"})}),`
`,i.jsxs("div",{children:[i.jsx(e.code,{children:"sm"})," ",i.jsx(e.code,{children:"md"})," ",i.jsx(e.code,{children:"lg"})," ",i.jsx(e.code,{children:"xl"})," ",i.jsx(e.code,{children:"xxl"})]})]}),i.jsxs("div",{children:[i.jsx("div",{children:i.jsx(e.code,{children:"size"})}),`
`,i.jsxs("div",{children:["The gap size, one of ",i.jsx(e.code,{children:"sm"})," ",i.jsx(e.code,{children:"md"})," ",i.jsx(e.code,{children:"lg"})," ",i.jsx(e.code,{children:"xl"})," ",i.jsx(e.code,{children:"xxl"})]})]})]})]})}}export{S as default};
//# sourceMappingURL=gap-51eafa0f.js.map
