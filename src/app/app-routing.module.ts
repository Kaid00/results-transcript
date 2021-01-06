import { StudentComponent } from './dashboard/student.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentDetailsComponent} from './student-details/student-details.component';

const routes: Routes = [
  { path: 'student', component: StudentComponent },
  { path: 'details', component: StudentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }