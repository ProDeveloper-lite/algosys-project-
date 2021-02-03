import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@module/shared';
import { RouteList } from './routing/quiz.routing';
import { QuizRoutingService } from './routing/quiz-routing.service';
import { QuizDetailListComponent } from './quiz-detail-list/quiz-detail-list.component';
import { QuizOptionsComponent } from './quiz-options/quiz-options.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';


@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(RouteList())
    ],
    providers: [
        QuizRoutingService
    ],
    declarations: [
        QuizDetailListComponent,
        QuizOptionsComponent,
        QuestionDetailComponent
     ]
})
export class QuizModule {
    constructor() {
        console.log('quiz module loaded');
    }
}
