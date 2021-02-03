import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class QuizRoutingService {
    constructor(private _router: Router) { }

    public showQuizDetail(quizId?: number) {
        quizId
            ? this._router.navigate(['/teacher/quiz-detail', quizId])
            : this._router.navigate(['/teacher/quiz-detail', 0]);
    }
}

