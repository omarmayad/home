import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-question-nineteen',
  templateUrl: './question-nineteen.component.html',
  styleUrls: ['./question-nineteen.component.css']
})
export class QuestionNineteenComponent implements OnInit {


  @Output() messageEvent = new EventEmitter<any>();
  constructor() { 
    
  }


  ngOnInit() {
  }
 
  nextQuestion(selected) {
      
    this.messageEvent.emit({question: 'QuestionNineteen', selected: selected});
  }
}
