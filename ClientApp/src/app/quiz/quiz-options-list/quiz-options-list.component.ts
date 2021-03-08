import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { QuizOptionApiService, QuizOptionsDtos } from '@module/serverside';
import { ToastrService } from '@module/shared';
import { AddQuizOptionsComponent } from '../add-quiz-options/add-quiz-options.component';


@Component({
  selector: 'app-quiz-options-list',
  templateUrl: './quiz-options-list.component.html',
  styleUrls: ['./quiz-options-list.component.scss']
})
export class QuizOptionsListComponent implements OnInit {
  public state = {
    titleColumn: [
      "action",
      "option",
      "isAnswer"
    ],
    tableData: [] as QuizOptionsDtos.CreateQuizOptions[],
  };

  // public quizOptions: QuizOptionsDtos.QuizOptionsDto[] = [];

  // public config: DataTableExtendedConfig = { titleColumn: [] };

  constructor(
    private _quizOptionServive: QuizOptionApiService,
    private _dialog: MatDialog,
    private _toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    // this.config.titleColumn = ['id', 'option', 'isAnswer', 'quizDetailId'],
    //   this._quizOptionServive.getAll()
    //     .subscribe(data => this.quizOptions = data);
    // console.log(this.quizOptions);
    this.getQuizOptions();

  }
  public getQuizOptions() {
    this._quizOptionServive.getAll().subscribe(data => this.state.tableData = data)

  }
  public onDeleteRowClick(dto: QuizOptionsDtos.QuizOptionsDto) {
    if (confirm('Are u sure to delete this record permenently ?'))
      this._quizOptionServive.delete(dto.id);
    this._toastrService.success("Deleted Succesfully");
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
