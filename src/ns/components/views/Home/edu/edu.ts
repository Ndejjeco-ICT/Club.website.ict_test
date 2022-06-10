import {IWebComponents} from "ns/typings/schw";
import { createViewLinkerManger } from "ns/dom/view_linkers/view_linker";

const Template_ = document.createElement("template");
Template_ .innerHTML = `
<div class="ponaco-component-edu">
    <div class="wrapper">
        <div class="info">Education  the Key.</div>
    </div>
</div>
`

export class EduComponent extends HTMLElement implements IWebComponents {


    private _eduElementHandle:HTMLDivElement|null;

    constructor() {  
        super()
        this.appendChild(Template_.content.cloneNode(true))
        this._eduElementHandle = null;
    }
    connectedCallback(){
        this.initializeComponent();
       
    };

    initializeComponent(){
        this.__createComponentAttachment()
        this.__createAnimationFacilityFunction();
    };
    __createComponentAttachment() {
        this._eduElementHandle= this.querySelector(".wrapper .info")
    };
    __viewLinkAnimationInset(){
        if (this._eduElementHandle) {
            this._eduElementHandle.style.animation  = "__eduAnimation__   1s forwards"
        }
    }
    __viewLinkAnimationOutset(){
        if (this._eduElementHandle) {
            this._eduElementHandle.style.opacity = "0";
            this._eduElementHandle.style.transform = "translateX(50px)";
        }
    }
    __createAnimationFacilityFunction() {
        console.log("didCreateAnimationBase",this._eduElementHandle);
        
        if (this._eduElementHandle) {
            createViewLinkerManger({
                element : this._eduElementHandle,
                linkPosition : 150,
                LinkerCallbacks : {
                    inset  : ()=>{
                        this.__viewLinkAnimationInset()
                    },
                    outset : () =>{
                        // this.__viewLinkAnimationOutset()
                    }
                }
            })
        }
    }



}
customElements.define("ns-x-edu",EduComponent)