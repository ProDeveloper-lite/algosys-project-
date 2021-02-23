import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@module/shared';
import { RouteList } from './routing/exam.routing';
import { ExamRoutingService } from './routing/exam-routing.service';
import { ExamDetailComponent } from './exam-detail/exam-detail.component';
import { ExamScreenComponent } from './exam-screen/exam-screen.component';


@NgModule({
    imports: [
        RouterModule.forChild(RouteList()),
        SharedModule
    ],
    providers: [
        ExamRoutingService
    ],
    declarations: [ ExamDetailComponent, ExamScreenComponent]
})
export class ExamModule {
    constructor() {
        console.log('exam module loaded');
    }
}
