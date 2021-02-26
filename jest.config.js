module.exports = async () => {
  return {
    rootDir: './',
    roots: ['<rootDir>/src'],
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
    setupFiles: [require.resolve('react-app-polyfill/jsdom')],
    setupFilesAfterEnv: [require.resolve('./src/setupTests.ts')],
    testMatch: [
      '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
      '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
    ],
    testEnvironment: 'jsdom',
    testRunner:
      '/Users/huynhducduy/workspace/react-starter-kit/node_modules/jest-circus/runner.js',
    transform: {
      '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': [
        '<rootDir>/config/jest/viteTransform.js',
      ],
      '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
      '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)':
        '<rootDir>/config/jest/fileTransform.js',
    },
    transformIgnorePatterns: [
      '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
      '^.+\\.module\\.(css|sass|scss|pcss)$',
    ],
    modulePaths: ['/Users/huynhducduy/workspace/react-starter-kit/src'],
    moduleNameMapper: {
      '^react-native$': 'react-native-web',
      '^.+\\.module\\.(css|sass|scss|pcss)$': 'identity-obj-proxy',
    },
    moduleFileExtensions: [
      'web.js',
      'js',
      'web.ts',
      'ts',
      'web.tsx',
      'tsx',
      'json',
      'web.jsx',
      'jsx',
      'node',
    ],
    watchPlugins: [
      'jest-watch-typeahead/filename',
      'jest-watch-typeahead/testname',
    ],
    resetMocks: true,
  }
}
