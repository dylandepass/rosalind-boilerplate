export default function decorate(main) {
  const firstDiv = main.querySelector('div:first-of-type');

  const container = document.createElement('div');
  container.classList.add('blog-post');
  const post = document.createElement('div');
  post.classList.add('blog-post');
  const content = document.createElement('div');
  content.classList.add('content');
  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');

  sidebar.innerHTML = /* html */'<h3>Metadata</h3>';

  post.appendChild(content);
  post.appendChild(sidebar);

  content.append(...firstDiv.childNodes);
  container.append(...post.childNodes);

  firstDiv.innerHTML = '';
  firstDiv.append(container);
}
