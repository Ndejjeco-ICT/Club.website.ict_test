
/**
 * Common Interface for disposing ie ensuring garbage collection
 * 
 */
export interface IDisposable {
    dispose(): void;
}


/**
 * This is a type of event that can be added and easiy removed using 
 * the dispose method without  neccessity of calling remove event Listener Function
 */

export class domListener implements IDisposable {

    private _element: EventTarget|null;
    private _event: string|null;
    private _callbackFunction: EventListener | null;

    constructor(element:EventTarget,event:string,callbackFunction:EventListener) {
        this._element = element;
        this._event = event;
        this._callbackFunction = callbackFunction;
        this.init();
    };

    //Begin by attaching the event listener;

    private init() {
        if (this._element && this._event && this._callbackFunction) {
            this._element.addEventListener(this._event,this._callbackFunction)
        }
    };


    //then dispose this event listener 
    dispose(): void {
        if (this._element && this._event && this._callbackFunction) {
            this._element.removeEventListener(this._event, this._callbackFunction);
        }

        //clear all other resources without neccessity
        this._element = null;
        this._event = null;
        this._callbackFunction = null;
    }

};

//use this method to remove and attach the disposable event listener

export function addDisposableEventListener(element: EventTarget, event: string, listener: EventListener):IDisposable {
    return new domListener(element,event,listener)
    
}

export function $<T>(e: string) {
    return document.querySelector(e)! as unknown as T;
};
