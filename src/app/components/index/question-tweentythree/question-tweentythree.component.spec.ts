import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTweentythreeComponent } from './question-tweentythree.component';

describe('QuestionTweentythreeComponent', () => {
  let component: QuestionTweentythreeComponent;
  let fixture: ComponentFixture<QuestionTweentythreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionTweentythreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionTweentythreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
