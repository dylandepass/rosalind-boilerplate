/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

// import initMedia from '../media/media.js';

export function getBlockSize(el, defaultSize = 1) {
  const sizes = ['small', 'medium', 'large', 'xlarge'];
  if (defaultSize < 0 || defaultSize > sizes.length - 1) return null;
  return sizes.find((size) => el.classList.contains(size)) || sizes[defaultSize];
}

function getReversedRowCount(rows) {
  let count = 0;
  rows.forEach((row) => {
    const firstCol = row.querySelector(':scope > div > div:first-of-type');
    if (firstCol) {
      const header = firstCol.querySelector('h1, h2, h3, h4, h5, h6');
      // if first col has a header, its order is reversed
      if (header) count += 1;
    }
  });
  return count;
}

function getChildSingleRowCount(children) {
  return [...children].reduce((length, child) => {
    // eslint-disable-next-line no-param-reassign
    if (child.children.length === 1) length += 1;
    return length;
  }, 0);
}

function promoteBackgroundClass(className, block, section) {
  if (block.classList.contains(className)) {
    block.classList.remove(className);
    section.classList.add(className);
  }
}

export default function decorate(block) {
  const children = block.querySelectorAll(':scope > div');
  const singleRowCount = getChildSingleRowCount(children);
  const size = getBlockSize(block);

  const section = block.closest('.section');
  section.classList.add('full-width-section');

  promoteBackgroundClass('layer-1', block, section);
  promoteBackgroundClass('layer-2', block, section);

  // If we have a heading row
  if (singleRowCount === 1) {
    const rowHeader = children[0].querySelector('h1, h2, h3, h4, h5, h6');
    if (rowHeader) {
      const headingRow = rowHeader.parentElement;
      headingRow.classList.add('heading');
      headingRow.parentElement.classList.add('container');
    }
  }

  // Decorate z-patter rows
  const zRows = block.querySelectorAll(':scope > div:not([class])');
  zRows.forEach((row) => {
    row.classList.add('row');

    const header = row.querySelector('h1, h2, h3, h4, h5, h6');
    if (header) {
      const text = header.closest('div');
      text.classList.add('text');

      const preceding = header.previousElementSibling;
      if (preceding.tagName === 'P') {
        preceding.className = 'eyebrow';
      }
    }

    const img = row.querySelector('img');
    if (img) {
      const imgParent = img.closest('div');
      imgParent.classList.add('image');
    }

    const container = document.createElement('div');
    const blockChildren = row.querySelectorAll(':scope > div');
    blockChildren.forEach((child) => {
      container.appendChild(child);
    });
    container.classList.add('container');
    row.classList.add(size);
    row.appendChild(container);
  });

  if (getReversedRowCount(zRows) === 0) {
    zRows.forEach((row, i) => {
      if (i % 2) row.classList.add('media-reversed');
    });
  }

  // Figure out which rows need to be reversed
  const rows = block.querySelectorAll(':scope > .row');
  rows.forEach((row) => {
    const mediaRowReversed = row.querySelector(':scope > div > div').classList.contains('text');
    if (mediaRowReversed) row.classList.add('media-reverse-mobile');
  });
}
