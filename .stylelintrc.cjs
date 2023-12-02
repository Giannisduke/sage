module.exports = {
  extends: ['@roots/bud-sass/config/stylelint'],
  rules: {
    'import-notation': null,
    'no-empty-source': null,
    'color-function-notation': 'legacy',
    'alpha-value-notation': 'number',
    'scss/at-extend-no-missing-placeholder': null,
    'font-family-no-missing-generic-family-keyword': null,
    'no-descending-specificity': null,
  },
};