import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionEightComponent } from './question-eight.component';

describe('QuestionEightComponent', () => {
  let component: QuestionEightComponent;
  let fixture: ComponentFixture<QuestionEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
