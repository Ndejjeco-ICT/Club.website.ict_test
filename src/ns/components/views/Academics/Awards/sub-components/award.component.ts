import {IWebComponents} from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="xb-award-item">
    <div class="xb-wrapper-container">
        <div class="xb-icon-container">
            <div class="xb-icon-container-wrapper"></div>
        </div>
        <div class="xb-content-section">
            <div class="xb-content-section-wrapper"></div>
        </div>
    </div>
</div>
`;


export class AwardItem extends HTMLElement implements IWebComponents {
    constructor() {
        super();
        this.appendChild(Template_.content.cloneNode(true))
    }

    connectedCallback() {

    }
};


customElements.define("ns-x-awarditem",AwardItem)