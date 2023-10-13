import { buildBlock } from '../../scripts/aem.js';
import { createTag } from '../../scripts/scripts.js';

export default function decorate(main) {
  const firstDiv = main.querySelector('div:first-of-type');
  const img = firstDiv.querySelector('img');

  const backgroundImage = createTag('div', { class: 'image' });
  backgroundImage.style.backgroundImage = `url('${img.src})`;
  img.closest('p').remove();

  const cover = createTag('div', { class: 'cover' });

  const content = createTag('div', { class: 'content' });
  content.append(...firstDiv.childNodes);

  const section = createTag('div');
  const heroBlock = buildBlock('hero', [[{ elems: [cover, backgroundImage] }, content]]);
  heroBlock.classList.add('hero-image');

  section.append(heroBlock);
  firstDiv.remove();
  main.prepend(section);
}
