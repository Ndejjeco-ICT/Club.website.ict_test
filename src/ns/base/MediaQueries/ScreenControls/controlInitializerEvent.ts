import { commonEvents, IGlobalEventEmitter, ICommonEvents } from "ns/common/events";
import { createInstance } from "ns/base/instanceCreators/instanceCreators";

type ExpectedControlArgs = "__HeaderControl__" | "__FooterControl__";

interface IControlInitializer {
    didInitiateAllSurfaceControls(callback: () => void): void;
    CIEventControl: ICommonEvents<ExpectedControlArgs> | null;
}

class ControlIntializer implements IControlInitializer {
    private _didInitiateControlsCallback: (() => void) | null;
    private _didInitializeHeaderControl: boolean;
    private _didInitializeFooterControl: boolean;
    public CIEventControl: ICommonEvents<ExpectedControlArgs> | null;
    constructor() {
        this._didInitializeHeaderControl = false;
        this._didInitializeFooterControl = false;
        this.CIEventControl = null;
        this._didInitiateControlsCallback = null;
        this._connectMajorEventListener();
        this._registerCIEventListener();
    }
    private _connectMajorEventListener() {
        this.CIEventControl = createInstance<ICommonEvents<ExpectedControlArgs>>(commonEvents)
    }
    private _registerCIEventListener() {
        if (this.CIEventControl) {
            this.CIEventControl.addListener("ConnectedBreakPointCallback", this._listenForControlBreakPointInitialization.bind(this));
        }
    };
    private _listenForControlBreakPointInitialization(args: ExpectedControlArgs) {
        if (args == "__FooterControl__") {
            this._didInitializeFooterControl = true;
            this._tryAndCheckCurrentState();
        } else {
            this._didInitializeHeaderControl = true;
            this._tryAndCheckCurrentState();
        }
    };
    private _tryAndCheckCurrentState() {
        if (this._didInitializeHeaderControl && this._didInitializeFooterControl) {
            if (this._didInitiateControlsCallback) {
                this._didInitiateControlsCallback();
            }
        }
    };
    didInitiateAllSurfaceControls(callback: () => void): void {
        this._didInitiateControlsCallback = callback;
    };
    

}

export const ControlIntializerInstance = createInstance<IControlInitializer>(ControlIntializer); 