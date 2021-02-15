import { Component, OnInit } from '@angular/core';
import { SubjectDetailScreenApiService } from '../api-wrapper/subject-detail-screen-api.service';
import { FormGroup } from '@angular/forms'
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core'

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrls: ['./subject-detail.component.scss']
})
export class SubjectDetailComponent implements OnInit {

  public state = {
    form : new FormGroup({}),
    model: {},
    options: {} as FormlyFormOptions,
     fields: [] as FormlyFieldConfig[]
  }

  constructor( private _subjectScreenApi : SubjectDetailScreenApiService) {
    this.state.fields = _subjectScreenApi.getsujectDetailScreen();
   }

  ngOnInit(): void {
  }

  public onReset() {
    this.state.options.resetModel();
    console.log("Form Reset")
  }

  public onSubmit() {
    console.log(this.state.model)
    alert("Added Succesfully");
    this.state.options.resetModel();
  }
  
  

}
