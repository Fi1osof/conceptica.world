import { Hero } from './Hero'
import { ConceptList } from '../../components/ConceptList'
import { SuggestResearchCta } from './SuggestResearchCta'
import { HowItWorks } from './HowItWorks'
import { TwoPaths } from './TwoPaths'
import { AboutBlock } from './AboutBlock'
import { Concept } from '../Concepts/interfaces'
import { useLexicon } from 'src/Custom/Lexicon'
import { mainPageLexicon } from './lexicon'

type LovableMainPageProps = {
  concepts: Concept[]
}

export const LovableMainPage: React.FC<LovableMainPageProps> = ({
  concepts,
}) => {
  useLexicon(mainPageLexicon)

  return (
    <>
      <Hero />
      <ConceptList concepts={concepts} />
      <HowItWorks />
      <TwoPaths />
      <SuggestResearchCta />
      <AboutBlock />
    </>
  )
}
