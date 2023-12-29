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
    this.userResponses = this.quizDataService.userResponses;
  }
  calculateCorrectAnswers(): number {
    // Implement logic to calculate the number of correct answers
    // Example: Assuming the correct answers are stored in your userResponses
    return this.userResponses.filter(response => response.userAnswer === response.correctAnswer).length;
  }
  isAnswerCorrect(response: any): boolean {
    return response.userAnswer === response.correctAnswer;
  }

  calculateScore(): number {
    // Implement logic to calculate the score as a percentage
    // Example: Assuming each question carries equal weight
    const totalQuestions = this.userResponses.length;
    const correctAnswers = this.calculateCorrectAnswers();
    return (correctAnswers / totalQuestions) * 100;
  }

}
