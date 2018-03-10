import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionThirteenComponent } from './question-thirteen.component';

describe('QuestionThirteenComponent', () => {
  let component: QuestionThirteenComponent;
  let fixture: ComponentFixture<QuestionThirteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionThirteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionThirteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
