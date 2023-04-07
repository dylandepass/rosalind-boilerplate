/* eslint-disable import/no-extraneous-dependencies, no-unused-vars */

import { FranklinPage } from '@dylandepass/franklin-storybook-addon';
import { within, waitFor, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import decorate from './hero-image.js';
import { loadPage, createTag } from '../../scripts/scripts.js';
import { decorateSections } from '../../scripts/lib-franklin.js';
import hero from './hero-image.css';
import footer from '../../blocks/footer/footer.css';
import header from '../../blocks/header/header.css';

/**
 * Default Config
 */
export default {
  title: 'Templates/Hero Image',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A block to display buttons',
      },
    },
  },
};

function prepareTemplate(args, context) {
  const templateMeta = createTag('meta', { name: 'template', content: 'hero-image' });
  document.head.appendChild(templateMeta);

  const template = FranklinPage(loadPage, args, context);
  return template;
}

export const HeroImage = {
  parameters: {
    path: '/storybook/templates/hero-image',
    root: true,
    template: true,
    selector: 'div',
  },
  render: (args, context) => prepareTemplate(args, context),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      expect(document.querySelector('.header-wrapper')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(document.querySelector('.cover')).toBeInTheDocument();
    });

    expect(document.querySelector('.footer-wrapper')).toBeInTheDocument();
    expect(document.querySelector('.image')).toBeInTheDocument();
    expect(document.querySelector('.content')).toBeInTheDocument();
    expect(document.querySelector('#hero-image-template')).toBeInTheDocument();
  },
};
