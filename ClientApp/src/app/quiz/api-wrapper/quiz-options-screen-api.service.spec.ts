import { TestBed } from '@angular/core/testing';

import { QuizOptionsScreenApiService } from './quiz-options-screen-api.service';

describe('QuizOptionsScreenApiService', () => {
  let service: QuizOptionsScreenApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizOptionsScreenApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
