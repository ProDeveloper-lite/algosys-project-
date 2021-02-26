import { Component, OnInit } from "@angular/core";
import {
  QuizDetailApiService,
  QuizDetailDtos,
  SubjectDetailApiService,
  SubjectDetailDtos,
} from "@module/serverside";
import {  ToastrService,} from "@module/shared";
import { QuizRoutingService } from "../routing/quiz-routing.service";

@Component({
  selector: "app-quiz-detail-list",
  templateUrl: "./quiz-detail-list.component.html",
  styleUrls: ["./quiz-detail-list.component.scss"],
})
export class QuizDetailListComponent implements OnInit {
  public state = {
      titleColumn: [
        "action",
        "complexcity",
        "topic",
        "type",
        "questionText",
        "isActive",
      ],
    tableData: [] as QuizDetailDtos.QuizDetailDto[],
    selectedSubject: undefined as number | undefined,
    subjectList: [] as SubjectDetailDtos.SubjectDetailDto[],
  };

  constructor(
    private _service: QuizDetailApiService,
    private _toastr: ToastrService,
    private _routingService: QuizRoutingService,
    private _subjectApiService: SubjectDetailApiService
  ) {}

  public ngOnInit(): void {
    this._getSubjects();
  }

  public getBySubject() {
    this._service
    .getBySubject(this.state.selectedSubject)
    .subscribe((data) => this.state.tableData = data);
  }

  private _getSubjects() {
    this._subjectApiService
      .getAll()
      .subscribe((data) => (this.state.subjectList = data));
  }

  public onDeleteRowClick(row: QuizDetailDtos.QuizDetailDto) {}

  public onViewRowClick(row: QuizDetailDtos.QuizDetailDto) {
    this._routingService.showQuizDetail(row.id);
  }
}
