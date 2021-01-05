import { Courses } from './Courses';
import { Injectable } from '@angular/core';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }
  getCreditValue():Courses {
    return this.getCreditValue();
  }

}
