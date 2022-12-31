export default function decorate(block) {
  if (block.classList.contains('full-width-section')) {
    block.classList.remove('full-width-section');
    block.parentElement.parentElement.classList.add('full-width-section');
  }
}
