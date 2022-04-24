import { ControlIntializerInstance } from "ns/base/MediaQueries/ScreenControls/controlInitializerEvent";
import { IHeaderScreenControlManager, IHeaderScreenControlService, IHeaderDidChangeSizeCallback, BreakPoints } from "ns/base/MediaQueries/ScreenControls/Services/headerControl"
import { LifeCycleEvents,Lifecycle } from "ns/common/lifecycle";
import { $ } from "ns/common/domListener";
//Don't instantiate this class

type screenVisiblityElementMemoize = "visible" | "hidden" | "outOfRange"; 

export class headerInterfaceManager {
    private _badgeWrapper: HTMLDivElement|null;
    private _badgeWrapperTitle: HTMLDivElement|null;
    private _badgeWrapperBadge: HTMLDivElement | null;
    private _navigationbarHost: HTMLDivElement | null;
    private _enrollBtn: HTMLDivElement|null;
    private _navigationBarComponent: HTMLDivElement|null;
    private _wxBars: HTMLDivElement|null;

    private _navigationBarScreenMemoize : screenVisiblityElementMemoize


    constructor(
        @IHeaderScreenControlManager private readonly HeaderScreenControl:IHeaderScreenControlService)
    {
        this._navigationbarHost = null;
        this._navigationBarScreenMemoize = "outOfRange";
        this._badgeWrapper = null;
        this._badgeWrapperTitle = null;
        this._badgeWrapperBadge = null;
        this._enrollBtn = null;
        this._navigationBarComponent = null;
        this._wxBars = null;
        this._registerForLifeCycleEvents();
    };
    private _registerForLifeCycleEvents() {
        LifeCycleEvents.onPhaseDidChange.subscribe(this._listenerForLifecycleEvents.bind(this));
    };
    private _unregisterForLifeCyleEvents() {
        LifeCycleEvents.onPhaseDidChange.unsubscribe(this._listenerForLifecycleEvents.bind(this));
    }
    private _listenerForLifecycleEvents(phase:Lifecycle) {
        if (phase == Lifecycle.Restored) {
            this.initInterface();
            this._unregisterForLifeCyleEvents()
        }
    };

    private initInterface() {
        this._attachDomElements();
        this._contentManagementListenerSystem();
    }

    private _attachDomElements() {
        this._badgeWrapper = $(".wx-badge-wrapper");
        this._badgeWrapperTitle = $(".wx-badge-wrapper .badge-title");
        this._badgeWrapperBadge = $(".wx-badge-wrapper .badge-icon");
        this._enrollBtn = $(".wx-header-component-area ns-enroll-button");
        this._navigationBarComponent = $(".wx-navigation-bar-half-area");
        this._wxBars = $(".wx-bars");
        this._navigationbarHost = $(".wx-component-header-section")
    }

    private _contentManagementListenerSystem() {
        this.HeaderScreenControl.headerDidReachBreakPoint(this._listenerForAllChanges.bind(this));
        ControlIntializerInstance.CIEventControl!.emit("ConnectedBreakPointCallback", "__HeaderControl__");

    };

    private _listenerForAllChanges(args: IHeaderDidChangeSizeCallback) {
        //ensure to be specific with the breakpoint and the keyvalue
        if (args.breakpoint == BreakPoints.NAVIGATION_BREAKPOINT && args.keyValue == "navigationBar") {
            this._$hideOrShowNavigationBarAndEnrollButton(false)
        } else if(args.breakpoint == BreakPoints.NAVIGATION_BREAKPOINT_X && args.keyValue == "navigationBar"){
            this._$hideOrShowNavigationBarAndEnrollButton(true)
        }

        //First Initial BreakPoints for The BadgeWrapper;
        if (args.breakpoint == BreakPoints.BADGE_BREAKPOINT_1 && args.keyValue == "badge-wrapper") {
            this._removeInitialbadgeWrapperMargin(true)
        } else if (args.breakpoint == BreakPoints.BADGE_BREAKPOINT_2 && args.keyValue == "badge-wrapper") {
            this._reduceBadgeWrapperTitleFontSize(true)
        } else if (args.breakpoint == BreakPoints.BADGE_BREAKPOINT_3 && args.keyValue == "badge-wrapper") {
            this._hideOrDisplaybadgeTitle(true);
        }

        //Second Initial breakPoints For the badgeWrapper
        if (args.breakpoint == BreakPoints.BADGE_BREAKPOINT_X_1 && args.keyValue == "badge-wrapper") {
            this._removeInitialbadgeWrapperMargin(false)
            
        } else if (args.breakpoint == BreakPoints.BADGE_BREAKPOINT_X_2 && args.keyValue == "badge-wrapper") {
            this._reduceBadgeWrapperTitleFontSize(false)
            
        } else if (args.breakpoint == BreakPoints.BADGE_BREAKPOINT_X_3 && args.keyValue == "badge-wrapper") {
            this._hideOrDisplaybadgeTitle(false);
            
        }
    };

    //badge Wrapper Managers

    private _hideOrDisplaybadgeTitle(shouldHide: boolean) {
        if (shouldHide) {
            if (this._badgeWrapperTitle) {
                this._badgeWrapperTitle.style.display = "none"
            }
        } else {
            if (this._badgeWrapperTitle) {
                this._badgeWrapperTitle.style.display = "flex";
            }
        }
    }

    private _reduceBadgeWrapperTitleFontSize(shouldReduce: boolean) {
        if (shouldReduce) {
            if (this._badgeWrapperTitle) {
                this._badgeWrapperTitle.style.fontSize = "9pt";
            }
        } else {
            if (this._badgeWrapperTitle) {
                this._badgeWrapperTitle.style.fontSize = "10pt";
            }
        }
    }

    private _removeInitialbadgeWrapperMargin(shouldRemove: boolean) {
        if (shouldRemove) {
            if (this._badgeWrapper) {
                this._badgeWrapper.style.marginLeft = "0px";
            }
        } else {
            if (this._badgeWrapper) {
                this._badgeWrapper.style.marginLeft = "30px";
            }
        }
    }




    //Navigationbar Managers

    private __displayMinifiedNavigationHost(display:boolean) {
        if (display) {
            if (this._navigationbarHost) {
                this._navigationbarHost.style.height = "70px";
            }
        } else {
            if (this._navigationbarHost) {
                this._navigationbarHost.style.height = "130px";
            }
        }
    }

    private __displayOrHideNavigationbars(display: boolean) {
        if (display) {
            if (this._wxBars) {
                this._wxBars.style.display = "flex";
            }
        } else {
            if (this._wxBars) {
                this._wxBars.style.display = "none";
            }
        }
    }

    private __displayNavigationBar() {
        //cache context to prevent properties from being  set multiple times
        if (this._navigationBarScreenMemoize == "hidden" || this._navigationBarScreenMemoize == "outOfRange") {
            if (this._navigationBarComponent && this._enrollBtn) {
                this._navigationBarComponent.style.display = "flex";
                this._enrollBtn.style.display = "block";
            }
            this.__displayOrHideNavigationbars(false)
            this.__displayMinifiedNavigationHost(false)
            //store current state;
            this._navigationBarScreenMemoize  = "visible"
            
        }           
        
    };
    private __hideNavigationBar() {
        //cache context to prevent properties from being  set multiple times
        if (this._navigationBarScreenMemoize == "visible" || this._navigationBarScreenMemoize == "outOfRange") {
            if (this._navigationBarComponent && this._enrollBtn) {
                this._navigationBarComponent.style.display = "none";
                this._enrollBtn.style.display = "none";
            };
            this.__displayOrHideNavigationbars(true)
            this.__displayMinifiedNavigationHost(true)
            //store current state
            this._navigationBarScreenMemoize = "hidden";
        }
        
    }

    //commonaction
    private _$hideOrShowNavigationBarAndEnrollButton(visible: boolean) {
        if (visible) {
            this.__displayNavigationBar();    
            
        } else {
            this.__hideNavigationBar();
            
        }
    }

};