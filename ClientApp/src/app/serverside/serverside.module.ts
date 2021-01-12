import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { QuizDetailApiService } from './api/quiz-detail-api.service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
      QuizDetailApiService,
    ]
})

export class ServersideModule { }