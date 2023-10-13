(self.webpackChunk_rosalind_rosalind_template=self.webpackChunk_rosalind_rosalind_template||[]).push([[750],{"./docs/stories/components/buttons.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AuthoredButtons:()=>AuthoredButtons,ButtonGroup:()=>ButtonGroup,Primary:()=>Primary,PrimaryIcon:()=>PrimaryIcon,Quiet:()=>Quiet,QuietIcon:()=>QuietIcon,Secondary:()=>Secondary,SecondaryIcon:()=>SecondaryIcon,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/testing-library/dist/esm/index.js"),_storybook_jest__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/jest/dist/esm/index.js"),_dylandepass_franklin_storybook_addon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@dylandepass/franklin-storybook-addon/dist/esm/index.js"),_scripts_scripts_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./scripts/scripts.js");function decorate(block){(0,_scripts_scripts_js__WEBPACK_IMPORTED_MODULE_3__.WU)(block),block.querySelector(":scope > div").classList.add("button-stories"),block.querySelectorAll(".button-container").forEach((button=>{const anchor=button.querySelector("a");anchor.href="javascript:void(0)",anchor.textContent.includes("Disabled")&&anchor.classList.add("disabled")})),block.parentElement.classList.remove("section"),block.parentElement.classList.add("story")}function createButton(type,icon){const container=(0,_scripts_scripts_js__WEBPACK_IMPORTED_MODULE_3__.ln)("p");let iconSpan;return container.classList.add("button-container"),icon&&(iconSpan=`<span class='icon ${icon}'></span>`),container.innerHTML=`<a href="javascript:void(0)" title=${type} class="button ${type}">${iconSpan||""}Primary</a>`,container}function testButton(canvasElement,type){const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement);let test=0;const primary=canvas.getByTitle(type);primary.addEventListener("click",(()=>{test=1})),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(primary).toBeInTheDocument(),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(primary),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(test).toEqual(1),primary.blur()}const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Atoms/Buttons",parameters:{docs:{description:{component:"A block to display buttons"}}}},AuthoredButtons={parameters:{path:"/storybook/buttons.plain.html",selector:"div",index:0},render:(args,context)=>(0,_dylandepass_franklin_storybook_addon__WEBPACK_IMPORTED_MODULE_2__.O7)(_scripts_scripts_js__WEBPACK_IMPORTED_MODULE_3__.ij,args,context,decorate),play:async({canvasElement})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement);await(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.X_)((()=>{(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByText("Authored Buttons")).toBeInTheDocument()})),await(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.X_)((()=>{(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByTitle("Primary")).toBeInTheDocument()}));const primary=canvas.getByTitle("Primary");async function testButtonByTitle(title){const btn=canvas.getByTitle(title);(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(btn).toBeInTheDocument(),title.includes("Icon")&&((0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(btn.querySelector(".icon")).toBeInTheDocument(),await(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.X_)((()=>{(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(btn.querySelector("svg")).toBeInTheDocument()})))}(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(primary).toBeInTheDocument(),testButtonByTitle("Primary"),testButtonByTitle("Primary Icon Left"),testButtonByTitle("Primary Icon Right"),testButtonByTitle("Secondary"),testButtonByTitle("Secondary Icon Left"),testButtonByTitle("Secondary Icon Right"),testButtonByTitle("Quiet"),testButtonByTitle("Quiet Icon Left"),testButtonByTitle("Quiet Icon Right")}},Primary={render:(args,context)=>createButton("primary"),play:async({canvasElement})=>{const primary=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement).getByTitle("primary");(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(primary).toBeInTheDocument(),testButton(canvasElement,"primary")}},PrimaryIcon={render:(args,context)=>{const button=createButton("primary","icon-plus");return(0,_scripts_scripts_js__WEBPACK_IMPORTED_MODULE_3__.WU)(button),button},play:async({canvasElement})=>{testButton(canvasElement,"primary")}},Secondary={render:(args,context)=>createButton("secondary"),play:async({canvasElement})=>{const primary=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement).getByTitle("secondary");(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(primary).toBeInTheDocument(),testButton(canvasElement,"secondary")}},SecondaryIcon={render:(args,context)=>{const button=createButton("secondary","icon-plus");return(0,_scripts_scripts_js__WEBPACK_IMPORTED_MODULE_3__.WU)(button),button},play:async({canvasElement})=>{testButton(canvasElement,"secondary")}},Quiet={render:(args,context)=>createButton("quiet"),play:async({canvasElement})=>{const primary=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement).getByTitle("quiet");(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(primary).toBeInTheDocument(),testButton(canvasElement,"quiet")}},QuietIcon={render:(args,context)=>{const button=createButton("quiet","icon-plus");return(0,_scripts_scripts_js__WEBPACK_IMPORTED_MODULE_3__.WU)(button),button},play:async({canvasElement})=>{testButton(canvasElement,"quiet")}},ButtonGroup={render:(args,context)=>{const container=document.createElement("div"),buttonGroup1=document.createElement("div");buttonGroup1.append(createButton("primary","icon-plus")),buttonGroup1.append(createButton("secondary","icon-plus"));const buttonGroup2=document.createElement("div");return buttonGroup2.append(createButton("primary","icon-plus")),buttonGroup2.append(createButton("secondary","icon-plus")),container.append(buttonGroup1),container.append(buttonGroup2),(0,_scripts_scripts_js__WEBPACK_IMPORTED_MODULE_3__.WU)(container),container}};AuthoredButtons.parameters={...AuthoredButtons.parameters,docs:{...AuthoredButtons.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    path: '/storybook/buttons.plain.html',\n    selector: 'div',\n    index: 0\n  },\n  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    await waitFor(() => {\n      expect(canvas.getByText('Authored Buttons')).toBeInTheDocument();\n    });\n    await waitFor(() => {\n      expect(canvas.getByTitle('Primary')).toBeInTheDocument();\n    });\n    const primary = canvas.getByTitle('Primary');\n    expect(primary).toBeInTheDocument();\n    async function testButtonByTitle(title) {\n      const btn = canvas.getByTitle(title);\n      expect(btn).toBeInTheDocument();\n      if (title.includes('Icon')) {\n        expect(btn.querySelector('.icon')).toBeInTheDocument();\n        await waitFor(() => {\n          expect(btn.querySelector('svg')).toBeInTheDocument();\n        });\n      }\n    }\n    testButtonByTitle('Primary');\n    testButtonByTitle('Primary Icon Left');\n    testButtonByTitle('Primary Icon Right');\n    testButtonByTitle('Secondary');\n    testButtonByTitle('Secondary Icon Left');\n    testButtonByTitle('Secondary Icon Right');\n    testButtonByTitle('Quiet');\n    testButtonByTitle('Quiet Icon Left');\n    testButtonByTitle('Quiet Icon Right');\n  }\n}",...AuthoredButtons.parameters?.docs?.source}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  render: (args, context) => {\n    const button = createButton('primary');\n    return button;\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const primary = canvas.getByTitle('primary');\n    expect(primary).toBeInTheDocument();\n    testButton(canvasElement, 'primary');\n  }\n}",...Primary.parameters?.docs?.source}}},PrimaryIcon.parameters={...PrimaryIcon.parameters,docs:{...PrimaryIcon.parameters?.docs,source:{originalSource:"{\n  render: (args, context) => {\n    const button = createButton('primary', 'icon-plus');\n    decorateIcons(button);\n    return button;\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    testButton(canvasElement, 'primary');\n  }\n}",...PrimaryIcon.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"{\n  render: (args, context) => {\n    const button = createButton('secondary');\n    return button;\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const primary = canvas.getByTitle('secondary');\n    expect(primary).toBeInTheDocument();\n    testButton(canvasElement, 'secondary');\n  }\n}",...Secondary.parameters?.docs?.source}}},SecondaryIcon.parameters={...SecondaryIcon.parameters,docs:{...SecondaryIcon.parameters?.docs,source:{originalSource:"{\n  render: (args, context) => {\n    const button = createButton('secondary', 'icon-plus');\n    decorateIcons(button);\n    return button;\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    testButton(canvasElement, 'secondary');\n  }\n}",...SecondaryIcon.parameters?.docs?.source}}},Quiet.parameters={...Quiet.parameters,docs:{...Quiet.parameters?.docs,source:{originalSource:"{\n  render: (args, context) => {\n    const button = createButton('quiet');\n    return button;\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const primary = canvas.getByTitle('quiet');\n    expect(primary).toBeInTheDocument();\n    testButton(canvasElement, 'quiet');\n  }\n}",...Quiet.parameters?.docs?.source}}},QuietIcon.parameters={...QuietIcon.parameters,docs:{...QuietIcon.parameters?.docs,source:{originalSource:"{\n  render: (args, context) => {\n    const button = createButton('quiet', 'icon-plus');\n    decorateIcons(button);\n    return button;\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    testButton(canvasElement, 'quiet');\n  }\n}",...QuietIcon.parameters?.docs?.source}}},ButtonGroup.parameters={...ButtonGroup.parameters,docs:{...ButtonGroup.parameters?.docs,source:{originalSource:"{\n  render: (args, context) => {\n    const container = document.createElement('div');\n    const buttonGroup1 = document.createElement('div');\n    buttonGroup1.append(createButton('primary', 'icon-plus'));\n    buttonGroup1.append(createButton('secondary', 'icon-plus'));\n    const buttonGroup2 = document.createElement('div');\n    buttonGroup2.append(createButton('primary', 'icon-plus'));\n    buttonGroup2.append(createButton('secondary', 'icon-plus'));\n    container.append(buttonGroup1);\n    container.append(buttonGroup2);\n    decorateIcons(container);\n    return container;\n  }\n}",...ButtonGroup.parameters?.docs?.source}}}},"./node_modules/lodash/_arrayIncludes.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseIndexOf=__webpack_require__("./node_modules/lodash/_baseIndexOf.js");module.exports=function arrayIncludes(array,value){return!!(null==array?0:array.length)&&baseIndexOf(array,value,0)>-1}},"./node_modules/lodash/_arrayIncludesWith.js":module=>{module.exports=function arrayIncludesWith(array,value,comparator){for(var index=-1,length=null==array?0:array.length;++index<length;)if(comparator(value,array[index]))return!0;return!1}},"./node_modules/lodash/_baseFindIndex.js":module=>{module.exports=function baseFindIndex(array,predicate,fromIndex,fromRight){for(var length=array.length,index=fromIndex+(fromRight?1:-1);fromRight?index--:++index<length;)if(predicate(array[index],index,array))return index;return-1}},"./node_modules/lodash/_baseIndexOf.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseFindIndex=__webpack_require__("./node_modules/lodash/_baseFindIndex.js"),baseIsNaN=__webpack_require__("./node_modules/lodash/_baseIsNaN.js"),strictIndexOf=__webpack_require__("./node_modules/lodash/_strictIndexOf.js");module.exports=function baseIndexOf(array,value,fromIndex){return value==value?strictIndexOf(array,value,fromIndex):baseFindIndex(array,baseIsNaN,fromIndex)}},"./node_modules/lodash/_baseIsNaN.js":module=>{module.exports=function baseIsNaN(value){return value!=value}},"./node_modules/lodash/_baseUniq.js":(module,__unused_webpack_exports,__webpack_require__)=>{var SetCache=__webpack_require__("./node_modules/lodash/_SetCache.js"),arrayIncludes=__webpack_require__("./node_modules/lodash/_arrayIncludes.js"),arrayIncludesWith=__webpack_require__("./node_modules/lodash/_arrayIncludesWith.js"),cacheHas=__webpack_require__("./node_modules/lodash/_cacheHas.js"),createSet=__webpack_require__("./node_modules/lodash/_createSet.js"),setToArray=__webpack_require__("./node_modules/lodash/_setToArray.js"),LARGE_ARRAY_SIZE=200;module.exports=function baseUniq(array,iteratee,comparator){var index=-1,includes=arrayIncludes,length=array.length,isCommon=!0,result=[],seen=result;if(comparator)isCommon=!1,includes=arrayIncludesWith;else if(length>=LARGE_ARRAY_SIZE){var set=iteratee?null:createSet(array);if(set)return setToArray(set);isCommon=!1,includes=cacheHas,seen=new SetCache}else seen=iteratee?[]:result;outer:for(;++index<length;){var value=array[index],computed=iteratee?iteratee(value):value;if(value=comparator||0!==value?value:0,isCommon&&computed==computed){for(var seenIndex=seen.length;seenIndex--;)if(seen[seenIndex]===computed)continue outer;iteratee&&seen.push(computed),result.push(value)}else includes(seen,computed,comparator)||(seen!==result&&seen.push(computed),result.push(value))}return result}},"./node_modules/lodash/_createSet.js":(module,__unused_webpack_exports,__webpack_require__)=>{var Set=__webpack_require__("./node_modules/lodash/_Set.js"),noop=__webpack_require__("./node_modules/lodash/noop.js"),setToArray=__webpack_require__("./node_modules/lodash/_setToArray.js"),createSet=Set&&1/setToArray(new Set([,-0]))[1]==1/0?function(values){return new Set(values)}:noop;module.exports=createSet},"./node_modules/lodash/_strictIndexOf.js":module=>{module.exports=function strictIndexOf(array,value,fromIndex){for(var index=fromIndex-1,length=array.length;++index<length;)if(array[index]===value)return index;return-1}},"./node_modules/lodash/noop.js":module=>{module.exports=function noop(){}},"./node_modules/lodash/uniq.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseUniq=__webpack_require__("./node_modules/lodash/_baseUniq.js");module.exports=function uniq(array){return array&&array.length?baseUniq(array):[]}},"?4f7e":()=>{}}]);