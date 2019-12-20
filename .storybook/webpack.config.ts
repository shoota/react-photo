import path from 'path'
import CopyWebpackPlugin from 'copy-webpack-plugin'


const config = {
  plugins: [
    new CopyWebpackPlugin([{from: './assets', to: './assets'}])
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: { cacheDirectory: true, compact: true },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
             // https://github.com/ant-design/ant-design/issues/7927
            options: { javascriptEnabled: true }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [
      './node_modules',
      path.resolve(__dirname, '..', 'src')
    ]
  }
}

// eslint-disable-next-line import/no-default-export
export default config
