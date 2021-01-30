
import { Component, OnInit } from '@angular/core';

import { Students } from './../../data/Students';
import { StudentService } from './../../services/student.service';

@Component({
  selector: 'app-dashbaord',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {

  studentData: Students[];
  gpaData: number[];

  selectedStudent: Students | undefined; // stores the selected student from the list of students

// Inject the Service
  constructor(private studentService: StudentService) {}

// Getting selected student from student list
  onSelect(students:Students):void {
    this.selectedStudent = students;
  }

// Getting Student data using Observables from  student sevice
  getStudentData(): void{
    this.studentService.getStudent()
      .subscribe(studentData => this.studentData = studentData);
  }
  
  ngOnInit(): void {
    this.getStudentData();
    
  }

}

