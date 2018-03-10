import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTweentytwoComponent } from './question-tweentytwo.component';

describe('QuestionTweentytwoComponent', () => {
  let component: QuestionTweentytwoComponent;
  let fixture: ComponentFixture<QuestionTweentytwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionTweentytwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionTweentytwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
