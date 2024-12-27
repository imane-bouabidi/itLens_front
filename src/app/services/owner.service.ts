import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Owner } from '../models/owner.model';
import {Survey} from '../models/survey.model';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  private apiUrl = 'api/owners';

  constructor(private http: HttpClient) {}

  getAllOwners(): Observable<Owner[]> {
    return this.http.get<Owner[]>(this.apiUrl);
  }

  getOwnerById(id: number): Observable<Owner> {
    return this.http.get<Owner>(`${this.apiUrl}/${id}`);
  }

  createOwner(owner: Omit<Owner, 'id'>): Observable<Owner> {
    return this.http.post<Owner>(this.apiUrl, owner);
  }

  updateOwner(id: number, owner: Owner): Observable<Owner> {
    return this.http.put<Owner>(`${this.apiUrl}/${id}`, owner);
  }

  deleteOwner(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getSurveysByOwner(ownerId: number): Observable<Survey[]> {
    return this.http.get<Survey[]>(`${this.apiUrl}/${ownerId}/surveys`);
  }

  assignSurveyToOwner(ownerId: number, surveyId: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${ownerId}/surveys/${surveyId}`, {});
  }

  removeSurveyFromOwner(ownerId: number, surveyId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${ownerId}/surveys/${surveyId}`);
  }
}
