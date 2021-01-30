
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentComponent } from '../components/dashboard/student.component';
import {StudentInfoComponent} from '../components/student-info/student-info.component';
import {StudentDetailsComponent} from '../components/student-details/student-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'student', pathMatch: 'full' },
  { path: 'student', component: StudentComponent,
  children: [{ path: 'transcript', component: StudentDetailsComponent}]  
  },
  { path: 'details', component: StudentInfoComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }