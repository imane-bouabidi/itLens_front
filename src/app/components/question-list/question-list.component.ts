import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from '../../models/subject.model';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-question-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  @Input() subjects: Subject[] = []
  questions: Question[] = [];
  errorMessage: string = '';
  @Input() subject!: Subject;

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions(): void {
    if (this.subject && this.subject.id) {
      console.log('Subject ID:', this.subject.id);
      this.questionService.getAllQuestions().subscribe({
        next: (questions: Question[]) => {
          console.log('All questions:', questions);
          console.log('Subject ID from component:', this.subject.id);

          // Filtrage en fonction de l'objet subject
          this.questions = questions.filter(question => question.subject.id === this.subject.id);
          console.log('Filtered questions:', this.questions);
        },
        error: (error) => {
          this.errorMessage = 'Erreur lors de la récupération des questions';
          console.error('Erreur:', error);
        }
      });
    } else {
      this.errorMessage = 'ID du sujet invalide';
    }
  }



}
