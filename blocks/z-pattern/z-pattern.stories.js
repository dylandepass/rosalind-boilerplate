/* eslint-disable import/no-extraneous-dependencies, no-unused-vars */

import { within, waitFor, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { FranklinTemplate } from '@dylandepass/franklin-storybook-addon';
import { loadPage } from '../../scripts/scripts.js';
import decorate from './z-pattern.js';
import _style from './z-pattern.css';

export default {
  title: 'Blocks/ZPattern',
  parameters: {
    layout: 'fullscreen',
  },
};

async function testZPattern(canvas) {
  await waitFor(() => {
    expect(document.querySelector('.container')).toBeInTheDocument();
  });
  expect(document.querySelector('img')).toBeInTheDocument();
  expect(document.querySelector('img')).toBeInTheDocument();
  expect(document.querySelector('.eyebrow')).toBeInTheDocument();
}

const ZPatternParams = {
  path: '/storybook/blocks/z-pattern/z-pattern.plain.html',
  selector: '.z-pattern',
  index: 0,
};

export const ZPattern = {
  parameters: {
    ...ZPatternParams,
    index: 0,
  },
  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    testZPattern(canvas);
    await waitFor(() => {
      expect(document.querySelector('.media-reversed')).toBeInTheDocument();
    });
  },
};

export const ZPatternWithHeading = {
  parameters: {
    ...ZPatternParams,
    index: 1,
  },
  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    testZPattern(canvas);

    await waitFor(() => {
      expect(document.querySelector('#medium-intro-text-optional')).toBeInTheDocument();
      expect(document.querySelector('.media-reversed')).toBeInTheDocument();
    });
  },
};

export const ZPatternLayer1 = {
  parameters: {
    ...ZPatternParams,
    index: 2,
  },
  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    testZPattern(canvas);

    await waitFor(() => {
      expect(document.querySelector('.layer-1')).toBeInTheDocument();
      expect(document.querySelector('.media-reversed')).toBeInTheDocument();
    });
  },
};

export const ZPatternLayer2 = {
  parameters: {
    ...ZPatternParams,
    index: 3,
  },
  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    testZPattern(canvas);

    await waitFor(() => {
      expect(document.querySelector('.layer-2')).toBeInTheDocument();
      expect(document.querySelector('.media-reversed')).toBeInTheDocument();
    });
  },
};

export const ZPatternAuthorAgnostic = {
  parameters: {
    ...ZPatternParams,
    index: 4,
  },
  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    testZPattern(canvas);
  },
};
