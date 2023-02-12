const path = require('path');
const istanbul = require('vite-plugin-istanbul');
const constants = require('@storybook/addon-coverage/dist/cjs/constants');

module.exports = {
  stories: ['../docs', '../blocks/**/*.mdx', '../blocks/**/*.stories.@(js|jsx|ts|tsx)', '../templates/**/*.stories.@(js|jsx|ts|tsx)', '../styles/system/stories/**/*.stories.@(js|jsx|ts|tsx)', '../styles/system/stories/**/*.mdx'],
  addons: ['@storybook/addon-a11y', 
           '@storybook/addon-links', 
           '@storybook/addon-essentials', 
           '@storybook/addon-interactions', 
           '@dylandepass/franklin-storybook-addon', 
           {
              name: "@storybook/addon-coverage",
              options: {
                istanbul: {
                  exclude: ['**/lib-franklin.js', '**/scripts.js']
                },
              },
           },
  ],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  babel: async () => {
    return {
      presets: ['@babel/preset-react'],
    };
  },
  viteFinal: async config => {
    config.build = { ...(config.build ?? {}), target: 'esnext' };
    return config;
  },
  "staticDirs": ['./', '../styles/', { from: '../icons', to: '/icons' }],
};
