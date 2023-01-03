/* eslint-disable import/no-extraneous-dependencies, no-unused-vars */
import { loadHeader } from '../../../../scripts/lib-franklin.js';
import style from '../../../../blocks/header/header.css';

const Template = (args, context) => {
  const block = document.createElement('div');
  const header = document.createElement('header');
  block.append(header);
  loadHeader(block.querySelector('header'));
  return block;
};

export const Header = () => Template();

Header.storyName = 'Header';

export default {
  title: 'Blocks/Header',
  parameters: {
    layout: 'fullscreen',
  },
};
