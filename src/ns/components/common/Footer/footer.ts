import { IWebComponents } from "ns/typings/schw";
import { addDisposableEventListener } from "ns/common/domListener";
import { LifeCycleEvents, Lifecycle } from "ns/common/lifecycle";
import { _navigateToBasePage } from "ns/components/common/Header/header";
import { LinksManagerSystem } from "ns/dom/links/linksManager";



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

    //accordiaon options
    private _facebook_link: HTMLDivElement | null = null;
    private _instagram_link: HTMLDivElement | null = null;
    private _twitter_link: HTMLDivElement | null = null;
    constructor() {
        super();
        this.appendChild(Template_.content.cloneNode(true))
    };
    connectedCallback() {
        this.initializeComponent()
    };
    initializeComponent(){
        this.__createComponentAttachment();
        this._attachSocialLinkksSystem()


        /**
         * Did load everything
         */

        LifeCycleEvents.phase = Lifecycle.Restored;
    }
    __createComponentAttachment(){
        this._facebook_link = this.querySelector(".facebook-link");
        this._instagram_link = this.querySelector(".instagram-link");
        this._twitter_link = this.querySelector(".twitter-link");
    }
    _attachSocialLinkksSystem() {
        if (this._facebook_link && this._instagram_link && this._twitter_link) {
            //click event listeners
            addDisposableEventListener(this._facebook_link, "click", this.__linkFaceBook.bind(this));
            addDisposableEventListener(this._instagram_link, "click", this.__linkInstagram.bind(this));
            addDisposableEventListener(this._twitter_link, "click", this.__linkTwitter.bind(this));
        }
    };
    __linkFaceBook() {
        LinksManagerSystem.LinkToFaceBook()
    }
    __linkInstagram() {
        LinksManagerSystem.LinkToInstagram();
    }
    __linkTwitter() {
        LinksManagerSystem.LinkToTwitter()
    }

}

customElements.define("ns-footer", FooterComponent);