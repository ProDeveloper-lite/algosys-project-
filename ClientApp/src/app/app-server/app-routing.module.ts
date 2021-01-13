import { Route } from '@angular/router';
import { PathNotFoundComponent, } from '@module/core';
import { DashboardComponent } from '@module/core';

export const RouteList: Route[] = [
    {
        path: 'teacher',
        loadChildren: () => import('../quiz/quiz.module').then(x => x.QuizModule)
    },
    {
        path: 'student',
        loadChildren: () => import('../exam/exam.module').then(x => x.ExamModule)
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path: '**',
        component: PathNotFoundComponent,
    }
];
