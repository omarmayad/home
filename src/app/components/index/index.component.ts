import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';

 declare var $ : any;
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
  "ThankYou"];
  index = 0;
  percentage=15;
  currentQuestion=this.questionsList[this.index]; 
  AllTheSelectedOptions=[] ;
  constructor(private router :Router){}

  ngOnInit() {
    $("#the_lights").fadeTo(1,0);
    $(".soft").click(function () {
         document.getElementById("the_lights").style.display="block";
         $("#the_lights").fadeTo("slow",0.8);
    });
    $(".on").click(function () {
      document.getElementById("the_lights").style.display="block";
      $("#the_lights").fadeTo("slow",0);
 });
 
  }
  receiveEvent($event){
    
    this.index++;
    this.percentage += (90/this.questionsList.length);
    this.currentQuestion=this.questionsList[this.index];
    this.AllTheSelectedOptions.push($event);
    if(this.AllTheSelectedOptions[7]){
      if(this.AllTheSelectedOptions[7].selected == "No" && !this.AllTheSelectedOptions[7].passed){
        this.AllTheSelectedOptions[7].passed = true;
        this.index+=2;
        this.percentage += (90/this.questionsList.length +1);
        this.currentQuestion=this.questionsList[this.index];
    
      }
    }
 
    if(this.AllTheSelectedOptions[16]){
      console.log("working",this.currentQuestion);
      if(this.AllTheSelectedOptions[16].selected == "No" && !this.AllTheSelectedOptions[16].passed){
       
        this.AllTheSelectedOptions[16].passed = true;
        this.index+=2;
        this.percentage += (90/this.questionsList.length +7);
        this.currentQuestion=this.questionsList[this.index];
    
      }
    }
    
    if(this.index <= 22){
      //go to final page
      localStorage.setItem('options', JSON.stringify(this.AllTheSelectedOptions));
     // this.router.navigateByUrl('/continue');  I need to change this route to whatever the end of the questions go
    }
    
}
}
