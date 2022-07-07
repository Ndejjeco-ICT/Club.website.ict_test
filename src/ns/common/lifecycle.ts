import { IGlobalEventEmitter, globalEventEmitter } from "ns/common/events";
import { createInstance } from "ns/base/instanceCreators/instanceCreators";

/**
 * Lifecycle events help to run differenet things consecutively
 * with out encountering thread pool hold
 */


export const enum Lifecycle {

    /**
     * The Website is Initializing
     * Webcomponents are being created and initialized
     */
    Initializing = 0,

    /**
     * WebComponents have been fully created
     */
    Started = 1,
    
    /**
     * The Route has Carried Out Navigation to the required hash
     */
    Ready = 2,

    /**
     * The Website and all event listener have been attached;
     */

    Restored = 3,

    /**
     * On that might suddenly happen in future
     */
    Eventually = 4
};


interface ILifecycWindowEvents {
  

    /**
     * an event emitted when the phase changes
     */
    onPhaseDidChange:IGlobalEventEmitter<Lifecycle>;

    phase:Lifecycle

}

class LifeCycleManager implements ILifecycWindowEvents {
    public _phase: Lifecycle;
    public onPhaseDidChange: IGlobalEventEmitter<Lifecycle>;
    constructor() {
        this._phase = Lifecycle.Initializing;
        this.onPhaseDidChange = new globalEventEmitter<Lifecycle>();
    };
    

    /**
     * Set the current Phase for the Process workflow.
     */
    set phase(phase: Lifecycle){
        this._phase = phase;
        this.onPhaseDidChange.raiseEvent(phase);
    }
};



export const LifeCycleEvents = createInstance<ILifecycWindowEvents>(LifeCycleManager);