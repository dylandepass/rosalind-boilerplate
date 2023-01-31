import { buildBlock } from '../../scripts/lib-franklin.js';

export default function decorate(main) {
  const firstDiv = main.querySelector('div:first-of-type');
  const img = firstDiv.querySelector('img');

  const backgroundImage = document.createElement('div');
  backgroundImage.style.backgroundImage = `url('${img.src})`;
  backgroundImage.classList.add('image');
  img.closest('p').remove();

  const cover = document.createElement('div');
  cover.classList.add('cover');

  const content = document.createElement('div');
  content.classList.add('content');
  content.append(...firstDiv.childNodes);

  const section = document.createElement('div');
  const heroBlock = buildBlock('hero', [[{ elems: [cover, backgroundImage] }, content]]);
  heroBlock.classList.add('hero-image');

  // decorateBlock(heroBlock);

  section.append(heroBlock);
  firstDiv.remove();
  main.prepend(section);
}
