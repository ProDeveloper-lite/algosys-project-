import { Route } from '@angular/router';
import { CustomRoute } from '@module/shared';
import { QuestionDetailComponent } from '../question-detail/question-detail.component';
import { QuizDetailListComponent } from '../quiz-detail-list/quiz-detail-list.component';
import { QuizOptionsComponent } from '../quiz-options/quiz-options.component';

export function RouteList(): Route[] {
    return [
        {
            path: 'list',
            component: QuizDetailListComponent,
            data: {
                title: 'Quiz List',
                isMenu: true
            }
        },
        {
            path: 'option',
            component: QuizOptionsComponent,
            data:{
                title:'Quiz Options',
                isMenu: true
            }
        },
        {
            path: 'Question/:id',
            component: QuestionDetailComponent,
            data:{
                title:'Question Detail',
                isMenu: true
            }
        }

    ] as CustomRoute[];
}
