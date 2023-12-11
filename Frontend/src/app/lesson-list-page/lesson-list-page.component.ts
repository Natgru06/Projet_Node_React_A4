import { Component } from '@angular/core';
import {UserSettingsService} from "../user-settings.service";
import {LearningPackageService} from "../learning-package.service";

@Component({
  selector: 'app-lesson-list-page',
  templateUrl: './lesson-list-page.component.html',
  styleUrls: ['./lesson-list-page.component.scss']
})
export class LessonListPageComponent {
  learningPackage!: any[];
  constructor(private userSettingsService: UserSettingsService,private learningPackageService: LearningPackageService) {
    console.log("get lastLessonId:", userSettingsService.lastLessonId);
  }
  getLearningPackage() {
    this.learningPackageService.getLearningPackage().subscribe((data) => {
      this.learningPackage = data;
      console.log('GET request successful:', data);
    },
      (error) => {
        console.error('Error in GET request:', error);
      }
    );
  }

}
