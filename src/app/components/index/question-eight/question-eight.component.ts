import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-question-eight',
  templateUrl: './question-eight.component.html',
  styleUrls: ['./question-eight.component.css']
})
export class QuestionEightComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<any>();
  constructor(private router :Router){}

  ngOnInit() {
  }

  nextQuestion(selected) {
      
    this.messageEvent.emit({question: 'QuestionEight', selected: selected});
   
  }
}
