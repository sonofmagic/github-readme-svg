const config = {
  env: {
    es2021: true
  },
  extends: ['eslint:recommended', 'next', 'next/core-web-vitals'],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {}
}

module.exports = config
