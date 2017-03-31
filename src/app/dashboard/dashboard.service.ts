import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {
  public question:any;
  public metadata:any;
  public answer:any;
  public follow_up:any;

  public hasData:boolean;

  public setResponse(res:any) {
    console.log(res)
    this.question = res.question
    this.answer = res.answer
    this.metadata = res.metadata
    this.follow_up = res.follow_up
    this.hasData = true
  }

  public clear() {
    this.question = undefined
    this.answer = undefined
    this.metadata = undefined
    this.follow_up = undefined
    this.hasData = false
  }

  constructor() {
    this.hasData = false
  }
}
