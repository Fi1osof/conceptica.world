import { LovableAboutPage } from '@/pages/AboutPage'
import { Page } from 'src/components/pages/_App/interfaces'
import { SeoHeaders } from 'src/components/seo/SeoHeaders'
import { useLexicon } from 'src/Custom/Lexicon'
import { aboutLexicon } from './lexicon'

export const AboutPage: Page = ({ siteOrigin }) => {
  const { t } = useLexicon(aboutLexicon)

  return (
    <>
      <SeoHeaders
        title={t('seo.title')}
        description={t('seo.description')}
        canonical={'/about'}
        siteOrigin={siteOrigin}
      />
      <LovableAboutPage />
    </>
  )
}
