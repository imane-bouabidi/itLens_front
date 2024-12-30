import { Routes } from '@angular/router';
import { SurveyListComponent } from './components/survey-list/survey-list.component';
import { SurveyEditionsItemComponent } from './components/survey-editions-item/survey-editions-item.component';
import {SubjectListComponent} from './components/subject-list/subject-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'surveys', pathMatch: 'full' },
  { path: 'surveys', component: SurveyListComponent },
  { path: 'subjects', component: SubjectListComponent },
  { path: 'surveys/:surveyId/edition/:editionDate', component: SurveyEditionsItemComponent },
];
