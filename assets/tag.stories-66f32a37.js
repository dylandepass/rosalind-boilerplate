import{_ as h}from"./preload-helper-41c905a7.js";import{w as t,a as w,e as i,u as k}from"./index-ef93590f.js";import"./lib-franklin-ecff36a3.js";import"./index-1a733ee4.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-356e4a49.js";import"./isEqual-d0561132.js";import"./_getTag-7cbcf524.js";import"./uniq-74fc131e.js";h(()=>import("./tag-6710c6e7.js"),["./tag-6710c6e7.js","./lib-franklin-ecff36a3.js","./preload-helper-41c905a7.js"],import.meta.url);const z={title:"Design System/Atoms/Tag",argTypes:{label:{control:"text"},style:{options:["default","positive","negative","notice","informative"],control:{type:"radio"}},icon:{options:["bell","home","check","bookmark","copy"],control:{type:"select"}},iconPosition:{options:["left","right"],control:{type:"radio"}},disabled:{options:["true"],control:{type:"check"}}},args:{label:"Business"},parameters:{docs:{description:{component:"Default Config"}}}};function n(e,o,y=!1,f="",c="left",b=""){const a=document.createElement("tag-element");return a.setAttribute("disabled",e.disabled),e.icon&&a.setAttribute("icon",e.icon),a.setAttribute("style",e.style),e.iconPosition&&a.setAttribute("iconposition",e.iconPosition),a.setAttribute("label",e.label),a}async function r(e,o=!1){const y=t(e);await w(()=>{i(y.getByText("Business")).toBeInTheDocument()});let f=0;const c=y.queryByText("Business");if(c?.addEventListener("click",()=>{f=1}),o){const b=document.querySelector(".icon");i(b).toBeTruthy()}i(c).toBeInTheDocument(),k.click(c),i(f).toEqual(1),c.blur()}const s={render:(e,o)=>n(e),play:async({canvasElement:e})=>{t(e),r(e)}},l={args:{iconPosition:"left",icon:"check"},render:(e,o)=>n(e,o,!1,"tag"),play:async({canvasElement:e})=>{t(e),r(e,!0)}},g={args:{iconPosition:"right",icon:"check"},render:(e,o)=>n(e,o,!1,"tag","right"),play:async({canvasElement:e})=>{t(e),r(e,!0)}},d={args:{style:"positive"},render:(e,o)=>n(e,o,!1,"tag","","positive"),play:async({canvasElement:e})=>{t(e),r(e)}},m={args:{style:"negative"},render:(e,o)=>n(e,o,!1,"tag","","negative"),play:async({canvasElement:e})=>{t(e),r(e)}},v={args:{style:"notice"},render:(e,o)=>n(e,o,!1,"tag","","notice"),play:async({canvasElement:e})=>{t(e),r(e)}},p={args:{...s.args,style:"informative"},render:(e,o)=>n(e,o,!1,"tag","","informative"),play:async({canvasElement:e})=>{t(e),r(e)}},u={args:{disabled:"true"},render:(e,o)=>n(e,o,!0,"tag",""),play:async({canvasElement:e})=>{t(e),r(e)}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args, context) => createTag(args, context),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    testTag(canvasElement);
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    iconPosition: 'left',
    icon: 'check'
  },
  render: (args, context) => createTag(args, context, false, 'tag'),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    testTag(canvasElement, true);
  }
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    iconPosition: 'right',
    icon: 'check'
  },
  render: (args, context) => createTag(args, context, false, 'tag', 'right'),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    testTag(canvasElement, true);
  }
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'positive'
  },
  render: (args, context) => createTag(args, context, false, 'tag', '', 'positive'),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    testTag(canvasElement);
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'negative'
  },
  render: (args, context) => createTag(args, context, false, 'tag', '', 'negative'),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    testTag(canvasElement);
  }
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'notice'
  },
  render: (args, context) => createTag(args, context, false, 'tag', '', 'notice'),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    testTag(canvasElement);
  }
}`,...v.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Tag.args,
    style: 'informative'
  },
  render: (args, context) => createTag(args, context, false, 'tag', '', 'informative'),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    testTag(canvasElement);
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: 'true'
  },
  render: (args, context) => createTag(args, context, true, 'tag', ''),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    testTag(canvasElement);
  }
}`,...u.parameters?.docs?.source}}};const L=["Tag","IconLeft","IconRight","PositiveStyle","NegativeStyle","NoticeStyle","InformativeStyle","Disabled"];export{u as Disabled,l as IconLeft,g as IconRight,p as InformativeStyle,m as NegativeStyle,v as NoticeStyle,d as PositiveStyle,s as Tag,L as __namedExportsOrder,z as default};
//# sourceMappingURL=tag.stories-66f32a37.js.map
