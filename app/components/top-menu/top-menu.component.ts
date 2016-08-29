/**
 * Bootstrap3 fixed top menu bar with helpers to launch the modal.
**/

import {Component, Renderer, Inject, AfterViewInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { ROUTER_DIRECTIVES } from '@angular/router';
import {DOCUMENT} from '@angular/platform-browser';
import {ContactModalService} from '../../services/contact-modal.service'
import {CORE_DIRECTIVES} from '@angular/common';
import {ModalService} from '../../services/modal/modal.service';
import {ContactModal} from '../contact-modal/contact-modal.component';


import {ModalDirective, MODAL_DIRECTVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';
@Component({
  selector: 'top-menu',
  styleUrls: ['assets/css/navbar.css', 'assets/css/navbar-top-fixed.css'],
  templateUrl: 'app/components/top-menu/top-menu.template.html',
  directives: [ROUTER_DIRECTIVES, ModalDirective, MODAL_DIRECTVES, CORE_DIRECTIVES],
  providers: [ContactModalService],
  viewProviders:[BS_VIEW_PROVIDERS]
})
export class TopMenuComponent implements AfterViewInit {
  public isShown:boolean = false;

  private renderer:Renderer;
  private document:any;
  private route: ActivatedRoute;

  public constructor(renderer:Renderer, @Inject(DOCUMENT) document:any, route: ActivatedRoute) {
    this.renderer = renderer;
    this.document = document;
    this.route = route;
  }

  public ngAfterViewInit():any {
    this.route.params.subscribe(()=> {this.toggle(false);});
  }

  public toggle(isShown?:boolean):void {
    this.isShown = typeof isShown === 'undefined' ? !this.isShown : isShown;
    if (this.document && this.document.body) {
      this.renderer.setElementClass(this.document.body, 'isOpenMenu', this.isShown);
      if (this.isShown === false) {
        this.renderer.setElementProperty(this.document.body, 'scrollTop', 0);
      }
    }
  }
  openModal() {    
    let modalParams = {
      titleText : 'Contact Me',
      messageText : 'Please fill out the following to get in touch with me:',
      cancelText : 'Cancel',
      verifyText : 'Submit'
    };
    ModalService.open(ContactModal, 'contact-modal', modalParams).then((result : any) => {console.log("Modal accessed, returned" + result)});

  }
}
