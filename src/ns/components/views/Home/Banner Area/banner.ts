import { IWebComponents } from "ns/typings/schw";
import { AnimationProvider } from "ns/common/Animations";

export class BannerAreaComponent extends HTMLElement implements IWebComponents {

    private _commonWelcomeComponentSection: HTMLDivElement | null;

    constructor() {
        super();
        this._commonWelcomeComponentSection = null;
        this.innerHTML = `
            <div class="ponaco-splitview-1">
                <div class="wx-component-user-section">
                    <div class="welcome-note-section">
                        <div class="note-1">Ndejje Senior Secondary School</div>
                        <div class="note-2">Sharing And Educating Humanity.</div>
                        <ns-enroll-button></ns-enroll-button>
                    </div>
                </div>
            </div>
        `
    };
    connectedCallback() {
        this.init();  
    };
    init() {
        this.createComponentAttachment();
        this.createFlowAnimationInstructor()
    }
    createComponentAttachment() {
        this._commonWelcomeComponentSection = this.querySelector(".welcome-note-section")
    };
    animationResetInstructor(){
        if(this._commonWelcomeComponentSection){
            this._commonWelcomeComponentSection.style.opacity = "0";
            this._commonWelcomeComponentSection.style.transform = "translateX(-100px)";
        }
    }
   
    createFlowAnimationInstructor() {
        if(this._commonWelcomeComponentSection){
         
        }
    }

}

customElements.define("ns-x-banner",BannerAreaComponent)