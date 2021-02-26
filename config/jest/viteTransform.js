// eslint-disable-next-line strict
'use strict'

// This is a custom Jest transformer for es module/vite support

const { transform } = require('@babel/core')
module.exports = {
  process(src, filename) {
    src = src.replace('import.meta.env', 'process.env')

    const result = transform(src, {
      filename,
    })

    return result || src
  },
}
