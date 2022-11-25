import { decorateIcons } from '../../scripts/lib-franklin.js';

function renderSidebar() {
  return /* html */`
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
    `;
}

export default function decorate(main) {
  const section = main.querySelector('div:first-of-type');

  const heroImage = section.querySelector('img:first-of-type');
  if (heroImage) {
    heroImage.loading = 'eager';
  }

  const container = document.createElement('article');
  const post = document.createElement('div');
  post.classList.add('blog-post');
  const content = document.createElement('div');
  content.classList.add('content');

  const heroImageContainer = document.createElement('div');
  heroImageContainer.classList.add('hero');
  heroImageContainer.append(heroImage.closest('picture'));

  const title = section.querySelector('h1:first-of-type');
  if (title) {
    title.classList.add('h3');
    heroImageContainer.append(title);
  }

  content.append(heroImageContainer);

  const sidebar = document.createElement('aside');

  sidebar.innerHTML = renderSidebar();

  post.appendChild(content);
  post.appendChild(sidebar);

  content.append(...section.childNodes);
  container.append(...post.childNodes);

  section.innerHTML = '';
  section.append(container);

  decorateIcons(section);
}
