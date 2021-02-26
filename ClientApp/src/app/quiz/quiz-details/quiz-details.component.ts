import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { QuizDetailScreenApiService } from "../api-wrapper/quiz-detail-screen-api.service";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";
import { FormGroup } from "@angular/forms";
import { tap } from "rxjs/operators";
import {QuizDetailApiService} from '@module/serverside';

@Component({
  selector: "app-quiz-details",
  templateUrl: "./quiz-details.component.html",
  styleUrls: ["./quiz-details.component.scss"],
})
export class QuizDetailsComponent implements OnInit {
  public state = {
    // TODO : change variable names 
    quizDetailForm: new FormGroup({}),
    quizDetailModel: {},
    quizDetailOptions: {} as FormlyFormOptions,
    fields: [] as FormlyFieldConfig[],
    quizDetailId: undefined as number | undefined,
  };

  constructor(
    private _screeApi: QuizDetailScreenApiService,
    private _route: ActivatedRoute,
    private _apiService:QuizDetailApiService,
  ) {}

  public ngOnInit(): void {
    this._route.paramMap
      .pipe(tap((params) => this._setQuizDetailId(params.get("id"))))
      .subscribe();

    this.state.fields = this._screeApi.getQuizDetailScreen();
  }

  public _setQuizDetailId(id: string | null): void {
    let quizDetailId = parseInt(id || "0", 10);
    if (isNaN(quizDetailId as any)) {
      quizDetailId = 0;
    }
    this.state.quizDetailId = quizDetailId || undefined;
    if (this.state.quizDetailId && this.state.quizDetailId !== 0) {
      this._getById(this.state.quizDetailId);
    } else {
      this.onAddClick();
    }
  }

  public _getById(quizDetailId: number) {
    this._apiService
      .getById(quizDetailId)
      .subscribe((data) => (this.state.quizDetailModel = data));
  }

  public onAddClick() { 
      
    // TODO : anjali: implement this
  }

  public onReset() {
    this.state.quizDetailForm.reset();
  }

  public onSubmit() {
    //TODO anjali : use create method from apiService
    this._apiService.routeCreate;
    this.state.quizDetailOptions.resetModel();
  
  }

  //TODO anjali: update/ delete 

  public disabled() {
    this.state.quizDetailForm.disable();
    }


  public delete(){
    this._apiService.routeDelete;

  }  

}
