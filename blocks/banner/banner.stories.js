/* eslint-disable import/no-extraneous-dependencies, no-unused-vars */
import { FranklinTemplate } from '@dylandepass/franklin-storybook-addon';
import decorate from './banner.js';
import { loadPage } from '../../scripts/scripts.js';
import style from './banner.css';

export const BannerLargeLeft = {
  parameters: {
    path: '/storybook/blocks/banner/banner.plain.html',
    selector: '.banner',
    index: 0,
  },

  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
};

export const BannerLargeRight = {
  parameters: {
    path: '/storybook/blocks/banner/banner.plain.html',
    selector: '.banner',
    index: 1,
  },

  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
};

export const BannerLargeCenter = {
  parameters: {
    path: '/storybook/blocks/banner/banner.plain.html',
    selector: '.banner',
    index: 2,
  },

  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
};

export const BannerMediumLeft = {
  parameters: {
    path: '/storybook/blocks/banner/banner.plain.html',
    selector: '.banner',
    index: 3,
  },

  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
};

export const BannerMediumRight = {
  parameters: {
    path: '/storybook/blocks/banner/banner.plain.html',
    selector: '.banner',
    index: 4,
  },

  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
};

export const BannerMediumCenter = {
  parameters: {
    path: '/storybook/blocks/banner/banner.plain.html',
    selector: '.banner',
    index: 5,
  },

  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
};

export const BannerSmallLeft = {
  parameters: {
    path: '/storybook/blocks/banner/banner.plain.html',
    selector: '.banner',
    index: 6,
  },

  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
};

export const BannerSmallRight = {
  parameters: {
    path: '/storybook/blocks/banner/banner.plain.html',
    selector: '.banner',
    index: 7,
  },

  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
};

export const BannerSmallCenter = {
  parameters: {
    path: '/storybook/blocks/banner/banner.plain.html',
    selector: '.banner',
    index: 8,
  },

  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
};

export const BannerExtraSmallLeft = {
  parameters: {
    path: '/storybook/blocks/banner/banner.plain.html',
    selector: '.banner',
    index: 9,
  },

  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
};

export const BannerExtraSmallRight = {
  parameters: {
    path: '/storybook/blocks/banner/banner.plain.html',
    selector: '.banner',
    index: 10,
  },

  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
};

export const BannerExtraSmallCenter = {
  parameters: {
    path: '/storybook/blocks/banner/banner.plain.html',
    selector: '.banner',
    index: 11,
  },

  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
};

/**
 * Default Config
 */
export default {
  title: 'Blocks/Banner',
  parameters: {
    layout: 'fullscreen',
  },
};
