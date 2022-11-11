export default function decorate(block) {
  [...block.querySelectorAll('img')].forEach((img) => {
    img.loading = 'eager';
  });
  [...block.children].forEach((row, i) => {
    const imgType = (i === 0) ? 'desktop' : 'mobile';
    row.classList.add(imgType);
  });
}
