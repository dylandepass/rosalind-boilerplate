import{j as e}from"./jsx-runtime-fea6ae26.js";import{M as r}from"./index-3ab93b07.js";import{u as o}from"./index-29c21c16.js";import"./index-2812c619.js";import"./_commonjsHelpers-725317a4.js";import"./preload-helper-41c905a7.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-4c1fe476.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-8e5264e2.js";import"./chunk-XHUUYXNA-a69ea0a7.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-3EFM6HRY-454626f5.js";import"./_getTag-3f51d055.js";import"./index-3cd2bd67.js";import"./index-356e4a49.js";function C(n={}){const{wrapper:i}=Object.assign({},o(),n.components);return i?e.jsx(i,Object.assign({},n,{children:e.jsx(t,{})})):t();function t(){const s=Object.assign({h1:"h1",p:"p",a:"a",blockquote:"blockquote",pre:"pre",code:"code",h2:"h2"},o(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Docs/Developers/Breakpoints"}),`
`,e.jsx(s.h1,{children:"Breakpoint Media Queries"}),`
`,e.jsxs(s.p,{children:["Synergy user ",e.jsx(s.a,{href:"https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-custom-media",children:"custom media queries"})," in CSS following the ",e.jsx(s.a,{href:"https://www.w3.org/TR/mediaqueries-5/#at-ruledef-custom-media",children:"Custom Media Specification"}),"."]}),`
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
`})})]})}}export{C as default};
//# sourceMappingURL=breakpoints-e1be9fa3.js.map
