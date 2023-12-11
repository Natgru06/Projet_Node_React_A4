import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LessonEditFormComponent } from './lesson-edit-form/lesson-edit-form.component';
import { LessonSearchPageComponent } from './lesson-search-page/lesson-search-page.component';
import { MenuNavBarComponent } from './menu-nav-bar/menu-nav-bar.component';
import {FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { LessonListPageComponent } from './lesson-list-page/lesson-list-page.component';
import { LessonDetailPageComponent } from './lesson-detail-page/lesson-detail-page.component';
import { TestPage1Component } from './test-page1/test-page1.component';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { NumberStepsComponent } from './number-steps/number-steps.component';
import { NumberEditComponent } from './number-edit/number-edit.component';
import { NumberDisplayComponent } from './number-display/number-display.component';
import { HttpClientModule } from '@angular/common/http';
import { LearningPackageService } from './learning-package.service';

@NgModule({
  declarations: [
    AppComponent,
    LessonEditFormComponent,
    LessonSearchPageComponent,
    MenuNavBarComponent,
    LessonListPageComponent,
    LessonDetailPageComponent,
    TestPage1Component,
    NumberStepsComponent,
    NumberEditComponent,
    NumberDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [LearningPackageService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIconPacks(fas, far);
  }
}
