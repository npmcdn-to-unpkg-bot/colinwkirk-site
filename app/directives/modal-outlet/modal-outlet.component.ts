/*
 * Helper class for dynamic creation of the modal contact form
*/

import {
    Component,
    ComponentFactory,
    ComponentMetadata,
    ComponentResolver,
    Directive,
    Inject,
    Input,
    ReflectiveInjector,
    Type,
    ViewContainerRef

} from '@angular/core'

import { ModalEvent } from "../../classes/modal-event.class"


// Based on http://blog.lacolaco.net/post/dynamic-component-creation-in-angular-2/

function createComponentFactory(resolver: ComponentResolver, metadata: ComponentMetadata, creationModalEvent:ModalEvent): Promise<ComponentFactory<any>> {
    const cmpClass = class DynamicComponent {
        componentParameters:Object = creationModalEvent.componentParameters;
    };
    const decoratedCmp:Type = <Type>Component(metadata)(cmpClass);
    return resolver.resolveComponent(decoratedCmp);
}

@Directive({
    selector: 'modal-outlet',
})
export class ModalOutlet {
    @Input() creationModalEvent:ModalEvent;

    constructor(

         @Inject(ViewContainerRef)  private vcRef: ViewContainerRef,
         @Inject(ComponentResolver)  private resolver: ComponentResolver) {
    }

    ngOnChanges() {
        if (!this.creationModalEvent) {
            console.log("Not a creationmodal event, returning...");
            return;
        }

        if (this.vcRef.length>=0) {
            this.vcRef.clear();
        }

        let html = "<" +
            this.creationModalEvent.componentSelector +
            " [componentParameters]='componentParameters'></" +
            this.creationModalEvent.componentSelector +
            ">";

        const metadata = new ComponentMetadata({
            selector: 'dynamic-html',
            directives: [this.creationModalEvent.componentType],
            template: html,
            inputs: ['componentParameters']

        });

            createComponentFactory(this.resolver, metadata, this.creationModalEvent)
            .then(factory => {
                const injector = ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);
                this.vcRef.createComponent(factory, 0, injector, []);
            });
    }
}
