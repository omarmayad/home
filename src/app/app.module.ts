import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { QuestionOneComponent } from './components/index/question-one/question-one.component';
import { QuestionTwoComponent } from './components/index/question-two/question-two.component';
import { QuestionThreeComponent } from './components/index/question-three/question-three.component';
import { QuestionFourComponent } from './components/index/question-four/question-four.component';
import { QuestionFiveComponent } from './components/index/question-five/question-five.component';
import { QuestionSixComponent } from './components/index/question-six/question-six.component';
import { QuestionSevenComponent } from './components/index/question-seven/question-seven.component';
import { QuestionEightComponent } from './components/index/question-eight/question-eight.component';
import { QuestionNineComponent } from './components/index/question-nine/question-nine.component';
import { QuestionTenComponent } from './components/index/question-ten/question-ten.component';
import { QuestionElevenComponent } from './components/index/question-eleven/question-eleven.component';
import { QuestionTwelveComponent } from './components/index/question-twelve/question-twelve.component';
import { QuestionThirteenComponent } from './components/index/question-thirteen/question-thirteen.component';
import { QuestionFourteenComponent } from './components/index/question-fourteen/question-fourteen.component';
import { QuestionFifteenComponent } from './components/index/question-fifteen/question-fifteen.component';
import { QuestionSixteenComponent } from './components/index/question-sixteen/question-sixteen.component';
import { QuestionSeventeenComponent } from './components/index/question-seventeen/question-seventeen.component';
import { QuestionEighteenComponent } from './components/index/question-eighteen/question-eighteen.component';
import { QuestionNineteenComponent } from './components/index/question-nineteen/question-nineteen.component';
import { QuestionTweentyComponent } from './components/index/question-tweenty/question-tweenty.component';
import { QuestionTweentyoneComponent } from './components/index/question-tweentyone/question-tweentyone.component';
import { PolicyComponent } from './components/policy/policy.component';
import { ThankYouComponent } from './components/index/thank-you/thank-you.component';

const appRoutes: Routes = [
  { path: 'index', component: IndexComponent },
  {path: 'policy' , component: PolicyComponent},
  {path:'question-eleven', component: QuestionElevenComponent},
  { path: '**', component: IndexComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    QuestionOneComponent,
    QuestionTwoComponent,
    QuestionThreeComponent,
    QuestionFourComponent,
    QuestionFiveComponent,
    QuestionSixComponent,
    QuestionSevenComponent,
    QuestionEightComponent,
    QuestionNineComponent,
    QuestionTenComponent,
    QuestionElevenComponent,
    QuestionTwelveComponent,
    QuestionThirteenComponent,
    QuestionFourteenComponent,
    QuestionFifteenComponent,
    QuestionSixteenComponent,
    QuestionSeventeenComponent,
    QuestionEighteenComponent,
    QuestionNineteenComponent,
    QuestionTweentyComponent,
    QuestionTweentyoneComponent,
    PolicyComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
