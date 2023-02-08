/* eslint-disable import/no-extraneous-dependencies, no-unused-vars */
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import {
  loadHeader,
  buildBlock,
  loadBlock,
  decorateBlock,
} from '../../scripts/lib-franklin.js';
import style from './footer.css';

export default {
  title: 'Blocks/Footer',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Footer = {
  render: (args, context) => {
    const footer = document.createElement('footer');
    const footerBlock = buildBlock('footer', '');
    footer.append(footerBlock);
    decorateBlock(footerBlock);
    loadBlock(footerBlock, context.parameters.host);
    return footer;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tutorialsLabel = canvas.getByText('Tutorials', {
      selector: '#tutorials',
    });
    expect(tutorialsLabel).toBeInTheDocument();
  },
};
