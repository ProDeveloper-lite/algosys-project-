import { Component, OnInit } from '@angular/core';
import { QuizOptionApiService, QuizOptionsDtos } from '@module/serverside';
import { DataTableExtendedConfig } from '@module/shared';


@Component({
  selector: 'app-quiz-options',
  templateUrl: './quiz-options.component.html',
  styleUrls: ['./quiz-options.component.css']
})
export class QuizOptionsComponent implements OnInit {

  public quizOptions: QuizOptionsDtos.QuizOptions[] = [];

  public config :DataTableExtendedConfig = { titleColumn:[]};

  constructor(private _quizOptionServive: QuizOptionApiService) { }

  public ngOnInit(): void {
    this.config.titleColumn = ['id','option','answer','quizDetailId'],
    this._quizOptionServive.getAll()
      .subscribe(data => this.quizOptions = data);
      console.log(this.quizOptions);
  }
  
}


