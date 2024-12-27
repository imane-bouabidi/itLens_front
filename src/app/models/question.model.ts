import { Answer } from "./answer.model"

export interface Question {
  id : number
  text : string
  // QuestionType :Type
  questions :Question
  answerCount : number
  answers : Answer[]
}
