export default function decorate(block) {
  const grid = block.querySelector(':scope > div');
  grid.classList.add('grid');
  grid.classList.add('grid-lg-cols-5');
  grid.classList.add('grid-md-cols-5');
  grid.classList.add('grid-sm-cols-2');
  grid.classList.add('grid-cols-2');

  block.parentElement.parentElement.classList.add('full-width-section');
}
