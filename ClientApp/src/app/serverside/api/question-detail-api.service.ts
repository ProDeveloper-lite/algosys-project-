import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QuestionDetail } from '../dto/QuestionDetailDtos.dto';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class QuestionDetailApiService {

  constructor(private Http:HttpClient) { }

  private routeGetAll = () => `api/QuizOptionApi`;
    public getAll(): Observable<QuestionDetail[]> {
      const url = this.routeGetAll();
      return this.Http.get(url, undefined) as Observable<any>;
  }
  private routeGetById = (quizId: number) => `api/QuizDetailApi/${quizId}`;
    public getById(quizId: number): Observable<QuestionDetail> {
        const url = this.routeGetById(quizId);
        return this.Http.get(url, undefined) as Observable<any>;
    }
}
