import  {IWebComponents}  from "ns/typings/schw";
import { createViewLinkerManger } from "ns/dom/view_linkers/view_linker";


const Template_ = document.createElement("template");
Template_.innerHTML  = `
<div class="xb-academics-component">
    <div class="xb-wrapper">
        <div class="tl-x-o-text">The beautiful thing about learning is that no one can take it away from you.</div>
        <div class="xl-sub-content">...Our Academics...</div>
    </div>
</div>
`

class WelcomeNote extends HTMLElement implements IWebComponents {
    private _contentHandler: HTMLDivElement | null = null;
    private _trLine: HTMLDivElement | null = null;
  
    constructor() {
      super();
      this.appendChild(Template_.content.cloneNode(true));
    }
    connectedCallback() {
        this._initializeComponent()
    }
    private _initializeComponent() {
      this.__createComponentAttachment();
      this.__createAnimatiomFacilityFunction()
    }
    __createComponentAttachment() {
      this._contentHandler = this.querySelector(".xb-academics-component .xb-wrapper");
      this._trLine = this.querySelector(".xb-academics-component .xb-wrapper .tr-x-line");
    }
    __viewLinkAnimationInset() {
      if (this._contentHandler) {
        this._contentHandler.style.animation ="welcomeNoteAnimation_1 1.5s forwards";
      }
    }
    __viewLinkAnimationInset_2() {
      if ( this._trLine) {
        setTimeout(() => {
          this._trLine!.style.animation = " welcomeNoteAnimation_2 1s forwards";
        }, 900);
      }
    }
    __viewLinkeAnimationOutset() {
      if (this._contentHandler) {
        this._contentHandler.style.opacity ="0";
        this._contentHandler.style.transform ="translateX(-100px)";
        this._contentHandler.style.animation ="";
      }
    }
    __viewLinkeAnimationOutset_2() {
      if (this._trLine) {
        this._trLine!.style.opacity = "0";
        this._trLine!.style.width = "0px";
        this._trLine!.style.animation = "";
      }
    }
  
    __createAnimatiomFacilityFunction(){
        if(this._contentHandler && this._trLine){
            createViewLinkerManger({
                element : this._contentHandler,
                linkPosition : 150,
                LinkerCallbacks : {
                    inset : ()=>{
                      this.__viewLinkAnimationInset()
                    },
                    outset : ()=>{
                      this.__viewLinkeAnimationOutset()
                    }
                }
            });
            createViewLinkerManger({
                element : this._trLine,
                linkPosition : 150,
                LinkerCallbacks : {
                    inset : ()=>{
                        this.__viewLinkAnimationInset_2()
                    },
                    outset : ()=>{
                        this.__viewLinkeAnimationOutset_2()
                    }
                }
            })
        }
    }
}

customElements.define("ns-x-acdmw",WelcomeNote)