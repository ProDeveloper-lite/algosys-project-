import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ListItem } from "../dto/ListType.dto";
import { CreateSubjectDetailDto, SubjectDetailDto } from '../dto/SubjectDetailDtos.dto';

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

  private routeGetAllForList = () => `api/SubjectDetailApi/list`;
  public getAllForList(): Observable<ListItem[]> {
    const url = this.routeGetAllForList();
    return this.httpClient.get(url, undefined) as Observable<any>;
  }

  private routeCreate = () => `api/SubjectDetailApi`;
  public create(dto: CreateSubjectDetailDto): Observable<ListItem> {
    const url = this.routeCreate();
    return this.httpClient.put(url, dto, undefined) as Observable<any>;
  }

  private routeDelete = (subjectId: number) => `api/SubjectDetailApi/${subjectId}`;
  public delete(subjectId: number): Observable<void> {
    const url = this.routeDelete(subjectId);
    return this.httpClient.post(url, subjectId, undefined) as Observable<any>;
  }
}
