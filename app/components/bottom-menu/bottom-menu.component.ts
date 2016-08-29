/**
 * This is the bottom menu bar
**/

import {Component, Renderer, Inject, AfterViewInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { ROUTER_DIRECTIVES } from '@angular/router';
import {DOCUMENT} from '@angular/platform-browser';
import {CORE_DIRECTIVES} from '@angular/common';
//TODO get modal service set up so I can launch the contact modal from here
@Component({
    selector: 'bottom-menu',
    styleUrls: ['assets/css/navbar.css', 'assets/css/navbar-top-fixed.css', 'assets/css/navbar-bottom.css'],
    templateUrl: 'app/components/bottom-menu/bottom-menu.component.html',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES]

})
export class BottomMenuComponent implements AfterViewInit {
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
        //this.route.params.subscribe(()=> {this.toggle(false);});
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

}
