const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: './src/index.js',
  devtool: "inline-source-map",
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build',
    clean: true,
  },
  devServer: {
    open: false,
    hot: true,
    liveReload: true,
    static: [
      {
        directory: path.resolve(__dirname, 'src'),
        publicPath: "/",
        serveIndex: false,
        watch: true,
      },
    ],
    devMiddleware: {
      writeToDisk: false,
    },
    compress: true,
    port: 3001,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
};
