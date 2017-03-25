import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestionApiService } from './question-api.service';

import { Response } from '@angular/http';

@Component({
  selector: 'app-question-input',
  templateUrl: './question-input.component.html',
  styleUrls: ['./question-input.component.scss']
})
export class QuestionInputComponent implements OnInit {
  @ViewChild('query') protected query;
  private isSearching:boolean;

  doSearch() {
    let query = this.query.nativeElement.value

    this.isSearching = true

    this.api.send(query)
    .subscribe(
      (res:Response) => { 
        console.log("Successfull Search")
        console.log(res.json())
      },
      (err) => { 
        console.log("Search with error!")
        console.log(err)
        this.isSearching = false
      },
      () => {
        this.isSearching = false
        console.log("Search completed")
      }
    )
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
