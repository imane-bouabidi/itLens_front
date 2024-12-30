import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SurveyListComponent} from './components/survey-list/survey-list.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {CommonModule} from '@angular/common';
import {SubjectListComponent} from './components/subject-list/subject-list.component';

@Component({
  selector: 'app-root',
  imports: [SurveyListComponent,SubjectListComponent,RouterOutlet,CommonModule,NavbarComponent],
  templateUrl: './app.component.html',
  standalone: true
})
export class AppComponent {
  title = 'itlens';
}
