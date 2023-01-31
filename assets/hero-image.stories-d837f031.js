import{e as r}from"./index-89406941.js";import i from"./hero-image-01b4d64a.js";import{l as n}from"./scripts-0d0f5ccb.js";import{j as m}from"./lib-franklin-553416e3.js";import"./preload-helper-41c905a7.js";const d={title:"Templates/Hero Image",parameters:{docs:{description:{component:"A block to display buttons"}}}};function s(t,o){const a=r.FranklinTemplate(n,t,o,i);return console.log(a),m(a),a}const e={parameters:{path:"/storybook/templates/hero-image.plain.html",root:!0,template:!0,selector:"div"},render:(t,o)=>s(t,o)};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    path: '/storybook/templates/hero-image.plain.html',
    root: true,
    template: true,
    selector: 'div'
  },
  render: (args, context) => prepareTemplate(args, context)
}`,...e.parameters?.docs?.source}}};const x=["HeroImage"];export{e as HeroImage,x as __namedExportsOrder,d as default};
//# sourceMappingURL=hero-image.stories-d837f031.js.map
