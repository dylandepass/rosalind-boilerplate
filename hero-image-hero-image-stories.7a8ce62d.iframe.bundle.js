"use strict";(self.webpackChunk_rosalind_rosalind_template=self.webpackChunk_rosalind_rosalind_template||[]).push([[6200,2923,1206],{"./templates/hero-image/hero-image.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HeroImage:()=>HeroImage,default:()=>hero_image_stories});var esm=__webpack_require__("./node_modules/@dylandepass/franklin-storybook-addon/dist/esm/index.js"),scripts=(__webpack_require__("./templates/hero-image/hero-image.js"),__webpack_require__("./scripts/scripts.js")),injectStylesIntoStyleTag=(__webpack_require__("./scripts/lib-franklin.js"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),hero_image_hero_image=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./templates/hero-image/hero-image.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(hero_image_hero_image.Z,options);hero_image_hero_image.Z&&hero_image_hero_image.Z.locals&&hero_image_hero_image.Z.locals;const hero_image_stories={title:"Templates/Hero Image",parameters:{layout:"fullscreen",docs:{description:{component:"A block to display buttons"}}}};const HeroImage={parameters:{path:"/storybook/templates/hero-image",root:!0,template:!0,selector:"div"},render:(args,context)=>function prepareTemplate(args,context){const templateMeta=(0,scripts.ln)("meta",{name:"template",content:"hero-image"});document.head.appendChild(templateMeta);const template=(0,esm.sR)(scripts.ij,args,context);return console.log("template",template),template}(args,context)};HeroImage.parameters={...HeroImage.parameters,docs:{...HeroImage.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    path: '/storybook/templates/hero-image',\n    root: true,\n    template: true,\n    selector: 'div'\n  },\n  render: (args, context) => prepareTemplate(args, context)\n}",...HeroImage.parameters?.docs?.source}}}},"./templates/hero-image/hero-image.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>decorate});var _scripts_lib_franklin_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./scripts/lib-franklin.js"),_scripts_scripts_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./scripts/scripts.js");function decorate(main){const firstDiv=main.querySelector("div:first-of-type"),img=firstDiv.querySelector("img"),backgroundImage=(0,_scripts_scripts_js__WEBPACK_IMPORTED_MODULE_1__.ln)("div",{class:"image"});backgroundImage.style.backgroundImage=`url('${img.src})`,img.closest("p").remove();const cover=(0,_scripts_scripts_js__WEBPACK_IMPORTED_MODULE_1__.ln)("div",{class:"cover"}),content=(0,_scripts_scripts_js__WEBPACK_IMPORTED_MODULE_1__.ln)("div",{class:"content"});content.append(...firstDiv.childNodes);const section=(0,_scripts_scripts_js__WEBPACK_IMPORTED_MODULE_1__.ln)("div"),heroBlock=(0,_scripts_lib_franklin_js__WEBPACK_IMPORTED_MODULE_0__.BI)("hero",[[{elems:[cover,backgroundImage]},content]]);heroBlock.classList.add("hero-image"),section.append(heroBlock),firstDiv.remove(),main.prepend(section)}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./templates/hero-image/hero-image.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/runtime/getUrl.js"),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__),___CSS_LOADER_URL_IMPORT_0___=new URL(__webpack_require__("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 height=%2718%27 width=%2718%27%3E%3Cpath class=%27fill%27 d=%27M4 7.01a1 1 0 0 1 1.706-.706L8.993 9.59l3.29-3.285A1 1 0 0 1 13.72 7.69l-.024.025L9.7 11.707a1 1 0 0 1-1.413 0L4.293 7.716A.995.995 0 0 1 4 7.01Z%27/%3E%3C/svg%3E"),__webpack_require__.b),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()),___CSS_LOADER_URL_REPLACEMENT_0___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);___CSS_LOADER_EXPORT___.push([module.id,"/* stylelint-disable */\n/* Generated File: Do not edit directly */\n.hero-container[\\:has\\(\\.hero-image\\)]{height:391px;margin:-92px 0 0;max-width:100%;padding:0;position:relative}.hero-container:has(.hero-image){height:391px;margin:-92px 0 0;max-width:100%;padding:0;position:relative}@media (min-width:992px){.hero-container[\\:has\\(\\.hero-image\\)]{height:483px}.hero-container:has(.hero-image){height:483px}}.hero-container[\\:has\\(\\.hero-image\\)] .hero-wrapper{max-width:100%}.hero-container:has(.hero-image) .hero-wrapper{max-width:100%}.hero-image .cover{background-color:var(--ros-pattern-modal-color-overlay);z-index:-1}.hero-image .cover,.hero-image .image{bottom:0;left:0;position:absolute;right:0;top:0}.hero-image .image{background-position:50%;background-repeat:no-repeat;background-size:cover;width:100%;z-index:-2}.hero-image .content{bottom:0;color:#fff;display:flex;flex-direction:column;justify-content:center;left:0;margin-top:70px;position:absolute;right:0;text-align:center;top:0}@media (min-width:992px){.hero-image .content{margin-top:var(--ros-semantic-spacing-around-component-xl)}}.hero-image .content>p{margin:0 auto}.hero-image .content .h1,.hero-image .content .h2,.hero-image .content .h3,.hero-image .content .h4,.hero-image .content .h5,.hero-image .content h1,.hero-image .content h2,.hero-image .content h3,.hero-image .content h4,.hero-image .content h5{color:#fff}.hero-image .content ul{list-style:none}.hero-image .content ul li{display:inline-block}.hero-image .content ul li:after{background-color:#fff;height:20px;margin-right:10px;margin-top:2px;-webkit-mask-image:url("+___CSS_LOADER_URL_REPLACEMENT_0___+");mask-image:url("+___CSS_LOADER_URL_REPLACEMENT_0___+");-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:cover;mask-size:cover;position:absolute;right:0;transform:rotate(-90deg);width:20px}","",{version:3,sources:["webpack://./templates/hero-image/hero-image.css"],names:[],mappings:"AAAA,sBAAsB;AACtB,yCAAyC;AACzC,uCAAuC,YAAY,CAAC,gBAAgB,CAAC,cAAc,CAAC,SAAS,CAAC,iBAAiB,CAAC,iCAAiC,YAAY,CAAC,gBAAgB,CAAC,cAAc,CAAC,SAAS,CAAC,iBAAiB,CAAC,yBAAyB,uCAAuC,YAAY,CAAC,iCAAiC,YAAY,CAAC,CAAC,qDAAqD,cAAc,CAAC,+CAA+C,cAAc,CAAC,mBAAmB,uDAAuD,CAAC,UAAU,CAAC,sCAAsC,QAAQ,CAAC,MAAM,CAAC,iBAAiB,CAAC,OAAO,CAAC,KAAK,CAAC,mBAAmB,uBAAuB,CAAC,2BAA2B,CAAC,qBAAqB,CAAC,UAAU,CAAC,UAAU,CAAC,qBAAqB,QAAQ,CAAC,UAAU,CAAC,YAAY,CAAC,qBAAqB,CAAC,sBAAsB,CAAC,MAAM,CAAC,eAAe,CAAC,iBAAiB,CAAC,OAAO,CAAC,iBAAiB,CAAC,KAAK,CAAC,yBAAyB,qBAAqB,0DAA0D,CAAC,CAAC,uBAAuB,aAAa,CAAC,qPAAqP,UAAU,CAAC,wBAAwB,eAAe,CAAC,2BAA2B,oBAAoB,CAAC,iCAAiC,qBAAqB,CAAC,WAAW,CAAC,iBAAiB,CAAC,cAAc,CAAC,0DAAsT,CAAC,kDAA8S,CAAC,4BAA4B,CAAC,oBAAoB,CAAC,6BAA6B,CAAC,qBAAqB,CAAC,uBAAuB,CAAC,eAAe,CAAC,iBAAiB,CAAC,OAAO,CAAC,wBAAwB,CAAC,UAAU",sourcesContent:["/* stylelint-disable */\n/* Generated File: Do not edit directly */\n.hero-container[\\:has\\(\\.hero-image\\)]{height:391px;margin:-92px 0 0;max-width:100%;padding:0;position:relative}.hero-container:has(.hero-image){height:391px;margin:-92px 0 0;max-width:100%;padding:0;position:relative}@media (min-width:992px){.hero-container[\\:has\\(\\.hero-image\\)]{height:483px}.hero-container:has(.hero-image){height:483px}}.hero-container[\\:has\\(\\.hero-image\\)] .hero-wrapper{max-width:100%}.hero-container:has(.hero-image) .hero-wrapper{max-width:100%}.hero-image .cover{background-color:var(--ros-pattern-modal-color-overlay);z-index:-1}.hero-image .cover,.hero-image .image{bottom:0;left:0;position:absolute;right:0;top:0}.hero-image .image{background-position:50%;background-repeat:no-repeat;background-size:cover;width:100%;z-index:-2}.hero-image .content{bottom:0;color:#fff;display:flex;flex-direction:column;justify-content:center;left:0;margin-top:70px;position:absolute;right:0;text-align:center;top:0}@media (min-width:992px){.hero-image .content{margin-top:var(--ros-semantic-spacing-around-component-xl)}}.hero-image .content>p{margin:0 auto}.hero-image .content .h1,.hero-image .content .h2,.hero-image .content .h3,.hero-image .content .h4,.hero-image .content .h5,.hero-image .content h1,.hero-image .content h2,.hero-image .content h3,.hero-image .content h4,.hero-image .content h5{color:#fff}.hero-image .content ul{list-style:none}.hero-image .content ul li{display:inline-block}.hero-image .content ul li:after{background-color:#fff;height:20px;margin-right:10px;margin-top:2px;-webkit-mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='18' width='18'%3E%3Cpath class='fill' d='M4 7.01a1 1 0 0 1 1.706-.706L8.993 9.59l3.29-3.285A1 1 0 0 1 13.72 7.69l-.024.025L9.7 11.707a1 1 0 0 1-1.413 0L4.293 7.716A.995.995 0 0 1 4 7.01Z'/%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='18' width='18'%3E%3Cpath class='fill' d='M4 7.01a1 1 0 0 1 1.706-.706L8.993 9.59l3.29-3.285A1 1 0 0 1 13.72 7.69l-.024.025L9.7 11.707a1 1 0 0 1-1.413 0L4.293 7.716A.995.995 0 0 1 4 7.01Z'/%3E%3C/svg%3E\");-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:cover;mask-size:cover;position:absolute;right:0;transform:rotate(-90deg);width:20px}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/getUrl.js":module=>{module.exports=function(url,options){return options||(options={}),url?(url=String(url.__esModule?url.default:url),/^['"].*['"]$/.test(url)&&(url=url.slice(1,-1)),options.hash&&(url+=options.hash),/["'() \t\n]|(%20)/.test(url)||options.needQuotes?'"'.concat(url.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):url):url}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}},"data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 height=%2718%27 width=%2718%27%3E%3Cpath class=%27fill%27 d=%27M4 7.01a1 1 0 0 1 1.706-.706L8.993 9.59l3.29-3.285A1 1 0 0 1 13.72 7.69l-.024.025L9.7 11.707a1 1 0 0 1-1.413 0L4.293 7.716A.995.995 0 0 1 4 7.01Z%27/%3E%3C/svg%3E":module=>{module.exports="data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 height=%2718%27 width=%2718%27%3E%3Cpath class=%27fill%27 d=%27M4 7.01a1 1 0 0 1 1.706-.706L8.993 9.59l3.29-3.285A1 1 0 0 1 13.72 7.69l-.024.025L9.7 11.707a1 1 0 0 1-1.413 0L4.293 7.716A.995.995 0 0 1 4 7.01Z%27/%3E%3C/svg%3E"}}]);