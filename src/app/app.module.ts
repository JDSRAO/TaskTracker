import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';

import { MaterialDesignModule } from './modules/material-design/material-design.module';
import { RoutingModule } from './modules/routing/routing.module';

import { AppComponent } from './app.component';

import { AuthService  } from "./services/auth.service";
import { HttpCallInterceptor } from './interceptors/http-call-interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialDesignModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpCallInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
