import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subsubject } from '../models/sub-subject.model';

@Injectable({
  providedIn: 'root'
})
export class SubSubjectService {
  private apiUrl = 'api/sub-subjects';

  constructor(private http: HttpClient) {}

  getAllSubSubjects(): Observable<Subsubject[]> {
    return this.http.get<Subsubject[]>(this.apiUrl);
  }

  getSubSubjectById(id: number): Observable<Subsubject> {
    return this.http.get<Subsubject>(`${this.apiUrl}/${id}`);
  }

  createSubSubject(subSubject: Omit<Subsubject, 'id'>): Observable<Subsubject> {
    return this.http.post<Subsubject>(this.apiUrl, subSubject);
  }

  updateSubSubject(id: number, subSubject: Subsubject): Observable<Subsubject> {
    return this.http.put<Subsubject>(`${this.apiUrl}/${id}`, subSubject);
  }

  deleteSubSubject(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
