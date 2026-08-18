import { ConceptList } from '../../components/ConceptList'
import { Concept } from './interfaces'

type LovableConceptsPageProps = {
  concepts: Concept[]
}

export const LovableConceptsPage: React.FC<LovableConceptsPageProps> = ({
  concepts,
}) => {
  return (
    <>
      <ConceptList concepts={concepts} />
    </>
  )
}
