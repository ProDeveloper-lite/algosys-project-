import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@module/shared';
import { RouteList } from './routing/quiz.routing';
import { QuizRoutingService } from './routing/quiz-routing.service';
import { QuizDetailListComponent } from './quiz-detail-list/quiz-detail-list.component';
import { QuizOptionsComponent } from './quiz-options/quiz-options.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { QuizDetailsComponent } from './quiz-details/quiz-details.component';
import {QuizDetailScreenApiService} from './api-wrapper/quiz-detail-screen-api.service';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component';
import { SubjectDetailScreenApiService } from './api-wrapper/subject-detail-screen-api.service';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(RouteList())
    ],
    providers: [
        QuizRoutingService,
        QuizDetailScreenApiService,
        SubjectDetailScreenApiService
    ],
    declarations: [
        QuizDetailListComponent,
        QuizOptionsComponent,
        QuestionDetailComponent,
        QuizDetailsComponent,
        SubjectDetailComponent,
     ]
})
export class QuizModule {
    constructor() {
        console.log('quiz module loaded');
    }
}
