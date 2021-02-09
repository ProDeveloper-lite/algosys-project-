import { Component, EventEmitter, OnInit } from '@angular/core';
import { QuizEnums, QuizDetailApiService, QuizDetailDtos } from "@module/serverside";
import { DataTableCustomEvent, DataTableExtendedConfig, ToastrService } from '@module/shared';
import { tap } from 'rxjs/operators';
import { QuizRoutingService } from '../routing/quiz-routing.service';

@Component({
  selector: 'app-quiz-detail-list',
  templateUrl: './quiz-detail-list.component.html',
  styleUrls: ['./quiz-detail-list.component.scss']
})
export class QuizDetailListComponent {
  public state = {
    tableConfig: {
      titleColumn: ['subject', 'complexcity', 'topic', 'isActive'],
      eventFromTable: new EventEmitter<DataTableCustomEvent>()
    } as DataTableExtendedConfig,
    tableData: [] as QuizDetailDtos.QuizDetailDto[],
    selectedSubject: undefined as QuizEnums.Subject | undefined,
    subjectList: Object.values(QuizEnums.Subject) as QuizEnums.Subject[]
  };

  constructor(
    private _service: QuizDetailApiService,
    private _toastr: ToastrService,
    private _routingService: QuizRoutingService) {

    this.state.tableConfig.eventFromTable
      .subscribe((data: DataTableCustomEvent) => {
        this._onRowActionClick(data);
      });

    //this.state.tableConfig.eventFromTable.pipe(tap((data: DataTableCustomEvent) => this._onRowActionClick(data))).subscribe();
  }

  public getBySubject() {
    this._service
      .getBySubject(this.state.selectedSubject.toString())
      .subscribe(data => {
        this.state.tableData = data;
      })
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
