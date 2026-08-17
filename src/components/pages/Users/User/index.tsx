import { useMemo } from 'react'
import { UserPageView } from './View'
import { UserPageProps } from './interfaces'
import { userPageGetInitialProps } from './userPageGetInitialProps'
import { getUserQueryVariables } from './helpers'
import { UserStatusEnum, useUserQuery } from 'src/gql/generated'
import { SeoHeaders } from 'src/components/seo/SeoHeaders'
import { JsonLd } from 'src/components/seo/JsonLd'
import { Page } from '../../_App/interfaces'
import { createProfilePage } from 'src/components/seo/JsonLd/helpers'
import { createUserLink } from 'src/components/Link/User'
import { getResizedImagePath } from 'src/helpers/getResizedImagePath'
import { useAppContext } from 'src/components/AppContext'
import { getLocalePrefix } from 'src/Custom/Lexicon/helpers/getLocalePrefix'

export const UserPage: Page<UserPageProps> = ({ userId, siteOrigin }) => {
  const { locale } = useAppContext()
  const localePrefix = getLocalePrefix(locale)
  const variables = getUserQueryVariables(userId)

  const response = useUserQuery({
    skip: !variables,
    variables,
  })

  const user = response.data?.object

  const searchable = user?.status === UserStatusEnum.ACTIVE ? true : false

  const imageUrl = user?.image
    ? `${siteOrigin}${getResizedImagePath({ path: user.image, size: 'big' })}`
    : undefined

  const userUrl = user
    ? `${siteOrigin}${localePrefix}${createUserLink(user)}`
    : undefined

  const profileSchema = useMemo(() => {
    if (!user || !userUrl) {
      return null
    }

    return createProfilePage({
      url: userUrl,
      person: {
        '@id': `${userUrl}#person`,
        name: user.fullname || user.username || '',
        alternateName: user.username || undefined,
        identifier: user.id,
        description: user.intro || undefined,
        url: userUrl,
        image: imageUrl,
      },
    })
  }, [user, userUrl, imageUrl])

  return user ? (
    <>
      <SeoHeaders
        title={
          [user.fullname, user.username].filter((n) => !!n).join(' | ') ||
          'Anonim'
        }
        noindex={!searchable}
        nofollow={!searchable}
        canonical={createUserLink(user)}
        siteOrigin={siteOrigin}
        description={user.intro}
        image={imageUrl}
        type="website"
      />
      {profileSchema && <JsonLd data={profileSchema} />}
      {user && <UserPageView user={user} />}
    </>
  ) : null
}

UserPage.getInitialProps = userPageGetInitialProps
