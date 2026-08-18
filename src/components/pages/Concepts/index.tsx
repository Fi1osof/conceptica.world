import { SeoHeaders } from 'src/components/seo/SeoHeaders'
import { Page } from '../_App/interfaces'
import {
  ConceptsConnectionDocument,
  ConceptsConnectionQuery,
  ConceptsConnectionQueryVariables,
  useConceptsConnectionQuery,
} from 'src/gql/generated'
import { useAppContext } from 'src/components/AppContext'
import { ConceptsPageProps } from './interfaces'
import { getConceptsConnectionQueryVariables } from './helpers'
// import { ConceptsView } from './View'
import Link from 'next/link'
import { getCurrentUser } from 'src/helpers/getCurrentUser'
import { useLexicon } from 'src/Custom/Lexicon'
import { conceptsLexicon } from './lexicon'
import { LovableConceptsPage } from '@/pages/Concepts'
import { conceptToLovable } from 'src/Custom/helpers/conceptToLovable'
import { useMemo } from 'react'
import { Concept } from '@/pages/Concepts/interfaces'

export const ConceptsPage: Page<ConceptsPageProps> = ({
  page = 1,
  siteOrigin,
}) => {
  const { user: currentUser } = useAppContext()
  const { t } = useLexicon(conceptsLexicon)

  const variables = getConceptsConnectionQueryVariables({
    page: page,
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
        title={t('seo.title')}
        description={t('seo.description')}
        canonical={`/concepts${page > 1 ? `?page=${page}` : ''}`}
        siteOrigin={siteOrigin}
      />

      {currentUser?.sudo && (
        <div>
          <Link href="/concepts/create" rel="nofollow">
            Create
          </Link>
        </div>
      )}

      <LovableConceptsPage
        concepts={concepts}
        // count={response.data?.kBConceptsCount ?? 0}
        // page={page}
        // limit={variables.take}
      />
    </>
  )
}

ConceptsPage.getInitialProps = async ({ query, apolloClient }) => {
  const pageParam = query.page
  const page =
    typeof pageParam === 'string' && parseInt(pageParam, 10) > 0
      ? parseInt(pageParam, 10)
      : 1

  const concepts = await apolloClient
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    .query<ConceptsConnectionQuery, ConceptsConnectionQueryVariables>({
      query: ConceptsConnectionDocument,
      variables: getConceptsConnectionQueryVariables({
        page: page,
        currentUser: getCurrentUser(apolloClient),
      }),
    })
    .then((r) => r.data?.concepts)

  return {
    page,
    statusCode: !concepts?.length && page > 1 ? 404 : undefined,
  }
}
