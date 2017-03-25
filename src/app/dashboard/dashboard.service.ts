import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {
  public question:any;
  public answer:any;

  public hasData:boolean;

  public setResponse(res:any) {
    console.log(res)
    this.question = res.question
    this.answer = res.answer
    this.hasData = true
  }

  public clear() {
    this.question = undefined
    this.answer = undefined
    this.hasData = false
  }

  constructor() {
    this.hasData = false
  }
}
