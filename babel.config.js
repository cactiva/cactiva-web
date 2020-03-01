module.exports = function(api) {
  api.cache(true);

  const presets = ["next/babel"];
  const plugins = [
    [
      "module-resolver",
      {
        alias: {
          "@packages": "./packages",
          "@assets": "./assets",
          "@utils": "./utils",
          "@libs": "./libs"
        }
      }
    ],
    ["styled-components"]
  ];

  return {
    presets,
    plugins
  };
};
