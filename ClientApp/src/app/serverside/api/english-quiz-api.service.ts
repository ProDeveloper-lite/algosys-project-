import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnglishQuizDto } from '../dto/englishQuizDtos.dto';

@Injectable({
  providedIn: 'root'
})
export class EnglishQuizApiService {

  constructor(private httpClient: HttpClient) {  }

  private routeGetAll = () => `api/EnglishQuizApi`;
    public getAll(): Observable<EnglishQuizDto[]> {
        const url = this.routeGetAll();
        return this.httpClient.get(url, undefined) as Observable<any>;
    }
}
