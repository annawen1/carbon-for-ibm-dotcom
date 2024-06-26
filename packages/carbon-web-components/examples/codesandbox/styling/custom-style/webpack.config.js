/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // disable the host check on sandbox
  devServer: {
    disableHostCheck: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
};
