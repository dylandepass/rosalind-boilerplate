/* eslint-disable import/no-extraneous-dependencies, no-unused-vars */
import { within, waitFor, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      expect(canvas.getByText('Buttons')).toBeInTheDocument();
    });

    const primary = canvas.getByTitle('Primary');
    expect(primary).toBeInTheDocument();

    async function testButtonByTitle(title) {
      const btn = canvas.getByTitle(title);
      expect(btn).toBeInTheDocument();
      if (title.includes('Icon')) {
        expect(btn.querySelector('.icon')).toBeInTheDocument();
        await waitFor(() => {
          expect(btn.querySelector('svg')).toBeInTheDocument();
        });
      }
    }

    testButtonByTitle('Primary');
    testButtonByTitle('Primary Icon Left');
    testButtonByTitle('Primary Icon Right');

    testButtonByTitle('Secondary');
    testButtonByTitle('Secondary Icon Left');
    testButtonByTitle('Secondary Icon Right');

    testButtonByTitle('Quiet');
    testButtonByTitle('Quiet Icon Left');
    testButtonByTitle('Quiet Icon Right');
  },
};
