import { TestBed, inject } from '@angular/core/testing';

import { QuestionApiService } from './question-api.service';

describe('QuestionApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionApiService]
    });
  });

  it('should ...', inject([QuestionApiService], (service: QuestionApiService) => {
    expect(service).toBeTruthy();
  }));
});
