
import { addons, useEffect } from '@storybook/addons';
import { FranklinSourceDecorator } from '@dylandepass/franklin-storybook-addon';

//import cssVariablesTheme from '@etchteam/storybook-addon-css-variables-theme'

// import light from '!!style-loader?injectType=lazyStyleTag!css-loader!../styles/themes/rosalind-light.css'
// import dark from '!!style-loader?injectType=lazyStyleTag!css-loader!../styles/themes/rosalind-dark.css'
// import WKND from '!!style-loader?injectType=lazyStyleTag!css-loader!../styles/themes/WKND-light.css'
// import vader from '!!style-loader?injectType=lazyStyleTag!css-loader!../styles/themes/Vader.css'

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
  // cssVariables: {
  //   files: {
  //     'rosalind-light': light,
  //     'rosalind-dark': dark,
  //     'WKND-light': WKND,
  //     'Vader': vader,
  //   },
  //   defaultTheme: 'rosalind-light'
  // },
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
};

export const decorators = [
  FranklinSourceDecorator,
];