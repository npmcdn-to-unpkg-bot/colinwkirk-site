/**
 * Created by Colin on 6/18/2016.
 * This is a simple page containing links to javascript toys.
 */
import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {FORM_DIRECTIVES} from '@angular/forms';
import {CAROUSEL_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    selector: 'my-js-toys',
    styleUrls: ['assets/css/style.css'],
    templateUrl: 'app/components/js-toys/js-toys.component.html',
    directives: [CAROUSEL_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES],
})
export class JSToysComponent {
    public myInterval:number = 5000;
    public noWrapSlides:boolean = false;
    public slides:Array<any> = [];

    constructor() {
        this.addSlides();
    }



    public addSlides():void {
        this.slides.push({
            image: "assets/images/synaptic.png",
            text: "Synaptic - A NodeJS Neural Network Architecture",
            link: "http://synaptic.juancazala.com/#/"
        });

        this.slides.push({
            image: "assets/images/canvas-zen.jpg",
            text: "Zen Photon Garden",
            link: "http://zenphoton.com/"
        });

        this.slides.push({
            image: "assets/images/cloth.png",
            text: "The Cloth Simulation",
            link: "http://andrew-hoyer.com/experiments/cloth/"
        });

        this.slides.push({
            image: "assets/images/particles.png",
            text: "Particles",
            link: "http://codepen.io/eltonkamami/pen/ECrKd"
        });
    }

    public removeSlide(index:number):void {
        this.slides.splice(index, 1);
    }

    goBack() {
        window.history.back();
    }
}
