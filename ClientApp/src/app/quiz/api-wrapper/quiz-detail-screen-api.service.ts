import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { QuizEnums, SubjectDetailApiService, SubjectDetailDtos } from '@module/serverside'

@Injectable({
  providedIn: 'root'
})
export class QuizDetailScreenApiService {

  public state = {
    //TODO : anjali ....change the name of variable
    quiz_detail_option_sub: Object.values(QuizEnums.QuestionType) as QuizEnums.QuestionType[],
    quiz_detail_options_complexity: Object.values(QuizEnums.Complexcity) as QuizEnums.Complexcity[]
  }

  constructor(private _subject: SubjectDetailApiService) { }

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
        type: 'select',
        templateOptions: {
          label: 'SubjectId',
          required: true,
          appearance: 'outline',
          options: this._subject.getAll(),
          valueProp: (x: SubjectDetailDtos.SubjectDetailDto) => x.id,
          labelProp: (x: SubjectDetailDtos.SubjectDetailDto) => x.name,
        }
      },
      {
        key: 'complexcity',
        type: 'select',
        templateOptions: {
          label: 'Complexcity',
          required: true,
          appearance: 'outline',
          options: this.state.quiz_detail_options_complexity,
          valueProp: (x: string) => x,
          labelProp: (x: string) => x,
        }
      },
      {
        //TODO sonu : use tags
        key: 'topic',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Topic',
          required: true,
          appearance: 'outline'
        }
      },
      {
        key: 'type',
        type: 'select',
        templateOptions: {
          label: 'Question Type',
          required: true,
          appearance: 'outline',
          options: this.state.quiz_detail_option_sub,
          valueProp: (x: string) => x,
          labelProp: (x: string) => x
        }
      },
      {
        key: 'questionText',
        type: 'input',
        templateOptions: {
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
          appearance: 'outline'
        }
      },
    ];
    console.log(this.state.quiz_detail_option_sub)
    return config;
  }
}
