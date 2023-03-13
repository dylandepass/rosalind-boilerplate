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
  // Add `full-width` class to parent section
  const section = block.closest('.section');
  section.classList.add('full-width');

  // First column should be the hero image.. Add class
  const image = block.querySelector(':scope > div > div:nth-of-type(1)');
  if (image) {
    image.className = 'bg-image';
  }

  const contentFullWidthSectionWrapper = document.createElement('div');
  contentFullWidthSectionWrapper.classList.add('section');
  contentFullWidthSectionWrapper.classList.add('full-width-section');

  const contentFullWidthSectionDiv = document.createElement('div');
  contentFullWidthSectionWrapper.append(contentFullWidthSectionDiv);

  // Second column should be the content..  add container class
  const heroContentContainer = block.querySelector(':scope > div > div:nth-of-type(2)');
  if (heroContentContainer) {
    heroContentContainer.className = 'container';
  }

  // We need to put the content inside any div so if can float to the correct position
  const content = document.createElement('div');
  content.classList.add('content');

  contentFullWidthSectionDiv.append(content);

  // Append the content to the new div
  content.innerHTML = heroContentContainer.innerHTML;

  // Empty out the old children
  heroContentContainer.innerHTML = '';

  // Append on our new div to the container
  heroContentContainer.appendChild(contentFullWidthSectionWrapper);

  // Wrap out buttons in a group
  const buttonGroup = document.createElement('div');
  buttonGroup.className = 'button-group';

  // Search through the buttons and find the primary ones
  block.querySelectorAll('a').forEach((a) => {
    const container = a.closest('.button-container');
    if (a.classList.contains('primary')) {
      container.classList.add('primary');
    }

    buttonGroup.appendChild(a.closest('.button-container'));
  });

  // Append the button group
  content.append(buttonGroup);
}
