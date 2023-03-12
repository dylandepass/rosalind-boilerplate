/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/** @param {HTMLDivElement} block */
export default function decorate(block) {
  const section = block.closest('.section');

  section.classList.add('full-width');

  const image = block.querySelector(':scope > div > div:nth-of-type(1)');
  if (image) {
    image.className = 'bg-image';
  }

  const bannerContentContainer = block.querySelector(':scope > div > div:nth-of-type(2)');

  if (bannerContentContainer) {
    bannerContentContainer.className = 'container';
  }

  const content = document.createElement('div');
  content.classList.add('content');
  content.innerHTML = bannerContentContainer.innerHTML;

  bannerContentContainer.innerHTML = '';
  bannerContentContainer.appendChild(content);

  const buttonGroup = document.createElement('div');
  buttonGroup.className = 'button-group';

  block.querySelectorAll('a').forEach((a) => {
    const container = a.closest('.button-container');
    if (a.classList.contains('primary')) {
      container.classList.add('primary');
    }

    buttonGroup.appendChild(a.closest('.button-container'));
  });

  content.append(buttonGroup);
}
