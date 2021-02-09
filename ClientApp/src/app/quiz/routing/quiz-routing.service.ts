import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class QuizRoutingService {

    constructor(private _router: Router) { }

    public showQuizDetail(quizId?: number) {
        //TODO: ganesh and ankita : change path name with quizDetail
        quizId
            ? this._router.navigate(['/teacher/Question', quizId])
            : this._router.navigate(['/teacher/Question', 0]);
    }
}

