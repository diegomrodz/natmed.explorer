import { Component, OnInit, ViewChild } from '@angular/core';

import { DashboardService } from './dashboard.service';

import { QuestionInputComponent } from './question-input/question-input.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('questionInput') private questionInput:QuestionInputComponent;

  private showDetails(entity:any) {
    entity.showDetails = !entity.showDetails
  }

  public search(query:string) {
    this.questionInput.setSearch(query)
    this.questionInput.doSearch()
  }

  constructor(
    private ds:DashboardService
  ) { }

  ngOnInit() {
  }

}
