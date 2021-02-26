import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Injectable({
  providedIn: 'root'
})
export class QuizOptionsScreenApiService {

  constructor() { }

  public quizOptionsScreen(){
    const config:FormlyFieldConfig[] =[
      {
        key:'option',
        type:'input',
        templateOptions:{
          label:'Option',
          appearance:'outline',
        }
      },
      {
        key:'isAnswer',
        type:'input',
        templateOptions:{
          label:'IsAnswer',
          appearance:'outline',
        }
      },
      {
        key:'quizDetailId',
        type:'input',
        templateOptions:{
          label:'QuizDetailId',
          appearance:'outline',
        }
      }
    ]
    return config;

  }
}
