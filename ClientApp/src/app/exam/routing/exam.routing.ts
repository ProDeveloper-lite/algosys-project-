import { Route } from '@angular/router';
import { CustomRoute } from '@module/shared';
import { ExamDetailComponent } from '../exam-detail/exam-detail.component';

export function RouteList(): Route[] {
    return [
        {
            path: 'exam-detail',
            component: ExamDetailComponent,
            data: {
                title: 'Exam Detail',
                isMenu: true
            }
        },
    ] as CustomRoute[];
};
