import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuizDetailDto } from '../dto/QuizDetailDtos.dto';
import { QuizEnums } from '..';

@Injectable({
  providedIn: 'root'
})
export class QuizDetailApiService {

  constructor(private httpClient: HttpClient) {  }

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

    private routeGetBySubject = (subject: string) => `api/QuizDetailApi/getSubject/${subject}`;
    public getBySubject(subject: string): Observable<QuizDetailDto[]> {
        const url = this.routeGetBySubject(subject);
        return this.httpClient.get(url, undefined) as Observable<any>;
    }

}
