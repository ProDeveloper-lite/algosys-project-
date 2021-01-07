import { Component } from '@angular/core';
import { EnglishQuizApiService,EnglishQuizDtos } from '@module/serverside';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public englishQuiz: EnglishQuizDtos.EnglishQuizDto[];

  constructor(private service: EnglishQuizApiService) {  }

  public getData(){
    this.service
    .getAll()
    .subscribe(result => {
        this.englishQuiz = result;
        console.log(result);
      }, error => console.error(error));
  }
}


