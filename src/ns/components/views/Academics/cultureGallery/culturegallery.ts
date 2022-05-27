import {IWebComponents} from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `

<div class="xb-culture-component">
    <div class="xb-title-area-wrapper">
        <div class="xb-title-container">Life And Culture</div>
        <div class="xb-title-minor-container"></div>
    </div>
    <div class="xb-component-wrapper">
        <div class="xb-components-item-wrapper">
            <ns-x-gimage></ns-x-gimage>
            <ns-x-gimage></ns-x-gimage>
            <ns-x-gimage></ns-x-gimage>
            <ns-x-gimage></ns-x-gimage>
            <ns-x-gimage></ns-x-gimage>
            <ns-x-gimage></ns-x-gimage>
            <ns-x-gimage></ns-x-gimage>
            <ns-x-gimage></ns-x-gimage>
            <ns-x-gimage></ns-x-gimage>
        </div>
    </div>
</div>


`;

export class CultureGallery extends HTMLElement implements IWebComponents {
    constructor() {
        super();
        this.appendChild(Template_.content.cloneNode(true))
    }

    connectedCallback() {

    }
};


customElements.define("ns-x-culture",CultureGallery)