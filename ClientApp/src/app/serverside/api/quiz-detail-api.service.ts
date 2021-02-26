import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuizDetailDto,CreateQuizDetailDto } from '../dto/QuizDetailDtos.dto';

@Injectable({
  providedIn: 'root'
})
export class QuizDetailApiService {

  constructor(private httpClient: HttpClient) { }

  private routeGetAll = () => `api/QuizDetailApi`;
  public getAll(): Observable<QuizDetailDto[]> {
    const url = this.routeGetAll();
    return this.httpClient.get(url, undefined) as Observable<any>;
  }

  private routeGetById = (quizId: number) => `api/QuizDetailApi/${quizId}`;
  public getById(quizId: number): Observable<QuizDetailDto> {
    const url = this.routeGetById(quizId);
    return this.httpClient.get(url, undefined) as Observable<any>;
  }

  private routeGetBySubject = (subjectId: number) => `api/QuizDetailApi/getSubject/${subjectId}`;
  public getBySubject(subjectId: number): Observable<QuizDetailDto[]> {
    const url = this.routeGetBySubject(subjectId);
    return this.httpClient.get(url, undefined) as Observable<any>;
  }

  private routeCreate = () => `api/QuizDetailApi`;
  public create(dto: CreateQuizDetailDto): Observable<QuizDetailDto> {
    const url = this.routeCreate();
    return this.httpClient.put(url, dto, undefined) as Observable<any>;
  }

  private routeDelete = (QuizDetailId: number) => `api/QuizDetailApi/${QuizDetailId}`;
  public delete(QuizDetailId: number): Observable<void> {
    const url = this.routeDelete(QuizDetailId);
    return this.httpClient.post(url, QuizDetailId, undefined) as Observable<any>;
  }
}
