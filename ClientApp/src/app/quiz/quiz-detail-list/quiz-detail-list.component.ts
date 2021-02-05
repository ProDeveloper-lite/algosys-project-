import { Component, OnInit } from '@angular/core';
import { QuizEnums,QuizDetailApiService,QuizDetailDtos } from "@module/serverside";
import { DataTableExtendedConfig } from '@module/shared';

@Component({
  selector: 'app-quiz-detail-list',
  templateUrl: './quiz-detail-list.component.html',
  styleUrls: ['./quiz-detail-list.component.scss']
})
export class QuizDetailListComponent {
  public state = {
    tableConfig:{ 
      titleColumn:['subject','complexcity','topic','isActive']
    } as DataTableExtendedConfig,
    tableData:[] as QuizDetailDtos.QuizDetailDto[],
    selectedSubject: undefined as QuizEnums.Subject | undefined,
    subjectList:Object.values(QuizEnums.Subject) as QuizEnums.Subject[]
  };
  
  constructor(private _service:QuizDetailApiService) {  }

  public getBySubject(){
    this._service.getBySubject(this.state.selectedSubject).subscribe(data =>{
      console.log(data);
      this.state.tableData = data;
    })

  }

}
