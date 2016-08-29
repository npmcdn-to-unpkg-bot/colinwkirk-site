/**
 * Created by Colin on 6/18/2016.
 * This is the simple home page with about me info.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'my-home',
    templateUrl: 'app/components/home/home.component.html'
})
export class HomeComponent {

    constructor(
        ) {}


    goBack() {
        window.history.back();
    }
}
