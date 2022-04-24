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

interface IMediaScreenManager{
    mediaWindowScreenDidResize: IGlobalEventEmitter<IMediaScreenDimensions>;
}


export class MediaScreenManager implements IMediaScreenManager {

    public mediaWindowScreenDidResize: IGlobalEventEmitter<IMediaScreenDimensions>;

    constructor() { 
        this.mediaWindowScreenDidResize = new globalEventEmitter<IMediaScreenDimensions>();
        this._registerEventListenerForScreenChange();
    };

    private _registerEventListenerForScreenChange() {
        addDisposableEventListener(window, "resize", (e) => {
            const dimensions: IMediaScreenDimensions = {
                width: window.innerWidth,
                height: window.innerWidth,
            }
            //throttle event to prevent lagging of website;
            setTimeout(() => {
                this.mediaWindowScreenDidResize.raiseEvent(dimensions); 
            },9)
        })
    };

};

export const MediaScreenManagerControl = createInstance<IMediaScreenManager>(MediaScreenManager);