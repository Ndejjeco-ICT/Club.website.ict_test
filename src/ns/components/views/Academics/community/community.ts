import {IWebComponents} from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="xb-community-component">
    <div class="xb-wrapper">
        <div class="xb-sash-container">
            <div class="xb-content-text-2">
                <div class="wrapper">
                    "Alone we can do so little, Together we can do so much."
                </div>
            </div>
            <div class="xb-content-text-3">
                <div class="xr-button">Enroll Now</div>
            </div>
        </div>
        <div class="xb-content-text-1">
            <div class="wrapper">
                Join The Community!
            </div>
        </div>
    </div>
</div>
`;


export class Community extends HTMLElement implements IWebComponents {
    constructor() {
        super();
        this.appendChild(Template_.content.cloneNode(true))
    }

    connectedCallback() {

    }
};


customElements.define("ns-x-community",Community)