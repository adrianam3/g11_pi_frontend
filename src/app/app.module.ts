import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routedComponents, AppRoutingModule } from './app-routing.module';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { ChatbotIaComponent } from './chatbot-ia/chatbot-ia.component';
import { InicioComponent } from './inicio/inicio.component';



@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    CustomerSupportComponent,
    ChatbotIaComponent,
    InicioComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
