import { SeoHeaders } from 'src/components/seo/SeoHeaders'
import { JsonLd } from 'src/components/seo/JsonLd'
import { createWebSite } from 'src/components/seo/JsonLd/helpers'
import { mainPageLexicon } from './lexicon'
import { useLexicon } from 'src/Custom/Lexicon'
import { Page } from 'src/components/pages/_App/interfaces'
import { LovableMainPage } from '@/pages/MainPage'
import { useAppContext } from 'src/components/AppContext'
import {
  ConceptsConnectionDocument,
  ConceptsConnectionQuery,
  ConceptsConnectionQueryVariables,
  useConceptsConnectionQuery,
} from 'src/gql/generated'
import { getConceptsConnectionQueryVariables } from 'src/components/pages/Concepts/helpers'
import { useMemo } from 'react'
import { Concept } from '@/pages/Concepts/interfaces'
import { getCurrentUser } from 'src/helpers/getCurrentUser'
import { conceptToLovable } from 'src/Custom/helpers/conceptToLovable'

const limit = 4

export const MainPageCustom: Page = (props) => {
  const { t } = useLexicon(mainPageLexicon)

  const siteTitle = t('seo.title')
  const siteUrl = props.siteOrigin

  const { user: currentUser } = useAppContext()

  const page = 1

  const variables = getConceptsConnectionQueryVariables({
    page,
    take: limit,
    currentUser,
  })

  const response = useConceptsConnectionQuery({
    variables,
  })

  const concepts = useMemo(() => {
    return response.data?.concepts?.map<Concept>(conceptToLovable) ?? []
  }, [response.data?.concepts])

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

      <LovableMainPage concepts={concepts} />
    </>
  )
}

MainPageCustom.getInitialProps = async ({ apolloClient }) => {
  await apolloClient
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    .query<ConceptsConnectionQuery, ConceptsConnectionQueryVariables>({
      query: ConceptsConnectionDocument,
      variables: getConceptsConnectionQueryVariables({
        page: 1,
        take: limit,
        currentUser: getCurrentUser(apolloClient),
      }),
    })
    .then((r) => r.data?.concepts)

  return {}
}
