import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-question-seventeen',
  templateUrl: './question-seventeen.component.html',
  styleUrls: ['./question-seventeen.component.css']
})
export class QuestionSeventeenComponent implements OnInit {

  inputValue ="";
  @Output() messageEvent = new EventEmitter<any>();
  constructor() { 
    
  }


  ngOnInit() {
  }
 
  nextQuestion(){
      
    this.messageEvent.emit({question: 'QuestionSeventeen', selected: this.inputValue});
  }

}
