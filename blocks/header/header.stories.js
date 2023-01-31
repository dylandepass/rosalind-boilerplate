/* eslint-disable import/no-extraneous-dependencies, no-unused-vars */
import {
  loadHeader,
  buildBlock,
  loadBlock,
  decorateBlock,
} from '../../scripts/lib-franklin.js';
import style from './header.css';

export default {
  title: 'Blocks/Header',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Header = {
  render: (args, context) => {
    const header = document.createElement('header');
    const headerBlock = buildBlock('header', '');
    header.append(headerBlock);
    decorateBlock(headerBlock);
    loadBlock(headerBlock, context.parameters.host);
    return header;
  },
};
