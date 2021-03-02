import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { QuizOptionApiService, QuizOptionsDtos } from '@module/serverside';
import { DataTableExtendedConfig } from '@module/shared';
import { AddQuizOptionsComponent } from '../add-quiz-options/add-quiz-options.component';


@Component({
  selector: 'app-quiz-options-list',
  templateUrl: './quiz-options-list.component.html',
  styleUrls: ['./quiz-options-list.component.scss']
})
export class QuizOptionsListComponent implements OnInit {

  public quizOptions: QuizOptionsDtos.QuizOptionsDto[] = [];

  public config: DataTableExtendedConfig = { titleColumn: [] };

  constructor(
    private _quizOptionServive: QuizOptionApiService,
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.config.titleColumn = ['id', 'option', 'isAnswer', 'quizDetailId'],
      this._quizOptionServive.getAll()
        .subscribe(data => this.quizOptions = data);
    console.log(this.quizOptions);
  }

  public OnAddClick() {
    const dialogConfig = new MatDialogConfig();
    const dialogref = this._dialog.open(AddQuizOptionsComponent, {
      width: "650px",
      height: "400px"
    })
    dialogref.disableClose = true;


  }
}
