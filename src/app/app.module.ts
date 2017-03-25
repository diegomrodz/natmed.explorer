import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionInputComponent } from './dashboard/question-input/question-input.component';

import { QuestionApiService } from './dashboard/question-input/question-api.service'
import { DashboardService } from './dashboard/dashboard.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    QuestionInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    QuestionApiService,
    DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
