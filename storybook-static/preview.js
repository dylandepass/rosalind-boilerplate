import cssVariablesTheme from '@etchteam/storybook-addon-css-variables-theme'

import light from '!!style-loader?injectType=lazyStyleTag!css-loader!../styles/themes/rosalind-light.css'
import dark from '!!style-loader?injectType=lazyStyleTag!css-loader!../styles/themes/rosalind-dark.css'
import WKND from '!!style-loader?injectType=lazyStyleTag!css-loader!../styles/themes/WKND-light.css'
import vader from '!!style-loader?injectType=lazyStyleTag!css-loader!../styles/themes/Vader.css'

export const parameters = {
  host: 'https://main--rosalind-boilerplate--dylandepass.hlx.page',
  cssVariables: {
    files: {
      'rosalind-light': light,
      'rosalind-dark': dark,
      'WKND-light': WKND,
      'Vader': vader,
    },
    defaultTheme: 'rosalind-light'
  }
};

export const decorators = [
  cssVariablesTheme,
];