/* eslint-disable import/no-extraneous-dependencies, no-unused-vars */

import { FranklinTemplate } from '@dylandepass/franklin-storybook-addon';
import { loadPage } from '../../scripts/scripts.js';
import decorate from './grid.js';
import style from './grid.css';

export default {
  title: 'Blocks/Grid',
};

export const TwoCols = {
  parameters: {
    path: '/storybook/blocks/grid/two-cols.plain.html',
    selector: '.grid',
    index: 0,
  },
  render: (args, context) => {
    const res = FranklinTemplate(loadPage, args, context, decorate);
    console.log(res.innerHTML);
    return res;
  },
};

export const IconCards = {
  parameters: {
    path: '/storybook/blocks/grid/icon-cards.plain.html',
    selector: '.grid',
    index: 0,
  },
  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
};

export const LogoGrid = {
  parameters: {
    path: '/storybook/blocks/grid/logo-grid.plain.html',
    selector: '.grid',
    index: 0,
  },
  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
};

export const Bulleted = {
  parameters: {
    path: '/storybook/blocks/grid/bulleted.plain.html',
    selector: '.grid',
    index: 0,
  },
  render: (args, context) => FranklinTemplate(loadPage, args, context, decorate),
};
