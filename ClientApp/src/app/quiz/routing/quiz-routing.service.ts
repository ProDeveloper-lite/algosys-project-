import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class QuizRoutingService {
    constructor(private _router: Router) { }
}

