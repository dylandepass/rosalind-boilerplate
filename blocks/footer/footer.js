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

  const container = footer.querySelector('.footer > div');
  container?.classList.add('grid');
  container?.classList.add('grid-cols-1');
  container?.classList.add('grid-md-cols-12');
  container?.classList.add('gap-lg');

  const about = container?.children[0];
  about?.classList.add('about');
  about?.classList.add('grid-lg-col-span-4');
  about?.classList.add('grid-md-col-span-12');

  const company = container?.children[1];
  company?.classList.add('company');
  company?.classList.add('grid-lg-col-span-2');
  company?.classList.add('grid-md-col-span-4');

  const links = container?.children[2];
  links?.classList.add('links');
  links?.classList.add('grid-lg-col-span-3');
  links?.classList.add('grid-md-col-span-4');

  const newsletter = container?.children[3];
  newsletter?.classList.add('newsletter');
  newsletter?.classList.add('grid-lg-col-span-3');
  newsletter?.classList.add('grid-md-col-span-4');

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
