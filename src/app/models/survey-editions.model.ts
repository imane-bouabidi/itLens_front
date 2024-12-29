import { Subject } from "./subject.model";

export interface SurveyEdition {
  id: number,
  creationDate: Date,
  startDate: Date,
  date: string,
  subjects :Subject[],

}
