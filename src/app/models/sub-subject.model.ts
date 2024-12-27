import { Question } from "./question.model"

export interface Subsubject {
  id : number
  title : string
  questions :Question[]
}
