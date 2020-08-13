module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ["./"],
          alias: {
            i18n: './i18n.js',
            '~': './src'
          },
        },
      ],
    ],
  };
};
