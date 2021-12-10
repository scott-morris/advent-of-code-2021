// Public.

module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  plugins: ['prettier'],
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    // Allow tests and stories to use dev dependencies.
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '*.js',
          'scripts/*.js',
          'src/**/*.spec.js',
          'src/**/*.spec.jsx',
          'src/**/*.stories.js',
          'src/**/*.stories.jsx',
        ],
      },
    ],
    'no-console': 'off',
    'import/extensions': 'off',
    // Legitimately helpful in JSX files especially.
    'no-nested-ternary': 'off',
    // So prettier can do its job.
    'prettier/prettier': 'error',
    // Allow JSX in JS files.
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    // Legitimately useful in components.
    'react/jsx-props-no-spreading': 'off',
    // We will use TypeScript and JSDoc for typing.
    'react/prop-types': 'off',
    // TEMPORARY. Need to fix across the codebase.
    'react/no-array-index-key': 'off',
  },
  overrides: [
    {
      files: '*.spec.js',
      env: {
        jest: true,
      },
    },
  ],
};
