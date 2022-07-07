import { IWebComponents } from "ns/typings/schw";
import { createViewLinkerManger } from "ns/dom/view_linkers/view_linker";
import { addDisposableEventListener } from "ns/common/domListener";

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
    private _createPlayPauseEventListener(){
        if(this._videoElementLoader){
            addDisposableEventListener(this._videoElementLoader,"click",this._initializeVideoLoadAccquintance.bind(this))

        }
    }
    /**
     * Display video element and auto start
     */
    private _initializeVideoLoadAccquintance(){
        this._createLoadingAnimation();
        this._loadMainVideoElementAsync().then(()=>{
            this._displayVideoElementAndAutoStart();
            this._disableLoadingAnimation();
        })
    }
    private _displayVideoElementAndAutoStart(){
        if(this._videoElementHolder){
            this._videoElementHolder.style.display = "block";
            this._videoElementHolder.play();
        }
    }
    private _loadMainVideoElementAsync(){
        return new Promise((c,e)=>{
            if(this._videoElementHolder){
                //set video element source asynchronous
                this._videoElementHolder.src = "./vids/students.mp4";
                this._videoElementHolder.controls = true;
            }
            
        })
    }
    /**
     * Display load animation
     */
    private _createLoadingAnimation(){
        if(this._videoElementLoader){
            this._videoElementLoader.innerHTML = ""
            this._videoElementLoader.style.scale = "2.5";
            this._videoElementLoader.style.backgroundColor = "unset";
            this._videoElementLoader.style.color = "unset";
            this._videoElementLoader.style.borderTopColor = "V.$ns-layout-color";
            this._videoElementLoader.style.animation = "rotate .5s linear infinite";
        }
    }
    /**
     * Hide LoadAnimation
     */
     private _disableLoadingAnimation(){
        if(this._videoElementLoader){
            this._videoElementLoader.style.animation = "rotate .5s linear infinite";
            this._videoElementLoader.style.opacity = "0";
            this._videoElementLoader.style.display = "none"
        }
    }

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