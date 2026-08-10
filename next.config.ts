import { NextConfig } from 'next'
import { LOCALE_CODES } from 'src/Custom/components/LocaleSwitcher/interfaces'

// eslint-disable-next-line @typescript-eslint/no-require-imports
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// const { LOCALE_CODES } = require('./shared/locales')

// reactStrictMode: false — in dev mode, React Strict Mode causes double rendering of components,
// leading to duplicate useEffect calls, API requests, and other side effects.
const nextConfig: NextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: process.env.NODE_ENV === 'development',
    },
  },
  env: {
    PORT: process.env.PORT,
  },
  i18n: {
    locales: LOCALE_CODES,
    defaultLocale: 'ru',
    localeDetection: false,
  },
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [
        {
          source: '/:path*',
          destination: '/_fallback/:path*',
        },
      ],
    }
  },
}

module.exports = withBundleAnalyzer(nextConfig)
