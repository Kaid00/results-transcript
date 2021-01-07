
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentComponent } from './dashboard/student.component';
import {StudentInfoComponent} from './student-info/student-info.component';
import {StudentDetailsComponent} from './student-details/student-details.component';

const routes: Routes = [
  { path: 'student', component: StudentComponent },
  { path: 'details', component: StudentInfoComponent},
  { path: 'infor', component: StudentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }