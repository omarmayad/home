import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionEighteenComponent } from './question-eighteen.component';

describe('QuestionEighteenComponent', () => {
  let component: QuestionEighteenComponent;
  let fixture: ComponentFixture<QuestionEighteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionEighteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionEighteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
