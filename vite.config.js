import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      router: path.resolve(__dirname, './src/router'),
      utils: path.resolve(__dirname, './src/utils'),
      store: path.resolve(__dirname, './src/store'),
      auth: path.resolve(__dirname, './src/auth'),
      views: path.resolve(__dirname, './src/views'),
      config: path.resolve(__dirname, './src/config'),
      assets: path.resolve(__dirname, './src/assets'),
    },
  },
  optimizeDeps: {
    exclude: ['path-to-regexp'],
  },
  plugins: [reactRefresh()],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
})
