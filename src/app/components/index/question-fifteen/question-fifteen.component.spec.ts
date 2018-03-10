import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionFifteenComponent } from './question-fifteen.component';

describe('QuestionFifteenComponent', () => {
  let component: QuestionFifteenComponent;
  let fixture: ComponentFixture<QuestionFifteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionFifteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionFifteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
