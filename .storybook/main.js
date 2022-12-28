module.exports = {
  "stories": [
    "../**/*.stories.mdx",
    "../**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@dylandepass/franklin-storybook-addon",
    "@etchteam/storybook-addon-css-variables-theme"
  ],
  "framework": "@storybook/html",
  "staticDirs": ['./', '../styles/', { from: '../icons', to: '/icons' }],
}