import { Students } from './../data/Students';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


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

  // getStudent(): Observable<Students[]>{
  //   return this.http.get<Students[]>(this.studentUrl)
  // }

}
