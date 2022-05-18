import { IWebComponents } from "ns/typings/schw";
import { LifeCycleEvents, Lifecycle } from "ns/common/lifecycle";
import { addDisposableEventListener } from "ns/common/domListener";
import { _navigateToBasePage } from "ns/components/common/Header/header";



const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="ponaco-footer">
    <div class="ponaco-main-component">
        <div class="tab-section-1">
            <h2>Ndejje Senior Secondary School</h2>
            <p>No pains no gains</p>
        </div>
        <hr>

        <div class="content-splitview">
            <div class="splitview-1">
                <h2>Quick Links</h2>
                <p>Academic resources</p>
                <p>How to apply</p>
                <p>FAQ</p>
            </div>
            <div class="splitview-1">
                <h2>Academic</h2>
                <p>Admissions</p>
                <p>Academic Affairs</p>
                <p>Staff Directory</p>
            </div>
            <div class="splitview-1">
                <h2>Get in touch</h2>
                <p>Contact Ndejje</p>
                <p>Maps and directions</p>
                <p>Jobs</p>
            </div>
            <div class="splitview-2">
                <div class="accord-options">
                <div class="control-options">
                    <div class="facebook-link" title="Join us On Facebook">
                        <i class="fa-brands fa-facebook"></i>
                    </div>
    
                    <div class="instagram-link" title="Follow us on Instagram">
                        <i class="fa-brands fa-instagram"></i>
                    </div>
    
                    <div class="twitter-link" title="Follow us on Twitter">
                        <i class="fa-brands fa-twitter"></i>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div class="copyrighted">&copy Ndejje Senior Secondary School</div>
    </div>

</div>
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