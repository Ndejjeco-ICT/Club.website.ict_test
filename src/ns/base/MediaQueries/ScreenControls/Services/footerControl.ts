import { MediaScreenManagerControl, IMediaScreenDimensions } from "ns/base/MediaQueries/mediaQueries";
import { createDecorator as createServiceDecorator } from "ns/base/dependencyInjection/decoratorServer"
import { LifeCycleEvents, Lifecycle } from "ns/common/lifecycle";

export type FooterkeyValues = "content-size" | "content-font"
export enum BreakPoints {

    XTR_1 = 0,
    XTR_X_1 = 1,


    XTR_3 = 4,
    XTR_X_3 = 5,


}

export interface IFooterDidChangeSizeCallback {
    keyValue: FooterkeyValues,
    breakpoint: BreakPoints;
}

export interface IFooterScreenControlService {
    footerDidReachBreakPoint(callback: (args: IFooterDidChangeSizeCallback) => void): void;
}

export const IFooterScreenControlManager = createServiceDecorator<IFooterScreenControlService>("FooterService");

export class footerScreenControl implements IFooterScreenControlService {

    private _breakPoint_1: number = 834;
    private _breakPoint_3: number = 781

    private _footerSizeCallback: ((args: IFooterDidChangeSizeCallback) => void) | null;
    constructor() {
        this._footerSizeCallback = null;
        this.initScreenControl()
    }

    private _registerForLifecycleEvents() {
        LifeCycleEvents.onPhaseDidChange.subscribe(this._listenerForLifecycleEvents.bind(this))
    }
    private _unregisterForLifecycleEvents() {
        LifeCycleEvents.onPhaseDidChange.unsubscribe(this._listenerForLifecycleEvents.bind(this))
        
    }
    private _listenerForLifecycleEvents(phase: Lifecycle) {
        if (phase == Lifecycle.Eventually) {
            this._initFooterControlStartupDimensions({ width: window.innerWidth, height: window.innerHeight });
            this._unregisterForLifecycleEvents();
        }
    }
    public footerDidReachBreakPoint(callback: (args: IFooterDidChangeSizeCallback) => void): void {
        this._footerSizeCallback = callback;
    };
    public initScreenControl() {
        this.registerAndListenForMediaScreenChanges()
        this._registerForLifecycleEvents()
    }
    private registerAndListenForMediaScreenChanges() {
        MediaScreenManagerControl.mediaWindowScreenDidResize.subscribe(this.listenerForCommonDimensionChanges.bind(this));

    };
    private _invokeFooterChangeCallback(args: IFooterDidChangeSizeCallback) {
        if (this._footerSizeCallback) {
            this._footerSizeCallback(args);
        }
    }
    protected listenForContentSize_1(dimensions: IMediaScreenDimensions) {
        if (dimensions.width <= this._breakPoint_1) {
            this._invokeFooterChangeCallback({
                keyValue: "content-size",
                breakpoint: BreakPoints.XTR_1
            });
        } else if (dimensions.width > this._breakPoint_1) {
            this._invokeFooterChangeCallback({
                keyValue: "content-size",
                breakpoint: BreakPoints.XTR_X_1
            })
        }
    }

    protected listenForContentSize_3(dimensions: IMediaScreenDimensions) {
        if (dimensions.width <= this._breakPoint_3) {
            this._invokeFooterChangeCallback({
                keyValue: "content-size",
                breakpoint: BreakPoints.XTR_3
            });
        } else if (dimensions.width > this._breakPoint_3) {
            this._invokeFooterChangeCallback({
                keyValue: "content-size",
                breakpoint: BreakPoints.XTR_X_3
            })
        }
    }
    private _initFooterControlStartupDimensions(dimensions: IMediaScreenDimensions) {
        this.listenForContentSize_1(dimensions);
        this.listenForContentSize_3(dimensions);
    }

    private listenerForCommonDimensionChanges(dimensions: IMediaScreenDimensions) {
        this.listenForContentSize_1(dimensions);
        this.listenForContentSize_3(dimensions);
    }
}



