/**
 * This was the original holder for the contact form but I think I used the generic
 * modal class instead.
**/

import { Component, Input} from "@angular/core"

import { ModalService } from "../../services/modal/modal.service"
import { RestService } from "../../services/rest/rest.service"
import {ContactFormComponent } from "../contact-form/contact-form.component"

@Component(
    {
        selector: 'contact-modal',
        directives: [ContactFormComponent],
        providers: [RestService],
        templateUrl: 'app/components/contact-modal/contact-modal.template.html'
    })
export class ContactModal {
    @Input() componentParameters;
    private titleText: String;
    private messageText: String;
    private cancelText: String;
    private verifyText: String;
    private blob: any;
    private errorMessage: any;
    private footer : String;

    constructor(private restService: RestService) {
        this.titleText = "Contact Me";
        this.footer = "Any information collected via this website will not be shared, rented, " +
            "or sold in any way and will only " +
            "be used for communication with the site owner, Colin W. Kirk.";
        this.messageText = "";
    }

    ngOnInit(obj) {        
        if (this.componentParameters) {            
            this.titleText = this.componentParameters.titleText;
            this.messageText = this.componentParameters.messageText;
            this.verifyText = this.componentParameters.verifyText;
            this.cancelText = this.componentParameters.cancelText;            
        }
    }

    ngOnChanges(obj) {        
        if (this.componentParameters) {
            this.titleText = this.componentParameters.titleText;
            this.messageText = this.componentParameters.messageText;
            this.verifyText = this.componentParameters.verifyText;
            this.cancelText = this.componentParameters.cancelText;            
        }
    }

    sendEmail (blob: string) {
        if (!blob || typeof(blob) === 'undefined') {
            return;
        }
        this.restService.sendEmail(blob)
            .subscribe(
                blob => this.blob.push(blob),
                error => this.errorMessage = <any>error),
                () => console.log("Email sent");
    }


    ok() {
        ModalService.close(true);
    }

    cancel() {
        ModalService.close(null);
    }

    no() {
        ModalService.close(false);
    }
}
