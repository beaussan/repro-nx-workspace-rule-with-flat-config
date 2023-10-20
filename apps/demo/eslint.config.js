const baseConfig = require('../../eslint.config.js');
module.exports = [
  ...baseConfig,
  {
    files: [
      'apps/demo/**/*.ts',
      'apps/demo/**/*.tsx',
      'apps/demo/**/*.js',
      'apps/demo/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['apps/demo/**/*.ts', 'apps/demo/**/*.tsx'],
    rules: {},
  },
  {
    files: ['apps/demo/**/*.js', 'apps/demo/**/*.jsx'],
    rules: {},
  },
];
