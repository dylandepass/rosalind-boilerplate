import{d}from"./lib-franklin-0f15b75e.js";import"./preload-helper-41c905a7.js";function r(){return`
        <div>
            <p class="heading">Author</p>
            <div class="user-card">
                <img src="assets/images/client/05.jpg" class="avatar" alt="">
                <a href="" class="authorName">Alison Parker</a>
                <p class="title">Content Writer</p>
            </div>

            <p class="heading">Related posts</p>
            <div class="post-list">
                <div class="post">
                    <img src="" alt="">
                    <div class="ml-3">
                        <a href="" class="title">Intro to PostCSS</a>
                        <p class="published-date">November 1, 2022</p>
                    </div>
                </div>
                <div class="post">
                    <img src="" alt="">

                    <div class="ml-3">
                        <a href="" class="title">Working with Figma</a>
                        <p class="published-date">November 14, 2022</p>
                    </div>
                </div>
                <div class="post">
                    <img src="" alt="">

                    <div class="ml-3">
                        <a href="" class="title">Intro to Storybook</a>
                        <p class="published-date">November 22, 2022</p>
                    </div>
                </div>
            </div>

            <p class="heading">Social sites</p>
            <ul class="social-buttons">
                <p class="button-container">
                    <em>
                        <a href="" class="button secondary small icon-only"><span class="icon icon-facebook"></a>
                    </em>
                </p>
            </ul>

            <p class="heading">Tagscloud</p>
            <ul class="tagcloud">
                <li><a href="" class="">Franklin</a></li>
                <li><a href="" class="">Javascript</a></li>
                <li><a href="" class="">Adobe</a></li>
                <li><a href="" class="">Web Content Management</a></li>
                <li><a href="" class="">Web Design</a></li>
            </ul>
        </div>
    `}function h(n){const e=n.querySelector("div:first-of-type"),i=e.querySelector("img:first-of-type");i&&(i.loading="eager");const c=document.createElement("article"),s=document.createElement("div");s.classList.add("blog-post");const a=document.createElement("div");a.classList.add("content");const t=document.createElement("div");t.classList.add("hero"),t.append(i.closest("picture"));const l=e.querySelector("h1:first-of-type");l&&(l.classList.add("h3"),t.append(l)),a.append(t);const o=document.createElement("aside");o.innerHTML=r(),s.appendChild(a),s.appendChild(o),a.append(...e.childNodes),c.append(...s.childNodes),e.innerHTML="",e.append(c),d(e)}export{h as default};
//# sourceMappingURL=blog-post-b47f41ba.js.map
