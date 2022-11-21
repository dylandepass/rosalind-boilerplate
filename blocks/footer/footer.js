import { readBlockConfig, decorateIcons } from '../../scripts/lib-franklin.js';

/**
 * loads and decorates the footer
 * @param {Element} block The header block element
 */

export default async function decorate(block) {
  const cfg = readBlockConfig(block);
  block.textContent = '';

  const footerPath = cfg.footer || '/footer';
  const resp = await fetch(`${footerPath}.plain.html`);
  const html = await resp.text();
  const footer = document.createElement('div');
  footer.innerHTML = html;
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

  const copy = document.createElement('div');
  copy.classList.add('footer-copy');
  copy.classList.add('section');
  copy.classList.add('full-width-section');

  const copyContainer = document.createElement('div');
  copy.append(copyContainer);
  copyContainer.innerText = '2022 Rosalind Theme. Built with ❤️';

  if (block.parentNode) {
    block.parentNode.insertBefore(copy, block.nextElementSibling);
  }
}
