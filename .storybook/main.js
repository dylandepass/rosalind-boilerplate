const path = require('path');
module.exports = {
  stories: ['../docs', '../blocks/**/*.mdx', '../blocks/**/*.stories.@(js|jsx|ts|tsx)', '../templates/**/*.stories.@(js|jsx|ts|tsx)', '../styles/system/stories/**/*.stories.@(js|jsx|ts|tsx)', '../styles/system/stories/**/*.mdx'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-coverage', '@dylandepass/franklin-storybook-addon'],
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
