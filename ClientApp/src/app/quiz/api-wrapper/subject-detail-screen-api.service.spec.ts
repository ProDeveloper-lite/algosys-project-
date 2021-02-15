import { TestBed } from '@angular/core/testing';

import { SubjectDetailScreenApiService } from './subject-detail-screen-api.service';

describe('SubjectDetailScreenApiService', () => {
  let service: SubjectDetailScreenApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectDetailScreenApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
