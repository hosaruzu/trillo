module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-prettier/recommended',
  ],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    'selector-class-pattern': null,
    'keyframes-name-pattern': null,
    'at-rule-no-unknown': null,
    'no-empty-source': null,
    'scss/at-rule-no-unknown': true,
  },
};
