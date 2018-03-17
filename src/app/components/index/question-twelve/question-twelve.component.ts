import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-question-twelve',
  templateUrl: './question-twelve.component.html',
  styleUrls: ['./question-twelve.component.css']
})
export class QuestionTwelveComponent implements OnInit {
  inputValue ="";
  @Output() messageEvent = new EventEmitter<any>();
  constructor() { 
    
  }


  ngOnInit() {
  }
 
  nextQuestion(selected) {
      
    this.messageEvent.emit({question: 'QuestionEleven', selected: this.inputValue});
  }

}
