import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { QuizDetailApiService } from './api/quiz-detail-api.service';
import { QuizOptionApiService } from './api/quiz-option-api.service';
import { QuestionDetailApiService } from './api/question-detail-api.service'

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
      QuizDetailApiService,
      QuizOptionApiService,
      QuestionDetailApiService
    ]
})

export class ServersideModule { }