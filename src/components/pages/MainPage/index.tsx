import { SeoHeaders } from 'src/components/seo/SeoHeaders'
import { JsonLd } from 'src/components/seo/JsonLd'
import { Page } from '../_App/interfaces'
import { createWebSite } from 'src/components/seo/JsonLd/helpers'
import { mainPageLexicon } from './lexicon'
import { useLexicon } from 'src/Custom/Lexicon'
import { ConceptsPage } from '../Concepts'
import { useAppContext } from 'src/components/AppContext'
import { getConceptsConnectionQueryVariables } from '../Concepts/helpers'
import { useConceptsConnectionQuery } from 'src/gql/generated'
import { ConceptsView } from '../Concepts/View'

export const MainPage: Page = (props) => {
  const t = useLexicon(mainPageLexicon)

  const siteTitle = t('seo.title')
  const siteUrl = props.siteOrigin

  const { user: currentUser } = useAppContext()

  const page = 1

  const variables = getConceptsConnectionQueryVariables({
    currentUser,
    page,
  })

  const response = useConceptsConnectionQuery({
    variables,
  })

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

      <ConceptsView
        concepts={response.data?.concepts ?? []}
        count={response.data?.kBConceptsCount ?? 0}
        page={page}
        limit={variables.take}
      />
    </>
  )
}

MainPage.getInitialProps = ConceptsPage.getInitialProps
