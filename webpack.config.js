const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build', // used for development mode
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", `@babel/preset-react`],
          },
        },
      },
      {
        //npm install -D sass-loader css-loader style-loader webpack
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          { loader: "style-loader" },
          // Translates CSS into CommonJS
          { loader: "css-loader" },
          // Compiles Sass to CSS
          { loader: "sass-loader" },
        ],
      },
    ],
  },
  devServer: { // used for development mode beyond this point
    static: {
      directory: path.join(__dirname),
    },
    proxy: {
      '/api': 'http://localhost:3000'
    },
    compress: true,
    port: 8080,
  },
};