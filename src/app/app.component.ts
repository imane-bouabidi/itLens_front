import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SurveyListComponent} from './components/survey-list/survey-list.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [SurveyListComponent,RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  standalone: true
})
export class AppComponent {
  title = 'itlens';
}
