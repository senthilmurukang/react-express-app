module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ['react', '@typescript-eslint'],
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'comma-dangle': 'off',
    'react/prop-types': 'off',
    'no-plusplus': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
  },
};
