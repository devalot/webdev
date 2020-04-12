const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      }
    },
  ],
];


const plugins = [
  ["@babel/plugin-proposal-decorators", {
    legacy: false,
    decoratorsBeforeExport: true,
  }],
];

module.exports = { presets, plugins };
