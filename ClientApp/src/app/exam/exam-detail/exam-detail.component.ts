import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { SubjectDetailDtos, SubjectDetailApiService } from "@module/serverside";
import { ExamScreenComponent } from '../exam-screen/exam-screen.component'
@Component({
  selector: "app-exam-detail",
  templateUrl: "./exam-detail.component.html",
  styleUrls: ["./exam-detail.component.scss"],
})
export class ExamDetailComponent implements OnInit {
  public state = {
    subjectList: [] as SubjectDetailDtos.SubjectDetailDto[],
    selectedSubject: undefined as ( number | undefined),
    subjectselect: false,
  };

  constructor(
    private _subjectApi: SubjectDetailApiService,
    public _dialog:MatDialog
    ) {}
  public ngOnInit(): void {
    this._getSubjectList();
  }

  public getBySubject() {
    console.log(this.state.selectedSubject);
    this.state.subjectselect = true;
  }

  private _getSubjectList() {
    this._subjectApi
      .getAll()
      .subscribe((data) => (this.state.subjectList = data));
  }

  public startExam() {
    const dialogref = this._dialog.open(ExamScreenComponent,{
      width:'800px',
      height:'800px'
    })
  }
}
