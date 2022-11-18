export default function decorate(block) {
  if (block.classList.contains('hero-2-cols')) {
    const grid = block.querySelector(':scope > div');
    grid.classList.add('grid');
    grid.classList.add('grid-cols-1');
    grid.classList.add('grid-md-cols-2');
  }
}
