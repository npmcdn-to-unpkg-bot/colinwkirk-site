/*
//TODO get this working so I can have animated page transitions

import { ViewContainerRef, ComponentFactoryResolver, Directive, ResolvedReflectiveProvider} from '@angular/core';
import { Router, RouterOutlet, ActivatedRoute, RouterOutletMap } from '@angular/router-deprecated';
import {APP_ROUTER_PROVIDERS} from '../config'

@Directive({
    selector: 'router-outlet'
})
export class CustomRouterOutlet extends RouterOutlet {
    publicRoutes: Array;
    private parentRouter: Router;
    private router: Router;

    constructor(parentOutletMap: RouterOutletMap, location:ViewContainerRef, componentFactoryResolver: ComponentFactoryResolver, name: string) {
        super(parentOutletMap, location, componentFactoryResolver, name);
        this.router = _parentRouter;
    }

    public activate(nextInstruction: ComponentInstruction): Promise<any> {
        console.log("Using activate in custom router");
        let previousInstruction = this.currentInstruction;

        this.currentInstruction = nextInstruction;

        let componentType = nextInstruction.componentType;
        let childRouter = this.parentRouter.childRouter(componentType);

        let providers = ReflectiveInjector.resolve([
            provide(RouteData, {useValue: nextInstruction.routeData}),
            provide(RouteParams, {useValue: new RouteParams(nextInstruction.params)}),
            provide(routerMod.Router, {useValue: childRouter})
        ]);

        this.previousComponentRef = this.currentComponentRef;

        return this.loader.loadNextToLocation(componentType, this.currentElementRef, providers)
            .then((componentRef) => {

                this.currentComponentRef = componentRef;

                Observable.of(true).delay(100).toPromise().then(response => {
                    if(this.previousComponentRef){
                        this.previousComponentRef.location.nativeElement.className = 'animateout';
                    }
                    this.currentComponentRef.location.nativeElement.className = 'animatein';
                });

                if (hasLifecycleHook(hookMod.routerOnActivate, componentType)) {
                    return (<OnActivate>componentRef.instance)
                        .routerOnActivate(nextInstruction, previousInstruction);
                }
            });


    }


    public routerCanDeactivate(nextInstruction: ComponentInstruction): Promise<boolean> {
        if (isBlank(this.currentInstruction)) {
            return this.resolveToTrue;
        }

        let ref = this.currentComponentRef;

        Observable.of(true).delay(2000).toPromise().then(response => {
            ref.destory();
        });

        return this.resolveToTrue;
    }

}*//**
 * Created by Colin on 7/18/2016.
 */
