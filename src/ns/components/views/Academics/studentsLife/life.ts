import {IWebComponents} from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="xb-life-component">
    <div class="xb-component-wrapper">
        <div class="xb-title-area-wrapper">
            <div class="xb-title-container">Student's Life</div>
        </div>
        <div class="xb-split-view">
            <div class="xb-split-view-1 split-component">
                <div class="xb-split-component">
                    <div class="split-wrapper"></div>
                </div>
                <div class="xb-split-component">
                    <div class="split-wrapper"></div>
                </div>
            </div>
            <div class="xb-split-view-2 split-component"
                <div class="xb-split-component">
                    <div class="split-wrapper"></div>
                </div>
                <div class="xb-split-component">
                    <div class="split-wrapper"></div>
                </div>
            </div>
        </div>
    </div>
</div>
`;


export class Life extends HTMLElement implements IWebComponents {
    constructor() {
        super();
        this.appendChild(Template_.content.cloneNode(true))
    }

    connectedCallback() {

    }
};


customElements.define("ns-x-life",Life)