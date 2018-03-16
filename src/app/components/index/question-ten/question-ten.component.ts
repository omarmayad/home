import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question-ten',
  templateUrl: './question-ten.component.html',
  styleUrls: ['./question-ten.component.css']
})
export class QuestionTenComponent implements OnInit {
  sliderValue ="3";
  @Output() messageEvent = new EventEmitter<any>();
  constructor() { 
    
  }


  ngOnInit() {
  }
 
  nextQuestion(selected) {
      
    this.messageEvent.emit({question: 'QuestionTen', selected: this.sliderValue});
  }
}
