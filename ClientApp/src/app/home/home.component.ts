import { Component } from '@angular/core';
import {QuizDetailApiService,QuizDetailDtos } from '@module/serverside';
import { Complexcity,QuestionType } from '../serverside/dto/QuizEnums.dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public quizzes: QuizDetailDtos.QuizDetailDto[];

  constructor(private service: QuizDetailApiService) {  }

  public getData(){
    this.service.getAll().subscribe(result => {
        this.quizzes = result;
        console.log(result);
      }, error => console.error(error));
  }
}


