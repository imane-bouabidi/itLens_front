import {Owner} from "./owner.model";
import {SurveyEdition} from './survey-editions.model';

export interface Survey {
  id: number,
  title: string,
  description: string,
  ownerId?: number;
  owner?: Owner,
  surveyEditions:SurveyEdition[] ,
}
