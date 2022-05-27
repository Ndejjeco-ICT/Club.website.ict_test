import {IWebComponents} from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="xb-new-item-component">
    <div class="xb-holder-wrapper">
        <div class="xb-main-container">
            <div class="xb-container-area">
                <div class="xb-content-manager"></div>
            </div>
        </div>
    </div>
</div>
`;


export class NewsItem extends HTMLElement implements IWebComponents {
    constructor() {
        super();
        this.appendChild(Template_.content.cloneNode(true))
    }

    connectedCallback() {

    }
};


customElements.define("ns-x-newsitem",NewsItem)