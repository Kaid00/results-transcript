import { StudentData } from './../data/data-mockup';
import { Courses } from './../data/Courses';
import { Students } from './../data/Students';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {

  const onefirst = new Students(
      "SC18A447", "Shanks", [
          new Courses("CSC 205", 6, 90), new Courses("CSC 207",4,55), new Courses("CSC 209",6,66), new Courses("CSC 211",4,87), new Courses("MAT 201",6,84), new Courses("ENG 101",2,75), new Courses("FRE 101",2,64), new Courses("CVE 100",4,64)
      ]
      );
  
  const oneSecond = new Students(
      "SC18A430", "Black Beard", [
          new Courses("CSC 205", 6, 80), new Courses("CSC 207",4,55), new Courses("CSC 209",6,66), new Courses("CSC 211",4,30), new Courses("MAT 201",6,64), new Courses("ENG 101",2,29), new Courses("FRE 101",2,64), new Courses("CVE 100",4,59)
      ]
      );
  
  const oneThird = new Students(
          "SC18A424", "Katakuri", [
              new Courses("CSC 205", 6, 20), new Courses("CSC 207",4,55), new Courses("CSC 209",6,66), new Courses("CSC 211",4,30), new Courses("MAT 201",6,0), new Courses("ENG 101",2,29), new Courses("FRE 101",2,64), new Courses("CVE 100",4,59)
          ]
      );
  
  const oneFourth = new Students(
          "SC18A480", "Kaido", [
              new Courses("CSC 205", 6, 4), new Courses("CSC 207",4,55), new Courses("CSC 209",6,66), new Courses("CSC 211",4,30), new Courses("MAT 201",6,64), new Courses("ENG 101",2,0), new Courses("FRE 101",2,64), new Courses("CVE 100",4,59)
          ]
  );
  

    const StudentData:Students[] = [
      onefirst, oneSecond, oneThird, oneFourth
  ]; 
  return {StudentData}
  }


}
