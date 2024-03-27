import { Headline } from "../components/Headline"
import { Paragraph } from "../components/Paragraph"
import { WordsCard } from "./WordsCard"

export const Words = () => {
  return(
    <div>
    <Headline 
    text={"My Words"}
    elementClassName={"words-header"}
    />

    <Paragraph 
    text={"Words coming soon!"}
    elementClassName={"words-info"}
    />

    <WordsCard />
    </div>
  )
}