import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestionApiService } from './question-api.service';

@Component({
  selector: 'app-question-input',
  templateUrl: './question-input.component.html',
  styleUrls: ['./question-input.component.scss']
})
export class QuestionInputComponent implements OnInit {
  @ViewChild('query') protected query;
  
  doSearch() {
    let query = this.query.nativeElement.value
    
  }

  handleKeydownEvent (event: any) {
    switch (event.keyCode) {
      case 9:
        console.log("Tab pressed!")
        event.preventDefault()
        break;
      case 13:
        console.log("Enter pressed!")
        this.doSearch()
        break;
    }
  }

  constructor(
    private api: QuestionApiService
  ) {}

  ngOnInit() {
    this.query.nativeElement.focus()
  }
}
