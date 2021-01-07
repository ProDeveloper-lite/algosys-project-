import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public englishQuiz: EnglishQuiz;

  constructor(private _http: HttpClient, @Inject('BASE_URL')private baseUrl: string) {  }

  public getData(){
    this._http.get<EnglishQuiz>(this.baseUrl + 'weatherforecast').subscribe(result => {
      this.englishQuiz = result;
      console.log(result);
    }, error => console.error(error));
  }
}

interface EnglishQuiz {
 id:number;
 question:string;
 answer:string;
}
