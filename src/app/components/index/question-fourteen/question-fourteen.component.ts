import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-question-fourteen',
  templateUrl: './question-fourteen.component.html',
  styleUrls: ['./question-fourteen.component.css']
})
export class QuestionFourteenComponent implements OnInit {
  inputValue ="";
  @Output() messageEvent = new EventEmitter<any>();
  constructor() { 
    
  }


  ngOnInit() {
  }
 
  nextQuestion(selected) {
      
    this.messageEvent.emit({question: 'QuestionFourteen', selected: this.inputValue});
  }

}
