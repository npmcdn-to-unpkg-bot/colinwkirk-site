/**
 * Created by Colin on 7/4/2016.
 * This contains the logic for the email contact form.
 */
import { Component, Input } from '@angular/core';
import {FormBuilder, Validators, Control, ControlGroup} from '@angular/common';
import {Headers} from '@angular/http';
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import { ModalService } from "../../services/modal/modal.service";
import { RestService } from "../../services/rest/rest.service";

import 'rxjs/Rx';
//TODO do some intelligent handling with the response from the mail service
//TODO minimize our Rx imports to reduce the size of the app
//TODO move actionUrl to a config file
@Component({
    selector: 'contact-form',
    styleUrls: ['assets/css/contactForm.css'],
    providers: [RestService ],
    templateUrl: 'app/components/contact-form/contact-form.template.html'
})

@Injectable()
export class ContactFormComponent {
    @Input() cancelText:string;
    @Input() verifyText:string;

    private data : any;
    private actionUrl = 'http://www.colinwkirk.com:8000/api/contact/send-email';
    private headers : Headers;
    private name : Control;

    private email : Control;
    private site : Control;
    private phone : Control;
    private subject : Control;
    private carbon : Control;
    private message : Control;
    private contactForm : ControlGroup;
    private errorMessage : any;


    public emailSubjects: string[] = [
        'Freelance Opportunity',
        'Full Time Opportunity',
        'Professional Networking',
        'Bug Report',
        'Suggestion For Website',
        'Sign Up For Updates',
        'Other'
    ];


    constructor(private fb: FormBuilder, private http: Http, private restService : RestService) {
        this.data = null;
        this.restService = restService;

        this.http = http;
        this.actionUrl
        //this.actionUrl = 'www.google.com';
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');

        this.name = new Control("", Validators.minLength(4));
        //thought about doing a pattern here but it doesn't take into account companies, etc.
        //this.name = new Control("", Validators.pattern('([A-Za-z\\.]{2,}\\s[A-Za-z\\.]{2,}.*)'));
        this.email = new Control("", Validators.required);
        this.site = new Control("", Validators.required);
        //this pattern works relateively well for north american numbers but may not be reliable on the off chance I get
        // any foreign visitors, so I'll just stick with a min length that covers the smallest out there right now, the
        // Solomon Islands
        //this.phone = new Control("", Validators.pattern('([0-9]?-?\(?[0-9]{3}-?\)?[0-9]{3}-?[0-9]{4}.*)'));
        //later I can use Google's libphonenumber library to do a custom validator
        //https://github.com/googlei18n/libphonenumber
        //good examples here https://www.sitepoint.com/working-phone-numbers-javascript/
        this.phone = new Control("", Validators.minLength(8));
        this.subject = new Control("", Validators.required);
        this.carbon = new Control("", Validators.required);
        this.message = new Control("", Validators.minLength(25));
        this.contactForm = fb.group({
            name: this.name,
            email: this.email,
            site: this.site,
            phone: this.phone,
            subject: this.subject,
            carbon: this.carbon,
            message: this.message
        });
    }

    callType(value){        
        this.subject=value;
    }


    cancel() {
        ModalService.close(null);
    }

    doContact(event) {
        console.log("In doContact: " + JSON.stringify(this.contactForm.value));
        if (event != null) {
            this.sendEmail(this.contactForm.value);
            event.preventDefault();
            ModalService.close(true);
        }else {
            console.log("Contact form was left empty");
       }
    }


    logError(err) {
        console.error('There was an error: ' + err);
    }

    sendEmail (data: string) {
        if (!data || typeof(data) === 'undefined') {
            console.log("data is null");
            return;
        }
        this.data = {data};
        
        this.restService.sendEmail(this.data)
            .subscribe(
                data => this.data.push(this.data),
                error => this.errorMessage = <any>error),
            () => console.log("Email sent");
    }


    messageGood(c: Control) {
        if (c.value.length > 50 && c.value.length <= 5000) {
            return true
        }else {
            return null
        }
    }
}
