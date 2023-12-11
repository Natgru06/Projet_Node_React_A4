import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LessonEditFormComponent} from "./lesson-edit-form/lesson-edit-form.component";
import {LessonDetailPageComponent} from "./lesson-detail-page/lesson-detail-page.component";
import {LessonListPageComponent} from "./lesson-list-page/lesson-list-page.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: '',component:HomeComponent},
  { path : 'lesson-edit-form', component:LessonEditFormComponent},
  { path:'lesson/:id', component: LessonDetailPageComponent },
  { path:'lesson-list-page', component:LessonListPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
