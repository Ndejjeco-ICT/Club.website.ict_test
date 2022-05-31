import {IWebComponents} from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="xb-news-item-component">
    <div class="xb-holder-wrapper">
        <div class="xb-picture-holder-container"></div>
        <div class="xb-content-holder"></div>
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