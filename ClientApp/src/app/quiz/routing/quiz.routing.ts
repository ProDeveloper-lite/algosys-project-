import { Route } from '@angular/router';
import { CustomRoute } from '@module/shared';
import { QuizDetailListComponent } from '../quiz-detail-list/quiz-detail-list.component';
import { QuizDetailsComponent } from '../quiz-details/quiz-details.component';
import { QuizOptionsComponent } from '../quiz-options/quiz-options.component';
import { SubjectDetailComponent } from '../subject-detail/subject-detail.component';
import { QuizOptionsListComponent } from '../quiz-options-list/quiz-options-list.component'

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
            data: {
                title: 'Quiz Options',
                isMenu: true
            }
        },
        {
            path: 'subject-detail',
            component: SubjectDetailComponent,
            data: {
                title: 'Subject Detail',
                isMenu: true
            }
        },
        {
            path: 'quiz-detail/:id',
            component: QuizDetailsComponent,
        },
        {
            path: 'quizoptionslist',
            component: QuizOptionsListComponent,
        }


    ] as CustomRoute[];
}
