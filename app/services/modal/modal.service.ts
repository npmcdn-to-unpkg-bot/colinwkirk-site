/**
 * Created by Colin on 6/26/2016.
 * Service used to launch the modal because the modal has to be attached to the
 * body but our launcher button is in the top menu bar, which messes up the
 * z-index and makes it impossible to interact with the modal, essentially
 * bricking the page. Since the Angular way to do things is to never directly
 * manipulate the DOM with jQuery, this is the answer.
 *
 */
import {Subject} from 'rxjs/Subject'
import {Subscription} from 'rxjs/Subscription'
import {Injectable, Type} from '@angular/core';
import {ModalEvent, ModalEventType} from '../../classes/modal-event.class';

@Injectable()
export class ModalService {
    private static modalSubject:Subject<Object> = new Subject();  // A subject for all modals (for managing display)
    private static currentModalPromiseResolver = null; // A promise resolver for the current modal (if we need >1, refactor to tie promise to OPEN event)
    private static currentModalPromiseRejecter = null;
    static open(component:Type, selector:string, params:Object=undefined):Promise<Object> {        
        return new Promise((resolve, reject)=>{            
            if (ModalService.currentModalPromiseResolver) {                
                ModalService.currentModalPromiseRejecter("modal-already-open.  (promise was still present)");
            }
            ModalService.pushEvent(new ModalEvent(ModalEventType.OPEN, {componentSelector: selector, componentParameters: params, componentType: component}));
            ModalService.currentModalPromiseResolver = resolve;
            ModalService.currentModalPromiseRejecter = reject;            
        });
    }

    static close(result:any=undefined) {        
        ModalService.pushEvent(new ModalEvent(ModalEventType.CLOSE, {payload: result}));
        if (ModalService.currentModalPromiseResolver) {
            ModalService.currentModalPromiseResolver(result);
            ModalService.currentModalPromiseResolver = null;
            ModalService.currentModalPromiseRejecter = null;
        } else {
            console.log("received close without an open (no promise found)");
        }
    }

    static error(error) {        
        ModalService.currentModalPromiseRejecter(error);
        ModalService.currentModalPromiseResolver = null;
        ModalService.currentModalPromiseRejecter = null;
    }

    private static pushEvent(event:ModalEvent):void {        
        ModalService.modalSubject.next(event);
    }

    static subscribe(onNext:(event:ModalEvent)=>void, onError:(error:any)=>void=null, onComplete:()=>void=null):Subscription {        
        return ModalService.modalSubject.subscribe(onNext, onError, onComplete)
    }
}
