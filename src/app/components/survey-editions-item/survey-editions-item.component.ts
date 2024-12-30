// survey-editions-item.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SurveyService } from '../../services/survey.service';
import { CommonModule } from '@angular/common';
import { Survey } from '../../models/survey.model';
import { RouterModule } from '@angular/router';
import {SubjectListComponent} from '../subject-list/subject-list.component';

@Component({
  selector: 'app-survey-editions-item',
  templateUrl: './survey-editions-item.component.html',
  standalone: true,
  imports: [CommonModule,
    RouterModule, SubjectListComponent],
  styleUrls: ['./survey-editions-item.component.css']
})
export class SurveyEditionsItemComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private surveyService = inject(SurveyService);

  survey: Survey | null = null;
  selectedEdition: any = null;
  selectedSubject: any = null;
  ngOnInit() {
    this.route.params.subscribe(params => {
      const surveyId = parseInt(params['surveyId']);
      const editionDate = params['editionDate'];

      this.surveyService.getSurveyById(surveyId).subscribe({
        next: (data) => {
          this.survey = data;
          this.selectedEdition = this.survey.surveyEditions.find(
            edition => String(edition.date) === String(editionDate)
          );
        },
        error: (err) => {
          console.error('Error fetching survey:', err);
        }
      });
    });
  }

  selectSubject(subject: any): void {
    this.selectedSubject = subject;
  }
}
