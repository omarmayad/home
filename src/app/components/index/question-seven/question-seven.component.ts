import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-question-seven',
  templateUrl: './question-seven.component.html',
  styleUrls: ['./question-seven.component.css']
})
export class QuestionSevenComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<any>();
  constructor() { 
    
  }


  ngOnInit() {
  }
 
  nextQuestion(selected) {
      
    this.messageEvent.emit({question: 'QuestionSeven', selected: selected});
  }
}
