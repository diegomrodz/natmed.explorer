import { Injectable } from '@angular/core';

@Injectable()
export class QuestionApiService {
  private apiPath:string = 'http://localhost:5000/perceive'

  public send(query:string) {
    console.log(`Searching: ${query}...`)
  }

  constructor() { }
}
