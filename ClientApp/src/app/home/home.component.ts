import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public englishQuiz: EnglishQuiz[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<EnglishQuiz[]>(baseUrl + 'englishquiz').subscribe(result => {
      this.englishQuiz = result;
    }, error => console.error(error));
  }
}

interface EnglishQuiz {
 id:number;
 question:string;
 answer:string;
}
