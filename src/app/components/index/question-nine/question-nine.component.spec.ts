import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionNineComponent } from './question-nine.component';

describe('QuestionNineComponent', () => {
  let component: QuestionNineComponent;
  let fixture: ComponentFixture<QuestionNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
