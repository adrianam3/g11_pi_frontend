import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { OpenaiService } from '../service/openai.service';

@Component({
  selector: 'app-chatbot-ia',
  templateUrl: './chatbot-ia.component.html',
  styleUrls: ['./chatbot-ia.component.css']
})
export class ChatbotIaComponent implements OnInit {

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  question: string = '';
  answer: string = '';

  constructor(private apiService: ApiService) { }

  askQuestion() {
    this.apiService.askQuestion(this.question).subscribe({
      next: (response) => {
        console.log(response);
        this.answer = response.choices[0].message.content;
      },
      error: (err) => console.error('Error:', err),
      complete: () => console.log('Completed')
    });
  }
}