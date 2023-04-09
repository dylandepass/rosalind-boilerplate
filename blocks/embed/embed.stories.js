/* eslint-disable import/no-extraneous-dependencies, no-unused-vars */
import { FranklinTemplate } from '@dylandepass/franklin-storybook-addon';
import decorate from './embed.js';
import { loadPage } from '../../scripts/scripts.js';
import style from './embed.css';

export const Vimeo = {
  parameters: {
    path: '/storybook/blocks/embed/embed.plain.html',
    selector: '.embed',
    index: 0,
  },
  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
};

export const Wistia = {
  parameters: {
    path: '/storybook/blocks/embed/embed.plain.html',
    selector: '.embed',
    index: 1,
  },
  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
};

export const Youtube = {
  parameters: {
    path: '/storybook/blocks/embed/embed.plain.html',
    selector: '.embed',
    index: 2,
  },
  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
};

export const Twitter = {
  parameters: {
    path: '/storybook/blocks/embed/embed.plain.html',
    selector: '.embed',
    index: 3,
  },
  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
};

export const Tiktok = {
  parameters: {
    path: '/storybook/blocks/embed/embed.plain.html',
    selector: '.embed',
    index: 4,
  },
  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
};

export const Instagram = {
  parameters: {
    path: '/storybook/blocks/embed/embed.plain.html',
    selector: '.embed',
    index: 5,
  },
  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
};

/**
 * Default Config
 */
export default {
  title: 'Blocks/Embed',
};
