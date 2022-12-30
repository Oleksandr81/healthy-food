const path = require('path');

module.exports = {
  mode: 'development',

  watch: true,

  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // debugServer: {
  //   port: 9000,
  //   hot: true,
  //   static: {
  //     directory: path.join(__dirname, 'dist')
  //   }
  // }
};