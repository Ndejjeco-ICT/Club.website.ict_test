import { IWebComponents } from "ns/typings/schw";
import { createViewLinkerManger } from "ns/dom/view_linkers/view_linker";
import { addDisposableEventListener } from "ns/common/domListener";
import { _navigateToAboutusPage, _navigateToAcademicsPage } from "ns/components/common/Header/header"; 

const _svgDataContent = `
<svg 
 xmlns="http://www.w3.org/2000/svg"
 xmlns:xlink="http://www.w3.org/1999/xlink"
 width="11.875in" height="1.611in">
<text kerning="auto" font-family="Myriad Pro" fill="rgb(0, 0, 0)" font-size="141.667px" x="0px" y="100.7px"><tspan font-size="141.667px" font-family="Montserrat Alternates" fill="#00A4E0">Ndejje&#32;S&#46;S&#46;S</tspan></text>
</svg>
`

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="pride-x-component">
    <div class="container">
    <div class="welcome-text">
        <div class="welcome-text-wrapper">
            No Pains No Gains
        </div>
        <div class="xtr-2">
            #Joy&Pride
        </div>
    </div>
    <div class="control-button-container">
        <div class="expl-button-container" title="Explore the Goodness of the School of Joy And Pride">Explore</div>
    </div>
    </div>
</div>

`

export class PrideComponent extends HTMLElement implements IWebComponents {
    private _prideContainer:HTMLDivElement|null
    private _contentAboutButton:HTMLDivElement|null = null;
    constructor() {
        super();
        this._prideContainer = null;
        this.appendChild(Template_.content.cloneNode(true));

    }
    connectedCallback() {
        this.initializeComponent();
    }
    private initializeComponent() {
        this.__createComponentAttachmnent()
        this.__createAnimationFacilityFunction()
        this._createEventListenerForContentButton()
    }

    __createComponentAttachmnent(){
        this._prideContainer = this.querySelector(".pride-x-component .container");
        this._contentAboutButton  = this.querySelector(".pride-x-component .container .control-button-container")
    }
    __viewLinkAnimationInset(){
        if (this._prideContainer) {
            this._prideContainer.style.animation  = "__bannerAnimation__  .5s forwards"
        }
    }
    __viewLinkAnimationOutset(){
        if (this._prideContainer) {
            this._prideContainer.style.opacity = "0";
            this._prideContainer.style.transform = "translateX(-50px)";
        }
    }
    _createEventListenerForContentButton(){
        if(this._contentAboutButton){
            this._contentAboutButton.addEventListener("click",()=>{
                _navigateToAboutusPage()
            })
        }
    }
    __createAnimationFacilityFunction() {
        if (this._prideContainer) {
            createViewLinkerManger({
                element : this._prideContainer,
                linkPosition : 0,
                LinkerCallbacks : {
                    inset  : ()=>{
                        this.__viewLinkAnimationInset()
                    },
                    outset : () =>{
                        this.__viewLinkAnimationOutset()
                    }
                }
            })
        }
    }

}
customElements.define("ns-x-pride", PrideComponent);