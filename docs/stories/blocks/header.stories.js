/* eslint-disable import/no-extraneous-dependencies, no-unused-vars */
import {
  loadHeader,
  buildBlock,
  loadBlock,
  decorateBlock,
} from '../../../scripts/lib-franklin.js';
import style from '../../../blocks/header/header.css';

const Template = (context) => {
  const header = document.createElement('header');
  const headerBlock = buildBlock('header', '');
  header.append(headerBlock);
  decorateBlock(headerBlock);
  loadBlock(headerBlock, context.parameters.host);
  return header;
};

export const Header = (args, context) => Template(context);

Header.storyName = 'Header';

export default {
  title: 'Blocks/Header',
  parameters: {
    layout: 'fullscreen',
  },
};
