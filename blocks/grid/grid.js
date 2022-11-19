export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.querySelectorAll(':scope > div').forEach((row) => {
    row.querySelectorAll(':scope > div').forEach((col) => {
      block.appendChild(col);
    });
    row.remove();
  });

  block.classList.add('grid');
  block.classList.add(`grid-md-cols-${cols.length}`);
  block.classList.add('grid-cols-1');
}
