
import { Component, OnInit } from '@angular/core';

import { Students } from '../Students';
import { StudentService } from '../student.service';



@Component({
  selector: 'app-dashbaord',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentData: Students[];
  gpaData: number[];

  selectedStudent: Students; // stores the selected student from the list of students

  // Inject the Service
  constructor(private studentService: StudentService) {}


  onSelect(students:Students):void {
    this.selectedStudent = students;
  }

// Getting Student data using Observables from  student sevice
  getStudentData(): void{
    this.studentService.getStudent()
      .subscribe(studentData => this.studentData = studentData);
  }

  getCourseInfo(): void{
    this.studentService.getStudent()
      .subscribe(studentData => this.studentData = studentData);
  }

  // Getting Gpa array from service

  ngOnInit(): void {
    // Initialise the function when the dashboard component is intanciated
    this.getStudentData();
    
  }



}

