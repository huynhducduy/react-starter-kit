var extendsConfig = [
  'plugin:json/recommended',
  'prettier/react',
  'prettier/standard',
  'prettier/babel',
  'plugin:prettier/recommended', // always the last
];

module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@babel/eslint-parser',
      extends: ['prettier/@typescript-eslint', ...extendsConfig],
    },
  ],
  plugins: ['react', 'import', 'jsx-a11y', 'react-hooks', '@typescript-eslint'],
  extends: extendsConfig,
  rules: {
    'react/jsx-uses-vars': 'warn',
    'react/jsx-uses-react': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    es6: true,
    es2017: true,
    es2020: true,
    browser: true,
    commonjs: true,
    node: true,
    worker: true,
    serviceworker: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: 'tsconfig.json',
  },
  globals: {},
};
