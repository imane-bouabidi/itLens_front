import {Component, inject, OnInit} from '@angular/core';
import { SurveyService } from '../../services/survey.service';
import { Survey } from '../../models/survey.model';
import {RouterOutlet} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css'],
  imports: [
    RouterOutlet,
    CommonModule
  ],
  standalone: true
})
export class SurveyListComponent implements OnInit {
  surveys!: Survey[];
  SurveyService = inject(SurveyService);

  ngOnInit() {
    this.SurveyService.getAllSurveys().subscribe({
      next: (data) => {
        this.surveys = data;
        console.log(this.surveys);
      },
      error: (err) => {
        console.error('Error fetching surveys:', err);
      }
    });
  }
}
