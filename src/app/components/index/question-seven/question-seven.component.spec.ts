import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionSevenComponent } from './question-seven.component';

describe('QuestionSevenComponent', () => {
  let component: QuestionSevenComponent;
  let fixture: ComponentFixture<QuestionSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
