"use strict";(self.webpackChunk_rosalind_rosalind_template=self.webpackChunk_rosalind_rosalind_template||[]).push([[2923],{"./templates/hero-image/hero-image.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>decorate});var _scripts_aem_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./scripts/aem.js"),_scripts_scripts_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./scripts/scripts.js");function decorate(main){const firstDiv=main.querySelector("div:first-of-type"),img=firstDiv.querySelector("img"),backgroundImage=(0,_scripts_scripts_js__WEBPACK_IMPORTED_MODULE_1__.ln)("div",{class:"image"});backgroundImage.style.backgroundImage=`url('${img.src})`,img.closest("p").remove();const cover=(0,_scripts_scripts_js__WEBPACK_IMPORTED_MODULE_1__.ln)("div",{class:"cover"}),content=(0,_scripts_scripts_js__WEBPACK_IMPORTED_MODULE_1__.ln)("div",{class:"content"});content.append(...firstDiv.childNodes);const section=(0,_scripts_scripts_js__WEBPACK_IMPORTED_MODULE_1__.ln)("div"),heroBlock=(0,_scripts_aem_js__WEBPACK_IMPORTED_MODULE_0__.BI)("hero",[[{elems:[cover,backgroundImage]},content]]);heroBlock.classList.add("hero-image"),section.append(heroBlock),firstDiv.remove(),main.prepend(section)}}}]);