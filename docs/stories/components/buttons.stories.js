/* eslint-disable import/no-extraneous-dependencies, no-unused-vars */
import { within, waitFor, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { FranklinTemplate } from '@dylandepass/franklin-storybook-addon';
import { decorateIcons } from '../../../scripts/lib-franklin.js';
import { createTag, loadPage } from '../../../scripts/scripts.js';

function decorate(block) {
  decorateIcons(block);

  block.querySelector(':scope > div').classList.add('button-stories');

  block.querySelectorAll('.button-container').forEach((button) => {
    const anchor = button.querySelector('a');
    anchor.href = 'javascript:void(0)'; // eslint-disable-line no-script-url
    if (anchor.textContent.includes('Disabled')) {
      anchor.classList.add('disabled');
    }
  });

  block.parentElement.classList.remove('section');
  block.parentElement.classList.add('story');
}

function createButton(type, icon) {
  const container = createTag('p');
  container.classList.add('button-container');

  let iconSpan;
  if (icon) {
    iconSpan = `<span class='icon ${icon}'></span>`;
  }
  container.innerHTML = /* html */`<a href="javascript:void(0)" title=${type} class="button ${type}">${iconSpan || ''}Primary</a>`;
  return container;
}

function testButton(canvasElement, type) {
  const canvas = within(canvasElement);
  let test = 0;

  const primary = canvas.getByTitle(type);
  primary.addEventListener('click', () => {
    test = 1;
  });

  expect(primary).toBeInTheDocument();
  userEvent.click(primary);
  expect(test).toEqual(1);
  primary.blur();
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

export const AuthoredButtons = {
  parameters: {
    path: '/storybook/buttons.plain.html',
    selector: 'div',
    index: 0,
  },
  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      expect(canvas.getByText('Authored Buttons')).toBeInTheDocument();
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

export const Primary = {
  render: (args, context) => {
    const button = createButton('primary');
    return button;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const primary = canvas.getByTitle('primary');
    expect(primary).toBeInTheDocument();
    testButton(canvasElement, 'primary');
  },
};

export const PrimaryIcon = {
  render: (args, context) => {
    const button = createButton('primary', 'icon-plus');
    decorateIcons(button);
    return button;
  },
  play: async ({ canvasElement }) => {
    testButton(canvasElement, 'primary');
  },
};

export const Secondary = {
  render: (args, context) => {
    const button = createButton('secondary');
    return button;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const primary = canvas.getByTitle('secondary');
    expect(primary).toBeInTheDocument();
    testButton(canvasElement, 'secondary');
  },
};

export const SecondaryIcon = {
  render: (args, context) => {
    const button = createButton('secondary', 'icon-plus');
    decorateIcons(button);
    return button;
  },
  play: async ({ canvasElement }) => {
    testButton(canvasElement, 'secondary');
  },
};

export const Quiet = {
  render: (args, context) => {
    const button = createButton('quiet');
    return button;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const primary = canvas.getByTitle('quiet');
    expect(primary).toBeInTheDocument();
    testButton(canvasElement, 'quiet');
  },
};

export const QuietIcon = {
  render: (args, context) => {
    const button = createButton('quiet', 'icon-plus');
    decorateIcons(button);
    return button;
  },
  play: async ({ canvasElement }) => {
    testButton(canvasElement, 'quiet');
  },
};
