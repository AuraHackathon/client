const webpack = require("webpack");

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      process: { env: {} },
    }),
  ],
  resolve: {
    fallback: {
      crypto: false,
      stream: false,
      assert: false,
      util: false,
      http: false,
      https: false,
      os: false,
    },
  },
};
