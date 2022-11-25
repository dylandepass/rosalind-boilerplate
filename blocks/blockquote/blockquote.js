export default function decorate(block) {
  const blockquote = document.createElement('blockquote');
  blockquote.append(...block.childNodes);
  block.replaceWith(blockquote);
}
