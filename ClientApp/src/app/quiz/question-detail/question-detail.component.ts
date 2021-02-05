import { Component, OnInit } from '@angular/core';
import {QuestionDetailApiService, QuestionDetailDtos} from '@module/serverside';
import {DataTableExtendedConfig} from '@module/shared';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {
  public Question:QuestionDetailDtos.QuestionDetail[] = [];

  public config :DataTableExtendedConfig = { titleColumn:[]};

  constructor(private _questiondetalservice:QuestionDetailApiService) { }

  ngOnInit(): void {
    this.config.titleColumn = ['Id','type','questionText','quizDetailId','quizDetail']
  }
  public getdata()
  {
    this._questiondetalservice.getAll().subscribe(data =>this.Question = data);
  }

}
