import { Component, inject, OnInit } from '@angular/core';
import { SurveyService } from '../../services/survey.service';
import { Survey } from '../../models/survey.model';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css'],
  imports: [RouterOutlet, CommonModule, FormsModule],
  standalone: true,
})
export class SurveyListComponent implements OnInit {
  surveys!: Survey[];
  SurveyService = inject(SurveyService);
  router = inject(Router);
  showAddForm: boolean = false;



  ngOnInit() {
    this.loadSurveys();
  }

  loadSurveys(): void {
    this.SurveyService.getAllSurveys().subscribe({
      next: (data) => {
        this.surveys = data;
        console.log(this.surveys);
      },
      error: (err) => {
        console.error('Error fetching surveys:', err);
      },
    });
  }

  toggleAddForm(): void {
    this.showAddForm = !this.showAddForm;
  }

  // addSurvey(): void {
  //   this.SurveyService.createSurvey(this.newSurvey).subscribe({
  //     next: (survey) => {
  //       this.surveys.push(survey);
  //       this.newSurvey = { title: '', description: '', ownerId:1, surveyEditions: [] };
  //       this.showAddForm = false;
  //     },
  //     error: (err) => {
  //       console.error('Error adding survey:', err);
  //     },
  //   });
  // }

  redirectToEdition(surveyId: number, editionDate: string): void {
    const formattedDate = encodeURIComponent(editionDate);
    this.router.navigate([`/surveys/${surveyId}/edition/${formattedDate}`]);
  }

  trackByEdition(index: number, item: any): any {
    return item ? item.date : null;
  }
}
