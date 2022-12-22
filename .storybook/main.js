module.exports = {
  "stories": [
    "../**/*.stories.mdx",
    "../**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@dylandepass/franklin-storybook-addon"
  ],
  "framework": "@storybook/html",
  "staticDirs": ['./', '../styles/', { from: '../icons', to: '/icons' }],
}