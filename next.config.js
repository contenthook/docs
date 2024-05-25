const { redirect } = require('next/dist/server/api-utils')

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  future: {
    webpack5: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /postcss\.config\.js$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: {
              tailwindcss: {},
              autoprefixer: {},
            },
          },
        },
      ],
    })
    return config
  }
})

module.exports = withNextra()
