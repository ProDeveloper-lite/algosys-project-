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

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(RouteList())
    ],
    providers: [
        QuizRoutingService,
        QuizDetailScreenApiService
    ],
    declarations: [
        QuizDetailListComponent,
        QuizOptionsComponent,
        QuestionDetailComponent,
        QuizDetailsComponent,
     ]
})
export class QuizModule {
    constructor() {
        console.log('quiz module loaded');
    }
}
