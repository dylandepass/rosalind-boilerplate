"use strict";(self.webpackChunk_rosalind_rosalind_template=self.webpackChunk_rosalind_rosalind_template||[]).push([[5642],{"./blocks/banner/banner.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function decorate(block){block.closest(".section").classList.add("full-width");const image=block.querySelector(":scope > div > div:nth-of-type(1)");image&&(image.className="bg-image");const bannerContentContainer=block.querySelector(":scope > div > div:nth-of-type(2)");bannerContentContainer&&(bannerContentContainer.className="container");const content=document.createElement("div");content.classList.add("content"),content.innerHTML=bannerContentContainer.innerHTML,bannerContentContainer.innerHTML="",bannerContentContainer.appendChild(content);const buttonGroup=document.createElement("div");buttonGroup.className="button-group",block.querySelectorAll("a").forEach((a=>{const container=a.closest(".button-container");a.classList.contains("primary")&&container.classList.add("primary"),buttonGroup.appendChild(a.closest(".button-container"))})),content.append(buttonGroup)}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>decorate})}}]);