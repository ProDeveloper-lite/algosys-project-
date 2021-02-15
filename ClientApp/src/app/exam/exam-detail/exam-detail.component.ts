import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {QuizEnums} from '@module/serverside'

@Component({
  selector: 'app-exam-detail',
  templateUrl: './exam-detail.component.html',
  styleUrls: ['./exam-detail.component.css']
})
export class ExamDetailComponent implements OnInit {

  public state = {
    subjectList: Object.values(QuizEnums.Subject) as QuizEnums.Subject[],
    selectedSubject: undefined as QuizEnums.Subject | undefined,
    subjectselect:false as boolean
  }
  
  constructor() { }

  public getBySubject() {
    console.log("Selected Subject is "+this.state.selectedSubject);
    this.state.subjectselect = true

  }

  ngOnInit(): void {
  }

}
