import { MediaScreenManagerControl, IMediaScrollPositions } from "ns/base/MediaQueries/mediaQueries"


interface IViewLinkerCallback {
    inset: Function;
    outset: Function;
}

interface IViewLinker {

    element: HTMLElement;
    linkPosition: number
    LinkerCallbacks: IViewLinkerCallback
}


export class ViewLinker {

    private _element: HTMLElement;
    private _linkPosition: number;
    private _viewLinkerInset: Function;
    private _viewLinkerOutset: Function;
    private _didDoInitialCheck: boolean = false;

    private _didSetInset: boolean;
    private _didSetOutSet: boolean;

    constructor(linkerOptions: IViewLinker) {
        this._didSetInset = false;
        this._didSetOutSet = false;
        this._viewLinkerInset = linkerOptions.LinkerCallbacks.inset;
        this._viewLinkerOutset = linkerOptions.LinkerCallbacks.outset;
        this._element = linkerOptions.element;
        this._linkPosition = linkerOptions.linkPosition;
        this._init()
    };
    private _init() {
        this._initializeMountCheckUp()
        this._registerForWindowScrollAbility();
    };
    private _initializeMountCheckUp() {
        setTimeout(() => {
            this._updateElementRevealHeight();
        }, 50)
    }

    private async _updateElementRevealHeight() {
        return new Promise<void>((c, e) => {
            let _currentWindowHeight = window.innerHeight;
            let _elementdistanceFromTop = this._element.getBoundingClientRect().top;

            if (_elementdistanceFromTop < (_currentWindowHeight - this._linkPosition)) {
                this._dispatchInSet()
            } else {
                this._dispatchOutSet()
            }
            c()
        })
    }

    private _dispatchOutSet() {
        if (!this._didSetInset) {
            this._viewLinkerOutset()
            this._didSetInset = true;
            this._didSetOutSet = false;
        }
    }

    private _dispatchInSet() {
        if (!this._didSetOutSet) {
            this._viewLinkerInset();
            this._didSetOutSet = true;
            this._didSetInset = false;
        }
    }



    private _registerForWindowScrollAbility() {
        MediaScreenManagerControl.mediaWindowScreenDidScroll.subscribe(this._listenerForWindowDidScroll.bind(this))
    }
    private _listenerForWindowDidScroll(windowScrollArgs: IMediaScrollPositions) {
        this._updateElementRevealHeight()
    };


};


function I(linkerOptions: IViewLinker) {
    return new ViewLinker(linkerOptions)
}

export const createViewLinkerManger = I;