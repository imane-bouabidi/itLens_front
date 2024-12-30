import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Survey } from '../models/survey.model';
import {SurveyEdition} from '../models/survey-editions.model';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  private Url = 'http://localhost:8080/surveys';

  constructor(private http: HttpClient) {}

  getAllSurveys(): Observable<Survey[]> {
    return this.http.get<Survey[]>(this.Url);
  }

  getSurveyById(id: number): Observable<Survey> {
    return this.http.get<Survey>(`${this.Url}/${id}`);
  }

  getEditionDetails(surveyId: number, editionDate: string): Observable<SurveyEdition> {
    return this.http.get<SurveyEdition>(`${this.Url}/${surveyId}/editions/${editionDate}`);
  }

  createSurvey(survey: Omit<Survey, 'id'>): Observable<Survey> {
    return this.http.post<Survey>(this.Url, survey);
  }

  updateSurvey(id: number, survey: Survey): Observable<Survey> {
    return this.http.put<Survey>(`${this.Url}/${id}`, survey);
  }

  deleteSurvey(id: number): Observable<void> {
    return this.http.delete<void>(`${this.Url}/${id}`);
  }
}
