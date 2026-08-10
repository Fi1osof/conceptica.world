import { SeoHeaders } from 'src/components/seo/SeoHeaders'
import { JsonLd } from 'src/components/seo/JsonLd'
import { Page } from '../_App/interfaces'
import { createWebSite } from 'src/components/seo/JsonLd/helpers'
import { mainPageLexicon } from './lexicon'
import { useLexicon } from 'src/Custom/Lexicon'

export const MainPage: Page = (props) => {
  const t = useLexicon(mainPageLexicon)

  const siteTitle = t('seo.title')
  const siteUrl = props.siteOrigin

  return (
    <>
      <SeoHeaders
        title={siteTitle}
        description={t('seo.description')}
        canonical={'/'}
        siteOrigin={props.siteOrigin}
      />
      {siteUrl && (
        <JsonLd
          data={createWebSite({
            name: siteTitle || '',
            url: siteUrl,
          })}
        />
      )}
    </>
  )
}
