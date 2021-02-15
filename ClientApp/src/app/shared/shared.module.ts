import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { NgMaterialModule } from '@module/material';
import { ServersideModule } from '@module/serverside';
import { DataTableComponent } from './data-table/data-table.component';
import { MatListComponent } from './List-control/mat-list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgMaterialModule,
        FlexModule,
        FlexLayoutModule,
        FormlyModule.forRoot(),
        ServersideModule,
        FormlyMaterialModule,
    ],
    providers: [],
    declarations: [
        DataTableComponent,
        MatListComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgMaterialModule,
        FlexModule,
        FlexLayoutModule,
        FormlyMaterialModule,
        FormlyModule,
        ServersideModule,
        DataTableComponent,
        MatListComponent
    ]
})
export class SharedModule { }
