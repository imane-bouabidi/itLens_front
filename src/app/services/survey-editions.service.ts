import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {SurveyEdition} from '../models/survey-editions.model';

@Injectable({
  providedIn: 'root'
})
export class SurveyEditionService {
  private apiUrl = 'http://localhost:8080/survey/edition';

  constructor(private http: HttpClient) {}

  getAllSurveyEditions(): Observable<SurveyEdition[]> {
    return this.http.get<SurveyEdition[]>(this.apiUrl);
  }

  getSurveyEditionById(id: number): Observable<SurveyEdition> {
    return this.http.get<SurveyEdition>(`${this.apiUrl}/${id}`);
  }

  createSurveyEdition(surveyEdition: Omit<SurveyEdition, 'id'>): Observable<SurveyEdition> {
    return this.http.post<SurveyEdition>(this.apiUrl, surveyEdition);
  }

  updateSurveyEdition(id: number, surveyEdition: SurveyEdition): Observable<SurveyEdition> {
    return this.http.put<SurveyEdition>(`${this.apiUrl}/${id}`, surveyEdition);
  }

  deleteSurveyEdition(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
