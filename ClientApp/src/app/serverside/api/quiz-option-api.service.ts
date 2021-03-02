import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateQuizOptions, QuizOptionsDto } from '../dto/QuizOptionsDtos.dto';

@Injectable({
  providedIn: 'root'
})
export class QuizOptionApiService {

  constructor(private http: HttpClient) { }

  private routeGetAll = () => `api/QuizOptionApi`;
  public getAll(): Observable<QuizOptionsDto[]> {
    const url = this.routeGetAll();
    return this.http.get(url, undefined) as Observable<any>;
  }
  private routeGetById = (quizId: number) => `api/QuizDetailApi/${quizId}`;
  public getById(quizId: number): Observable<QuizOptionsDto> {
    const url = this.routeGetById(quizId);
    return this.http.get(url, undefined) as Observable<any>;
  }
  private routeAddOptions = () => `api/QuizOptionsApi`;
  public AddOptions(dto: CreateQuizOptions): Observable<void> {
    const url = this.routeAddOptions();
    return this.http.post(url, dto, undefined) as Observable<any>
  }
  public routeDelete = (QuizOptionsId: number) => `api/QuizOptionsApi/${QuizOptionsId}`;
  public delete(QuizOptionsId: number): Observable<void> {
    const url = this.routeDelete(QuizOptionsId);
    return this.http.post(url, QuizOptionsId, undefined) as Observable<any>;
  }
}
