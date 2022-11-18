export default function decorate(block) {
  block.querySelectorAll(':scope > div').forEach((row) => {
    row.querySelectorAll(':scope > div').forEach((col) => {
      block.appendChild(col);
    });
    row.remove();
  });

  const childCount = block.children.length;
  const preferredCols = childCount < 4 ? childCount : 4;
  block.classList.add('grid');
  block.classList.add(`grid-lg-cols-${preferredCols}`);
  block.classList.add('grid-md-cols-3');
  block.classList.add('grid-sm-cols-2');
  block.classList.add('grid-cols-1');
}
