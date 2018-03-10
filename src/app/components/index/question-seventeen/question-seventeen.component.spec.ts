import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionSeventeenComponent } from './question-seventeen.component';

describe('QuestionSeventeenComponent', () => {
  let component: QuestionSeventeenComponent;
  let fixture: ComponentFixture<QuestionSeventeenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionSeventeenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionSeventeenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
