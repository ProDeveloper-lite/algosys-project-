import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { from } from "rxjs";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";
import { QuizOptionsScreenApiService } from "../api-wrapper/quiz-options-screen-api.service";
import { QuizOptionApiService, QuizOptionsDtos } from "@module/serverside";

@Component({
  selector: "app-add-quiz-options",
  templateUrl: "./add-quiz-options.component.html",
  styleUrls: ["./add-quiz-options.component.scss"],
})
export class AddQuizOptionsComponent implements OnInit {
  public state = {
    quizOptionsform: new FormGroup({}),
    quizOptionsoptions: {} as FormlyFormOptions,
    quizOptionsmodel: undefined as
      | QuizOptionsDtos.CreateQuizOptions
      | undefined,
    quizOptionsfields: [] as FormlyFieldConfig[],
  };

  constructor(
    private _quizOptionsSereenApi: QuizOptionsScreenApiService,
    private _quizOptionsApi: QuizOptionApiService
  ) {}

  ngOnInit(): void {
    this.state.quizOptionsfields = this._quizOptionsSereenApi.quizOptionsScreen();
  }
  public OnSubmit() {}
}
