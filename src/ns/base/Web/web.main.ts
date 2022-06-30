
/**
 * This is startin point the whole website 
 */
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
    };


    async initResources() {
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
            new Route({viewlocation : "/insights",viewAttribute : "insights-view"})
        ]
        this._WebRouter = new NSRouter(this._WebRoutes)
    };


 


  

};

 