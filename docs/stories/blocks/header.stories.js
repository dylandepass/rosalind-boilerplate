/* eslint-disable import/no-extraneous-dependencies, no-unused-vars */
import {
  loadHeader,
  buildBlock,
  loadBlock,
  decorateBlock,
} from '../../../scripts/lib-franklin.js';
import style from '../../../blocks/header/header.css';

export default {
  title: 'Blocks/Header',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Header = {
  render: (args, context) => {
    console.log(context);
    const header = document.createElement('header');
    const headerBlock = buildBlock('header', '');
    header.append(headerBlock);
    decorateBlock(headerBlock);
    loadBlock(headerBlock, context.parameters.host);
    console.log(headerBlock);
    return header;
  },
};
