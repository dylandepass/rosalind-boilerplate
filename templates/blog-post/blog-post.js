export default function decorate(main) {
  const section = main.querySelector('div:first-of-type');

  const heroImage = section.querySelector('img:first-of-type');
  if (heroImage) {
    heroImage.loading = 'eager';
  }

  const container = document.createElement('div');
  container.classList.add('blog-post');
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

  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');

  sidebar.innerHTML = /* html */'<h3>Metadata</h3>';

  post.appendChild(content);
  post.appendChild(sidebar);

  content.append(...section.childNodes);
  container.append(...post.childNodes);

  section.innerHTML = '';
  section.append(container);
}
