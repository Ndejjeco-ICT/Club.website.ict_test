import { IWebComponents } from "ns/typings/schw";
import { createViewLinkerManger } from "ns/dom/view_linkers/view_linker";


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
        this.initializeComponent();
    };

    //Intialize component
    initializeComponent() {
        this.__createComponentAttachment();
        this.__createAnimationFacilityFunction();

    }
    __createComponentAttachment() {
        this._commonWelcomeComponentSection = this.querySelector(".welcome-note-section")
    };



    /**
     * Animations inset and outsets
     */

    __viewLinkAnimationInset(){
        if (this._commonWelcomeComponentSection) {
            this._commonWelcomeComponentSection.style.animation  = "__bannerAnimation__  1s forwards"
        }
    }
    __viewLinkAnimationOutset(){
        if (this._commonWelcomeComponentSection) {
            this._commonWelcomeComponentSection.style.opacity = "0";
            this._commonWelcomeComponentSection.style.transform = "translateX(-50px)";
            this._commonWelcomeComponentSection.style.animation  = ""
        }
    }

    /**
     * Create Animation Bed
     */

    __createAnimationFacilityFunction() {
        if (this._commonWelcomeComponentSection) {
            createViewLinkerManger({
                element : this._commonWelcomeComponentSection,
                linkPosition : 150,
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

customElements.define("ns-x-banner", BannerAreaComponent)