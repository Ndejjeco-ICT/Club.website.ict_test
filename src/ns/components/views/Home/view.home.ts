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
            <ns-x-insights></ns-x-insights>
            <ns-x-quote></ns-x-quote>
            <ns-x-reviews></ns-x-reviews>
            <ns-x-Faq></ns-x-Faq>
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