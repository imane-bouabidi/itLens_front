import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Answer} from '../models/answer.model';
@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  private apiUrl = 'api/answers';

  constructor(private http: HttpClient) {}

  getAllAnswers(): Observable<Answer[]> {
    return this.http.get<Answer[]>(this.apiUrl);
  }

  getAnswerById(id: number): Observable<Answer> {
    return this.http.get<Answer>(`${this.apiUrl}/${id}`);
  }

  createAnswer(answer: Omit<Answer, 'id'>): Observable<Answer> {
    return this.http.post<Answer>(this.apiUrl, answer);
  }

  updateAnswer(id: number, answer: Answer): Observable<Answer> {
    return this.http.put<Answer>(`${this.apiUrl}/${id}`, answer);
  }

  deleteAnswer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
