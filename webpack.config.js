const path = require('path');
const ngtools = require('@ngtools/webpack');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js']
  },
  entry: './src/main.ts',
  output: {
    path: path.join(process.cwd(), 'dist'),
    publicPath: 'dist/',
    filename: "bundle.js"
  },
  plugins: [
    new ngtools.AotPlugin({
      tsConfigPath: './tsconfig.json',
      mainPath: "./src/main.ts"
    })
  ],
  module: {
    loaders: [
		{
        test: /\.ts$/,
        loader: '@ngtools/webpack'
      },
	  {
        test: /\.css$/,
        loader: 'style-loader'
      }
    ]
  },

  devServer: {
    historyApiFallback: true
  }
};
