import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuizOptionsComponent } from './add-quiz-options.component';

describe('AddQuizOptionsComponent', () => {
  let component: AddQuizOptionsComponent;
  let fixture: ComponentFixture<AddQuizOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQuizOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuizOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
