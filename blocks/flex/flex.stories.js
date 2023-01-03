/* eslint-disable import/no-extraneous-dependencies, no-unused-vars */
import { FranklinTemplate } from '@dylandepass/franklin-storybook-addon';
import { decorateIcons } from '../../scripts/lib-franklin.js';
import { loadPage } from '../../scripts/scripts.js';
import style from './flex.css';

export const Flex = (args, context) => FranklinTemplate(loadPage, args, context, undefined);

Flex.parameters = {
  path: '/storybook/blocks/flex.plain.html',
  selector: ':scope > div',
  index: 0,
};

Flex.storyName = 'Default';

export const LogoGrid = (args, context) => FranklinTemplate(loadPage, args, context, undefined);

LogoGrid.parameters = {
  path: '/storybook/blocks/flex.plain.html',
  selector: ':scope > div',
  index: 1,
};

LogoGrid.storyName = 'LogoGrid';

/**
 * Default Config
 */
export default {
  title: 'Blocks/Flex',
  parameters: {
    layout: 'fullscreen',
  },
};
