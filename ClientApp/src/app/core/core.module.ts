
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormlyModule } from '@ngx-formly/core';
import { NgMaterialModule } from '@module/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@module/shared';
import {AppNavigationComponent} from './app-navigation/app-navigation.component';
import {PathNotFoundComponent} from './path-not-found/path-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        FormlyModule,
        NgMaterialModule,
        BrowserAnimationsModule,
        BrowserModule,
        RouterModule,
        SharedModule
    ],
    declarations: [
        AppNavigationComponent,
        PathNotFoundComponent,
        DashboardComponent
    ],
    providers: [],
    exports: [
        AppNavigationComponent
    ]
})

export class CoreModule { }
