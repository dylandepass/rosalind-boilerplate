const path = require('path');
const istanbul = require('vite-plugin-istanbul');
const constants = require('@storybook/addon-coverage/dist/cjs/constants');
module.exports = {
  stories: ['../docs', '../blocks/**/*.mdx', '../blocks/**/*.stories.@(js|jsx|ts|tsx)', '../templates/**/*.stories.@(js|jsx|ts|tsx)', '../components/**/*.stories.@(js|jsx|ts|tsx)', '../components/**/*.mdx'],
  addons: ['@dylandepass/franklin-storybook-addon', '@storybook/addon-interactions', '@storybook/addon-a11y', '@storybook/addon-links', '@storybook/addon-essentials', {
    name: '@storybook/addon-coverage',
    options: {
      istanbul: {
        exclude: ['**/lib-franklin.js', '**/scripts.js']
      }
    }
  }, '@storybook/addon-mdx-gfm'],
  framework: {
    name: '@storybook/html-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  babel: async () => {
    return {
      presets: ['@babel/preset-react']
    };
  },
  viteFinal: async config => {
    config.build = {
      ...(config.build ?? {}),
      target: 'esnext'
    };
    return config;
  },
  "staticDirs": ['./', '../styles/', {
    from: '../icons',
    to: '/icons'
  }]
};