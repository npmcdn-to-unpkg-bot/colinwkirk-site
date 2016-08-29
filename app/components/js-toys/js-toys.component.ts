/**
 * Created by Colin on 6/18/2016.
 * This is a simple page containing links to javascript toys.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'my-js-toys',
    styleUrls: ['assets/css/style.css'],
    templateUrl: 'app/components/js-toys/js-toys.component.html'
})
export class JSToysComponent {

    constructor(
    ) {}

    goBack() {
        window.history.back();
    }
}
