import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {SubjectDetailDtos,SubjectDetailApiService} from '@module/serverside';

@Component({
  selector: 'app-exam-detail',
  templateUrl: './exam-detail.component.html',
  styleUrls: ['./exam-detail.component.css']
})
export class ExamDetailComponent implements OnInit {

  public state = {
    selectedSubject: undefined as number | undefined,
    subjectList: [] as SubjectDetailDtos.SubjectDetailDto[],
    subjectselect:false as boolean
  }
  
  constructor(private _subjectApiService: SubjectDetailApiService) { }

  public getBySubject() {
    console.log("Selected Subject is "+this.state.selectedSubject);
    this.state.subjectselect = true

  }

  ngOnInit(): void {
    this._getSubjects();
  }

  private _getSubjects() {
    this._subjectApiService
      .getAll()
      .subscribe(data => this.state.subjectList = data);
  }

}
