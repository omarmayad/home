import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionSixteenComponent } from './question-sixteen.component';

describe('QuestionSixteenComponent', () => {
  let component: QuestionSixteenComponent;
  let fixture: ComponentFixture<QuestionSixteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionSixteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionSixteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
