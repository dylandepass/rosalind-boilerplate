export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.querySelectorAll(':scope > div').forEach((row) => {
    row.querySelectorAll(':scope > div').forEach((col) => {
      if (block.classList.contains('bulleted')) {
        col.classList.add('row');
        const icon = col.querySelector('.icon');
        if (icon) {
          icon.remove();
          icon.classList.add('col-1');
          icon.classList.add('pt-sm');
          icon.classList.add('pl-sm');

          const content = document.createElement('div');
          content.classList.add('col-11');
          content.innerHTML = col.innerHTML;
          col.innerHTML = '';
          col.append(icon);
          col.append(content);
        }
      }
      block.appendChild(col);
    });
    row.remove();
  });

  block.classList.add('grid');
  block.classList.add(`grid-lg-cols-${cols.length}`);
  block.classList.add('grid-cols-1');

  if (block.classList.contains('full-width-section')) {
    block.classList.remove('full-width-section');
    block.parentElement.parentElement.classList.add('full-width-section');
  }
}
