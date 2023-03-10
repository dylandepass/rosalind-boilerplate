import { createTag } from '../../scripts/scripts.js';

export default function decorate(block) {
  const blockquote = createTag('blockquote');
  blockquote.append(...block.childNodes);
  block.replaceWith(blockquote);
}
