import { Students } from './../../data/Students';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  @Input() student: Students;
  constructor() { }

  ngOnInit(): void {
  }

}
