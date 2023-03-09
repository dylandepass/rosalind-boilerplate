/*! For license information please see developers-mixins-grid-grid-auto-flow-row-mdx.195cbd08.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_rosalind_rosalind_template=self.webpackChunk_rosalind_rosalind_template||[]).push([[389,6854],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./docs/developers/mixins/grid/grid-auto-flow-row.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");__webpack_require__("./docs/stories/grid/grid.stories.js");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h3:"h3"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{title:"Docs/Developers/Mixins/Grid/grid-auto-flow-row"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"grid-auto-flow-row",children:"grid-auto-flow-row"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"grid-auto-flow-row"})," mixin can be used to control how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid. It is functionally equivelent to setting ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"grid-auto-flow:row"}),". It is provided as part of Rosalind as convience when working with the responsive versions."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:"@mixin grid-auto-flow-row;\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"responsive-grid-auto-flow-row",children:"Responsive Grid Auto Flow Row"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"grid-auto-flow-row"})," mixin can be adjusted by breakpoint using the responsive versions."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:"@mixin grid-{breakpoint}-auto-flow-row;\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"table margin-bottom",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"Parameter"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"Options"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"breakpoint"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"sm"})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"md"})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"lg"})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"xl"})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"xxl"})]})]})]})]})}}},"./docs/stories/grid/grid.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Demo:()=>Demo,Gap:()=>Gap,GapX:()=>GapX,GapY:()=>GapY,ResponsiveColumns:()=>ResponsiveColumns,SpanColumns:()=>SpanColumns,SpanRows:()=>SpanRows,TwelveColumns:()=>TwelveColumns,TwoColumns:()=>TwoColumns,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Atoms/Grid"},Demo={render:()=>'<div class="story grid-demo">\n      <div>\n        <div class="nav">Nav</div>\n        <div class="heading">Heading</div>\n        <div class="content">Content</div>\n        <div class="content">Content</div>\n        <div class="content">Content</div>\n        <div class="sidebar">Sidebar</div>\n      </div>\n    </div>\n    '},TwelveColumns={render:()=>'<div class="story grid-demo-12-column">\n      <div>\n        <div>col</div>\n        <div>col</div>\n        <div>col</div>\n        <div>col</div>\n        <div>col</div>\n        <div>col</div>\n        <div>col</div>\n        <div>col</div>\n        <div>col</div>\n        <div>col</div>\n        <div>col</div>\n        <div>col</div>\n      </div>\n    </div>\n    '},TwoColumns={render:()=>'<div class="story grid-demo-2-column">\n      <div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n      </div>\n    </div>\n    '},SpanColumns={render:()=>'<div class="story grid-demo-span-columns">\n      <div>\n          <div>col (span 3)</div>\n          <div>col (span 9)</div>\n          <div>col (span 3)</div>\n          <div>col (span 9)</div>\n      </div>\n    </div>\n    '},SpanRows={render:()=>'<div class="story grid-demo-span-rows">\n      <div>\n        <div>col (row 3)</div>\n        <div>col (span 9)</div>\n        <div>col (span 9)</div>\n        <div>col (span 9)</div>\n      </div>\n    </div>\n    '},Gap={render:()=>'<div class="story grid-demo-gap">\n      <div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n      </div>\n    </div>\n    '},GapX={render:()=>'<div class="story grid-demo-gap-x">\n      <div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n      </div>\n    </div>\n    '},GapY={render:()=>'<div class="story grid-demo-gap-y">\n      <div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n      </div>\n    </div>\n    '},ResponsiveColumns={render:()=>'<div class="story grid-demo-responsive">\n      <div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n      </div>\n    </div>\n    '};Demo.parameters={...Demo.parameters,docs:{...Demo.parameters?.docs,source:{originalSource:'{\n  render: () => /* html */`<div class="story grid-demo">\n      <div>\n        <div class="nav">Nav</div>\n        <div class="heading">Heading</div>\n        <div class="content">Content</div>\n        <div class="content">Content</div>\n        <div class="content">Content</div>\n        <div class="sidebar">Sidebar</div>\n      </div>\n    </div>\n    `\n}',...Demo.parameters?.docs?.source}}},TwelveColumns.parameters={...TwelveColumns.parameters,docs:{...TwelveColumns.parameters?.docs,source:{originalSource:'{\n  render: () => /* html */`<div class="story grid-demo-12-column">\n      <div>\n        <div>col</div>\n        <div>col</div>\n        <div>col</div>\n        <div>col</div>\n        <div>col</div>\n        <div>col</div>\n        <div>col</div>\n        <div>col</div>\n        <div>col</div>\n        <div>col</div>\n        <div>col</div>\n        <div>col</div>\n      </div>\n    </div>\n    `\n}',...TwelveColumns.parameters?.docs?.source}}},TwoColumns.parameters={...TwoColumns.parameters,docs:{...TwoColumns.parameters?.docs,source:{originalSource:'{\n  render: () => /* html */`<div class="story grid-demo-2-column">\n      <div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n      </div>\n    </div>\n    `\n}',...TwoColumns.parameters?.docs?.source}}},SpanColumns.parameters={...SpanColumns.parameters,docs:{...SpanColumns.parameters?.docs,source:{originalSource:'{\n  render: () => /* html */`<div class="story grid-demo-span-columns">\n      <div>\n          <div>col (span 3)</div>\n          <div>col (span 9)</div>\n          <div>col (span 3)</div>\n          <div>col (span 9)</div>\n      </div>\n    </div>\n    `\n}',...SpanColumns.parameters?.docs?.source}}},SpanRows.parameters={...SpanRows.parameters,docs:{...SpanRows.parameters?.docs,source:{originalSource:'{\n  render: () => /* html */`<div class="story grid-demo-span-rows">\n      <div>\n        <div>col (row 3)</div>\n        <div>col (span 9)</div>\n        <div>col (span 9)</div>\n        <div>col (span 9)</div>\n      </div>\n    </div>\n    `\n}',...SpanRows.parameters?.docs?.source}}},Gap.parameters={...Gap.parameters,docs:{...Gap.parameters?.docs,source:{originalSource:'{\n  render: () => /* html */`<div class="story grid-demo-gap">\n      <div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n      </div>\n    </div>\n    `\n}',...Gap.parameters?.docs?.source}}},GapX.parameters={...GapX.parameters,docs:{...GapX.parameters?.docs,source:{originalSource:'{\n  render: () => /* html */`<div class="story grid-demo-gap-x">\n      <div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n      </div>\n    </div>\n    `\n}',...GapX.parameters?.docs?.source}}},GapY.parameters={...GapY.parameters,docs:{...GapY.parameters?.docs,source:{originalSource:'{\n  render: () => /* html */`<div class="story grid-demo-gap-y">\n      <div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n      </div>\n    </div>\n    `\n}',...GapY.parameters?.docs?.source}}},ResponsiveColumns.parameters={...ResponsiveColumns.parameters,docs:{...ResponsiveColumns.parameters?.docs,source:{originalSource:'{\n  render: () => /* html */`<div class="story grid-demo-responsive">\n      <div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n          <div>col</div>\n      </div>\n    </div>\n    `\n}',...ResponsiveColumns.parameters?.docs?.source}}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);