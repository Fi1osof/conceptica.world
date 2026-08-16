import { KbConceptFragment } from 'src/gql/generated'
import {
  ConceptItemStyled,
  ConceptItemMetaStyled,
  ConceptItemTitleStyled,
  ConceptItemDescriptionStyled,
  ConceptItemImgStyled,
} from './styles'
import { FormattedDate } from 'src/ui-kit/format/FormattedDate'
import { Markdown } from 'src/components/Markdown'
import { ConceptItemVariant } from './interfaces'
import { UserLink } from 'src/components/Link/User'
import { ConceptLink } from 'src/components/Link/Concept'
import { getResizedImagePath } from 'src/helpers/getResizedImagePath'

type ConceptItemProps = {
  concept: KbConceptFragment
  variant: ConceptItemVariant
}

export const ConceptItem: React.FC<ConceptItemProps> = ({
  concept,
  variant,
  ...other
}) => {
  const { id, name, description, content, image, CreatedBy } = concept

  const title = (
    <ConceptItemTitleStyled as={variant === 'full' ? 'h1' : 'h3'}>
      {name || id}
    </ConceptItemTitleStyled>
  )

  let titleBlock: React.ReactNode | null
  let contentBlock: React.ReactNode | null
  let descriptionBlock: React.ReactNode | null

  switch (variant) {
    case 'full':
      titleBlock = title
      contentBlock = <>{content && <Markdown>{content}</Markdown>}</>
      descriptionBlock = null
      break

    default:
      titleBlock = <ConceptLink object={concept}>{title}</ConceptLink>
      contentBlock = null
      descriptionBlock = description && (
        <ConceptItemDescriptionStyled>
          <Markdown>{description}</Markdown>
        </ConceptItemDescriptionStyled>
      )
  }

  return (
    <ConceptItemStyled {...other} $variant={variant}>
      {titleBlock}

      {image && (
        <ConceptItemImgStyled
          src={getResizedImagePath({
            path: image,
            size: 'middle',
          })}
        />
      )}

      {descriptionBlock}

      {contentBlock}

      <ConceptItemMetaStyled>
        <ConceptLink object={concept}>
          <FormattedDate value={concept.updatedAt} format="dateTimeShort" />
        </ConceptLink>
        {CreatedBy && <UserLink user={CreatedBy} />}
      </ConceptItemMetaStyled>
    </ConceptItemStyled>
  )
}
