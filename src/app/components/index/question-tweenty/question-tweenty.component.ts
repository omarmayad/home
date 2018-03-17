import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-question-tweenty',
  templateUrl: './question-tweenty.component.html',
  styleUrls: ['./question-tweenty.component.css']
})
export class QuestionTweentyComponent implements OnInit {

  sliderValue ="3";
  @Output() messageEvent = new EventEmitter<any>();
  constructor() { 
    
  }


  ngOnInit() {
  }
 
  nextQuestion(selected) {
      
    this.messageEvent.emit({question: 'QuestionTweenty', selected: this.sliderValue});
  }
}
