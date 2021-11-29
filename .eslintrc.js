const config = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  extends: ['next', 'next/core-web-vitals', 'eslint:recommended'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {},
}

module.exports = config
