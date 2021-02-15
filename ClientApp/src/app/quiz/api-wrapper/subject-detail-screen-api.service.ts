import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectDetailScreenApiService {

  constructor() { }

  public getsujectDetailScreen() {
    const config: FormlyFieldConfig[] = [
      {
        key: 'name',
        type: 'input',
        templateOptions: {
          type: 'number',
          label: 'Name of Subject',
          required: true,
          appearance: 'outline',
        }
      }]
      return config;
    }
}
