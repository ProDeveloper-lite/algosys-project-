import { TestBed } from '@angular/core/testing';

import { QuizDetailScreenApiService } from './quiz-detail-screen-api.service';

describe('QuizDetailScreenApiService', () => {
  let service: QuizDetailScreenApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizDetailScreenApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
