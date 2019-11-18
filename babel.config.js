module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo'
    ],
"plugins": [
    [
      "module-resolver",
        {
          extensions: [
            '.ts',
            '.tsx',
            '.json',
          ],
          root: ['./src'],
          alias: {
            '@assets': './assets/',
            '@components': './src/components/',
            '@elements': './src/elements/',
            '@util': './src/util/',
          },
          cwd: 'packagejson'
        }
      ]
    ]
  };
};
