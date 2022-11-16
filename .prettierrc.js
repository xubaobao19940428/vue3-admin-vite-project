module.exports = {
  tabWidth: 4,
  jsxSingleQuote: true,
  jsxBracketSameLine: true,
  printWidth: 200,
  singleQuote: true,
  semi: false,
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],
  arrowParens: 'always',
}
