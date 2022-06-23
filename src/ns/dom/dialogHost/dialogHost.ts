import  {commonEvents, ICommonEvents} from "ns/common/events"

interface IIDialogSubscribers {
    element : HTMLDivElement;
    key : string;
}

interface IIDialogHostOptions {

    subscribers  : IIDialogSubscribers[];

}
export interface IIDialogHost {
    invokeDialogEventManager(key:string) :void;
    closeDialog():Promise<void>;
    initializeDialogHost():void;

}
export const dialogHostEventManager  = new commonEvents<string>()
export class dialogHost implements IIDialogHost{

    private isVisible:boolean = false;
    private _subscribers:IIDialogSubscribers[];
    private _subscribersMap:Map<string,HTMLDivElement> = new Map();
    private _dialogHostElement:HTMLDivElement;
    private _currentVisibleElement:HTMLDivElement|null=  null;


    constructor(options:IIDialogHostOptions){
        this._dialogHostElement = document.querySelector(".dialog-host")!
        this._subscribers = options.subscribers;
    };
    initializeDialogHost(): void {
        this._init()
    }
    private _init(){
        this._resolveSubscribers()
        this.__listenerRequestEvents()
    }
    closeDialog(): Promise<void> {
        return new Promise<void>((c,e)=>{
            if(this.isVisible){
                this._dialogHostElement.style.display = "none";
                this.hideCurrentVisibleElement()
                this.isVisible = false;
            }
            c()
        })
    }
    private _resolveSubscribers(){
        this._subscribers.forEach((v)=>{
            if(!this._subscribersMap.has(v.key)){
                this._subscribersMap.set(v.key,v.element)
            }
        })
    }
    private _checkWhetherDialogIsVisible(){
        return this.isVisible ? true : false;
    }
    private hideCurrentVisibleElement(){
        if(this._currentVisibleElement){
            this._currentVisibleElement .style.display = "none";
            this._currentVisibleElement = null;
        }
    }

    private generateVisibleElement(key:string){
        if(this._subscribersMap.has(key)){
            if(this._checkWhetherDialogIsVisible()){
                if(this._currentVisibleElement == null){
                    let _asertedElement =  this._subscribersMap.get(key)!;
                    _asertedElement.style.display = "block";
                    this._currentVisibleElement = _asertedElement;
                }
            
            }
        }
    }

    __listenerRequestEvents(){
        dialogHostEventManager.addListener("close-dialog",this.closeDialog.bind(this))
        dialogHostEventManager.addListener("invoke-dialog",this.invokeDialogEventManager.bind(this))
    }

    invokeDialogEventManager(key: string) {
            if(!this.isVisible){
                this._dialogHostElement.style.display = "block"
                this.isVisible = true;
                this.generateVisibleElement(key)
            }
    }

}