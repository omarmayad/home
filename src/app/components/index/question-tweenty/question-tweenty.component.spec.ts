import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTweentyComponent } from './question-tweenty.component';

describe('QuestionTweentyComponent', () => {
  let component: QuestionTweentyComponent;
  let fixture: ComponentFixture<QuestionTweentyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionTweentyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionTweentyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
