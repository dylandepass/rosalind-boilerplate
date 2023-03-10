
import { FranklinSourceDecorator } from '@dylandepass/franklin-storybook-addon';

const themes = {
  'rosalind-light': {
    id: 'rosalind-light',
    name: 'rosalind-light',
    active: true,
  },
  'rosalind-dark': {
    id: 'rosalind-dark',
    name: 'rosalind-dark',
    active: true,
  },
  'Vader': {
    id: 'Vader',
    name: 'Vader',
    active: true,
  },
  'WKND-light': {
    id: 'WKND-light',
    name: 'WKND-light',
    active: true,
  },
};

const customViewports = {
  xs: {
    name: "XS",
    styles: {
      width: "375px",
      height: "600px",
    },
  },
  s: {
    name: "SM",
    styles: {
      width: "576px",
      height: "801px",
    },
  },
  m: {
    name: "MD",
    styles: {
      width: "768px",
      height: "700px",
    },
  },
  l: {
    name: "LG",
    styles: {
      width: "992px",
      height: "800px",
    },
  },
  xl: {
    name: "XL",
    styles: {
      width: "1200px",
      height: "900px",
    },
  },
  xxl: {
    name: "XXL",
    styles: {
      width: "1440px",
      height: "900px",
    },
  },
};

export const parameters = {
  host: 'https://main--rosalind-boilerplate--dylandepass.hlx.page',
  options: {
    storySort: {
      order: ['Introduction', '*'],
    },
  },
  viewport: {
    viewports: {
      ...customViewports,
    },
  },
  theme: {
    themes: {
      ...themes,
    },
  },
};

export const decorators = [
  FranklinSourceDecorator,
];