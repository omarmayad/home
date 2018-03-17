import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question-four',
  templateUrl: './question-four.component.html',
  styleUrls: ['./question-four.component.css']
})
export class QuestionFourComponent implements OnInit {
  sliderValue ="620000";
  @Output() messageEvent = new EventEmitter<any>();
  constructor() { 
    
  }


  ngOnInit() {
  }
 
  nextQuestion() {
      
    this.messageEvent.emit({question: 'QuestionFour', selected: this.sliderValue});
  }
}
