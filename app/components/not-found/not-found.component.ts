/**
 * Created by Colin on 6/18/2016.
 * Simple 404 page
 */
import {Component} from '@angular/core';

//TODO implement an auto redirect
@Component({
    selector: 'my-not-found',
    templateUrl: 'app/components/not-found/not-found.component.html'
})
export class NotFoundComponent {

    constructor(
        //private router: Router
    ) {}

    goBack() {
        window.history.back();
    }
}
