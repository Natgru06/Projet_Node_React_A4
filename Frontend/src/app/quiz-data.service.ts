import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizDataService {
  userResponses: any[] = [];
  constructor() { }
}
