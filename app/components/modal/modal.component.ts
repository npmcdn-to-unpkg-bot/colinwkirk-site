/*
 * This is the modal dialog
*/

import { Component, ViewChild, ViewContainerRef, ReflectiveInjector, ChangeDetectorRef, ChangeDetectionStrategy} from "@angular/core"

import { ContactModal} from "../contact-modal/contact-modal.component";
import { ModalEvent, ModalEventType} from "../../classes/modal-event.class";
import { ModalOutlet } from "../../directives/modal-outlet/modal-outlet.component";
import { ModalService } from "../../services/modal/modal.service"

//this is necessary to force an update on the modal once it opens so that the variables
//for various text fields will propagate
@Component({selector: 'cmp', changeDetection: ChangeDetectionStrategy.OnPush, template: ``})
class Cmp {
    numberOfTicks = 0;

    constructor(private ref: ChangeDetectorRef) {
        //we need to force an update on the ui
        setInterval(() => {
            this.numberOfTicks ++
            this.ref.markForCheck();
        }, 250);
    }
}

@Component({
    selector: 'modal-dialog',
    directives: [ ModalOutlet, Cmp ],
    styleUrls: ['assets/css/modal.css'],
    //do i need this??
  providers: [ ModalService ],
    template: `
<div class="modal-backdrop" [ngStyle]="style">
  <div class="modal" [ngStyle]="style" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg">
      <div #target class="modal-content modal-backdrop-inner">
        <cmp></cmp>
        <modal-outlet *ngIf="creationModalEvent" [creationModalEvent]="creationModalEvent"></modal-outlet>
        </div>
    </div>
  </div>
</div>
`

})
export class ModalDialog {
    @ViewChild('target', {read: ViewContainerRef}) target;
    creationModalEvent:ModalEvent;
    style:Object = {display: 'none'};

    constructor() {
        ModalService.subscribe((modalEvent:ModalEvent)=> {
            if (modalEvent.eventType === ModalEventType.OPEN) {
                this.style = {display: 'inline-block'};
                this.creationModalEvent = modalEvent
            } else if (modalEvent.eventType === ModalEventType.CLOSE) {
                this.style = {display: "none"}
            }
        });
    }
}
