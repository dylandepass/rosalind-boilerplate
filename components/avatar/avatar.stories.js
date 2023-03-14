/* eslint-disable import/no-extraneous-dependencies, no-unused-vars */
import { within, waitFor, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import _style from './avatar.css';
import { createTag } from '../../scripts/scripts.js';

import('./avatar.js');

/**
 * Default Config
 */
export default {
  title: 'Design System/Atoms/Avatar',
};

async function testAvatar(canvasElement, icon = false) {
  const canvas = within(canvasElement);
  expect(document.querySelector('.container')).toBeInTheDocument();
  expect(document.querySelector('img')).toBeInTheDocument();
}

export const AvatarExtraSmall = {
  render: (args, context) => {
    const avatar = createTag('avatar-element', { url: 'https://react.semantic-ui.com/images/avatar/large/matthew.png', class: 'xs' });
    return avatar;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    testAvatar(canvasElement);
  },
};

export const AvatarSmall = {
  render: (args, context) => {
    const avatar = createTag('avatar-element', { url: 'https://react.semantic-ui.com/images/avatar/large/matthew.png', class: 'sm' });
    return avatar;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    testAvatar(canvasElement);
  },
};

export const AvatarMedium = {
  render: (args, context) => {
    const avatar = createTag('avatar-element', { url: 'https://react.semantic-ui.com/images/avatar/large/matthew.png', class: 'md' });
    return avatar;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    testAvatar(canvasElement);
  },
};

export const AvatarLarge = {
  render: (args, context) => {
    const avatar = createTag('avatar-element', { url: 'https://react.semantic-ui.com/images/avatar/large/matthew.png', class: 'lg' });
    return avatar;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    testAvatar(canvasElement);
  },
};

export const AvatarExtraLarge = {
  render: (args, context) => {
    const avatar = createTag('avatar-element', { url: 'https://react.semantic-ui.com/images/avatar/large/matthew.png', class: 'xl' });
    return avatar;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    testAvatar(canvasElement);
  },
};

export const AvatarXXL = {
  render: (args, context) => {
    const avatar = createTag('avatar-element', { url: 'https://react.semantic-ui.com/images/avatar/large/matthew.png', class: 'xxl' });
    return avatar;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    testAvatar(canvasElement);
  },
};
