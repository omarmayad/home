import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTweentyoneComponent } from './question-tweentyone.component';

describe('QuestionTweentyoneComponent', () => {
  let component: QuestionTweentyoneComponent;
  let fixture: ComponentFixture<QuestionTweentyoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionTweentyoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionTweentyoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
