module.exports = function (api) {
  api.cache(true);
  return {
    presets: [ 'babel-preset-expo' ],
    plugins: [
      [
        'module-resolver',
        {
          extensions: [ '.js', '.jsx', '.ts', '.tsx', '.json' ],
          root: [ './src' ],
          alias: {
            '@assets': './assets/',
            '@components': './src/components/',
            '@elements': './src/elements/',
            '@library': './src/library/',
            '@state': './src/state/',
            '@util': './src/util/',
            '@contexts': './src/contexts/',
          },
          cwd: 'packagejson',
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
