import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTweentyfourComponent } from './question-tweentyfour.component';

describe('QuestionTweentyfourComponent', () => {
  let component: QuestionTweentyfourComponent;
  let fixture: ComponentFixture<QuestionTweentyfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionTweentyfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionTweentyfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
