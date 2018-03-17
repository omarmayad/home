import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question-eleven',
  templateUrl: './question-eleven.component.html',
  styleUrls: ['./question-eleven.component.css']
})
export class QuestionElevenComponent implements OnInit {
  inputValue ="";
  @Output() messageEvent = new EventEmitter<any>();
  constructor() { 
    
  }


  ngOnInit() {
  }
 
  nextQuestion(){
      
    this.messageEvent.emit({question: 'QuestionEleven', selected: this.inputValue});
  }

}
