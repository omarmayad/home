import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question-five',
  templateUrl: './question-five.component.html',
  styleUrls: ['./question-five.component.css']
})
export class QuestionFiveComponent implements OnInit {
  sliderValue ="645000";
  @Output() messageEvent = new EventEmitter<any>();
  constructor() { 
    
  }


  ngOnInit() {
  }
 
  nextQuestion(selected) {
      
    this.messageEvent.emit({question: 'QuestionFive', selected: this.sliderValue});
  }
}
