import { Component, OnDestroy, OnInit } from '@angular/core';
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";
import {UserSettingsService} from "../user-settings.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


export interface LessonPackage {
  title: string;
  description: string;
  category: string;
  level: number;
  prerequisite: string[];
  tags: string[];
  copyright: string;
}
@Component({
  selector: 'app-lesson-edit-form',
  templateUrl: './lesson-edit-form.component.html',
  styleUrls: ['./lesson-edit-form.component.scss']
})

export class LessonEditFormComponent implements OnInit,OnDestroy{
  faHome = faHome;

  ngOnInit(): void {
    console.log("LessonEditFormComponent.ngOnInit()");
  }
  ngOnDestroy(): void {
    console.log("LessonEditFormComponent.ngOnDestroy()");
  }
  lessonForm: FormGroup;
  constructor(private router: Router, private userSettingsService:
    UserSettingsService,formBuilder: FormBuilder) {
    this.lessonForm = formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      level: ['', Validators.required],
      prerequisite: ['', Validators.required],
      tags: ['', Validators.required],
      copyright: ['', Validators.required]
    });

  }
  onClickSubmit() {
    if (this.lessonForm.valid) {
      const formData = this.lessonForm.value;
      console.log('Form data submitted:', formData);
    } else {
      console.log('Form is invalid. Please check the required fields.');
    }
  }

}
