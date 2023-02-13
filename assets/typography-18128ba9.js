import{j as e}from"./jsx-runtime-ccada58e.js";import{M as o,b as c,S as s}from"./index-a10c4dc9.js";import{t as a}from"./rosalind-light-374e77ca.js";import{C as x}from"./index-ff8b6259.js";import{FontSizeUtilities as j,FontWeightUtilities as p,TextAlignmentUtilities as m}from"./typography.stories-cef3ab5c.js";import{u as r}from"./index-9ec211f2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./preload-helper-41c905a7.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-f8ff18ba.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-a224d31d.js";import"./chunk-XHUUYXNA-a398bfb0.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-3EFM6HRY-454626f5.js";import"./_baseToString-53b55ec4.js";import"./_getTag-7cbcf524.js";import"./isEqual-d0561132.js";import"./index-7fb38eb9.js";import"./uniq-74fc131e.js";import"./index-356e4a49.js";import"./dedent-8ac136a4.js";function L(n={}){const{wrapper:d}=Object.assign({},r(),n.components);return d?e.jsx(d,Object.assign({},n,{children:e.jsx(t,{})})):t();function t(){const i=Object.assign({h1:"h1",p:"p",h2:"h2",blockquote:"blockquote",code:"code",pre:"pre",h3:"h3",h4:"h4"},r(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Docs/Developers/Mixins/Typography"}),`
`,e.jsx(i.h1,{children:"Typography Mixins"}),`
`,e.jsx(i.p,{children:"Rosalind provides the following mixins to work with typography."}),`
`,e.jsx(i.h2,{children:"Typography Mixins"}),`
`,e.jsx(i.p,{children:"The mixins below allow you to easily customize type in CSS for any element on the page."}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"semi-bold"})," weight option and the ",e.jsx(i.code,{children:"size"})," parameter are currently only supported on text with the ",e.jsx(i.code,{children:"body-text"})," mixin."]}),`
`]}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsxs(i.p,{children:["The font mixins below declare the ",e.jsx(i.code,{children:"font-size"}),", ",e.jsx(i.code,{children:"font-family"}),", ",e.jsx(i.code,{children:"font-weight"})," and ",e.jsx(i.code,{children:"line-height"})," styles but make not adjustments for text color."]}),`
`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`@mixin h1 {weight};

@mixin h2 {weight};

@mixin h3 {weight};

@mixin h4 {weight};

@mixin h5 {weight};

@mixin subtitle {weight};

@mixin eyebrow {weight};

@mixin body-text {weight} {size};

@mixin caption {weight};

@mixin source-code {weight};
`})}),`
`,e.jsxs("div",{className:"table margin-top",children:[e.jsxs("div",{children:[e.jsx("div",{children:"Parameter"}),`
`,e.jsx("div",{children:"Options"}),`
`,e.jsx("div",{children:"Default"})]}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(i.code,{children:"weight"})}),`
`,e.jsxs("div",{children:[e.jsx(i.code,{children:"regular"})," ",e.jsx(i.code,{children:"bold"})," ",e.jsx(i.code,{children:"semi-bold"})]}),`
`,e.jsx("div",{children:e.jsx(i.code,{children:"regular"})})]}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(i.code,{children:"size"})}),`
`,e.jsx("div",{children:Object.entries(a.semantic["font-size"].body).map(([l,h])=>e.jsx(x,{k:l,value:h,url:"/?path=/docs/docs-developers-tokens-typography--docs#static-typography"}))}),`
`,e.jsx("div",{children:e.jsx(i.code,{children:"md"})})]})]}),`
`,e.jsx(i.h2,{children:"CSS Utility Classes for Typography"}),`
`,e.jsx(i.p,{children:"Rosalind provides a set of CSS Utility Classes for working with type. These may come in handy if DOM elements are decorated using javascript. In most cases though the mixins should cover the majority of usecases."}),`
`,e.jsx(i.h3,{children:"Typography Size CSS Utilities"}),`
`,e.jsx(i.h4,{children:"Demo"}),`
`,e.jsx(c,{sourceState:"shown",children:e.jsx(s,{of:j})}),`
`,e.jsx(i.h4,{children:"Supported Classes"}),`
`,e.jsx(i.p,{children:"The follow CSS Utility classes are supported by Rosalind DNA."}),`
`,e.jsxs("div",{className:"table",children:[e.jsxs("div",{children:[e.jsx("div",{children:"Class"}),`
`,e.jsx("div",{children:"Description"})]}),e.jsxs("div",{children:[e.jsx("div",{children:".h1"}),`
`,e.jsx("div",{children:"Heading 1"})]}),e.jsxs("div",{children:[e.jsx("div",{children:".h2"}),`
`,e.jsx("div",{children:"Heading 2"})]}),e.jsxs("div",{children:[e.jsx("div",{children:".h3"}),`
`,e.jsx("div",{children:"Heading 3"})]}),e.jsxs("div",{children:[e.jsx("div",{children:".h4"}),`
`,e.jsx("div",{children:"Heading 4"})]}),e.jsxs("div",{children:[e.jsx("div",{children:".h5"}),`
`,e.jsx("div",{children:"Heading 5"})]}),e.jsxs("div",{children:[e.jsx("div",{children:".subtitle"}),`
`,e.jsx("div",{children:"Subtitle"})]}),e.jsxs("div",{children:[e.jsx("div",{children:".eyebrow"}),`
`,e.jsx("div",{children:"Eyebrow"})]}),e.jsxs("div",{children:[e.jsx("div",{children:".caption"}),`
`,e.jsx("div",{children:"Caption"})]}),e.jsxs("div",{children:[e.jsx("div",{children:".blockquote"}),`
`,e.jsx("div",{children:"Blockquote"})]}),e.jsxs("div",{children:[e.jsx("div",{children:".code"}),`
`,e.jsx("div",{children:"Code"})]})]}),`
`,e.jsx(i.h3,{children:"Semantic ordering of Headings"}),`
`,e.jsx(i.p,{children:"Keeping the correct semantic ordering of headings on a page is important for accessibility. The sequencing of headings impacts the navigation of the content when accessed through a screen reader. Incorrect ordering of headings can cause difficulties in comprehending the text for those using a screen reader."}),`
`,e.jsxs(i.p,{children:["For example you should never have an ",e.jsx(i.code,{children:"h1"})," followed by an ",e.jsx(i.code,{children:"h3"})," and skip ",e.jsx(i.code,{children:"h2"}),"."]}),`
`,e.jsx(i.p,{children:"There are situations though where you want the semantic ordering of headings to be correct but visually you may want the text to be a different size. For these cases, Rosalind provides some Mixins and CCS Utility classes that allow you to render type in a different size."}),`
`,e.jsx(i.h2,{children:"Typography Weight Mixins"}),`
`,e.jsx(i.p,{children:"There may be a situation where you need to set the font weight on some text directly. Ideally, the correct token is used and not a hardcoded weight value."}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"font-weight"})," mixin will set the correct weight given it's semantic name."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`@mixin font-weight {type}
`})}),`
`,e.jsxs("div",{className:"table margin-top",children:[e.jsxs("div",{children:[e.jsx("div",{children:"Parameter"}),`
`,e.jsx("div",{children:"Options"})]}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(i.code,{children:"type"})}),`
`,e.jsxs("div",{children:[e.jsx(i.code,{children:"thin"})," ",e.jsx(i.code,{children:"extra-light"})," ",e.jsx(i.code,{children:"light"})," ",e.jsx(i.code,{children:"normal"})," ",e.jsx(i.code,{children:"medium"})," ",e.jsx(i.code,{children:"semi-bold"})," ",e.jsx(i.code,{children:"bold"})," ",e.jsx(i.code,{children:"extra-bold"})," ",e.jsx(i.code,{children:"black"})]})]})]}),`
`,e.jsx(i.h2,{children:"Typography Weight CSS Utilities"}),`
`,e.jsx(i.p,{children:"Rosalind provides a set of utility classes for working with font weights. Font weight handling is handled by default by the system. So if a piece of text is bolded by an author in Word this will carry through on the front end and will use the correct bold font weight for the brand."}),`
`,e.jsxs(i.p,{children:["There may be situations though where a developer wants to change the font weight by decorating a ",e.jsx(i.code,{children:"div"})," or ",e.jsx(i.code,{children:"span"})," in the dom. The font weight utility classes can be used for this."]}),`
`,e.jsx(i.h3,{children:"Demo"}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(i.h4,{children:"Code Example"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<div>
  <h3>This is an <span class="bold">h3</span></h3>
</div>
`})}),`
`,e.jsx(i.h3,{children:"Supported Classes"}),`
`,e.jsx(i.p,{children:"The follow CSS Utility classes are supported by Rosalind."}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"semi-bold"})," class is currently only supported on text within a ",e.jsx(i.code,{children:"p"}),"."]}),`
`]}),`
`,e.jsxs("div",{className:"table",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{children:"Class"}),`
`,e.jsx("div",{children:"Description"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{children:".bold"}),`
`,e.jsx("div",{children:"Adds a bold styling to the text"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{children:".semi-bold"}),`
`,e.jsx("div",{children:"Adds a semi-bold styling to the text"})]})]}),`
`,e.jsx(i.h2,{children:"Text Alignment Utilities"}),`
`,e.jsx(i.p,{children:"Rosalind provides a set of utility classes for working with text alignment."}),`
`,e.jsx(i.p,{children:"Developers can add these classes to DOM elements or authors could add these classes to block names to control text alignment."}),`
`,e.jsx(i.h3,{children:"Demo"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(i.h4,{children:"Code Example"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<div>
  <div class="text-align-left">Let Aligned</div>
  <div class="text-align-center">Center Aligned</div>
  <div class="text-align-right">Right Aligned</div>
</div>
`})}),`
`,e.jsx(i.h3,{children:"Supported Classes"}),`
`,e.jsx(i.p,{children:"The follow CSS Utility classes are supported by Rosalind."}),`
`,e.jsxs("div",{className:"table",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{children:"Class"}),`
`,e.jsx("div",{children:"Description"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{children:".text-align-left"}),`
`,e.jsx("div",{children:"Left aligned text"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{children:".text-align-center"}),`
`,e.jsx("div",{children:"Center aligned text"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{children:".text-align-right"}),`
`,e.jsx("div",{children:"Right aligned text"})]})]})]})}}export{L as default};
//# sourceMappingURL=typography-18128ba9.js.map
