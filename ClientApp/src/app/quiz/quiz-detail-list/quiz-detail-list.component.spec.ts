import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizDetailListComponent } from './quiz-detail-list.component';

describe('QuizDetailListComponent', () => {
  let component: QuizDetailListComponent;
  let fixture: ComponentFixture<QuizDetailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizDetailListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
