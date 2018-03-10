import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionElevenComponent } from './question-eleven.component';

describe('QuestionElevenComponent', () => {
  let component: QuestionElevenComponent;
  let fixture: ComponentFixture<QuestionElevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionElevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
