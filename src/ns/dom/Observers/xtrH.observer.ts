import {IDisposable,$} from "ns/common/domListener";



interface IXTRObserver extends IDisposable {
    reObeserve() : void;
}
interface IXTRObserverOptions<Q> {
    discreteElement : Q;
    callbackFunction : Function;
    resetCallback?:Function;
}

export class XTR1Observer<V extends HTMLElement>  implements IXTRObserver{

    private _discreteObserver:IntersectionObserver|null;
    private _discreteOberservedElement:V|null;
    private _discreteOberserverCallbackFuncton:Function|null;
    private _discreteObserverResetCallbackFunction:Function|undefined;

    constructor(discreteOptions:IXTRObserverOptions<V>) { 
        this._discreteOberservedElement  = discreteOptions.discreteElement; 
        this._discreteObserver = null;
        this._discreteOberserverCallbackFuncton = discreteOptions.callbackFunction;
        this. _discreteObserverResetCallbackFunction = discreteOptions.resetCallback;
        this._createDiscreteScrollOberserver()
    };

    private _executeDiscreteCallbackFunction(){
        if(this._discreteOberserverCallbackFuncton){
            this._discreteOberserverCallbackFuncton();
        }
    };
    private _executeDiscreteResetCallbackFunction(){
        if(this._discreteObserverResetCallbackFunction){
            this._discreteObserverResetCallbackFunction()
        }
    };
    

    private _createDiscreteScrollOberserver(){
        this._discreteObserver = new IntersectionObserver((__entry__)=>{
            if(__entry__[0].isIntersecting){
                this._executeDiscreteCallbackFunction()
            }else{
                this._executeDiscreteResetCallbackFunction()
            }
        })

        if(this._discreteOberservedElement){
            this._discreteObserver.observe(this._discreteOberservedElement)
        }
    }
    dispose(): void {
        this._discreteObserver!.unobserve(this._discreteOberservedElement!);
        this._discreteObserver = null;
    };
    reObeserve(){
        if(this._discreteOberservedElement){
            this._discreteObserver!.observe(this._discreteOberservedElement)
        }
    }
};

