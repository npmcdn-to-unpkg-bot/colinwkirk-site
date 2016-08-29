/**
 * Our app component class. This is where the party starts.
 */

//core imports
import {Component, enableProdMode, ViewContainerRef} from '@angular/core';
import { ROUTER_DIRECTIVES}  from '@angular/router';

//plugings
import {Ng2BootstrapConfig, Ng2BootstrapTheme} from 'ng2-bootstrap/ng2-bootstrap';

//components
import {TopMenuComponent} from './components/top-menu/top-menu.component';
import {BottomMenuComponent} from './components/bottom-menu/bottom-menu.component';
import {HomeComponent} from './components/home/home.component';
import {ModalDialog} from './components/modal/modal.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

//services
import {ModalService} from './services/modal/modal.service';
import {ContactModalService} from './services/contact-modal.service';
//import {CustomRouterOutlet} from './classes/custom-router-outlet';



enableProdMode();

@Component({
    selector: 'my-app',
    directives: [TopMenuComponent, BottomMenuComponent, HomeComponent, ROUTER_DIRECTIVES, ModalDialog, NotFoundComponent],
     providers: [ModalService, ContactModalService],
    template: `
<modal-dialog></modal-dialog>
<top-menu>Loading top menu bar...</top-menu>
<router-outlet></router-outlet>
<bottom-menu>Loading bottom menu bar...</bottom-menu>
`
})

export class AppComponent {
    public dt:Date = new Date();

    public isBs3:boolean = Ng2BootstrapConfig.theme === Ng2BootstrapTheme.BS3;
    private viewContainerRef:ViewContainerRef;

    public constructor(viewContainerRef:ViewContainerRef) {
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;
    }
}
