import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './components/dashboard/student.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { ResultsComponent } from './components/results/results.component';
import { StudentInfoComponent } from './components/student-info/student-info.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentDetailsComponent,
    ResultsComponent,
    StudentInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
