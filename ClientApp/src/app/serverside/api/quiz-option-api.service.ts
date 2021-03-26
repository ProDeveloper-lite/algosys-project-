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
  public routeDeleteOption = (optionId: number) => `api/QuizOptionsApi/${optionId}`;
  public delete(optionId: number): Observable<void> {
    const url = this.routeDeleteOption(optionId);
    return this.http.post(url, optionId, undefined) as Observable<any>;
  }
}
