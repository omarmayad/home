import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  questionsList:any=["QuestionOne","QuestionTwo","QuestionThree",
  "QuestionFour","QuestionFive","QuestionSix","QuestionSeven","QuestionEight","QuestionNine",
  "QuestionTen","QuestionEleven","QuestionTwelve","QuestionThirteen","QuestionFourteen","QuestionFifteen",
  "QuestionSixteen","QuestionSeventeen","QuestionEighteen","QuestionNineteen","QuestionTweenty","QuestionTweentyone",
  "QuestionTweentytwo","QuestionTweentythree","QuestionTweentyfour","QuestionTweentyfive"];
  index = 0;
  currentQuestion=this.questionsList[this.index]; 
  AllTheSelectedOptions=[] ;
  constructor(private router :Router){}

  ngOnInit() {
  }
  goTo(){
    this.router.navigateByUrl('/components/policy');
  }
  receiveEvent($event){
    
    this.index++;
    this.currentQuestion=this.questionsList[this.index];
    this.AllTheSelectedOptions.push($event);
    if(this.index == 25){
      //go to final page
      localStorage.setItem('options', JSON.stringify(this.AllTheSelectedOptions));
      this.router.navigateByUrl('/continue');
    }
    
}
}
