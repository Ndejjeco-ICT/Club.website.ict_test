import { IWebComponents } from "ns/typings/schw";
import { createViewLinkerManger } from "ns/dom/view_linkers/view_linker";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="xb-vid-interview">
    <div class="xb-title-area">
        <div class="wrapper">Hear From Our Students.</div>
    </div>
    <div class="xb-wrapper">
        <div class="xb-content-container">
            <div class="vid-cover-poster">
                <div class="wrapper">
                    <div class="xty-image-control">
                        <div class="xty-ctrl" title="Play">&gtrless;</div>
                    </div>
                    <div class="xty-video-control">
                        <video src="" controls id="interview-video"></video>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

`;

class VidInterview extends HTMLElement implements IWebComponents {

    
    private _videoContentTitle:HTMLDivElement|null = null;
    private _videoElementLoader:HTMLDivElement|null = null;
    private _videoElementImagePoster:HTMLDivElement|null = null;
    private _videoElementHolder:HTMLVideoElement|null = null;

    constructor(){
        super();
        this.appendChild(Template_.content.cloneNode(true))
    }
    connectedCallback(){
        this.initializeComponent()
    }
    initializeComponent(){
        this._createComponentAttachment()
        this.__createAnimationFacilityFunction()
    }
    private _createComponentAttachment(){
        this._videoContentTitle = this.querySelector(".xb-vid-interview .xb-title-area");
        this._videoElementLoader = this.querySelector(".xb-vid-interview .xty-ctrl");
        this._videoElementImagePoster = this.querySelector(".xb-vid-interview .vid-cover-poster");
        this._videoElementHolder = this.querySelector(".xb-vid-interview  #interview-video")
    };
    __createAnimationFacilityFunction() {
        if (this._videoContentTitle) {
            createViewLinkerManger({
                element : this._videoContentTitle,
                linkPosition : 150,
                LinkerCallbacks : {
                    inset  : ()=>{
                        this._videoContentTitle!.style.animation =" __ReviewsAnimation__ 1s forwards"
                    },
                    outset : () =>{
                         ///
                    }
                }
            })
        }
    }
}

customElements.define("ns-x-vidinterview",VidInterview)