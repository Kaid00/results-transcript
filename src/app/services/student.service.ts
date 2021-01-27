
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Students } from '../data/Students';
import { StudentData } from '../data/data-mockup';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentUrl = 'api/StudentData';  // URL to web api

  constructor(
    private http: HttpClient,
    ) { }

  getStudent(): Observable<Students[]> {
    return of(StudentData);
  }

}
