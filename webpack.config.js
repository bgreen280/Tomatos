const path = require('path');

// there are many ways to config a webpack
// this is just one 
// webpack config files will look different for different applications
// command to install in dev dependencies: 
// npm install -D sass-loader css-loader style-loader webpack 

module.exports = {
  mode: process.env.NODE_ENV, // production or dev mode
  entry: { 
    src: './client/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build', // used for development mode
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { // javascript thangs
        test: /\.jsx?/, // file extensions to be 
        exclude: /(node_modules)/, // files to not be transformed
        use: {
          loader: "babel-loader",
          options: { // reads as stack (from right to left)
            presets: ["@babel/preset-env", `@babel/preset-react`],
          },
        },
      },
      { // css thangs
        test: /\.s[ac]ss$/i, // files to be transformed
        use: [ 'style-loader', 'css-loader', 'sass-loader' ], //reads as stack (froms right to left)
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
    // compress: true, 
    port: 8080,
  },
};