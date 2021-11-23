const path = require(`path`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const { CleanWebpackPlugin } = require(`clean-webpack-plugin`);

let mode = `development`;

if (process.env.NODE_ENV === `production`) {
  mode = `production`;
}

module.exports = {
  mode: mode,

  output: {
    path: path.resolve(__dirname, `dist`),
    assetModuleFilename: `img/[hash][ext][query]`,
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: `asset/resource`, //samo asset w zaleznosci od wielkosci obrazka male osadzi w js, inline osadzi wszystkie w js
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: `` },
          },
          `css-loader`,
          `postcss-loader`,
          `sass-loader`,
        ],
      },
      {
        test: /\.html$/i,
        loader: `html-loader`,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      },
    ],
  },

  plugins: [
    //new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  devtool: `source-map`,
  devServer: {
    static: `./dist`,
    host: `127.0.0.1`, //bez tego uruchomi sie tez w ipv4
  },
};
