/* eslint-disable import/no-extraneous-dependencies, no-unused-vars */
import { within, waitFor, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import {
  loadHeader,
  buildBlock,
  loadBlock,
  decorateBlock,
} from '../../scripts/aem.js';
import _style from './header.css';
import { createTag } from '../../scripts/scripts.js';

export default {
  title: 'Blocks/Header',
  parameters: {
    layout: 'fullscreen',
  },
};

const renderHeader = (args, context) => {
  if (!window.hlx) window.hlx = {};
  window.hlx.suppressLoadPage = true;
  window.hlx.suppressLoadHeaderFooter = true;

  const header = createTag('header');
  const headerBlock = buildBlock('header', '');
  header.append(headerBlock);
  decorateBlock(headerBlock);
  loadBlock(headerBlock, context.parameters.host);
  return header;
};

export const Header = {
  render: (args, context) => renderHeader(args, context),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      expect(canvas.getByText('Rosalind')).toBeInTheDocument();
    });

    const logo = document.querySelector('.logo');
    await waitFor(() => expect(logo).toBeInTheDocument());

    const hamburger = document.querySelector('.nav-hamburger');
    expect(hamburger).toBeInTheDocument();
  },
};

export const HeaderMobile = {
  parameters: {
    viewport: {
      defaultViewport: 'xs',
    },
  },
  render: (args, context) => renderHeader(args, context),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      expect(canvas.getByText('Rosalind')).toBeInTheDocument();
    });

    const hamburger = document.querySelector('.nav-hamburger');
    expect(hamburger).toBeInTheDocument();
  },
};

export const HeaderMobileOpen = {
  parameters: {
    viewport: {
      defaultViewport: 'xs',
    },
  },
  render: (args, context) => renderHeader(args, context),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      expect(canvas.getByText('Rosalind')).toBeInTheDocument();
    });

    const hamburger = document.querySelector('.nav-hamburger');
    expect(hamburger).toBeInTheDocument();

    await userEvent.click(hamburger);
    expect(canvas.getByText('Home')).toBeInTheDocument();
    expect(canvas.getByText('Tutorials')).toBeInTheDocument();
    expect(canvas.getByText('Storybook')).toBeInTheDocument();
  },
};
