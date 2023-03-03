import { loadCSS, decorateIcons } from '../../scripts/lib-franklin.js';

class Tag extends HTMLElement {
  constructor() {
    super();

    loadCSS('/components/tag/tag.css', () => {});
  }

  async connectedCallback() {
    this.render();
  }

  async render() {
    const icon = this.getAttribute('icon');
    const iconPosition = this.getAttribute('iconPosition');

    const container = document.createElement('div');
    container.classList.add('container');

    container.innerHTML = /* html */ `
            ${icon && iconPosition !== 'right' ? `<span class="icon icon-${icon}"></span>` : ''}
            <span class='label'>${this.getAttribute('label')}</span>
            ${icon && iconPosition === 'right' ? `<span class="icon icon-${icon}"></span>` : ''}`;

    decorateIcons(container);

    this.appendChild(container);

    this.dispatchEvent(new Event('ready'));
  }
}

customElements.define('tag-element', Tag);
