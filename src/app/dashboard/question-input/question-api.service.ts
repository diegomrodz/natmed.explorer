import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QuestionApiService {
  private apiPath:string = 'http://localhost:5000/perceive'

  public send(query:string) {
    console.log(`Searching: ${query}...`)
    
    let question = {
      'type': 'QUESTION',
      'data': {
        'question': query
      }
    }

    return this.http.post(this.apiPath, question)
  }

  constructor(
    private http:Http
  ) { }
}
