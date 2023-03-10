try{
var d=__REACT__,{Children:it,Component:st,Fragment:lt,Profiler:pt,PureComponent:dt,StrictMode:ut,Suspense:ft,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:ct,cloneElement:mt,createContext:ht,createElement:gt,createFactory:bt,createRef:yt,forwardRef:vt,isValidElement:xt,lazy:St,memo:q,useCallback:Ft,useContext:wt,useDebugValue:Ct,useEffect:Tt,useImperativeHandle:kt,useLayoutEffect:Ot,useMemo:_t,useReducer:Pt,useRef:Bt,useState:It,version:Et}=__REACT__;var Mt=__STORYBOOKADDONS__,{addons:T,types:G,mockChannel:At}=__STORYBOOKADDONS__;var Kt=__STORYBOOKAPI__,{ActiveTabs:$t,Consumer:qt,ManagerContext:Gt,Provider:Wt,addons:Ut,combineParameters:Xt,controlOrMetaKey:Zt,controlOrMetaSymbol:Qt,eventMatchesShortcut:Jt,eventToShortcut:Vt,isMacLike:er,isShortcutTaken:tr,keyToSymbol:rr,merge:ar,mockChannel:nr,optionOrAltSymbol:or,shortcutMatchesShortcut:ir,shortcutToHumanString:sr,types:lr,useAddonState:pr,useArgTypes:dr,useArgs:ur,useChannel:fr,useGlobalTypes:cr,useGlobals:mr,useParameter:W,useSharedState:hr,useStoryPrepared:gr,useStorybookApi:br,useStorybookState:yr}=__STORYBOOKAPI__;var wr=__STORYBOOKCOMPONENTS__,{A:Cr,ActionBar:Tr,AddonPanel:kr,Badge:Or,Bar:_r,Blockquote:Pr,Button:Br,Code:Ir,DL:Er,Div:Rr,DocumentWrapper:jr,ErrorFormatter:zr,FlexBar:Hr,Form:Mr,H1:Ar,H2:Dr,H3:Lr,H4:Nr,H5:Yr,H6:Kr,HR:$r,IconButton:U,IconButtonSkeleton:qr,Icons:Gr,Img:Wr,LI:Ur,Link:Xr,ListItem:Zr,Loader:Qr,OL:Jr,P:Vr,Placeholder:ea,Pre:ta,ResetWrapper:ra,ScrollArea:aa,Separator:na,Spaced:oa,Span:ia,StorybookIcon:sa,StorybookLogo:la,Symbols:pa,SyntaxHighlighter:da,TT:ua,TabBar:fa,TabButton:ca,TabWrapper:ma,Table:ha,Tabs:ga,TabsState:ba,TooltipLinkList:X,TooltipMessage:ya,TooltipNote:va,UL:xa,WithTooltip:Z,WithTooltipPure:Sa,Zoom:Fa,codeCommon:wa,components:Ca,createCopyToClipboardFunction:Ta,getStoryHref:ka,icons:Oa,interleaveSeparators:_a,nameSpaceClassNames:Pa,resetComponents:Ba,withReset:Ia}=__STORYBOOKCOMPONENTS__;var Q=q(()=>{let e=W("theme",null)||{};function t(r){return r?.themes?Object.keys(r.themes).map(a=>{let n=r.themes[a];return{id:n.id,title:n.name,onClick:()=>{ue(n.name)},right:n.icon?d.createElement("img",{src:n.icon,width:"25",height:"25"}):null}}):[]}return d.createElement(d.Fragment,null,d.createElement(Z,{placement:"top",trigger:"click",closeOnClick:!0,tooltip:()=>d.createElement(X,{links:t(e)})},d.createElement(U,{key:"brand",title:"Change the brand theme of the preview",active:!0},d.createElement("svg",{className:"sto-130cftl",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",height:"80px",width:"80px",version:"1.1",id:"Layer_1",viewBox:"0 0 512 512",xmlSpace:"preserve"},d.createElement("g",null,d.createElement("g",null,d.createElement("path",{d:"M475.691,0.021c-14.656,0-27.776,8.725-33.451,22.251l-32.64,77.973c-9.728-9.152-22.421-14.933-36.267-14.933h-320    C23.936,85.312,0,109.248,0,138.645v320c0,29.397,23.936,53.333,53.333,53.333h320c29.397,0,53.333-23.936,53.333-53.333V225.152    l81.92-172.821c2.24-4.757,3.413-10.048,3.413-16.043C512,16.299,495.701,0.021,475.691,0.021z M405.333,458.645    c0,17.643-14.357,32-32,32h-320c-17.643,0-32-14.357-32-32v-320c0-17.643,14.357-32,32-32h320    c11.243,0,21.312,6.101,27.072,15.573l-37.739,90.197v-52.437c0-5.888-4.779-10.667-10.667-10.667H74.667    c-5.888,0-10.667,4.779-10.667,10.667v85.333c0,5.888,4.779,10.667,10.667,10.667h269.76l-8.939,21.333h-90.155    c-5.888,0-10.667,4.779-10.667,10.667v128c0,0.277,0.128,0.512,0.149,0.789c-8.768,7.787-14.144,10.389-14.528,10.539    c-3.371,1.259-5.888,4.096-6.699,7.616c-0.811,3.584,0.256,7.339,2.859,9.941c15.445,15.445,36.757,21.333,57.6,21.333    c26.645,0,52.48-9.643,64.128-21.333c16.768-16.768,29.056-50.005,19.776-74.773l47.381-99.925V458.645z M270.635,397.525    c2.944-9.685,5.739-18.859,14.229-27.349c15.083-15.083,33.835-15.083,48.917,0c13.504,13.504,3.2,45.717-10.667,59.584    c-11.563,11.541-52.672,22.677-80.256,8.256c3.669-2.859,7.893-6.549,12.672-11.328    C264.448,417.749,267.605,407.467,270.635,397.525z M256,375.339v-76.672h70.571l-16.363,39.083    c-14.251-0.256-28.565,5.483-40.448,17.387C263.125,361.771,259.008,368.661,256,375.339z M331.264,342.741l28.715-68.629    l16.128,7.915l-32.555,68.651C339.605,347.477,335.531,344.747,331.264,342.741z M341.333,170.645v64h-256v-64H341.333z     M489.28,43.243l-104.064,219.52l-17.003-8.341l54.08-129.237l39.616-94.677c2.325-5.568,7.744-9.152,13.803-9.152    c8.235,0,14.933,6.699,14.933,15.659C490.645,39.147,490.176,41.344,489.28,43.243z"}))),d.createElement("g",null,d.createElement("g",null,d.createElement("path",{d:"M181.333,277.312H74.667c-5.888,0-10.667,4.779-10.667,10.667v149.333c0,5.888,4.779,10.667,10.667,10.667h106.667    c5.888,0,10.667-4.779,10.667-10.667V287.979C192,282.091,187.221,277.312,181.333,277.312z M170.667,426.645H85.333v-128h85.333    V426.645z"})))))))});function ue(e){let t=document.querySelector("#storybook-preview-iframe")?.contentDocument;if(t){let r=t.head.querySelector("#theme-variables");r.href=`./themes/${e}.css`}}var J=(()=>{let e;return typeof window<"u"?e=window:typeof globalThis<"u"?e=globalThis:typeof window<"u"?e=window:typeof self<"u"?e=self:e={},e})();var Wa=__STORYBOOKCLIENTLOGGER__,{deprecate:Ua,logger:V,once:Xa,pretty:Za}=__STORYBOOKCLIENTLOGGER__;function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},x.apply(this,arguments)}function fe(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},S(e,t)}function ce(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,S(e,t)}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},D(e)}function me(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function he(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function k(e,t,r){return he()?k=Reflect.construct.bind():k=function(a,n,o){var i=[null];i.push.apply(i,n);var l=Function.bind.apply(a,i),p=new l;return o&&S(p,o.prototype),p},k.apply(null,arguments)}function L(e){var t=typeof Map=="function"?new Map:void 0;return L=function(r){if(r===null||!me(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(r))return t.get(r);t.set(r,a)}function a(){return k(r,arguments,D(this).constructor)}return a.prototype=Object.create(r.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),S(a,r)},L(e)}var ge={1:`Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,2:`Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,3:`Passed an incorrect argument to a color function, please pass a string representation of a color.

`,4:`Couldn't generate valid rgb string from %s, it returned %s.

`,5:`Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,6:`Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,7:`Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,8:`Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,9:`Please provide a number of steps to the modularScale helper.

`,10:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,11:`Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,12:`Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,13:`Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,14:`Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,15:`Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,16:`You must provide a template to this method.

`,17:`You passed an unsupported selector state to this method.

`,18:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,19:`fromSize and toSize must be provided as stringified numbers with the same units.

`,20:`expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,21:"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",22:"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",23:`fontFace expects a name of a font-family.

`,24:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,25:`fontFace expects localFonts to be an array.

`,26:`fontFace expects fileFormats to be an array.

`,27:`radialGradient requries at least 2 color-stops to properly render.

`,28:`Please supply a filename to retinaImage() as the first argument.

`,29:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,30:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",31:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,32:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,33:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,34:`borderRadius expects a radius value as a string or number as the second argument.

`,35:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,36:`Property must be a string value.

`,37:`Syntax Error at %s.

`,38:`Formula contains a function that needs parentheses at %s.

`,39:`Formula is missing closing parenthesis at %s.

`,40:`Formula has too many closing parentheses at %s.

`,41:`All values in a formula must have the same unit or be unitless.

`,42:`Please provide a number of steps to the modularScale helper.

`,43:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,44:`Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,45:`Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,46:`Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,47:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,48:`fromSize and toSize must be provided as stringified numbers with the same units.

`,49:`Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,50:`Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,51:`Expects the first argument object to have the properties prop, fromSize, and toSize.

`,52:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,53:`fontFace expects localFonts to be an array.

`,54:`fontFace expects fileFormats to be an array.

`,55:`fontFace expects a name of a font-family.

`,56:`linearGradient requries at least 2 color-stops to properly render.

`,57:`radialGradient requries at least 2 color-stops to properly render.

`,58:`Please supply a filename to retinaImage() as the first argument.

`,59:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,60:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",61:`Property must be a string value.

`,62:`borderRadius expects a radius value as a string or number as the second argument.

`,63:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,64:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,65:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,66:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,67:`You must provide a template to this method.

`,68:`You passed an unsupported selector state to this method.

`,69:`Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,70:`Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,71:`Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,72:`Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,73:`Please provide a valid CSS variable.

`,74:`CSS variable not found and no default was provided.

`,75:`important requires a valid style object, got a %s instead.

`,76:`fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,77:`remToPx expects a value in "rem" but you provided it in "%s".

`,78:`base must be set in "px" or "%" but you set it in "%s".
`};function be(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=t[0],n=[],o;for(o=1;o<t.length;o+=1)n.push(t[o]);return n.forEach(function(i){a=a.replace(/%[a-z]/,i)}),a}var h=function(e){ce(t,e);function t(r){for(var a,n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return a=e.call(this,be.apply(void 0,[ge[r]].concat(o)))||this,fe(a)}return t}(L(Error));function j(e){return Math.round(e*255)}function ye(e,t,r){return j(e)+","+j(t)+","+j(r)}function F(e,t,r,a){if(a===void 0&&(a=ye),t===0)return a(r,r,r);var n=(e%360+360)%360/60,o=(1-Math.abs(2*r-1))*t,i=o*(1-Math.abs(n%2-1)),l=0,p=0,m=0;n>=0&&n<1?(l=o,p=i):n>=1&&n<2?(l=i,p=o):n>=2&&n<3?(p=o,m=i):n>=3&&n<4?(p=i,m=o):n>=4&&n<5?(l=i,m=o):n>=5&&n<6&&(l=o,m=i);var y=r-o/2,v=l+y,g=p+y,R=m+y;return a(v,g,R)}var ee={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function ve(e){if(typeof e!="string")return e;var t=e.toLowerCase();return ee[t]?"#"+ee[t]:e}var xe=/^#[a-fA-F0-9]{6}$/,Se=/^#[a-fA-F0-9]{8}$/,Fe=/^#[a-fA-F0-9]{3}$/,we=/^#[a-fA-F0-9]{4}$/,z=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,Ce=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,Te=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,ke=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function B(e){if(typeof e!="string")throw new h(3);var t=ve(e);if(t.match(xe))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(Se)){var r=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:r}}if(t.match(Fe))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(we)){var a=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:a}}var n=z.exec(t);if(n)return{red:parseInt(""+n[1],10),green:parseInt(""+n[2],10),blue:parseInt(""+n[3],10)};var o=Ce.exec(t.substring(0,50));if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])>1?parseFloat(""+o[4])/100:parseFloat(""+o[4])};var i=Te.exec(t);if(i){var l=parseInt(""+i[1],10),p=parseInt(""+i[2],10)/100,m=parseInt(""+i[3],10)/100,y="rgb("+F(l,p,m)+")",v=z.exec(y);if(!v)throw new h(4,t,y);return{red:parseInt(""+v[1],10),green:parseInt(""+v[2],10),blue:parseInt(""+v[3],10)}}var g=ke.exec(t.substring(0,50));if(g){var R=parseInt(""+g[1],10),pe=parseInt(""+g[2],10)/100,de=parseInt(""+g[3],10)/100,$="rgb("+F(R,pe,de)+")",C=z.exec($);if(!C)throw new h(4,t,$);return{red:parseInt(""+C[1],10),green:parseInt(""+C[2],10),blue:parseInt(""+C[3],10),alpha:parseFloat(""+g[4])>1?parseFloat(""+g[4])/100:parseFloat(""+g[4])}}throw new h(5)}function Oe(e){var t=e.red/255,r=e.green/255,a=e.blue/255,n=Math.max(t,r,a),o=Math.min(t,r,a),i=(n+o)/2;if(n===o)return e.alpha!==void 0?{hue:0,saturation:0,lightness:i,alpha:e.alpha}:{hue:0,saturation:0,lightness:i};var l,p=n-o,m=i>.5?p/(2-n-o):p/(n+o);switch(n){case t:l=(r-a)/p+(r<a?6:0);break;case r:l=(a-t)/p+2;break;default:l=(t-r)/p+4;break}return l*=60,e.alpha!==void 0?{hue:l,saturation:m,lightness:i,alpha:e.alpha}:{hue:l,saturation:m,lightness:i}}function ae(e){return Oe(B(e))}var _e=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},N=_e;function b(e){var t=e.toString(16);return t.length===1?"0"+t:t}function H(e){return b(Math.round(e*255))}function Pe(e,t,r){return N("#"+H(e)+H(t)+H(r))}function _(e,t,r){return F(e,t,r,Pe)}function Be(e,t,r){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number")return _(e,t,r);if(typeof e=="object"&&t===void 0&&r===void 0)return _(e.hue,e.saturation,e.lightness);throw new h(1)}function Ie(e,t,r,a){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number"&&typeof a=="number")return a>=1?_(e,t,r):"rgba("+F(e,t,r)+","+a+")";if(typeof e=="object"&&t===void 0&&r===void 0&&a===void 0)return e.alpha>=1?_(e.hue,e.saturation,e.lightness):"rgba("+F(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new h(2)}function Y(e,t,r){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number")return N("#"+b(e)+b(t)+b(r));if(typeof e=="object"&&t===void 0&&r===void 0)return N("#"+b(e.red)+b(e.green)+b(e.blue));throw new h(6)}function w(e,t,r,a){if(typeof e=="string"&&typeof t=="number"){var n=B(e);return"rgba("+n.red+","+n.green+","+n.blue+","+t+")"}else{if(typeof e=="number"&&typeof t=="number"&&typeof r=="number"&&typeof a=="number")return a>=1?Y(e,t,r):"rgba("+e+","+t+","+r+","+a+")";if(typeof e=="object"&&t===void 0&&r===void 0&&a===void 0)return e.alpha>=1?Y(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"}throw new h(7)}var Ee=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},Re=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&typeof e.alpha=="number"},je=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},ze=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&typeof e.alpha=="number"};function ne(e){if(typeof e!="object")throw new h(8);if(Re(e))return w(e);if(Ee(e))return Y(e);if(ze(e))return Ie(e);if(je(e))return Be(e);throw new h(8)}function oe(e,t,r){return function(){var a=r.concat(Array.prototype.slice.call(arguments));return a.length>=t?e.apply(this,a):oe(e,t,a)}}function I(e){return oe(e,e.length,[])}function E(e,t,r){return Math.max(e,Math.min(t,r))}function He(e,t){if(t==="transparent")return t;var r=ae(t);return ne(x({},r,{lightness:E(0,1,r.lightness-parseFloat(e))}))}var Me=I(He),Ae=Me;function De(e,t){if(t==="transparent")return t;var r=ae(t);return ne(x({},r,{lightness:E(0,1,r.lightness+parseFloat(e))}))}var Le=I(De),Ne=Le;function Ye(e,t){if(t==="transparent")return t;var r=B(t),a=typeof r.alpha=="number"?r.alpha:1,n=x({},r,{alpha:E(0,1,(a*100+parseFloat(e)*100)/100)});return w(n)}var tn=I(Ye);function Ke(e,t){if(t==="transparent")return t;var r=B(t),a=typeof r.alpha=="number"?r.alpha:1,n=x({},r,{alpha:E(0,1,+(a*100-parseFloat(e)*100).toFixed(2)/100)});return w(n)}var $e=I(Ke),qe=$e,s={primary:"#FF4785",secondary:"#029CFD",tertiary:"#FAFBFC",ancillary:"#22a699",orange:"#FC521F",gold:"#FFAE00",green:"#66BF3C",seafoam:"#37D5D3",purple:"#6F2CAC",ultraviolet:"#2A0481",lightest:"#FFFFFF",lighter:"#F7FAFC",light:"#EEF3F6",mediumlight:"#ECF4F9",medium:"#D9E8F2",mediumdark:"#73828C",dark:"#5C6870",darker:"#454E54",darkest:"#2E3438",border:"hsla(203, 50%, 30%, 0.15)",positive:"#66BF3C",negative:"#FF4400",warning:"#E69D00",critical:"#FFFFFF",defaultText:"#2E3438",inverseText:"#FFFFFF",positiveText:"#448028",negativeText:"#D43900",warningText:"#A15C20"},te={app:"#F5FBFF",bar:s.lightest,content:s.lightest,gridCellSize:10,hoverable:qe(.93,s.secondary),positive:"#E1FFD4",negative:"#FEDED2",warning:"#FFF5CF",critical:"#FF4400"},P={fonts:{base:['"Nunito Sans"',"-apple-system",'".SFNSText-Regular"','"San Francisco"',"BlinkMacSystemFont",'"Segoe UI"','"Helvetica Neue"',"Helvetica","Arial","sans-serif"].join(", "),mono:["ui-monospace","Menlo","Monaco",'"Roboto Mono"','"Oxygen Mono"','"Ubuntu Monospace"','"Source Code Pro"','"Droid Sans Mono"','"Courier New"',"monospace"].join(", ")},weight:{regular:400,bold:700},size:{s1:12,s2:14,s3:16,m1:20,m2:24,m3:28,l1:32,l2:40,l3:48,code:90}},Ge={base:"light",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:te.app,appContentBg:s.lightest,appBorderColor:s.border,appBorderRadius:4,fontBase:P.fonts.base,fontCode:P.fonts.mono,textColor:s.darkest,textInverseColor:s.lightest,textMutedColor:s.mediumdark,barTextColor:s.mediumdark,barSelectedColor:s.secondary,barBg:s.lightest,buttonBg:te.app,buttonBorder:s.medium,booleanBg:s.mediumlight,booleanSelectedBg:s.lightest,inputBg:s.lightest,inputBorder:s.border,inputTextColor:s.darkest,inputBorderRadius:4},re=Ge,We={base:"dark",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:"#222425",appContentBg:"#1B1C1D",appBorderColor:"rgba(255,255,255,.1)",appBorderRadius:4,fontBase:P.fonts.base,fontCode:P.fonts.mono,textColor:"#C9CDCF",textInverseColor:"#222425",textMutedColor:"#798186",barTextColor:"#798186",barSelectedColor:s.secondary,barBg:"#292C2E",buttonBg:"#222425",buttonBorder:"rgba(255,255,255,.1)",booleanBg:"#222425",booleanSelectedBg:"#2E3438",inputBg:"#1B1C1D",inputBorder:"rgba(255,255,255,.1)",inputTextColor:s.lightest,inputBorderRadius:4},Ue=We,{window:M}=J;var Xe=e=>typeof e!="string"?(V.warn(`Color passed to theme object should be a string. Instead ${e}(${typeof e}) was passed.`),!1):!0,Ze=e=>!/(gradient|var|calc)/.test(e),Qe=(e,t)=>e==="darken"?w(`${Ae(1,t)}`,.95):e==="lighten"?w(`${Ne(1,t)}`,.95):t,ie=e=>t=>{if(!Xe(t)||!Ze(t))return t;try{return Qe(e,t)}catch{return t}},nn=ie("lighten"),on=ie("darken"),Je=()=>!M||!M.matchMedia?"light":M.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",O={light:re,dark:Ue,normal:re},A=Je(),K=(e={base:A},t)=>{let r={...O[A],...O[e.base]||{},...e,base:O[e.base]?e.base:A};return{...t,...r,barSelectedColor:e.barSelectedColor||r.colorSecondary}};var se="data:image/png;base64,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";var le=K({base:"dark",brandTitle:"Rosalind Boilerplate",brandUrl:"https://main--rosalind-boilerplate--dylandepass.hlx.live/",brandImage:se,brandTarget:"_self"});T.setConfig({theme:le});T.register("Brand",()=>{T.add("Brand",{title:"Brand",type:G.TOOL,render:()=>d.createElement(Q,null)})});
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
//# sourceMappingURL=manager-bundle.mjs.map
