import { loadCSS, decorateIcons } from '../../scripts/lib-franklin.js';
import { createTag } from '../../scripts/scripts.js';

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
    const content = /* html */ `
            ${icon && iconPosition !== 'right' ? `<span class="icon icon-${icon}"></span>` : ''}
            <span class='label'>${this.getAttribute('label')}</span>
            ${icon && iconPosition === 'right' ? `<span class="icon icon-${icon}"></span>` : ''}`;

    const tag = createTag('div', { class: 'container' }, content);

    decorateIcons(tag);
    this.appendChild(tag);
    this.dispatchEvent(new Event('ready'));
  }
}

customElements.define('tag-element', Tag);
