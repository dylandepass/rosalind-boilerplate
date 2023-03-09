import{j as e}from"./jsx-runtime-f9d62efa.js";import{M as r}from"./index-ae9ef16c.js";import{u as o}from"./index-8063ddaf.js";import"./index-0285b6c4.js";import"./_commonjsHelpers-87174ba5.js";import"./preload-helper-41c905a7.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-84070ec7.js";import"./index-d95f4d35.js";import"./memoizerific-6211ecf2.js";import"./index-a1177552.js";import"./chunk-RDJSMFWU-adca00a4.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-Y5O7ZP4P-e999ce82.js";import"./index-fdaea41f.js";import"./_baseToString-e7f1b41f.js";import"./_getTag-5e1ca3fd.js";import"./isEqual-ebac266f.js";import"./index-25e212b3.js";import"./_defineProperty-118703d3.js";import"./uniq-2965a0d1.js";import"./index-633d3215.js";import"./index-1013ef18.js";function R(n={}){const{wrapper:i}=Object.assign({},o(),n.components);return i?e.jsx(i,Object.assign({},n,{children:e.jsx(t,{})})):t();function t(){const s=Object.assign({h1:"h1",p:"p",a:"a",blockquote:"blockquote",pre:"pre",code:"code",h2:"h2"},o(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Docs/Developers/Breakpoints"}),`
`,e.jsx(s.h1,{children:"Breakpoint Media Queries"}),`
`,e.jsxs(s.p,{children:["Rosalind uses ",e.jsx(s.a,{href:"https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-custom-media",children:"custom media queries"})," in CSS following the ",e.jsx(s.a,{href:"https://www.w3.org/TR/mediaqueries-5/#at-ruledef-custom-media",children:"Custom Media Specification"}),"."]}),`
`,e.jsx(s.p,{children:"The media queries available may depend on the brand."}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Due to limitation with CSS variables in Custom Media Queries these values are hardcoded and need to be managed manually."}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`@custom-media --ros-screen-xs (max-width: 400px);
@custom-media --ros-screen-sm (min-width: 576px);
@custom-media --ros-screen-md (min-width: 768px);
@custom-media --ros-screen-lg (min-width: 992px);
@custom-media --ros-screen-xl (min-width: 1200px);
@custom-media --ros-screen-xxl (min-width: 1440px);
`})}),`
`,e.jsx(s.h2,{children:"Usage"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`@media (--ros-screen-md) {
	/* styles for medium viewport */
}
`})}),`
`,e.jsxs(s.p,{children:["Media queries can also be nested using PostCSS. In the example below the ",e.jsx(s.code,{children:"section"})," selector uses the mobile padding on small screen but the desktop padding on the medium screens (or higher)."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`.section {
	padding: var(--ros-semantic-spacing-section-mobile-padding-y) var(--ros-semantic-spacing-section-mobile-padding-x);

	@media (--ros-screen-sm) {
		padding: var(--ros-semantic-spacing-section-desktop-padding-y) var(--ros-semantic-spacing-section-desktop-padding-x);
	}
}
`})})]})}}export{R as default};
//# sourceMappingURL=breakpoints-461422fb.js.map
