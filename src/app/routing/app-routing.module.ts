
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentComponent } from '../components/dashboard/student.component';
import {StudentInfoComponent} from '../components/student-info/student-info.component';
import {StudentDetailsComponent} from '../components/student-details/student-details.component';

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