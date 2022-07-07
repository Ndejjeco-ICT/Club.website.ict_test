import { IWebComponents } from "ns/typings/schw";
import { addDisposableEventListener } from "ns/common/domListener";
import { LifeCycleEvents, Lifecycle } from "ns/common/lifecycle";
import { _navigateToBasePage } from "ns/components/common/Header/header";
import { LinksManagerSystem } from "ns/dom/links/linksManager";


/**
 * The common footer of all hashed Pages that loads synchrously to the page workflow.
 */


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
    private facebookSourceLinkBtn: HTMLDivElement | null = null;
    private instagramSourceLinkBtn: HTMLDivElement | null = null;
    private twitterSourceLinkBtn: HTMLDivElement | null = null;

    constructor() {
        super();
        this.appendChild(Template_.content.cloneNode(true))
    };
    connectedCallback() {
        this.initializeComponent()
    };
    /**
     * Initialize  the component once.
     */
    initializeComponent(){
        this.attachComponentDOMELements();
        this.addDisposableEventListenerMechanismToIcons()

        /**
         * The Lifecyle Line.. The Principle Line. for the footer.
         * Called when the whole website has been restored.
         */
        LifeCycleEvents.phase = Lifecycle.Restored;
    }
    /**
     * Attach DOM Elements.
     */
    attachComponentDOMELements(){
        this.facebookSourceLinkBtn = this.querySelector(".facebook-link");
        this.instagramSourceLinkBtn = this.querySelector(".instagram-link");
        this.twitterSourceLinkBtn = this.querySelector(".twitter-link");
    }
    addDisposableEventListenerMechanismToIcons() {
        if (this.facebookSourceLinkBtn && this.instagramSourceLinkBtn && this.twitterSourceLinkBtn) {
            addDisposableEventListener(this.facebookSourceLinkBtn, "click", this.navigateResourceLocationToFacebook.bind(this));
            addDisposableEventListener(this.instagramSourceLinkBtn, "click", this.navigateResourceLocationToInstagram.bind(this));
            addDisposableEventListener(this.twitterSourceLinkBtn, "click", this.navigateResourceLocationToTwitter.bind(this));
        }
    };
    navigateResourceLocationToFacebook() {
        LinksManagerSystem.LinkToFaceBook()
    }
    navigateResourceLocationToInstagram() {
        LinksManagerSystem.LinkToInstagram();
    }
    navigateResourceLocationToTwitter() {
        LinksManagerSystem.LinkToTwitter()
    }

}

customElements.define("ns-footer", FooterComponent);