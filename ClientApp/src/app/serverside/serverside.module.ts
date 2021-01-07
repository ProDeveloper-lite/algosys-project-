import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EnglishQuizApiService } from './api/english-quiz-api.service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
      EnglishQuizApiService,
    ]
})

export class ServersideModule { }