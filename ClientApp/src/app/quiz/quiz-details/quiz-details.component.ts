import { Component, OnInit } from '@angular/core';
import { QuizDetailScreenApiService } from '../api-wrapper/quiz-detail-screen-api.service';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.scss']
})
export class QuizDetailsComponent implements OnInit {
  public state = {
    form : new FormGroup({}),
    model: {},
    options: {
      formState: {
        awesomeIsForced: false
      } as FormlyFormOptions
    },
     disable : false,
     fields: [] as FormlyFieldConfig[]
  }

  
  constructor(private _screeApi: QuizDetailScreenApiService) {
    this.state.fields = _screeApi.getQuizDetailScreen();
  }

  public ngOnInit(): void {
  }

  public onReset() {
    // this.state.options.resetModel();
    console.log("Form Reset")
  }

  public onSubmit() {
    console.log(this.state.model)
    alert("Added Succesfully");
    // this.state.options.resetModel();
  }

  public disabled() {
    this.state.disable = true;
    console.log("Fields are disablred")
  }
}
