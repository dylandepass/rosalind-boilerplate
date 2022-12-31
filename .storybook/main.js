module.exports = {
  "stories": [
    "../**/*.stories.mdx",
    "../**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    '@storybook/addon-a11y',
    "@dylandepass/franklin-storybook-addon",
    "@etchteam/storybook-addon-css-variables-theme"
  ],
  babel: async (options) => {
    return {
      ...options,
      presets: [...options.presets, '@babel/preset-react'],
    };
  },
  "framework": "@storybook/html",
  "staticDirs": ['./', '../styles/', { from: '../icons', to: '/icons' }],
}