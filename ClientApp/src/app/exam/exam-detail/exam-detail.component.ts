import { Component, OnInit } from "@angular/core";
import { SubjectDetailDtos, SubjectDetailApiService } from "@module/serverside";
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

  constructor(private _subjectApi: SubjectDetailApiService) {}
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

  public startExam() {}
}
