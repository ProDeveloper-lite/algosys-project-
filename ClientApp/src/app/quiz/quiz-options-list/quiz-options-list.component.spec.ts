import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizOptionsListComponent } from './quiz-options-list.component';

describe('QuizOptionsListComponent', () => {
  let component: QuizOptionsListComponent;
  let fixture: ComponentFixture<QuizOptionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizOptionsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizOptionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
