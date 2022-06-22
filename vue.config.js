const path = require('path')

module.exports = {
  outputDir: path.resolve(__dirname, './docs'),
  transpileDependencies: [
    'vuetify'
  ],
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Portfolio - Ethan Grahn'
    }
  }
}
