import { Component, OnInit, Input } from '@angular/core';
import { QuizDataService } from '../quiz-data.service';
@Component({
  selector: 'app-quiz-summary',
  templateUrl: './quiz-summary.component.html',
  styleUrls: ['./quiz-summary.component.scss']
})
export class QuizSummaryComponent implements OnInit{
  @Input() userResponses: any[] = [];

  constructor(public quizDataService: QuizDataService) { }

  ngOnInit(): void {
    console.log('User Responses in Quiz Summary:', this.quizDataService.userResponses);
  }

}
