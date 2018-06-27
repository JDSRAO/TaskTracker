/* Angular Imports */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* App module Imports */
import { MaterialDesignModule } from './modules/material-design/material-design.module';
import { RoutingModule } from './modules/routing/routing.module';

/* App Component Imports */
import { AppComponent } from './app.component';

/* App Sevice Imports */
import { AuthService  } from "./services/auth.service";
import { HttpCallInterceptor } from './interceptors/http-call-interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    MaterialDesignModule,
    RoutingModule
  ],  
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpCallInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
