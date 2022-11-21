export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.querySelectorAll(':scope > div').forEach((row) => {
    row.querySelectorAll(':scope > div').forEach((col) => {
      if (block.classList.contains('bulleted')) {
        const icon = col.querySelector('.icon');
        if (icon) {
          icon.remove();
          const content = document.createElement('div');
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

  if (block.classList.contains('full-width-section')) {
    block.classList.remove('full-width-section');
    block.parentElement.parentElement.classList.add('full-width-section');
  }
}
