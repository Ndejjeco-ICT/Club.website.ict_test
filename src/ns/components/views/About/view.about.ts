import { BannerImageSizer } from "ns/dom/sizeManagers/BannerImageSize";
import { IWebComponents } from "ns/typings/schw";
import { createInstance } from "ns/base/instanceCreators/instanceCreators";

export class AboutView extends HTMLElement implements IWebComponents {

    constructor() {
        super();
        this.innerHTML = `


        `
    }
    connectedCallback() {
        this._initResourcesOfViewHome();
    };
    _initResourcesOfViewHome() {

    }
}

customElements.define("ns-home-view", AboutView);