import { Subject } from "./subject.model";

export interface SurveyEdition {
  id: number,
  creationDate: Date,
  startDate: Date,
  year: string,
  subjects :Subject[],

}
