import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { QuizComponent } from './quiz/quiz.component';
import {HomeComponent} from "./home/home.component";
import { QuizSummaryComponent } from './quiz-summary/quiz-summary.component';
import { KnowledgeSearchComponent } from './knowledge-search/knowledge-search.component';
import { GridComponent } from './grid/grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { Grid } from 'ag-grid-community';
@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    HomeComponent,
    QuizSummaryComponent,
    KnowledgeSearchComponent,
    GridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule,
    FontAwesomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIconPacks(fas, far);
  }
}
