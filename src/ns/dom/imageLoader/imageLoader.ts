

/**
 * development image Loader
 */


interface IImageLoaderOptions {

    source : string;
    element:HTMLDivElement;
    hasGradientRefill : boolean;
    gradientValue?:string;

}

export interface IIAsyncImageLoad {
    LoadImage() :Promise<void>;
}

export class AsyncImageLoader implements IIAsyncImageLoad {

    private  _currentElement:HTMLDivElement|null  = null;
    private _currentSource:string|null = null;
    private isElementAvailable:boolean = false;
    private _hasGradient:boolean = false;
    private _gradientValue:string|undefined = "";
    constructor(options:IImageLoaderOptions){
        this._currentElement = options.element;
        this._currentSource = options.source;
        this._hasGradient = options.hasGradientRefill;
        this._gradientValue = options.gradientValue;
        this._initializeImageLoader()
    }

    private _initializeImageLoader(){
        if(this._currentElement){
            this.isElementAvailable = true;
        }
    }   

    private __imageLoaderBundle(){
        if(!this._hasGradient && this._currentSource){
            this._currentElement!.style.backgroundImage = `url(${this._currentSource})`;
        }else{
            this._currentElement!.style.backgroundImage = `
            ${this._gradientValue},
            url(${this._currentSource})
            `;
        }
    }
    public async LoadImage(){
        return new Promise<void>((c,e)=>{
            this.__imageLoaderBundle()
            c();
        });
    }
}