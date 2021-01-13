import { Route } from '@angular/router';
import { CustomRoute } from '@module/shared';
import { QuizDetailListComponent } from '../quiz-detail-list/quiz-detail-list.component';

export function RouteList(): Route[] {
    return [
        {
            path: 'list',
            component: QuizDetailListComponent,
            data: {
                title: 'Quiz List',
                isMenu: true
            }
        }

    ] as CustomRoute[];
}
