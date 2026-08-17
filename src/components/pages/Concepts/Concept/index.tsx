import { SeoHeaders } from 'src/components/seo/SeoHeaders'
import { Page } from '../../_App/interfaces'
import { KbConceptVisibility, useConceptQuery } from 'src/gql/generated'
import { useAppContext } from 'src/components/AppContext'
import { ConceptView } from './View'
import { conceptPageGetInitialProps } from './getInitialProps'
import { ConceptPageProps } from './interfaces'
import { JsonLd } from 'src/components/seo/JsonLd'
import { SchemaType } from 'src/components/seo/JsonLd/types'
import { getResizedImagePath } from 'src/helpers/getResizedImagePath'
import { getLocalePrefix } from 'src/Custom/Lexicon/helpers/getLocalePrefix'

export const ConceptPage: Page<ConceptPageProps> = ({ siteOrigin, uri }) => {
  const { user: currentUser, locale } = useAppContext()
  const localePrefix = getLocalePrefix(locale)

  const response = useConceptQuery({
    variables: {
      where: {
        uri,
      },
    },
    skip: !uri,
  })

  const concept = response.data?.concept

  const searchable =
    concept && concept.visibility !== KbConceptVisibility.UNPUBLISHED
      ? true
      : false

  const imageUrl = concept?.image
    ? `${siteOrigin}${getResizedImagePath({ path: concept.image, size: 'middle' })}`
    : undefined

  const articleSchema: SchemaType | null = concept
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: concept.name,
        description: concept.description ?? undefined,
        image: imageUrl,
        datePublished: concept.createdAt
          ? typeof concept.createdAt === 'string'
            ? concept.createdAt
            : concept.createdAt?.toISOString()
          : undefined,
        dateModified: concept.updatedAt
          ? typeof concept.updatedAt === 'string'
            ? concept.updatedAt
            : concept.updatedAt?.toISOString()
          : undefined,
        author: concept.CreatedBy
          ? {
              '@type': 'Person',
              name:
                concept.CreatedBy.fullname ??
                concept.CreatedBy.username ??
                undefined,
              url: `${siteOrigin}${localePrefix}/users/${concept.CreatedBy.id}`,
            }
          : undefined,
      }
    : null

  return (
    <>
      <SeoHeaders
        title={concept?.name ?? 'Concept'}
        description={concept?.description}
        canonical={concept?.uri}
        siteOrigin={siteOrigin}
        nofollow={!searchable}
        noindex={!searchable}
        image={imageUrl}
        type="article"
        publishedTime={
          concept && concept.createdAt
            ? typeof concept.createdAt === 'string'
              ? concept.createdAt
              : concept.createdAt?.toISOString()
            : undefined
        }
        modifiedTime={
          concept && concept.updatedAt
            ? typeof concept.updatedAt === 'string'
              ? concept.updatedAt
              : concept.updatedAt?.toISOString()
            : undefined
        }
        authorUrl={
          concept?.CreatedBy
            ? `${siteOrigin}${localePrefix}/users/${concept.CreatedBy.id}`
            : undefined
        }
      />

      {articleSchema && <JsonLd data={articleSchema} />}

      {concept && <ConceptView concept={concept} currentUser={currentUser} />}
    </>
  )
}

ConceptPage.getInitialProps = conceptPageGetInitialProps
