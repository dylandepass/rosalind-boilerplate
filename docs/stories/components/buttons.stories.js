/* eslint-disable import/no-extraneous-dependencies, no-unused-vars */
import { FranklinTemplate } from '@dylandepass/franklin-storybook-addon';
import { decorateIcons } from '../../../scripts/lib-franklin.js';
import { loadPage } from '../../../scripts/scripts.js';

function decorate(block) {
  decorateIcons(block);

  block.querySelector(':scope > div').classList.add('button-stories');

  block.querySelectorAll('.button-container').forEach((button) => {
    const anchor = button.querySelector('a');
    anchor.href = 'javascript:void(0)'; // eslint-disable-line no-script-url
    if (anchor.textContent.includes('Disabled')) {
      anchor.classList.add('disabled');
    }

    if (anchor.textContent.includes('Quiet')) {
      anchor.classList.add('quiet');
      anchor.classList.remove('primary');
    }
  });
}

/**
 * Default Config
 */
export default {
  title: 'Design System/Atoms/Buttons',
  parameters: {
    docs: {
      description: {
        component: 'A block to display buttons',
      },
    },
  },
};

export const Buttons = {
  parameters: {
    path: '/storybook/buttons.plain.html',
    selector: 'div',
    index: 0,
  },
  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
};
