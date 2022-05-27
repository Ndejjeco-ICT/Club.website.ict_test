import {IWebComponents} from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `

<div class="xb-news-component">
    <div class="xb-title-area-container">
        <div class="xb-title-area">Latest News in Academics</div>
    </div>
    <div class="xb-wrapper">
        <div class="xb-wrapper-container">
            <div class="xb-split-view">
                <ns-x-newsitem></ns-x-newsitem>
                <ns-x-newsitem></ns-x-newsitem>
                <ns-x-newsitem></ns-x-newsitem>
                <ns-x-newsitem></ns-x-newsitem>
            </div>
        </div>
    </div>
</div>

`;


export class NewsControl extends HTMLElement implements IWebComponents {
    constructor() {
        super();
        this.appendChild(Template_.content.cloneNode(true))
    }

    connectedCallback() {

    }
};


customElements.define("ns-x-news",NewsControl)