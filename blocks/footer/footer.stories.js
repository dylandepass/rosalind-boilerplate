/* eslint-disable import/no-extraneous-dependencies, no-unused-vars */
import { within, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import {
  buildBlock,
  loadBlock,
  decorateBlock,
} from '../../scripts/aem.js';
import _style from './footer.css';
import { createTag } from '../../scripts/scripts.js';

export default {
  title: 'Blocks/Footer',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Footer = {
  render: (args, context) => {
    if (!window.hlx) window.hlx = {};
    window.hlx.suppressLoadPage = true;
    window.hlx.suppressLoadHeaderFooter = true;

    const footer = createTag('footer');
    const footerBlock = buildBlock('footer', '');
    footer.append(footerBlock);
    decorateBlock(footerBlock);
    loadBlock(footerBlock, context.parameters.host);

    return footer;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      expect(canvas.getByText('Tutorials')).toBeInTheDocument();
    });

    const newsLetterLabel = canvas.getByText('Newsletter', {
      selector: '#newsletter',
    });
    expect(newsLetterLabel).toBeInTheDocument();
  },
};
