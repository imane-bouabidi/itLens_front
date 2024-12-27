import { Component } from '@angular/core';
import { SurveyService } from '../../services/survey.service';
import { Survey } from '../../models/survey.model';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.scss'],
  standalone: true
})
export class SurveyFormComponent {
  // survey: Survey = { id: '', title: '', description: '', createdAt: new Date() };
  //
  // constructor(private surveyService: SurveyService) {}
  //
  // addSurvey(): void {
  //   this.survey.id = Math.random().toString(36).substring(2);
  //   this.surveyService.addSurvey(this.survey);
  // }
}
