/* eslint-disable import/no-extraneous-dependencies, no-unused-vars */
import { loadFooter } from '../../../../scripts/lib-franklin.js';
import style from '../../../../blocks/footer/footer.css';

const Template = (args, context) => {
  const block = document.createElement('div');
  const footer = document.createElement('footer');
  block.append(footer);
  loadFooter(block.querySelector('footer'));
  return block;
};

export const Footer = () => Template();

Footer.storyName = 'Footer';

export default {
  title: 'Blocks/Footer',
  parameters: {
    layout: 'fullscreen',
  },
};
