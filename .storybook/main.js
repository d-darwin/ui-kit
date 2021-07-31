const path = require("path");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-typescript",
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          modules: true,
          localIdentName: '[name]__[local]--[hash:base64:5]',
        }
      }
    }
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...(config.resolve ? config.resolve.alias : {}),
      "~": path.resolve(__dirname, "../src/"),
      "@": path.resolve(__dirname, "../src/")
    };
    return config;
  }
}
