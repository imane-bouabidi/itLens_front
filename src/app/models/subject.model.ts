import { Subsubject } from "./sub-subject.model"

export interface Subject {
  id : number
  title :string
  subSubjects : Subsubject[]
}
