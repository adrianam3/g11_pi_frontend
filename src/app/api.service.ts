import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { filter, from, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const APIKEY = environment.apiKey;

declare var $:any;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions'; // URL de la API
  private apiKey = ''// Reemplaza esto con tu clave real de API

  constructor(private http: HttpClient) { }

  askQuestion(question: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    const body = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant."
        },
        {
          role: "user",
          content: question
        }
      ]
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}