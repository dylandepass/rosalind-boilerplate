"use strict";(self.webpackChunk_rosalind_rosalind_template=self.webpackChunk_rosalind_rosalind_template||[]).push([[2293,1769],{"./blocks/library-config/library-utils.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function createCopy(blob){const data=[new ClipboardItem({[blob.type]:blob})];navigator.clipboard.write(data)}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>createCopy})},"./blocks/library-config/lists/assets.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>assetsList});var _library_utils_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./blocks/library-config/library-utils.js"),_scripts_scripts_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./scripts/scripts.js");async function assetsList(content,list){content.forEach((href=>{const img=(0,_scripts_scripts_js__WEBPACK_IMPORTED_MODULE_0__.ln)("img",{src:href}),li=(0,_scripts_scripts_js__WEBPACK_IMPORTED_MODULE_0__.ln)("li",{class:"asset-item"},img);list.append(li),img.addEventListener("click",(()=>{const html=href.endsWith(".svg")?function buildLink(href){return(0,_scripts_scripts_js__WEBPACK_IMPORTED_MODULE_0__.ln)("a",{href},href).outerHTML}(href):img.outerHTML,blob=new Blob([html],{type:"text/html"});(0,_library_utils_js__WEBPACK_IMPORTED_MODULE_1__.default)(blob)}))}))}}}]);