import { loadCSS, toCamelCase } from '../../scripts/lib-franklin.js';
import { createTag } from '../../scripts/scripts.js';

class Avatar extends HTMLElement {
  constructor() {
    super();

    loadCSS('/components/avatar/avatar.css', () => {});
  }

  async connectedCallback() {
    this.render();
  }

  async render() {
    const name = this.getAttribute('name');
    const url = this.getAttribute('url');

    const imgURL = url || toCamelCase(name);

    const img = createTag('img', { src: imgURL });
    const avatar = createTag('div', { class: 'container' });

    avatar.appendChild(img);

    this.appendChild(avatar);
    this.dispatchEvent(new Event('ready'));
  }
}

customElements.define('avatar-element', Avatar);
