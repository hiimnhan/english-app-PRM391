module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    jest: true,
  },
  rules: {
    'no-use-before-define': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'operator-linebreak': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-props-no-spreading': 'off',
    'arrow-parens': 'off',
    'react/jsx-boolean-value': 'off',
    'global-require': 'off',
    'arrow-body-style': 'off',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
  },
  globals: {
    fetch: false,
  },
};
