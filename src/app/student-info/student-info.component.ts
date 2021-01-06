

import { Component, OnInit, Input } from '@angular/core';

import { Students } from '../Students';
import { StudentService } from '../student.service';
import {StudentComponent} from '../dashboard/student.component';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {

  studentData: Students[];
  selectedStudent: Students;

  @Input() select: StudentComponent;

  constructor(private studentService: StudentService) { }

  getStudentData(): void{
    this.studentService.getStudent()
      .subscribe(studentData => this.studentData = studentData);
  }

  onSelect(students:Students):void {
    this.selectedStudent = students;
  }

  ngOnInit(): void {
    this.getStudentData();
  }

}
