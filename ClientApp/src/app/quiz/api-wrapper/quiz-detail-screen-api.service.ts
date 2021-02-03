import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Injectable({
  providedIn: 'root'
})
export class QuizDetailScreenApiService {

  constructor() { }

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
        },
      },
      {
        key: 'complexcity',
        type: 'input',
        templateOptions: {
          type: 'number',
          label: 'Complexcity',
          required: true,
          appearance: 'outline'
        },
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
        key: 'isActive',
        type: 'checkbox',
        templateOptions: {
          label: 'Is Active',
          required: true,
          appearance: 'outline'
        },
      }
    ];

    return config;
  }
}
