module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  moduleNameMapper: {
    "^@/(.)$": "/$1",
    "(.)?module$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  testMatch: ["**/src/**/*.spec.ts"],
};
