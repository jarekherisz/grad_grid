const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');

// Function to generate HtmlWebpackPlugin instances for each HTML file in the examples directory
function generateHtmlPlugins(templateDir) {
  const templateFiles = glob.sync(`${templateDir}/**/*.html`);
  return templateFiles.map(item => {
    const parts = item.split('/');
    const name = parts[parts.length - 1].replace('.html', '');
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: item,
      inject: 'body',
      scriptLoading: 'defer',
    });
  });
}

const htmlPlugins = generateHtmlPlugins('./examples');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'grad-table.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    ...htmlPlugins
  ],
  devServer: {
    compress: true,
    port: 9000
  },
  mode: 'development'
};
