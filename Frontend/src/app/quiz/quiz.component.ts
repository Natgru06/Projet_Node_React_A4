import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { QuizDataService } from '../quiz-data.service';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit{
  questions: any[] = [];
  currentQuestionIndex: number = 1;
  question: any;
  userResponses: any[] = [];
  selectedAnswer: string = '';

  constructor(private router: Router, private http: HttpClient,private quizDataService: QuizDataService) { }

  ngOnInit(): void {
    this.getQuestions();
  }
  getQuestions() {
    this.http.get<any[]>('http://localhost:3000/questions')
      .subscribe(
        questionsData => {
          this.shuffleArray(questionsData);
          this.questions = questionsData.slice(0, 20);
          this.loadQuestion();
        },
        error => {
          console.error('Error fetching questions:', error);
        }
      );
  }

  loadQuestion() {
    if (this.currentQuestionIndex <= this.questions.length) {
      this.question = this.questions[this.currentQuestionIndex - 1];
    } else {
      console.log('Quiz completed');
      // Handle quiz completion, e.g., display a summary or navigate to another component
      console.log('User Responses:', this.quizDataService.userResponses);
      // Navigate to quiz summary
      this.router.navigate(['quiz-summary']);
    }
  }

  nextQuestion() {
    if (this.selectedAnswer) {
      // Store user response for the current question
      this.quizDataService.userResponses.push({
        question: this.question.question,
        userAnswer: this.selectedAnswer,
        correctAnswer: this.getCorrectAnswer(this.question)
      });

      // Log user responses to the console
      console.log('User Responses:', this.quizDataService.userResponses);

      // Move to the next question
      this.currentQuestionIndex++;
      this.loadQuestion();

      // Reset selectedAnswer for the next question
      this.selectedAnswer = '';
    }else {
      // Optionally, you can display a message to the user to select an answer
      console.log('Please select an answer before moving to the next question.');
    }
  }


  private shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  getCorrectAnswer(question: any): string {
    return question.correctAnswer;
  }

}
