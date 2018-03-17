import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question-six',
  templateUrl: './question-six.component.html',
  styleUrls: ['./question-six.component.css']
})
export class QuestionSixComponent implements OnInit {
  sliderValue ="3";
  @Output() messageEvent = new EventEmitter<any>();
  constructor() { 
    
  }


  ngOnInit() {
  }
 
  nextQuestion() {
      
    this.messageEvent.emit({question: 'QuestionSix', selected: this.sliderValue});
  }
}
