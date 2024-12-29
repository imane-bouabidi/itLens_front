import { Routes } from '@angular/router';
import {SurveyListComponent} from './components/survey-list/survey-list.component';
import {SurveyEditionsItemComponent} from './components/survey-editions-item/survey-editions-item.component';

export const routes: Routes = [
  {path: '', redirectTo: 'surveys'},
  {path: 'surveys', component: SurveyListComponent},
  {path: 'edition/:id', component: SurveyEditionsItemComponent },
]
