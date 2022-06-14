
interface IScrollBMonitorOptions {
    elementName:string;
    elementID:HTMLElement
}

export class ScrollBMonitor {

    private _element:HTMLElement;
    private _elementName:string;


    constructor(options:IScrollBMonitorOptions){
        this._element = options.elementID;
        this._elementName = options.elementName
        this.__init()
    };

    private __init(){
        let _clientRect = this._element.getBoundingClientRect()
        console.log({
            sourceName : this._elementName,
            ElementID  : this._element,
            x_position : _clientRect.x,
            y_position : _clientRect.y,
            distanceFromTheTop : _clientRect.top
        })
    }

}