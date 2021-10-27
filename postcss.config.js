module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        '> 1%',
        'last 2 versions',
        'not ie <= 8',
        'iOS >= 6',
        'Android > 4.1',
        'Firefox > 20'
      ]
    }
  }
}
