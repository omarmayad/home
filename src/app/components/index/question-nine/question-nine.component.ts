import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question-nine',
  templateUrl: './question-nine.component.html',
  styleUrls: ['./question-nine.component.css']
})
export class QuestionNineComponent implements OnInit {

  sliderValue ="620000";
  @Output() messageEvent = new EventEmitter<any>();
  constructor() { 
    
  }


  ngOnInit() {
  }
 
  nextQuestion() {
      
    this.messageEvent.emit({question: 'QuestionNine', selected: this.sliderValue});
  }
}
