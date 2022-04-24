/**
 * 
 * HeaderControl is favoured because this is element is not loaded within the router
 * its independent and doesn't  follow the lifecycle of the Router,
 * 

 * Creating MediaQueries with typescript requires 
 * the analogy of using screen breakpoints
 * and using memoize to cache values accordingly
 * this is a common dependency and can be shared thus DI will e used.
 * But this Queries can be shared by different elements
 */

import { MediaScreenManagerControl, IMediaScreenDimensions } from "ns/base/MediaQueries/mediaQueries";
import { createDecorator as createServiceDecorator } from "ns/base/dependencyInjection/decoratorServer";
import { Lifecycle,LifeCycleEvents } from "ns/common/lifecycle";


interface IResizerCache {
    [key: string]: number;
}

export type HeaderKeyValues = "badge-wrapper" | "global" | "navigationBar"
export enum BreakPoints  {
    GLOBAL_BREKAPOINT = 0,
    NAVIGATION_BREAKPOINT = 1,
    BADGE_BREAKPOINT_1 = 2,
    BADGE_BREAKPOINT_2 = 3,
    BADGE_BREAKPOINT_3 = 4,


    //out of breakpoint
    GLOBAL_BREKAPOINT_X = 5,
    BADGE_BREAKPOINT_X_1 = 6,
    BADGE_BREAKPOINT_X_2= 7,
    BADGE_BREAKPOINT_X_3= 8,
    NAVIGATION_BREAKPOINT_X = 9

}

export interface IHeaderDidChangeSizeCallback {
    keyValue: HeaderKeyValues,
    breakpoint: BreakPoints;
}

export interface IHeaderScreenControlService {
    headerDidReachBreakPoint(callback: (args: IHeaderDidChangeSizeCallback) => void):void;
}

export const IHeaderScreenControlManager = createServiceDecorator<IHeaderScreenControlService>("HeaderScreenControl");

export class headerScreenControl implements IHeaderScreenControlService {

    private _globalContentBreakPoint: number;
    private _badgeWrapperBreakPoints: {[key:string] : number};
    private _contentNavigationbreakPoint: number;
    
    private _headerSizeCallback: ((args: IHeaderDidChangeSizeCallback) => void)| null;
    constructor() {
        this._headerSizeCallback = null;
        this._globalContentBreakPoint = 930;
        this._contentNavigationbreakPoint = 832;
        this._badgeWrapperBreakPoints = { "window-break-1": 548, "window-break-2": 513, "window-break-3" : 459 };
        this.initScreenControl();
    };
    private _registerForLifecycleEvents() {
        LifeCycleEvents.onPhaseDidChange.subscribe(this._listenerForLifecycleEvents.bind(this));
    };
    private _unregisterForLifecycleEvents() {
        LifeCycleEvents.onPhaseDidChange.unsubscribe(this._listenerForLifecycleEvents.bind(this));
        
    }
    private _listenerForLifecycleEvents(phase:Lifecycle) {
        if (phase == Lifecycle.Eventually) {
            this._initHeaderControlStartupDimensions({ width: window.innerWidth, height: window.innerHeight });
            this._unregisterForLifecycleEvents();
        }
    }

    public headerDidReachBreakPoint(callback: (args:IHeaderDidChangeSizeCallback) => void) {
        this._headerSizeCallback = callback;
    };

    private initScreenControl() {
        this.registerAndListenForMediaScreenChanges();
        this._registerForLifecycleEvents();
    }

    private registerAndListenForMediaScreenChanges() {
        MediaScreenManagerControl.mediaWindowScreenDidResize.subscribe(this.listenerForCommonDimensionChanges.bind(this));

    };

    private _invokeHeaderChangeCallback(args:IHeaderDidChangeSizeCallback) {
        if (this._headerSizeCallback) {
            this._headerSizeCallback(args);
        }
    }

    protected listenAndCacheForNavigationBar(dimensions: IMediaScreenDimensions) {
        if (dimensions.width <= this._contentNavigationbreakPoint) {
            this._invokeHeaderChangeCallback({
                breakpoint: BreakPoints.NAVIGATION_BREAKPOINT,
                keyValue: "navigationBar"
            });
        } else if(dimensions.width > (this._contentNavigationbreakPoint)){
            this._invokeHeaderChangeCallback({
                breakpoint: BreakPoints.NAVIGATION_BREAKPOINT_X,
                keyValue : "navigationBar"
            })
        }     
    };
    protected listenAndCacheForGlobal(dimensions: IMediaScreenDimensions) {
        if (dimensions.width == this._globalContentBreakPoint) {
            this._invokeHeaderChangeCallback({
                breakpoint: BreakPoints.GLOBAL_BREKAPOINT,
                keyValue : "global"
            })
        } else if (dimensions.width > this._globalContentBreakPoint) {
            this._invokeHeaderChangeCallback({
                breakpoint : BreakPoints.GLOBAL_BREKAPOINT_X,
                keyValue : "global",
            })
        }
    }
    protected listenAndCacheForBadgeWrapper_1(dimensions: IMediaScreenDimensions) {
        if (dimensions.width <= this._badgeWrapperBreakPoints["window-break-1"]) {
            this._invokeHeaderChangeCallback({
                breakpoint: BreakPoints.BADGE_BREAKPOINT_1,
                keyValue : "badge-wrapper"
            })
        } else if(dimensions.width > this._badgeWrapperBreakPoints["window-break-1"]){
            this._invokeHeaderChangeCallback({
                breakpoint: BreakPoints.BADGE_BREAKPOINT_X_1,
                keyValue : "badge-wrapper"
            })
        }
    }
    protected listenAndCacheForBadgeWrapper_2(dimensions: IMediaScreenDimensions) {
        if (dimensions.width <= this._badgeWrapperBreakPoints["window-break-2"]) {
            this._invokeHeaderChangeCallback({
                breakpoint: BreakPoints.BADGE_BREAKPOINT_2,
                keyValue : "badge-wrapper"
            })
        }else if(dimensions.width > this._badgeWrapperBreakPoints["window-break-2"]){
            this._invokeHeaderChangeCallback({
                breakpoint: BreakPoints.BADGE_BREAKPOINT_X_2,
                keyValue : "badge-wrapper"
            })
        }
        
    }

    protected listenAndCacheForBadgeWrapper_3(dimensions: IMediaScreenDimensions) {
        if (dimensions.width <= this._badgeWrapperBreakPoints["window-break-3"]) {
            this._invokeHeaderChangeCallback({
                breakpoint: BreakPoints.BADGE_BREAKPOINT_3,
                keyValue : "badge-wrapper"
            })
        }else if(dimensions.width > this._badgeWrapperBreakPoints["window-break-3"]){
            this._invokeHeaderChangeCallback({
                breakpoint: BreakPoints.BADGE_BREAKPOINT_X_3,
                keyValue : "badge-wrapper"
            })
        }
        
    }
    private _initHeaderControlStartupDimensions(dimensions:IMediaScreenDimensions) {
        this.listenAndCacheForNavigationBar(dimensions);
        this.listenAndCacheForGlobal(dimensions);
        this.listenAndCacheForBadgeWrapper_1(dimensions);
        this.listenAndCacheForBadgeWrapper_2(dimensions);
        this.listenAndCacheForBadgeWrapper_3(dimensions);
    }


    private listenerForCommonDimensionChanges(dimensions:IMediaScreenDimensions) {
        this.listenAndCacheForNavigationBar(dimensions);
        this.listenAndCacheForGlobal(dimensions);
        this.listenAndCacheForBadgeWrapper_1(dimensions);
        this.listenAndCacheForBadgeWrapper_2(dimensions);
        this.listenAndCacheForBadgeWrapper_3(dimensions);

    }

};

