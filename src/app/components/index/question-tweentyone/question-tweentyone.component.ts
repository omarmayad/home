import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-question-tweentyone',
  templateUrl: './question-tweentyone.component.html',
  styleUrls: ['./question-tweentyone.component.css']
})
export class QuestionTweentyoneComponent implements OnInit {
  sliderValue ="4";
  @Output() messageEvent = new EventEmitter<any>();
  constructor() { 
    
  }


  ngOnInit() {
  }
 
  nextQuestion(selected) {
      
    this.messageEvent.emit({question: 'QuestionTweentyone', selected: this.sliderValue});
  }
}
