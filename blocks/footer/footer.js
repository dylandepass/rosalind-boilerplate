import { readBlockConfig, decorateIcons } from '../../scripts/lib-franklin.js';
import { createTag } from '../../scripts/scripts.js';

/**
 * loads and decorates the footer
 * @param {Element} block The header block element
 */

export default async function decorate(block) {
  const cfg = readBlockConfig(block);
  block.textContent = '';

  let footerPath = cfg.footer || '/footer';

  // Load from storybook directory if running on github.io
  if (window.location.host.includes('github.io') || window.__STORYBOOK_PREVIEW__) { // eslint-disable-line no-underscore-dangle
    footerPath = 'https://main--rosalind-boilerplate--dylandepass.hlx.page/storybook/footer';
  }

  const resp = await fetch(`${footerPath}.plain.html`);
  const html = await resp.text();
  const footer = createTag('div', {}, html);
  await decorateIcons(footer);

  const about = footer.children[0];
  about?.classList.add('about');

  const company = footer?.children[1];
  company?.classList.add('company');

  const links = footer?.children[2];
  links?.classList.add('links');

  const newsletter = footer?.children[3];
  newsletter?.classList.add('newsletter');

  block.classList.add('section');
  block.classList.add('full-width-section');
  block.append(footer);

  const copy = createTag('div', { class: 'section full-width-section footer-copy' });

  const copyContainer = createTag('div');
  copy.append(copyContainer);
  copyContainer.innerText = '2022 Rosalind Theme. Built with ❤️';

  if (block.parentNode) {
    block.parentNode.insertBefore(copy, block.nextElementSibling);
  }
}
