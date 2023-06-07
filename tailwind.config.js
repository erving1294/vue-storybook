module.exports = {
  content: {
    files: [
      './src/components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './app.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}'
    ]
  },
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        green: 'var(--color-green)',
        'green-succes': 'var(--color-green-succes)',
        'green-hover': 'var(--color-green-hover)',
        'green-chip': 'var(--color-green-chip)',
        'green-focus': 'var(--color-green-focus)',
        blue: 'var(--color-blue)',
        'blue-hover': 'var(--color-blue-hover)',
        'blue-dark': 'var(--color-blue-dark)',
        'blue-link': 'var(--color-blue-link)',
        'gray-text': 'var(--color-gray-text)',
        'gray-bg-dark': 'var(--color-gray-bg-dark)',
        'gray-10': 'var(--color-gray-10)',
        'gray-20': 'var(--color-gray-20)',
        'gray-50': 'var(--color-gray-50)',
        'gray-80': 'var(--color-gray-80)',
        'gray-100': 'var(--color-gray-100)',
        'gray-150': 'var(--color-gray-150)',
        'gray-200': 'var(--color-gray-bg)',
        'gray-400': 'var(--color-gray-400)',
        'gray-900': 'var(--color-gray-dark)',
        'red-400': 'var(--color-red-error)',
        disabled: 'var(--color-disabled)'
      }
    }
  }
}
