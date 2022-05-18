/**
 * Media Queries can easily be handled very well using Typescript
 * than using me
 * 
 * Using A Typescript Trick Called Memoize to store values
 */


import { addDisposableEventListener} from "ns/common/domListener";
import { IGlobalEventEmitter, globalEventEmitter } from "ns/common/events";
import {createInstance } from "ns/base/instanceCreators/instanceCreators";

export interface IMediaScreenDimensions {
    width: number,
    height: number;
}
export interface IMediaScrollPositions {
    X:number,
    Y:number
}

interface IMediaScreenManager{
    mediaWindowScreenDidResize: IGlobalEventEmitter<IMediaScreenDimensions>;
    mediaWindowScreenDidScroll:IGlobalEventEmitter<IMediaScrollPositions>;
}


export class MediaScreenManager implements IMediaScreenManager {

    public mediaWindowScreenDidResize: IGlobalEventEmitter<IMediaScreenDimensions>;
    public mediaWindowScreenDidScroll:IGlobalEventEmitter<IMediaScrollPositions>;

    constructor() { 
        this.mediaWindowScreenDidResize = new globalEventEmitter<IMediaScreenDimensions>();
        this.mediaWindowScreenDidScroll = new globalEventEmitter<IMediaScrollPositions>();
        this._registerEventListenerForScreenChange();
    };

    private _registerEventListenerForScreenChange() {
        addDisposableEventListener(window,"scroll",(e)=>{
            const positions:IMediaScrollPositions = {
                X : window.scrollX,
                Y : window.scrollY
            }
            setTimeout(()=>{
                this.mediaWindowScreenDidScroll.raiseEvent(positions)
            },9)
        })
        addDisposableEventListener(window, "resize", (e) => {
            const dimensions: IMediaScreenDimensions = {
                width: window.innerWidth,
                height: window.innerHeight,
            }
            //throttle event to prevent lagging of website;
            setTimeout(() => {
                this.mediaWindowScreenDidResize.raiseEvent(dimensions); 
            },9)
        })
    };

};

export const MediaScreenManagerControl = createInstance<IMediaScreenManager>(MediaScreenManager);