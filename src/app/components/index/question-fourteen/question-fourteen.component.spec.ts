import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionFourteenComponent } from './question-fourteen.component';

describe('QuestionFourteenComponent', () => {
  let component: QuestionFourteenComponent;
  let fixture: ComponentFixture<QuestionFourteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionFourteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionFourteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
