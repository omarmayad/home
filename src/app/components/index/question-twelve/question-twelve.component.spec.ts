import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTwelveComponent } from './question-twelve.component';

describe('QuestionTwelveComponent', () => {
  let component: QuestionTwelveComponent;
  let fixture: ComponentFixture<QuestionTwelveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionTwelveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
