/**
 * Created by Colin on 7/30/2016.
 * Our route definitions
 */
import { provideRouter, RouterConfig }  from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { JSToysComponent } from './components/js-toys/js-toys.component';
import { ResumeComponent } from './components/resume/resume.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: RouterConfig = [
    { path: '',  component: HomeComponent },
    { path: 'contact',  component: ContactComponent },
    { path: 'js-toys',  component: JSToysComponent },
    { path: 'resume',  component: ResumeComponent },
    { path: 'not-found',  component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found' }

];

export const appRouterProviders = [
    provideRouter(routes)
];
