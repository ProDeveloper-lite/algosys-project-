import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormlyModule } from '@ngx-formly/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgMaterialModule } from '@module/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CoreModule } from '@module/core';

import { RouteList, AppComponent } from '@module/app';
import { ServersideModule } from '@module/serverside';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgMaterialModule,
    CoreModule,
    ServersideModule,
    FlexLayoutModule,
    FormlyModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(RouteList),// this MUST be last
  ],
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('app module loaded');
  }
}
