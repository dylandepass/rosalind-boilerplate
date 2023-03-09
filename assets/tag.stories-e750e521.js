import{_ as w}from"./preload-helper-41c905a7.js";import{w as t,a as k,e as i,u as T}from"./index-2056e04f.js";import{c as h}from"./scripts-b584a621.js";import"./index-b6208cf6.js";import"./index-d95f4d35.js";import"./_commonjsHelpers-87174ba5.js";import"./index-633d3215.js";import"./isEqual-ebac266f.js";import"./_getTag-5e1ca3fd.js";import"./uniq-2965a0d1.js";import"./index-7ef75b89.js";import"./lib-franklin-38131466.js";w(()=>import("./tag-b0d4b93f.js"),["./tag-b0d4b93f.js","./lib-franklin-38131466.js","./preload-helper-41c905a7.js","./scripts-b584a621.js"],import.meta.url);const q={title:"Design System/Atoms/Tag",argTypes:{label:{control:"text"},style:{options:["default","positive","negative","notice","informative"],control:{type:"radio"}},icon:{options:["bell","home","check","bookmark","copy"],control:{type:"select"}},iconPosition:{options:["left","right"],control:{type:"radio"}},disabled:{options:["true"],control:{type:"check"}}},args:{label:"Business"},parameters:{docs:{description:{component:"Default Config"}}}};function r(e,o,y=!1,f="",c="left",b=""){const a=h("tag-element");return a.setAttribute("disabled",e.disabled),e.icon&&a.setAttribute("icon",e.icon),a.setAttribute("style",e.style),e.iconPosition&&a.setAttribute("iconposition",e.iconPosition),a.setAttribute("label",e.label),a}async function n(e,o=!1){const y=t(e);await k(()=>{i(y.getByText("Business")).toBeInTheDocument()});let f=0;const c=y.queryByText("Business");if(c?.addEventListener("click",()=>{f=1}),o){const b=document.querySelector(".icon");i(b).toBeTruthy()}i(c).toBeInTheDocument(),T.click(c),i(f).toEqual(1),c.blur()}const s={render:(e,o)=>r(e),play:async({canvasElement:e})=>{t(e),n(e)}},l={args:{iconPosition:"left",icon:"check"},render:(e,o)=>r(e,o,!1,"tag"),play:async({canvasElement:e})=>{t(e),n(e,!0)}},g={args:{iconPosition:"right",icon:"check"},render:(e,o)=>r(e,o,!1,"tag","right"),play:async({canvasElement:e})=>{t(e),n(e,!0)}},m={args:{style:"positive"},render:(e,o)=>r(e,o,!1,"tag","","positive"),play:async({canvasElement:e})=>{t(e),n(e)}},d={args:{style:"negative"},render:(e,o)=>h(e,o,!1),play:async({canvasElement:e})=>{t(e),n(e)}},v={args:{style:"notice"},render:(e,o)=>r(e,o,!1,"tag","","notice"),play:async({canvasElement:e})=>{t(e),n(e)}},p={args:{...s.args,style:"informative"},render:(e,o)=>r(e,o,!1,"tag","","informative"),play:async({canvasElement:e})=>{t(e),n(e)}},u={args:{disabled:"true"},render:(e,o)=>r(e,o,!0,"tag",""),play:async({canvasElement:e})=>{t(e),n(e)}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args, context) => createTagDemo(args, context),
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
  render: (args, context) => createTagDemo(args, context, false, 'tag'),
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
  render: (args, context) => createTagDemo(args, context, false, 'tag', 'right'),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    testTag(canvasElement, true);
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'positive'
  },
  render: (args, context) => createTagDemo(args, context, false, 'tag', '', 'positive'),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    testTag(canvasElement);
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'notice'
  },
  render: (args, context) => createTagDemo(args, context, false, 'tag', '', 'notice'),
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
  render: (args, context) => createTagDemo(args, context, false, 'tag', '', 'informative'),
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
  render: (args, context) => createTagDemo(args, context, true, 'tag', ''),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    testTag(canvasElement);
  }
}`,...u.parameters?.docs?.source}}};const R=["Tag","IconLeft","IconRight","PositiveStyle","NegativeStyle","NoticeStyle","InformativeStyle","Disabled"];export{u as Disabled,l as IconLeft,g as IconRight,p as InformativeStyle,d as NegativeStyle,v as NoticeStyle,m as PositiveStyle,s as Tag,R as __namedExportsOrder,q as default};
//# sourceMappingURL=tag.stories-e750e521.js.map
