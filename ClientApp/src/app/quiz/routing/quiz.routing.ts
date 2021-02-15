import { Route } from '@angular/router';
import { CustomRoute } from '@module/shared';
import { QuizDetailListComponent } from '../quiz-detail-list/quiz-detail-list.component';
import { QuizDetailsComponent } from '../quiz-details/quiz-details.component';
import { QuizOptionsComponent } from '../quiz-options/quiz-options.component';
import {SubjectDetailComponent} from '../subject-detail/subject-detail.component'

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
<<<<<<< HEAD
            path: 'Question/:id',
            component: QuestionDetailComponent,
            data:{
                title:'Question Detail',
                isMenu: true
            }
        },
        {
            path: 'subjectdetail/:id',
            component: SubjectDetailComponent,
            data:{
                title:'Subject Detail',
                isMenu: true
            }
        },
        {
=======
>>>>>>> e71176d698ce178d82a1e25a11740e5fb67f063a
            path: 'quiz-detail/:id',
            component: QuizDetailsComponent,
        }

    ] as CustomRoute[];
}
