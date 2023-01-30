/* eslint-disable import/no-extraneous-dependencies, no-unused-vars */

import { FranklinTemplate } from '@dylandepass/franklin-storybook-addon';
import decorate from './hero-image.js';
import { loadPage } from '../../scripts/scripts.js';
import { decorateSections } from '../../scripts/lib-franklin.js';
import style from './hero-image.css';

/**
 * Default Config
 */
export default {
  title: 'Templates/Hero Image',
  parameters: {
    docs: {
      description: {
        component: 'A block to display buttons',
      },
    },
  },
};

function prepareTemplate(args, context) {
  const template = FranklinTemplate(loadPage, args, context, decorate);
  console.log(template);
  decorateSections(template);
  return template;
}

export const HeroImage = {
  parameters: {
    path: '/storybook/templates/hero-image.plain.html',
    root: true,
    template: true,
    selector: 'div',
  },
  render: (args, context) => prepareTemplate(args, context),
};
