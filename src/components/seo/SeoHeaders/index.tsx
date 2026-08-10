import Head from 'next/head'
import { useAppContext } from 'src/components/AppContext'
import { LOCALE_CODES } from 'src/Custom/components/LocaleSwitcher/interfaces'

const intLocales = LOCALE_CODES.filter((n) => n !== 'ru')

const getLocalePrefix = (locale: string): string => {
  return locale !== 'ru' ? `/${locale}` : ''
}

export interface SeoHeadersProps {
  title: string
  description?: string | null
  noindex?: boolean
  nofollow?: boolean
  canonical: string | null | undefined
  siteOrigin: string | undefined
  keywords?: string | undefined
}

export const SeoHeaders: React.FC<SeoHeadersProps> = ({
  title,
  description,
  noindex = false,
  nofollow = false,
  canonical,
  siteOrigin,
  keywords,
}) => {
  const { locale } = useAppContext()

  const isInternational = locale !== 'ru'
  const localePrefix = getLocalePrefix(locale)

  let href = siteOrigin
    ? `${siteOrigin}${isInternational ? localePrefix : ''}`
    : ''

  if (href) {
    href += canonical === '/' ? '' : canonical
  }

  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {href && <link rel="canonical" href={href} />}

      {isInternational &&
        canonical &&
        siteOrigin &&
        intLocales.map((code) => (
          <link
            key={code}
            rel="alternate"
            hrefLang={code}
            href={`${siteOrigin}${getLocalePrefix(code)}${canonical}`}
          />
        ))}

      {isInternational && canonical && siteOrigin && (
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${siteOrigin}${canonical}`}
        />
      )}

      <meta
        name="robots"
        content={[
          noindex ? 'noindex' : 'index',
          nofollow ? 'nofollow' : 'follow',
        ].join(', ')}
      />

      {keywords && <meta name="keywords" content={keywords} />}
    </Head>
  )
}
