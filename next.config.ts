import { LOCALE_CODES } from 'src/Custom/components/LocaleSwitcher/interfaces'
import { NextConfig } from 'next'

import withBundleAnalyzer from '@next/bundle-analyzer'

const nextConfig: NextConfig = {
  /**
   * reactStrictMode: false — in dev mode, React Strict Mode causes double rendering of components, leading to duplicate useEffect calls, API requests, and other side effects.
   */
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

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig)
