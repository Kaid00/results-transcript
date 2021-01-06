
import { StudentData } from './data-mockup';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Students } from './Students';
import { Courses } from './Courses';




@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudent(): Observable<Students[]> {
    return of(StudentData);
  }

  getCourseArray(): Observable<Courses> {
    return of ();
  }

  
}
