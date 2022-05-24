import { BannerImageSizer } from "ns/dom/sizeManagers/BannerImageSize";
import { IWebComponents } from "ns/typings/schw";
import { createInstance } from "ns/base/instanceCreators/instanceCreators";

export class AboutView extends HTMLElement implements IWebComponents {

    constructor() {
        super();
        this.innerHTML = `
        <ns-x-welcomenote></ns-x-welcomenote>
        <ns-x-glance></ns-x-glance>
        <ns-x-xgoal></ns-x-xgoal>
        <ns-x-staffview></ns-x-staffview>
        <ns-x-corevalues></ns-x-corevalues>
        <ns-x-vidinterview></ns-x-vidinterview>
        <ns-x-history></ns-x-history>
        `
    }
    connectedCallback() {
        this._initResourcesOfViewHome();
    };
    _initResourcesOfViewHome() {

    }
}

customElements.define("ns-about-view", AboutView);