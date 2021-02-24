import { Component, OnInit } from '@angular/core';
import { QuizOptionApiService, QuizOptionsDtos } from '@module/serverside';
import { DataTableExtendedConfig } from '@module/shared';

@Component({
  selector: 'app-quiz-options-list',
  templateUrl: './quiz-options-list.component.html',
  styleUrls: ['./quiz-options-list.component.scss']
})
export class QuizOptionsListComponent implements OnInit {

  public quizOptions: QuizOptionsDtos.QuizOptionsDto[] = [];

  public config :DataTableExtendedConfig = { titleColumn:[]};

  constructor(private _quizOptionServive: QuizOptionApiService) { }

  ngOnInit(): void {
    this.config.titleColumn = ['id','option','isAnswer','quizDetailId'],
    this._quizOptionServive.getAll()
      .subscribe(data => this.quizOptions = data);
      console.log(this.quizOptions);
  }

}
