
interface ICommonEventsCallback {
    (...args: any): void;
}
export interface ICommonEvents<T> {
    addListener(event: string, callbackFunction: ICommonEventsCallback): void;
    removeListener(event: string, callbackFunction: ICommonEventsCallback): void;
    emit(event: string, ...args:T[]): void;
}

/**
 * The Common Event Listener, once created creates events that elements that subscribe to it can listen to 
 */

export class commonEvents<K> implements ICommonEvents<K> {

    //storage for the events
    private _EventStorage: Map<string,ICommonEventsCallback>

    constructor() {
        this._EventStorage = new Map<string, ICommonEventsCallback>();
    };

    addListener(event: string, callbackFunction: ICommonEventsCallback): void {
        this._EventStorage.set(event,callbackFunction)
    };
    removeListener(event: string, callbackFunction: ICommonEventsCallback): void {
        if (this._EventStorage.has(event)) {
            this._EventStorage.delete(event);
        }
    }
    emit(event: string, ...args: K[]): void {
        if (this._EventStorage.has(event)) {
            this._EventStorage.get(event)!.apply(null,args)
        }
    }
};


/**
 * Creates an event that personel can subscribe to and once the 
 * event is fired all subscriber will listen to is globally 
 * and add a callback method to be called when all subscribers 
 * have heard the event.
 */

interface IGlobalEventEmitterHandlerSubscriber<T>{
    (args:T):void;
}

export interface IGlobalEventEmitter<T> {


    /**
     *Used to raiseEvent; 
     * @param args Arguments to be dispatched to the subscribers 
     */
    raiseEvent(...args:T[]):void

    /**
     * Used To Subscribe to An Event;
     * @param handler A method to Invoke When the Event is Raised
     */
    subscribe(handler:IGlobalEventEmitterHandlerSubscriber<T>):void;
    /**
     * Used to Unsubscribe to An Event;
     * @param handler 
     */
    unsubscribe(handler:IGlobalEventEmitterHandlerSubscriber<T>):void;
    //dont forget to dispose;

    /**
     * Dispose the Event Emitter;
     */
    dispose():void;

    /**
     * Function to be called when all event subscribers are settled;
     */
    didFireHandler:Function|null;

};

export class globalEventEmitter<K> implements IGlobalEventEmitter<K> {

    protected _eventListeners:Function[]|null = []
    public didFireHandler:Function|null = null;


    raiseEvent(...args:K[]){
        if(this._eventListeners != null && this._eventListeners!.length > 0){
            this._executeSubscribersWithArgs(args);
        }else{
            console.warn(`Raising Event With No Subscribers ${this}`)
        }
    };
    protected _executeSubscribersWithArgs(args:K[]){
        let _indicator =this._eventListeners!.length;
        for(let i = 0; i < this._eventListeners!.length; i++){
            this._eventListeners![i].apply(null,args);
            _indicator--;
            if(_indicator == 0){
                this._invokeDidFireHandler();
            }
        }
    }
    private _invokeDidFireHandler(){
        if(this.didFireHandler != null){
            this.didFireHandler();
        }
    }

   private _isRecorded(handler:IGlobalEventEmitterHandlerSubscriber<K>){
       if(this._eventListeners!.indexOf(handler) == -1){
           return false;
       }else{
           return true
       }
   };
   private _deleteHandler(handler:IGlobalEventEmitterHandlerSubscriber<K>){
        if(this._isRecorded(handler)){
            let i = this._eventListeners!.indexOf(handler);
            this._eventListeners!.splice(i,1)
        }
   }

    subscribe(handler:IGlobalEventEmitterHandlerSubscriber<K>){
        if(!this._isRecorded(handler)){
            this._eventListeners!.push(handler);
        }
       
    };
    unsubscribe(handler:IGlobalEventEmitterHandlerSubscriber<K>){
        this._deleteHandler(handler)
    }

    dispose(){
        this._eventListeners = null;
    }


}

