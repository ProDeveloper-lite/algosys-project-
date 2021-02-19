import { Component, EventEmitter, OnInit } from '@angular/core';
import { QuizDetailApiService, QuizDetailDtos, SubjectDetailApiService, SubjectDetailDtos } from "@module/serverside";
import { DataTableCustomEvent, DataTableExtendedConfig, ToastrService } from '@module/shared';
import { QuizRoutingService } from '../routing/quiz-routing.service';

@Component({
  selector: 'app-quiz-detail-list',
  templateUrl: './quiz-detail-list.component.html',
  styleUrls: ['./quiz-detail-list.component.scss']
})
export class QuizDetailListComponent implements OnInit {
  public state = {
    tableConfig: {
      titleColumn: ['complexcity', 'topic', 'type', 'questionText', 'isActive'],
      eventFromTable: new EventEmitter<DataTableCustomEvent>()
    } as DataTableExtendedConfig,
    tableData: [] as QuizDetailDtos.QuizDetailDto[],
    selectedSubject: undefined as number | undefined,
    subjectList: [] as SubjectDetailDtos.SubjectDetailDto[]
  };

  constructor(
    private _service: QuizDetailApiService,
    private _toastr: ToastrService,
    private _routingService: QuizRoutingService,
    private _subjectApiService: SubjectDetailApiService
  ) {
    this.state.tableConfig.eventFromTable
      .subscribe((data: DataTableCustomEvent) => {
        this._onRowActionClick(data);
      });
  }

  public ngOnInit(): void {
    this._getSubjects();
  }

  public getBySubject() {
    this._service
      .getBySubject(this.state.selectedSubject)
      .subscribe(data => {
        console.log(data);
        this.state.tableData = data;
      })
  }

  private _getSubjects() {
    this._subjectApiService
      .getAll()
      .subscribe(data => this.state.subjectList = data);
  }

  private _onRowActionClick(data: DataTableCustomEvent) {
    if (!data.payload) {
      this._toastr.codeError('Program error: please add payload to event');
      return;
    }
    switch (data.action) {
      case 'View':
        if (!data.payload) { return; }
        this._routingService.showQuizDetail(data.payload.id);
        break;
      default:
        this._toastr.codeError(`Unhandled action : ${data.action}`);
    }
  }
}
