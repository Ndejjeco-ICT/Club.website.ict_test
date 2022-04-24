import { IWebComponents } from "ns/typings/schw";


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
                        <div class="note-2">No Pain No Pains.</div>
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
        this.createFlowAnimation()
    }
    createComponentAttachment() {
        this._commonWelcomeComponentSection = this.querySelector(".welcome-note-section")
    };

    createFlowAnimation() {
        if (this._commonWelcomeComponentSection) {
            
        }
    }

}

customElements.define("ns-x-banner",BannerAreaComponent)