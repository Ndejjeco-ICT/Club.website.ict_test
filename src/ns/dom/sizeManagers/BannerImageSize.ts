/**
 * The Banner Image size Manager
 */
import { MediaScreenManagerControl,IMediaScreenDimensions } from "ns/base/MediaQueries/mediaQueries";
import { $ } from "ns/common/domListener";


export class BannerImageSizer {

    private _bannerImagerElement: HTMLDivElement | null;

    constructor() {
        this._bannerImagerElement = null;
        this._initializeBannerImageSizer()
    };

   
    private _attachHostDomElement() {
        this._bannerImagerElement = $(".banner-image");
    }

    private _startupInitialDefaultSize() {
        if (this._bannerImagerElement) {
            this._bannerImagerElement.style.width = `${window.innerWidth}px`;
        }
    };

    private _contentInterfaceListener() {
        MediaScreenManagerControl.mediaWindowScreenDidResize.subscribe(this._listenerForInterfaceChange.bind(this));
    };
    private _listenerForInterfaceChange(dimensions:IMediaScreenDimensions) {
        if (this._bannerImagerElement) {
            this._bannerImagerElement.style.width = `${dimensions.width}px`
        }
    }

    private _initializeBannerImageSizer() {
        this._attachHostDomElement();
        this._startupInitialDefaultSize();
        this._contentInterfaceListener();
        console.log("DidInitializeBannerImage")
    }

}