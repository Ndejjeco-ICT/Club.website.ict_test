import { BannerImageSizer } from "ns/dom/sizeManagers/BannerImageSize";
import { IWebComponents } from "ns/typings/schw";
import { createInstance } from "ns/base/instanceCreators/instanceCreators";

export class HomeView extends HTMLElement implements IWebComponents {

    constructor() {
        super();
        this.innerHTML = `
            <ns-x-banner></ns-x-banner>
            <ns-x-pride></ns-x-pride>
            <ns-x-benefits></ns-x-benefits>
            <div class="ponaco-x-component misson-container">
                <div class="content-wrapper">
                    <div class="title-area">
                        <div class="sr1">Mission</div>
                    </div>
                    <div class="description-area">
                        <div class="sr2">From rigorous academics to the beautiful greens of our tree-filled campus to the activity of student life, Ndejje has it all. Switch between Live and Learn to explore everything Ndejje has to offer</div>
                    </div>
                </div>
            </div>
            <ns-x-insights></ns-x-insights>
            <ns-x-quote></ns-x-quote>
<<<<<<< HEAD
            <ns-x-reviews></ns-x-reviews>
            <ns-x-Faq></ns-x-Faq>
=======
            <ns-x-edu></ns-x-edu>

>>>>>>> f046b72566754bb2cffee4291a1c600d32602faa
        `
    }
    connectedCallback() {
        this._initResourcesOfViewHome();
    };
    _initResourcesOfViewHome() {
        createInstance<any>(BannerImageSizer);
    }
}

customElements.define("ns-home-view", HomeView);