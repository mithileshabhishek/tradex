// Documentation for this file: https://prettier.io/docs/en/configuration.html
module.exports = {
  // We use a larger print width because Prettier's word-wrapping seems to be tuned
  // for plain JavaScript without type annotations
  printWidth: 110,

  // Microsoft style quotes
  singleQuote: true,
  jsxSingleQuote: true,

  // Preserve existing newlines
  endOfLine: 'auto',

  // For ES5, trailing commas cannot be used in function parameters; it is counterintuitive
  // to use them for arrays only
  trailingComma: 'none',

  // File specific overrides
  overrides: [
    // Parse .code-snippets files with json parser
    {
      files: '*.code-snippets',
      options: { parser: 'json' }
    }
  ]
};
