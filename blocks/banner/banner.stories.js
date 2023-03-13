/* eslint-disable import/no-extraneous-dependencies, no-unused-vars */
import { FranklinTemplate } from '@dylandepass/franklin-storybook-addon';
import { within, waitFor, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import decorate from './banner.js';
import { loadPage } from '../../scripts/scripts.js';
import style from './banner.css';

async function testBanner(canvasElement, type, buttonGroup = true) {
  const canvas = within(canvasElement);
  await waitFor(() => {
    expect(document.querySelector('.bg-image')).toBeInTheDocument();
  });

  const container = document.querySelector('.container');
  expect(container).toBeInTheDocument();

  const typeElement = document.querySelector(`.${type}`);
  expect(typeElement).toBeInTheDocument();

  if (buttonGroup) {
    const buttonGroupElement = document.querySelector('.button-group');
    expect(buttonGroupElement).toBeInTheDocument();
  }
}

export const BannerLargeLeft = {
  parameters: {
    path: '/storybook/blocks/banner/banner.plain.html',
    selector: '.banner',
    index: 0,
  },

  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    testBanner(canvasElement, 'left');
  },
};

export const BannerLargeRight = {
  parameters: {
    path: '/storybook/blocks/banner/banner.plain.html',
    selector: '.banner',
    index: 1,
  },

  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    testBanner(canvasElement, 'right');
  },
};

export const BannerLargeCenter = {
  parameters: {
    path: '/storybook/blocks/banner/banner.plain.html',
    selector: '.banner',
    index: 2,
  },

  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    testBanner(canvasElement, 'center');
  },
};

export const BannerMediumLeft = {
  parameters: {
    path: '/storybook/blocks/banner/banner.plain.html',
    selector: '.banner',
    index: 3,
  },

  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    testBanner(canvasElement, 'left');
  },
};

export const BannerMediumRight = {
  parameters: {
    path: '/storybook/blocks/banner/banner.plain.html',
    selector: '.banner',
    index: 4,
  },

  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    testBanner(canvasElement, 'right');
  },
};

export const BannerMediumCenter = {
  parameters: {
    path: '/storybook/blocks/banner/banner.plain.html',
    selector: '.banner',
    index: 5,
  },

  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    testBanner(canvasElement, 'center');
  },
};

export const BannerSmallLeft = {
  parameters: {
    path: '/storybook/blocks/banner/banner.plain.html',
    selector: '.banner',
    index: 6,
  },

  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    testBanner(canvasElement, 'left');
  },
};

export const BannerSmallRight = {
  parameters: {
    path: '/storybook/blocks/banner/banner.plain.html',
    selector: '.banner',
    index: 7,
  },

  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    testBanner(canvasElement, 'right');
  },
};

export const BannerSmallCenter = {
  parameters: {
    path: '/storybook/blocks/banner/banner.plain.html',
    selector: '.banner',
    index: 8,
  },

  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    testBanner(canvasElement, 'center');
  },
};

export const BannerExtraSmallLeft = {
  parameters: {
    path: '/storybook/blocks/banner/banner.plain.html',
    selector: '.banner',
    index: 9,
  },

  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    testBanner(canvasElement, 'left');
  },
};

export const BannerExtraSmallRight = {
  parameters: {
    path: '/storybook/blocks/banner/banner.plain.html',
    selector: '.banner',
    index: 10,
  },

  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    testBanner(canvasElement, 'right');
  },
};

export const BannerExtraSmallCenter = {
  parameters: {
    path: '/storybook/blocks/banner/banner.plain.html',
    selector: '.banner',
    index: 11,
  },

  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    testBanner(canvasElement, 'center');
  },
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
