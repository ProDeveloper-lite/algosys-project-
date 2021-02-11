import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SubjectDetailDto } from "../dto/SubjectDetailDtos.dto";


@Injectable({
  providedIn: 'root'
})
export class SubjectDetailApiService {
  constructor(private httpClient: HttpClient) { }

  private routeGetAll = () => `api/SubjectDetailApi`;
  public getAll(): Observable<SubjectDetailDto[]> {
    const url = this.routeGetAll();
    return this.httpClient.get(url, undefined) as Observable<any>;
  }
}
