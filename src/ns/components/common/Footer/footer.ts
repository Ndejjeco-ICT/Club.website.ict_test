import { IWebComponents } from "ns/typings/schw"; 
import { LifeCycleEvents, Lifecycle } from "ns/common/lifecycle";
import { addDisposableEventListener } from "ns/common/domListener";
import { _navigateToBasePage } from "ns/components/common/Header/header";



const Template_ = document.createElement("template");
Template_.innerHTML = `
<footer class="component-footer">
<div class="component-footer-wrapper">
    <div class="component-section-1 section-comp">
        <div class="xtr-1 xtr-w">
            <div class="wrapper">
                <div class="tr1 school-badge-title">Ndejje Senior Secondary School</div>
                <div class="tr2">No Pains No Gains</div>
            </div>
        </div>
        <div class="xtr-2 xtr-w">
            <div class="wrapper">
                <div class="tr1">Join The Community</div>
                <ns-enroll-button></ns-enroll-button>
            </div>
        </div>
    </div>
    <div class="component-section-2 section-comp">
        <div class="xtr-1 xtr-component">
            <div class="content-wrapper">
                <div class="xtr-component-title">Info</div>
                <div class="xtr-data-wrapper">
                    <span class="x-number item">772410852</span>
                    <span class="x-email item">ndejje@gmail.com</span>
                </div>
            </div>
        </div>
        <div class="xtr-2 xtr-component">
            <div class="content-wrapper">
                <div class="xtr-component-title">Address</div>
                <div class="xtr-data-wrapper">
                    <span class="x-address-1 item">P.O.Box 193</span>
                    <span class="x-address-2 item">Bombo, Uganda</span>
                </div>
            </div>
        </div>
        <div class="xtr-3 xtr-component">
            <div class="content-wrapper">
                <div class="xtr-component-title">Follow</div>
                <div class="xtr-data-wrapper">
                    <span class="x-fl-link x-fl-facebook item"
                        title="Follow us on Facebook">Facebook</span>
                    <span class="x-fl-link x-fl-instagram item"
                        title="Follow us on Instagram">Instagram</span>
                </div>
            </div>
        </div>
        <div class="control-component">&UpArrow;</div>
    </div>
</div>
<div class="component-footer-copyright">
    <div class="wrapper">
    &copy 2022 Ndejje Senior Secondary School
    </div>
</div>
</footer>
`

export class FooterComponent extends HTMLElement implements IWebComponents {

    private _schBadgeTitle: HTMLDivElement | null = null;
    private _schFaceBookLink: HTMLSpanElement | null = null;
    private _schInstagramLink: HTMLSpanElement | null = null;
    private _schControlComponent: HTMLDivElement | null = null;
    constructor() {
        super();
        this.appendChild(Template_.content.cloneNode(true))
    };
    connectedCallback() {
        this.init()
    };
    init() {
        this.attachResourcesAndEventHandlers();
        this.attachEventListeners()
        LifeCycleEvents.phase = Lifecycle.Restored;
    }
    attachResourcesAndEventHandlers() {
        this._schBadgeTitle = this.querySelector(".school-badge-title");
        this._schFaceBookLink = this.querySelector(".x-fl-facebook");
        this._schInstagramLink = this.querySelector(".x-fl-instagram");
        this._schControlComponent = this.querySelector(".control-component");
    }
    attachEventListeners() {
        if (this._schBadgeTitle && this._schFaceBookLink && this._schInstagramLink && this._schControlComponent) {
            addDisposableEventListener(this._schBadgeTitle, "click", _navigateToBasePage);
            addDisposableEventListener(this._schFaceBookLink, "click", this._linkToFaceBookHandle.bind(this));
            addDisposableEventListener(this._schInstagramLink, "click", this._linkToInstagramHandle.bind(this));
            addDisposableEventListener(this._schControlComponent, "click", this._scrollToTopLevel.bind(this));
        }
    }
    
    _linkToFaceBookHandle() {
        
    };
    _linkToInstagramHandle() {
        
    }
    _scrollToTopLevel() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }
    
}

customElements.define("ns-footer", FooterComponent);