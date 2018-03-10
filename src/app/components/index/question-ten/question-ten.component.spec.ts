import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTenComponent } from './question-ten.component';

describe('QuestionTenComponent', () => {
  let component: QuestionTenComponent;
  let fixture: ComponentFixture<QuestionTenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionTenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
