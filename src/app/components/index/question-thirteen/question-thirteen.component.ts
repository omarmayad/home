import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-question-thirteen',
  templateUrl: './question-thirteen.component.html',
  styleUrls: ['./question-thirteen.component.css']
})
export class QuestionThirteenComponent implements OnInit {

  inputValue ="";
  @Output() messageEvent = new EventEmitter<any>();
  constructor() { 
    
  }


  ngOnInit() {
  }
 
  nextQuestion() {
      
    this.messageEvent.emit({question: 'QuestionThirteen', selected: this.inputValue});
  }

}
