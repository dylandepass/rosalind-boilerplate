/* eslint-disable import/no-extraneous-dependencies, no-unused-vars */
import { within, waitFor, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import _style from './tag.css';
import { createTag } from '../../scripts/scripts.js';

import('./tag.js');

/**
 * Default Config
 */
export default {
  title: 'Design System/Atoms/Tag',
  argTypes: {
    label: { control: 'text' },
    style: {
      options: ['default', 'positive', 'negative', 'notice', 'informative'],
      control: { type: 'radio' },
    },
    icon: {
      options: ['bell', 'home', 'check', 'bookmark', 'copy'],
      control: { type: 'select' },
    },
    iconPosition: {
      options: ['left', 'right'],
      control: { type: 'radio' },
    },
    disabled: {
      options: ['true'],
      control: { type: 'check' },
    },
  },
  args: {
    label: 'Business',
  },
};

function createTagDemo(args, context, disabled = false, icon = '', iconPosition = 'left', style = '') {
  const tag = createTag('tag-element');
  tag.setAttribute('disabled', args.disabled);

  if (args.icon) {
    tag.setAttribute('icon', args.icon);
  }

  tag.setAttribute('style', args.style);

  if (args.iconPosition) {
    tag.setAttribute('iconposition', args.iconPosition);
  }

  tag.setAttribute('label', args.label);

  return tag;
}

async function testTag(canvasElement, icon = false) {
  const canvas = within(canvasElement);
  await waitFor(() => {
    expect(canvas.getByText('Business')).toBeInTheDocument();
  });

  let test = 0;

  const tag = canvas.queryByText('Business');
  tag?.addEventListener('click', () => {
    test = 1;
  });

  if (icon) {
    const iconElement = document.querySelector('.icon');
    expect(iconElement).toBeTruthy();
  }

  expect(tag).toBeInTheDocument();
  userEvent.click(tag);
  expect(test).toEqual(1);
  tag.blur();
}

export const Tag = {
  render: (args, context) => createTagDemo(args, context),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    testTag(canvasElement);
  },
};

export const IconLeft = {
  args: {
    iconPosition: 'left',
    icon: 'check',
  },
  render: (args, context) => createTagDemo(args, context, false, 'tag'),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    testTag(canvasElement, true);
  },
};

export const IconRight = {
  args: {
    iconPosition: 'right',
    icon: 'check',
  },
  render: (args, context) => createTagDemo(args, context, false, 'tag', 'right'),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    testTag(canvasElement, true);
  },
};

export const PositiveStyle = {
  args: {
    style: 'positive',
  },
  render: (args, context) => createTagDemo(args, context, false, 'tag', '', 'positive'),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    testTag(canvasElement);
  },
};

export const NegativeStyle = {
  args: {
    style: 'negative',
  },
  render: (args, context) => createTag(args, context, false, 'tag', '', 'negative'),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    testTag(canvasElement);
  },
};

export const NoticeStyle = {
  args: {
    style: 'notice',
  },
  render: (args, context) => createTagDemo(args, context, false, 'tag', '', 'notice'),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    testTag(canvasElement);
  },
};

export const InformativeStyle = {
  args: {
    ...Tag.args,
    style: 'informative',
  },
  render: (args, context) => createTagDemo(args, context, false, 'tag', '', 'informative'),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    testTag(canvasElement);
  },
};

export const Disabled = {
  args: {
    disabled: 'true',
  },
  render: (args, context) => createTagDemo(args, context, true, 'tag', ''),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    testTag(canvasElement);
  },
};
