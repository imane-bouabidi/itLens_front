import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../services/survey.service';
import { Survey } from '../../models/survey.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.scss'],
  standalone: true
})
export class SurveyListComponent implements OnInit {
  surveys: Observable<Survey[]> = [];

  constructor(private surveyService: SurveyService) {}

  ngOnInit(): void {
    this.surveys = this.surveyService.getAllSurveys();
  }
}
