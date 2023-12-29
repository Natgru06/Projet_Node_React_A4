import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizSummaryComponent } from './quiz-summary/quiz-summary.component';
import{KnowledgeSearchComponent} from "./knowledge-search/knowledge-search.component";
import {GridComponent} from "./grid/grid.component";

const routes: Routes = [
  {path: '',component:HomeComponent},
  { path: 'quiz', component: QuizComponent },
  { path: 'quiz-summary', component: QuizSummaryComponent },
  { path: 'search', component: KnowledgeSearchComponent },
  {path: 'grid', component:GridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
