/* eslint-disable import/no-extraneous-dependencies, no-unused-vars */

import { FranklinTemplate } from '@dylandepass/franklin-storybook-addon';
import { loadPage } from '../../scripts/scripts.js';
import decorate from './grid.js';
import _style from './grid.css';

export default {
  title: 'Blocks/Grid',
};

const TwoColsParams = {
  path: '/storybook/blocks/grid/two-cols.plain.html',
  selector: '.grid',
  index: 0,
};

export const TwoCols = {
  parameters: TwoColsParams,
  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
};

export const TwoColsMobile = {
  parameters: {
    ...TwoColsParams,
    viewport: {
      defaultViewport: 'xs',
    },
  },
  render: (args, context) => {
    const res = FranklinTemplate(loadPage, args, context, decorate);
    return res;
  },
};

const IconCardParams = {
  path: '/storybook/blocks/grid/icon-cards.plain.html',
  selector: '.grid',
  index: 0,
};

export const IconCards = {
  parameters: IconCardParams,
  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
};

export const IconCardsModile = {
  parameters: {
    ...IconCardParams,
    viewport: {
      defaultViewport: 'xs',
    },
  },
  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
};

const LogoGridParams = {
  path: '/storybook/blocks/grid/logo-grid.plain.html',
  selector: '.grid',
  index: 0,
};

export const LogoGrid = {
  parameters: LogoGridParams,
  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
};

export const LogoGridMobile = {
  parameters: {
    ...LogoGridParams,
    viewport: {
      defaultViewport: 'xs',
    },
  },
  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
};

const BulletedParams = {
  path: '/storybook/blocks/grid/bulleted.plain.html',
  selector: '.grid',
  index: 0,
};

export const Bulleted = {
  parameters: BulletedParams,
  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
};

export const BulletedMobile = {
  parameters: {
    ...BulletedParams,
    viewport: {
      defaultViewport: 'xs',
    },
  },
  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
};
