import{j as e}from"./jsx-runtime-04624988.js";import{M as t}from"./index-788d7a01.js";import{u as r}from"./index-210c8183.js";import"./index-42dd39f4.js";import"./_commonjsHelpers-042e6b4d.js";import"./preload-helper-41c905a7.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-804ed8e8.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-f7a5e4df.js";import"./chunk-RDJSMFWU-a20c41ee.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-Y5O7ZP4P-a6d59b06.js";import"./_baseToString-53b55ec4.js";import"./_getTag-7cbcf524.js";import"./isEqual-d0561132.js";import"./index-7fb38eb9.js";import"./uniq-74fc131e.js";import"./index-356e4a49.js";function C(s={}){const{wrapper:i}=Object.assign({},r(),s.components);return i?e.jsx(i,Object.assign({},s,{children:e.jsx(o,{})})):o();function o(){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",h3:"h3",h4:"h4"},r(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Docs/Developers/Tokens/Introduction"}),`
`,e.jsx(n.h1,{children:"Introduction to Design Tokens"}),`
`,e.jsx(n.h2,{children:"What are Design Tokens?"}),`
`,e.jsx(n.p,{children:"Design tokens are all the values needed to construct and maintain a design system — spacing, color, typography, object styles, animation, etc. — represented as data. These can represent anything defined by design: a color as a RGB value, an opacity as a number, an animation ease as Bezier coordinates. They’re used in place of hard-coded values in order to ensure flexibility and unity across all product experiences."}),`
`,e.jsx(n.h2,{children:"Why use Design Tokens?"}),`
`,e.jsx(n.p,{children:"Using design tokens can help create a unified design language across surfaces, improve maintainability, and enable designers to rapidly develop and deploy solutions without conflicts created by highly-specific hard-coded values."}),`
`,e.jsx(n.h2,{children:"Token Naming"}),`
`,e.jsxs(n.p,{children:["When naming tokens it can become a battle between flexibility or specificity. A flexible token name like ",e.jsx(n.code,{children:"--color-success"})," leaves it's purpose open to interpretation by the developer and could result it in be used as a background or text color. Flexibility is often accompanied by a decrease in accuracy and precision. For this reason the tokens in Rosalind try to be more specific than flexible."]}),`
`,e.jsx(n.p,{children:"Design tokens names are made of up of multiple levels, the more levels used in a tokens name the more complex it is, but the greater the precision implied by it's name."}),`
`,e.jsx(n.h3,{children:"Token levels"}),`
`,e.jsx(n.h4,{children:"Namespace:"}),`
`,e.jsx(n.p,{children:"All tokens contain the namespace level. The namespace level prevents conflicts arising from the use of the same token from different systems."}),`
`,e.jsx(n.h4,{children:"Tier"}),`
`,e.jsxs(n.p,{children:["All tokens contain a tier. One of ",e.jsx(n.code,{children:"global"}),", ",e.jsx(n.code,{children:"semantic"}),", ",e.jsx(n.code,{children:"component"})," and ",e.jsx(n.code,{children:"pattern"}),"."]}),`
`,e.jsx(n.h4,{children:"Category"}),`
`,e.jsxs(n.p,{children:["The category level spans visual style concerns and includes things like ",e.jsx(n.code,{children:"color"}),", ",e.jsx(n.code,{children:"size"}),", ",e.jsx(n.code,{children:"spacing"}),", ",e.jsx(n.code,{children:"border-wdth"}),", ",e.jsx(n.code,{children:"font-family"})," etc."]}),`
`,e.jsx(n.h4,{children:"Modifier"}),`
`,e.jsx(n.p,{children:"The use of modifiers helps increase how explicit the token is. Various modifiers can be used in the same token and the use of modifiers is optional."}),`
`,e.jsxs("div",{className:"table margin-top",children:[e.jsxs("div",{children:[e.jsx("div",{children:"Modifier"}),`
`,e.jsx("div",{children:"Description"}),`
`,e.jsx("div",{children:"Examples"}),`
`,e.jsx("div",{children:"Optional"})]}),e.jsxs("div",{children:[e.jsx("div",{children:"variant"}),`
`,e.jsx("div",{children:"A variant distinguishes alternative use cases"}),`
`,e.jsxs("div",{children:[e.jsx(n.code,{children:"primary"}),", ",e.jsx(n.code,{children:"secondary"}),", ",e.jsx(n.code,{children:"positive"}),", ",e.jsx(n.code,{children:"error"})]}),`
`,e.jsx("div",{children:"true"})]}),e.jsxs("div",{children:[e.jsx("div",{children:"state"}),`
`,e.jsx("div",{children:"Tokens can specify properties based on interactive states"}),`
`,e.jsxs("div",{children:[e.jsx(n.code,{children:"default"}),", ",e.jsx(n.code,{children:"hover"}),", ",e.jsx(n.code,{children:"focus"}),", ",e.jsx(n.code,{children:"disabled"})]}),`
`,e.jsx("div",{children:"true"})]}),e.jsxs("div",{children:[e.jsx("div",{children:"scale"}),`
`,e.jsxs("div",{children:["Tokens scale choices of varying size, space and other options applied to and between things. Numeric scales should be used where possible in ",e.jsx(n.code,{children:"global tokens"})," while t-shirt sizes should be used for ",e.jsx(n.code,{children:"semantic tokens"}),"."]}),`
`,e.jsxs("div",{children:[e.jsx(n.code,{children:"100"}),", ",e.jsx(n.code,{children:"200"}),", ",e.jsx(n.code,{children:"300"}),", ",e.jsx(n.code,{children:"sm"}),", ",e.jsx(n.code,{children:"md"}),", ",e.jsx(n.code,{children:"lg"})]}),`
`,e.jsx("div",{children:"true"})]}),e.jsxs("div",{children:[e.jsx("div",{children:"mode"}),`
`,e.jsx("div",{children:"Tokens can employ a mode modifier to distinguish values across two or more surface/background settings on which elements appear."}),`
`,e.jsxs("div",{children:[e.jsx(n.code,{children:"on-base"}),", ",e.jsx(n.code,{children:"on-layer1"}),", ",e.jsx(n.code,{children:"on-secondary"}),", ",e.jsx(n.code,{children:"on-primary"})]}),`
`,e.jsx("div",{children:"true"})]})]}),`
`,e.jsx(n.h2,{children:"Token Tiers"}),`
`,e.jsxs(n.p,{children:["There are 5 different tiers of tokens used in the Rosalind Design System. ",e.jsx(n.code,{children:"global"}),", ",e.jsx(n.code,{children:"theme"}),", ",e.jsx(n.code,{children:"semantic"}),", ",e.jsx(n.code,{children:"component"})," and ",e.jsx(n.code,{children:"pattern"})," tokens."]}),`
`,e.jsx(n.h3,{children:"Global Tokens"}),`
`,e.jsxs(n.p,{children:["Global tokens contain raw values and are aliased by semantic, component and pattern tokens. Global token names should reflect the values they store but still provide some level of abstraction so that any values they store can be altered. For example, naming a global token ",e.jsx(n.code,{children:"global.size.16px"})," or ",e.jsx(n.code,{children:"global.size.16"})," (and it's value is 16) should be avoided as its value cannot be changed since its explicity implied in the name."]}),`
`,e.jsxs(n.p,{children:["Typically global token names use some sort of numeric scales. For example ",e.jsx(n.code,{children:"global.color.red.100"}),", ",e.jsx(n.code,{children:"global.color.red.200"}),", ",e.jsx(n.code,{children:"global.size.breakpoint.100"}),", ",e.jsx(n.code,{children:"global.size.breakpoint.200"})," etc. This allows the value to be changed and leaves room for new in-between values to be included in the future such as ",e.jsx(n.code,{children:"global.color.red.150"})," or ",e.jsx(n.code,{children:"global.size.breakpoint.150"}),"."]}),`
`,e.jsx(n.p,{children:"Since global tokens are aliased by higher tier tokens they are not be exported as styles and only used as a source token."}),`
`,e.jsx(n.h4,{children:"Global tokens naming structure"}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"--ros-global-{category}-{modifiers}"})}),`
`,e.jsx(n.h3,{children:"Theme Tokens"}),`
`,e.jsx(n.p,{children:"Theme tokens define contrasting color tokens appropriate for light or dark theming. When design for brands require light and dark modes these tokens should be used for most uses of color, such as when the color will be applied to text, icons, or the borders of a component. They should be used for anything that needs to meet a WCAG contrast minimum."}),`
`,e.jsx(n.p,{children:"Theme tokens are included in the system and available to developers. These color tokens have no semantic meaning applied to them and can be used in cases where larger patterns require colors that are outside the ones available at the semantic level."}),`
`,e.jsx(n.h4,{children:"Theme tokens naming structure"}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"--ros-theme-color-{variant}-{scale}"})}),`
`,e.jsx(n.h3,{children:"Semantic Tokens"}),`
`,e.jsxs(n.p,{children:["Semantic tokens reference ",e.jsx(n.code,{children:"global tokens"})," and indicate their intended purpose. Therefore, their names should only describe what the token is meant to be used for, and not the value."]}),`
`,e.jsxs(n.p,{children:["Semantic tokens can be referenced by ",e.jsx(n.code,{children:"component tokens"})," or ",e.jsx(n.code,{children:"pattern tokens"})," or used more generally across the user interface. Ideally, semantic tokens they only reference ",e.jsx(n.code,{children:"global"})," or ",e.jsx(n.code,{children:"theme"})," tokens and never contain raw values."]}),`
`,e.jsx(n.h4,{children:"Semantic tokens naming structure"}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"--ros-semantic-{category}-{modifiers}"})}),`
`,e.jsx(n.h3,{children:"Component Tokens"}),`
`,e.jsxs(n.p,{children:["Component tokens reference ",e.jsx(n.code,{children:"semantic tokens"})," or ",e.jsx(n.code,{children:"global tokens"})," and are used to store design decisions things like form elements or buttons."]}),`
`,e.jsx(n.h4,{children:"Pattern tokens naming structure"}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"--ros-component-{category}-{modifiers}"})}),`
`,e.jsx(n.h3,{children:"Pattern Tokens"}),`
`,e.jsxs(n.p,{children:["Pattern tokens reference ",e.jsx(n.code,{children:"semantic tokens"})," or ",e.jsx(n.code,{children:"global tokens"})," and are used within larger UI patterns like the header or footer. Typically design systems don't include pattern specific tokens and instead utilize the ",e.jsx(n.code,{children:"semantic tokens"})," directly for patterns."]}),`
`,e.jsx(n.h4,{children:"Pattern tokens naming structure"}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"--ros-pattern-{category}-{modifiers}"})})]})}}export{C as default};
//# sourceMappingURL=Intro-54f1e671.js.map
