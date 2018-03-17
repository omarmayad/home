import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question-sixteen',
  templateUrl: './question-sixteen.component.html',
  styleUrls: ['./question-sixteen.component.css']
})
export class QuestionSixteenComponent implements OnInit {
  inputValue ="";
  @Output() messageEvent = new EventEmitter<any>();
  constructor() { 
    
  }


  ngOnInit() {
  }
 
  nextQuestion(){
      
    this.messageEvent.emit({question: 'QuestionSixteen', selected: this.inputValue});
  }

}
