
/**
 * This is startin point the whole website 
 */

import { headerScreenControl,IHeaderScreenControlManager } from "ns/base/MediaQueries/ScreenControls/Services/headerControl"
import { ServiceCollection } from "ns/base/dependencyInjection/serviceCollectionManager";
import { Injector } from "ns/base/dependencyInjection/injector";
import { headerInterfaceManager } from "ns/dom/Interface/HeaderIntefaceManager";
import { footerInterfaceManager } from "ns/dom/Interface/FooterInterfaceManager";
import {footerScreenControl,IFooterScreenControlManager} from "ns/base/MediaQueries/ScreenControls/Services/footerControl"
import { NSRouter} from "ns/base/Router/Router";
import { Route } from "ns/base/Router/Route";
import { ControlIntializerInstance } from "../MediaQueries/ScreenControls/controlInitializerEvent";
import { LifeCycleEvents,Lifecycle } from "ns/common/lifecycle";


export class WebMain {
    private _WebRouter: NSRouter | null;
    private _WebRoutes: Route[] | null;
    private _didInitializeResources: boolean;
    constructor() {
        this._didInitializeResources = false;
        this._WebRouter = null;
        this._WebRoutes = null;
        this.initResources();
    };


    async initResources() {
        this.attachDependenciesGraph();
        this.listenAndResolveInterfaceControlDimensions()
        this.createRouterNavigationMechanism();
        this._didInitializeResources = true;

    };
    public get FrameRouter() : NSRouter {
        return this._WebRouter!;
    }
    

    private listenAndResolveInterfaceControlDimensions() {
        ControlIntializerInstance.didInitiateAllSurfaceControls(() => {
            LifeCycleEvents.phase = Lifecycle.Eventually;
        })
    }

    private createRouterNavigationMechanism() {
        this._WebRoutes = [
            new Route({ viewlocation: "/home", viewAttribute: "home-view" }),
            new Route({ viewlocation: "/about", viewAttribute: "about-view" }),
            new Route({ viewlocation: "/blog", viewAttribute: "blog-view" }),
            new Route({ viewlocation: "/academics", viewAttribute: "academics-view" }),
        ]
        this._WebRouter = new NSRouter(this._WebRoutes)
    };


    private attachDependenciesGraph() {
        const InitializeDIInjectionService = this.createMainServiceInjectorControl();
        InitializeDIInjectionService.createInstance(headerInterfaceManager);
        InitializeDIInjectionService.createInstance(footerInterfaceManager);

    }


    private createMainServiceInjectorControl() {
        let ServiceCollectionManager = new ServiceCollection()
        ServiceCollectionManager.set(IHeaderScreenControlManager, new headerScreenControl());
        ServiceCollectionManager.set(IFooterScreenControlManager, new footerScreenControl());
        return new Injector(ServiceCollectionManager);
    }

};

 