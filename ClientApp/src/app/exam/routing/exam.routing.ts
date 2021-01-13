import { Route } from '@angular/router';
import { CustomRoute } from '@module/shared';
import { ExamDetailComponent } from '../exam-detail/exam-detail.component';

export function RouteList(): Route[] {
    return [
        {
            path: 'detail',
            component: ExamDetailComponent,
            data: {
                title: 'Exam Detail',
                isMenu: true
            }
        }
    ] as CustomRoute[];
};
