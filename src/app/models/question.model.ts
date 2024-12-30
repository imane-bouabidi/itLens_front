import { Answer } from "./answer.model"
import {QuestionType} from './enumes/question-type.string';
import {Subject} from './subject.model';

export interface Question {
  id : number
  text : string
  subject: Subject;
  answerCount : number
  answers : Answer[]
}
