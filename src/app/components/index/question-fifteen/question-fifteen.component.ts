import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question-fifteen',
  templateUrl: './question-fifteen.component.html',
  styleUrls: ['./question-fifteen.component.css']
})
export class QuestionFifteenComponent implements OnInit {
  inputValue ="";
  @Output() messageEvent = new EventEmitter<any>();
  constructor() { 
    
  }


  ngOnInit() {
  }
 
  nextQuestion(selected) {
      
    this.messageEvent.emit({question: 'QuestionFiftheen', selected: this.inputValue});
  }

}
