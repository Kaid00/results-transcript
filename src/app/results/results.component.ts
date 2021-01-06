
import { Students } from './../Students';
import { StudentService } from './../student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  studentData: Students[];
  
  constructor(private studentService: StudentService) { }

  getStudentData(): void{
    this.studentService.getStudent()
      .subscribe(studentData => this.studentData = studentData);
  }

  ngOnInit(): void {
    this.getStudentData();
  }

// to be added to a table service
headers: string[] = ["Course", "Course-code", "Score", "Grade", "Grade-point", "Credit-value" ]

}
