import darkTheme from '@ant-design/dark-theme'
const config = {
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
            options: { modifyVars: darkTheme, javascriptEnabled: true }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }
}

// eslint-disable-next-line import/no-default-export
export default config
