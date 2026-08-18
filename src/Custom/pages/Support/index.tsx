import { LovableSupportPage } from '@/pages/SupportPage'
import { Page } from 'src/components/pages/_App/interfaces'
import { SeoHeaders } from 'src/components/seo/SeoHeaders'
import { useLexicon } from 'src/Custom/Lexicon'
import { supportLexicon } from './lexicon'

export const SupportPage: Page = ({ siteOrigin }) => {
  const { t } = useLexicon(supportLexicon)

  return (
    <>
      <SeoHeaders
        title={t('seo.title')}
        description={t('seo.description')}
        canonical={'/support'}
        siteOrigin={siteOrigin}
      />

      <LovableSupportPage />
    </>
  )
}
