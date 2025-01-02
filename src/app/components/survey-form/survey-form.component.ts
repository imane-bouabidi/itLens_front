import {Component, EventEmitter, inject, Output} from '@angular/core';
import {Survey} from '../../models/survey.model';
import {FormsModule} from '@angular/forms';
import {SurveyService} from '../../services/survey.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css'],
  imports: [
    FormsModule
  ],
  standalone: true
})
export class SurveyFormComponent {
  @Output() surveySubmitted = new EventEmitter<Omit<Survey, 'id'>>();
  @Output() formCanceled = new EventEmitter<void>();

  SurveyService = inject(SurveyService);
  router = inject(Router);
  showAddForm: boolean = false;

  newSurvey: Omit<Survey, 'id'> = {
    title: '',
    description: '',
    ownerId: 1,
    surveyEditions: []
  };

  onSubmit(): void {
    // console.log('Form submitted', this.newSurvey);
    if (this.newSurvey.title && this.newSurvey.description) {
      this.SurveyService.createSurvey(this.newSurvey).subscribe({
        next: (survey) => {
          console.log('Survey created:', survey);
          this.surveySubmitted.emit();
          this.showAddForm = false;

          this.router.navigate(['']);
        },
        error: (err) => {
          console.error('Error creating survey:', err);
        }
      });
    }
  }

  onCancel(): void {
    this.formCanceled.emit();
  }

}
