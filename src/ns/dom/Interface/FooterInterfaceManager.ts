import { ControlIntializerInstance } from "ns/base/MediaQueries/ScreenControls/controlInitializerEvent";
import { IFooterScreenControlManager, IFooterDidChangeSizeCallback, IFooterScreenControlService, BreakPoints } from "ns/base/MediaQueries/ScreenControls/Services/footerControl";
import { LifeCycleEvents, Lifecycle } from "ns/common/lifecycle";
import { $ } from "ns/common/domListener";

/**
 * Since the breakpoint are minimal global variables are instead used;
 */

export class footerInterfaceManager {

    private _nsCommonFooterWrapper: HTMLDivElement | null;

    constructor(
        @IFooterScreenControlManager private readonly FooterScreenControl: IFooterScreenControlService
    ) {
        this._nsCommonFooterWrapper = null
        this._registerForLifeCycleEvents();
    };

    private _registerForLifeCycleEvents() {
        LifeCycleEvents.onPhaseDidChange.subscribe(this._listenerForLifecycleEvents.bind(this));
    };
    private _unregisterForLifeCyleEvents() {
        LifeCycleEvents.onPhaseDidChange.unsubscribe(this._listenerForLifecycleEvents.bind(this));
    }
    private _listenerForLifecycleEvents(phase: Lifecycle) {
        if (phase == Lifecycle.Restored) {
            this.initInterface();
            this._unregisterForLifeCyleEvents()
        }
    };
    private initInterface() {
        console.log("Footer Interface started")
        this._attachDomElement();
        this._contentManagementListenerSystem();
    };
    private _attachDomElement() {
        this._nsCommonFooterWrapper = $(".component-footer-wrapper");
        console.log(this._nsCommonFooterWrapper)
    }

    private _contentManagementListenerSystem() {
        this.FooterScreenControl.footerDidReachBreakPoint(this._listenerForAllChanges.bind(this))
        ControlIntializerInstance.CIEventControl!.emit("ConnectedBreakPointCallback","__FooterControl__")
    }
    private _listenerForAllChanges(args: IFooterDidChangeSizeCallback) {

        //content_size breakpoint
        if (args.breakpoint == BreakPoints.XTR_3 && args.keyValue == "content-font") {
            this._reduceFooterFontSize(true)
        } else if (args.breakpoint == BreakPoints.XTR_X_3 && args.keyValue == "content-font") {
            this._reduceFooterFontSize(false)

        }



        if (args.breakpoint == BreakPoints.XTR_1 && args.keyValue == "content-size") {
            this._snapTheFooter(true)
        } else if (args.breakpoint == BreakPoints.XTR_X_1 && args.keyValue == "content-size") {
            this._snapTheFooter(false)

        }


    }

    private _snapTheFooter(shouldSnap: boolean) {
        if (shouldSnap) {
            if (this._nsCommonFooterWrapper) {
                //@ts-ignore
                this._nsCommonFooterWrapper.style.setProperty("--ns-footer-display","block")
            }
        } else {
            if (this._nsCommonFooterWrapper) {
                //@ts-ignore
                this._nsCommonFooterWrapper.style.setProperty("--ns-footer-display","grid")

            }
        }
    }

    private _reduceFooterFontSize(shouldReduce: boolean) {
        if (shouldReduce) {
            if (this._nsCommonFooterWrapper) {
                //@ts-ignore
                this._nsCommonFooterWrapper.style.setProperty("--ns-footer-Biggest-font-size","30pt")
            }
        } else {
            if (this._nsCommonFooterWrapper) {
                //@ts-ignore
                this._nsCommonFooterWrapper.style.setProperty("--ns-footer-Biggest-font-size","40pt")

            }
        }
    }











};