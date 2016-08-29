/**
 * Created by Colin on 7/30/2016.
 * Our main/bootstrap class
 */
// main entry point
import { bootstrap }          from '@angular/platform-browser-dynamic';
import { AppComponent }       from './app.component';
import { appRouterProviders } from './app.routes';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';

bootstrap(AppComponent
    ,[appRouterProviders,{provide: LocationStrategy, useClass: HashLocationStrategy}, HTTP_PROVIDERS]
    ).catch(err => console.error(err));
