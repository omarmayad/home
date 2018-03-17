import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question-eighteen',
  templateUrl: './question-eighteen.component.html',
  styleUrls: ['./question-eighteen.component.css']
})
export class QuestionEighteenComponent implements OnInit {

  inputValue ="";
  @Output() messageEvent = new EventEmitter<any>();
  constructor() { 
    
  }


  ngOnInit() {
  }
 
  nextQuestion(){
      
    this.messageEvent.emit({question: 'QuestionEighteen', selected: this.inputValue});
  }

}
