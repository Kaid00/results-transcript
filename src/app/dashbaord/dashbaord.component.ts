import { STUDENTS } from './../appData';

import { Component, OnInit } from '@angular/core';
import { Students } from './../Students';
import { Courses } from './../Courses';

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.css']
})
export class DashbaordComponent implements OnInit {


// list of students
  students = STUDENTS;
  selectedStudent: Students; // stores the selected student from the list of students
  constructor() { }

  onSelect(students:Students):void {
    this.selectedStudent = students;
  }
  ngOnInit(): void {
  }

}
