import { Component, OnInit, EventEmitter } from '@angular/core';
import { QuizDetailScreenApiService } from '../api-wrapper/quiz-detail-screen-api.service';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms'
import { DataTableCustomEvent, DataTableExtendedConfig } from '@module/shared';
import { QuizOptionApiService, QuizOptionsDtos } from '@module/serverside'

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.scss']
})
export class QuizDetailsComponent implements OnInit {
  public state = {
    tableConfig: {
      titleColumn: ['Id', 'Options', 'Answer', 'QuizDetailId'],
      eventFromTable: new EventEmitter<DataTableCustomEvent>()
    } as DataTableExtendedConfig,
    tableData: [] as QuizOptionsDtos.QuizOptions[],
    form: new FormGroup({}),
    model: {},
    options: {} as FormlyFormOptions,
    fields: [] as FormlyFieldConfig[]
  }

  constructor(
    private _screeApi: QuizDetailScreenApiService,
    private _QuizOptionsApi: QuizOptionApiService) {
    this.state.fields = _screeApi.getQuizDetailScreen();
  }

  public ngOnInit(): void {
    this._getQuizOptions();
  }
  private _getQuizOptions() {
    this._QuizOptionsApi.getAll()
      .subscribe(data => this.state.tableData = data);
    console.log(this.state.tableData)
    console.log("Quiz Options")
  }

  public onReset() {
    this.state.options.resetModel();
    console.log("Form Reset")
  }

  public onSubmit() {
    console.log(this.state.model);
    this.state.options.resetModel();
  }

  public disabled() {
    this.state.form.disabled
    console.log("Fields are disablred")
  }

}
