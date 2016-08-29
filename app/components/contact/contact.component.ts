/**
 * Created by Colin on 8/29/2016.
 * This is a simple page to display contact information.
 */

import {Component} from '@angular/core';

@Component({
    selector: 'contact',
    templateUrl: 'app/components/contact/contact.template.html'
})
export class ContactComponent {

    constructor() {}


    goBack() {
        window.history.back();
    }
}
