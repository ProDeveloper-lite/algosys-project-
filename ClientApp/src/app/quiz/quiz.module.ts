import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@module/shared';
import { RouteList } from './routing/quiz.routing';
import { QuizRoutingService } from './routing/quiz-routing.service';
import { QuizDetailListComponent } from './quiz-detail-list/quiz-detail-list.component';
import { QuizOptionsComponent } from './quiz-options/quiz-options.component';
import { QuizDetailsComponent } from './quiz-details/quiz-details.component';
import {QuizDetailScreenApiService} from './api-wrapper/quiz-detail-screen-api.service';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component';
import { QuizOptionsListComponent } from './quiz-options-list/quiz-options-list.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(RouteList())
    ],
    providers: [
        QuizRoutingService,
        QuizDetailScreenApiService,
    ],
    declarations: [
        QuizDetailListComponent,
        QuizOptionsComponent,
        QuizDetailsComponent,
        SubjectDetailComponent,
        QuizOptionsListComponent,
     ]
})
export class QuizModule {
    constructor() {
        console.log('quiz module loaded');
    }
}
