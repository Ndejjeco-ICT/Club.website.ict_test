import { IWebComponents } from "ns/typings/schw";
import { createViewLinkerManger } from "ns/dom/view_linkers/view_linker";
// 


export class QuoteComponent extends HTMLElement implements IWebComponents {
    private _mainContentHolder: HTMLDivElement | null;
    constructor() {
        super();
        this._mainContentHolder = null;
        this.innerHTML = `
        <div class="ponaco-splitview-6">
            <div class="wx-component-6">
                <div class="main-content-holder">
                    <div class="x-content-1">Time has a wonderful way of showing us what matters</div>
                    <div class="x-content-2">Dr. Charles Kahigiriza</div>
                </div>
            </div>
        </div>
        `
    }
    connectedCallback(){
        this.initializeComponent();
    }

    initializeComponent(){
        this.__createComponentAttachment();
        this.__createAnimationFacilityFunction()
    }

    __createComponentAttachment(){
        this._mainContentHolder = this.querySelector(".main-content-holder")

    }
     /**
     * Animations inset and outsets
     */

      __viewLinkAnimationInset(){
        if (this._mainContentHolder) {
            this._mainContentHolder.style.animation  = "__QuoteAnimation__ 1s forwards"
        }
    }
    __viewLinkAnimationOutset(){
        if (this._mainContentHolder) {
            this._mainContentHolder.style.opacity = "0";
            this._mainContentHolder.style.transform = "translateX(50px)";
        }
    }

    /**
     * Create Animation Bed
     */

    __createAnimationFacilityFunction() {
        console.log("didCreateAnimationBase",this._mainContentHolder);
        
        if (this._mainContentHolder) {
            createViewLinkerManger({
                element : this._mainContentHolder,
                linkPosition : 250,
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

customElements.define("ns-x-quote", QuoteComponent);