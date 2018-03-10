import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTweentyfiveComponent } from './question-tweentyfive.component';

describe('QuestionTweentyfiveComponent', () => {
  let component: QuestionTweentyfiveComponent;
  let fixture: ComponentFixture<QuestionTweentyfiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionTweentyfiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionTweentyfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
