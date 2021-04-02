const I18N = {
  useCookie: false,
  alwaysRedirect: true,
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
      file: 'en/index.js'
    },
    {
      code: 'de',
      iso: 'de-DE',
      name: 'German',
      file: 'de/index.js'
    }
  ],
  lazy: true,
  seo: false,
  langDir: '/locales/',
  defaultLocale: 'de',
  parsePages: false
}

module.exports = {
  I18N
}
