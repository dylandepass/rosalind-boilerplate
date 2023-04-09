"use strict";(self.webpackChunk_rosalind_rosalind_template=self.webpackChunk_rosalind_rosalind_template||[]).push([[6528],{"./blocks/embed/embed.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>decorate});const loadScript=(url,callback,type)=>{const head=document.querySelector("head"),script=document.createElement("script");return script.src=url,type&&script.setAttribute("type",type),head.append(script),script.onload=callback,script},getDefaultEmbed=url=>`<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;">\n    <iframe src="${url.href}" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" allowfullscreen=""\n      scrolling="no" allow="encrypted-media" title="Content from ${url.hostname}" loading="lazy">\n    </iframe>\n  </div>`,EMBEDS_CONFIG={youtube:{type:"youtube",embed:url=>{let vid=new URLSearchParams(url.search).get("v");const embed=url.pathname;url.origin.includes("youtu.be")&&(vid=url.pathname.substring(1));return`<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;">\n      <iframe src="https://www.youtube.com${vid?`/embed/${vid}?rel=0&amp;v=${vid}`:embed}" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" allow="encrypted-media; accelerometer; gyroscope; picture-in-picture" allowfullscreen="" scrolling="no" title="Content from Youtube" loading="lazy"></iframe>\n    </div>`}},wistia:{type:"wistia",embed:getDefaultEmbed},instagram:{type:"instagram",embed:url=>{const endingSlash=url.pathname.endsWith("/")?"":"/",location=window.location.href.endsWith(".html")?window.location.href:`${window.location.href}.html`;return`<div style="width: 100%; position: relative; display: flex; justify-content: center">\n      <iframe class="instagram-media instagram-media-rendered" id="instagram-embed-0" src="${`${url.origin}${url.pathname}${endingSlash}embed/?cr=1&amp;v=13&amp;wp=1316&amp;rd=${location}`}"\n        allowtransparency="true" allowfullscreen="true" frameborder="0" loading="lazy">\n      </iframe>\n    </div>`}},vimeo:{type:"vimeo",embed:url=>`<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;">\n      <iframe src="https://player.vimeo.com/video/${url.pathname.split("/")[2]}" \n      style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" \n      frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen  \n      title="Content from Vimeo" loading="lazy"></iframe>\n    </div>`},twitter:{type:"twitter",embed:url=>{const embedHTML=`<blockquote class="twitter-tweet"><a href="${url}"></a></blockquote>`;return loadScript("https://platform.twitter.com/widgets.js"),embedHTML}},tiktok:{type:"tiktok",embed:url=>{const resultHtml=document.createElement("div");resultHtml.setAttribute("id","tiktok");return(async fetchUrl=>{loadScript("https://www.tiktok.com/embed.js");const response=await fetch(fetchUrl),json=await response.json();document.getElementById("tiktok").outerHTML=json.html})(`https://www.tiktok.com/oembed?url=${url}`),resultHtml.outerHTML}},slideshare:{type:"slideshare",embed:url=>{const resultHtml=document.createElement("div");resultHtml.setAttribute("id","slideShare");return(async()=>{const response=await fetch(url),body=await response.text(),el=document.createElement("div");el.innerHTML=body;if(el.querySelector('.slideshow-info meta[itemprop="embedURL"]')){const embedUrl=el.querySelector('.slideshow-info meta[itemprop="embedURL"]').content;document.getElementById("slideShare").outerHTML=`<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;">\n          <iframe src="${embedUrl}" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" allowfullscreen loading="lazy"> </iframe>\n        </div>`}})(),resultHtml.outerHTML}}},loadEmbed=block=>{if(block.classList.contains("is-loaded"))return;const a=block.querySelector("a");if(a){const url=new URL(a.href.replace(/\/$/,"")),hostnameArr=url.hostname.split("."),simpleDomain=hostnameArr[hostnameArr.length-2];let config=EMBEDS_CONFIG[simpleDomain];url.hostname.includes("youtu")&&(config=EMBEDS_CONFIG.youtube),config?(a.outerHTML=config.embed(url),block.classList=`block embed embed-${config.type}`):(a.outerHTML=getDefaultEmbed(url),block.classList=`block embed embed-${simpleDomain}`),block.classList.add("is-loaded")}};function decorate(block){new IntersectionObserver((entries=>{entries.some((e=>e.isIntersecting))&&loadEmbed(block)})).observe(block)}}}]);