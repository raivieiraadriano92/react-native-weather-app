const webpack = require('webpack');
const {version} = require('./package');

module.exports = {
  require: ['@babel/polyfill'],
  components: 'src/components/**/[A-Z]*.{js,jsx,ts,tsx}',
  version,
  propsParser: require('react-docgen-typescript').parse,
  webpackConfig: {
    resolve: {
      // auto resolves any react-native import as react-native-web
      alias: {'react-native': 'react-native-web'},
      extensions: ['.js', '.ts', '.jsx', '.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.(js|ts|jsx|tsx?)$/,
          loader: 'babel-loader',
          exclude: [/node_modules/],
          options: {
            plugins: [
              '@babel/proposal-class-properties',
              '@babel/proposal-object-rest-spread',
              'react-native-web',
            ],
            presets: [
              '@babel/preset-env',
              'module:metro-react-native-babel-preset',
            ],
            babelrc: false,
          },
        },
        {
          test: /\.(jpe?g|png|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                hash: 'sha512',
                digest: 'hex',
                name: '[hash].[ext]',
              },
            },
          ],
        },
        {
          test: /\.ttf$/,
          loader: 'file-loader',
        },
      ],
    },
    // Most react native projects will need some extra plugin configuration.
    plugins: [
      // Add __DEV__ flag to browser example.
      new webpack.DefinePlugin({
        __DEV__: process.env,
      }),
    ],
  },
};
