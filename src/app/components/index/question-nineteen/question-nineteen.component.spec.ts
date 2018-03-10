import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionNineteenComponent } from './question-nineteen.component';

describe('QuestionNineteenComponent', () => {
  let component: QuestionNineteenComponent;
  let fixture: ComponentFixture<QuestionNineteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionNineteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionNineteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
