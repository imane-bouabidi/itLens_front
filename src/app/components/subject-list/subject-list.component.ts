import {Component, Input, OnInit} from '@angular/core';
import {Subject} from '../../models/subject.model';
import {SubjectService} from '../../services/subject.service';
import {CommonModule} from '@angular/common';
import {QuestionListComponent} from '../question-list/question-list.component';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  standalone: true,
  styleUrls: ['./subject-list.component.css'],
  imports: [CommonModule, QuestionListComponent]
})
export class SubjectListComponent implements OnInit {
  selectedSubject: Subject | null = null;
  errorMessage: string = '';
  @Input() subjects!: any;

  constructor(private subjectService: SubjectService) {}

  ngOnInit(): void {
    this.subjectService.getAllSubjects().subscribe({
      next: (subjects: Subject[]) => {
        this.subjects = subjects;
        console.log(this.subjects);
      },
      error: (error) => {
        this.errorMessage = 'Erreur lors de la récupération des sujets';
        console.error('Erreur:', error);
      }
    });
  }

  selectSubject(subject: Subject): void {
    this.selectedSubject = subject;
    console.log('Sujet sélectionné:', subject);
  }
}
