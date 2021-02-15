import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import {QuizEnums} from '@module/serverside'

@Injectable({
  providedIn: 'root'
})
export class QuizDetailScreenApiService {

public state={
  options: Object.values(QuizEnums.QuestionType) as QuizEnums.QuestionType[]
}

  constructor( ) {}

  public getQuizDetailScreen() {
    const config: FormlyFieldConfig[] = [
      {
        key: 'id',
        type: 'input',
        templateOptions: {
          type: 'number',
          label: 'Id',
          required: true,
          appearance: 'outline',
          disabled: true
        }
      },
      {
        key: 'subjectId',
        type: 'input',
        templateOptions:{
          type: 'number',
          label: 'SubjectId',
          required: true,
          appearance: 'outline',
          
        }
      },
      {
        key: 'complexcity',
        type: 'input',
        templateOptions: {
          type: 'number',
          label: 'Complexcity',
          required: true,
          appearance: 'outline'
        }
      },
      {
        key: 'topic',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Topic',
          required: true,
          appearance: 'outline'
        },
      },
      {
        key: 'correctAnswerId',
        type:'input',
        templateOptions:{
          type:'text',
          label: 'Correct Answer Id',
          required: true,
          appearance: 'outline',
        }
      },
      {
        key: 'type',
        type:'input',
        templateOptions:{
          type:'text',
          label: 'Question Type',
          required: true,
          appearance: 'outline',
          options : this.state.options
        }
      },
      {
        key: 'questionText',
        type:'input',
        templateOptions:{
          type:'text',
          label: 'Question text',
          required: true,
          appearance: 'outline',
          
        }
      }, 
      {
        key: 'isActive',
        type: 'checkbox',
        templateOptions: {
          label: 'Is Active',
          required: true,
          // appearance: 'outline'
        }
      }, 
    ];
    console.log(this.state.options)
    return config;
  }
}
