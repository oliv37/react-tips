const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.jsx',
    hello: './src/hello.jsx',
    helloRedux: './src/helloRedux.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: "/assets/"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
              plugins: ['transform-class-properties', 'transform-object-rest-spread']
            }
        }
      }
    ]
  },
  devServer: {
    contentBase: [path.join(__dirname, 'public'), path.join(__dirname, 'public/assets')],
    compress: true,
    port: 9000,
    publicPath: "/assets/",
    watchContentBase: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  }
};