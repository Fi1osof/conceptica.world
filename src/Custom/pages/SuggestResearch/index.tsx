import { LovableSuggestResearchPage } from '@/pages/SuggestResearch'
import { Page } from 'src/components/pages/_App/interfaces'
import { SeoHeaders } from 'src/components/seo/SeoHeaders'
import { useLexicon } from 'src/Custom/Lexicon'
import { suggestResearchLexicon } from './lexicon'

export const SuggestResearchPage: Page = ({ siteOrigin }) => {
  const { t } = useLexicon(suggestResearchLexicon)

  return (
    <>
      <SeoHeaders
        title={t('seo.title')}
        description={t('seo.description')}
        canonical={'/suggest-research'}
        siteOrigin={siteOrigin}
      />

      <LovableSuggestResearchPage />
    </>
  )
}
