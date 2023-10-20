const baseConfig = require('../../eslint.config.js');
module.exports = [
  ...baseConfig,
  {
    files: [
      'apps/demo-e2e/**/*.ts',
      'apps/demo-e2e/**/*.tsx',
      'apps/demo-e2e/**/*.js',
      'apps/demo-e2e/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['apps/demo-e2e/**/*.ts', 'apps/demo-e2e/**/*.tsx'],
    rules: {},
  },
  {
    files: ['apps/demo-e2e/**/*.js', 'apps/demo-e2e/**/*.jsx'],
    rules: {},
  },
];
