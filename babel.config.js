module.exports = {
  presets: [
    [
      '@babel/env',
      {
        corejs: 3,
        useBuiltIns: 'usage',
      },
    ],
    '@babel/typescript',
    '@babel/react',
  ],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
  ],
}
