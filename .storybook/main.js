const path = require("path");

const LOCAL_INDENT_NAME = '[name]_[local]_[hash:base64:5]';

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...(config.resolve ? config.resolve.alias : {}),
      "@": path.resolve(__dirname, "../src/")
    };

    const cssRule = config.module.rules.find(
      rule => rule.test.toString() === '/\\.css$/'
    );
    cssRule.test = /\.(s*)css$/i;
    cssRule.use = [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: LOCAL_INDENT_NAME,
          },
        }
      },
      'sass-loader',
    ];

    return config;
  }
}
