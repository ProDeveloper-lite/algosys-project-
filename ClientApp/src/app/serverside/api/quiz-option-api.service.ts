import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuizOptions } from '../dto/QuizOptionsDtos.dto';

@Injectable({
  providedIn: 'root'
})
export class QuizOptionApiService {

  constructor(private http:HttpClient) { }

    private routeGetAll = () => `api/QuizOptionApi`;
    public getAll(): Observable<QuizOptions[]> {
      const url = this.routeGetAll();
      return this.http.get(url, undefined) as Observable<any>;
  }
  private routeGetById = (quizId: number) => `api/QuizDetailApi/${quizId}`;
    public getById(quizId: number): Observable<QuizOptions> {
        const url = this.routeGetById(quizId);
        return this.http.get(url, undefined) as Observable<any>;
    }
}
