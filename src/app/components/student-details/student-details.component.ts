import { StudentService } from './../../services/student.service';
import { Students } from './../../data/Students';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {switchMap} from 'rxjs/operators';
 

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})

export class StudentDetailsComponent implements OnInit {
  @Input() student: Students;

  studentRoute;
  studentData: Students[];
  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private location: Location
    ) { }
    

  // Getting Student data using Observables from  student sevice
  getStudentData(): void{
    const id = +this.route.snapshot.paramMap.get('transcript');

    this.studentService.getStudent()
      .subscribe(studentData => this.studentData = studentData);
  }
  
  ngOnInit(): void {
    this.getStudentData();

    this.studentRoute = this.route.paramMap.pipe(
      switchMap(params => {
        const name = params.get('transcript');
      })
    );
    
  }

}
