import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
  private apiKey = '' // Asegúrate de reemplazar esto con tu clave real de API
  private endpoint = 'https://api.openai.com/v1/chat/completions'; // Asegúrate de usar el endpoint correcto para tu modelo


  constructor(private http: HttpClient) { }

  testApiKey() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    const data = {
      model: 'gpt-3.5-turbo',
      // prompt: "Hello, world!",
      max_tokens: 5,
      messages: [
        {
            role: "system",
            content: "You are a helpful assistant."
        },
        {
            role: "user",
            content: "Hello, who won the world series in 2020?"
        }
    ]
      
    };

    return this.http.post(this.endpoint, data, { headers: headers });
  }
}