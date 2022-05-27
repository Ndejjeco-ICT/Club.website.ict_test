import {IWebComponents} from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="xb-awards-component">
    <div class="xb-title-area-component">
        <div class="xb-title-container">Awards</div>
    </div>
    <div class="xb-wrapper">
        <div class="xb-main-container">
            <ns-x-awarditem></ns-x-awarditem>
            <ns-x-awarditem></ns-x-awarditem>
            <ns-x-awarditem></ns-x-awarditem>
            <ns-x-awarditem></ns-x-awarditem>
            <ns-x-awarditem></ns-x-awarditem>
            <ns-x-awarditem></ns-x-awarditem>
        </div>
    </div>
</div>
`;


export class Awards extends HTMLElement implements IWebComponents {
    constructor() {
        super();
        this.appendChild(Template_.content.cloneNode(true))
    }

    connectedCallback() {

    }
};


customElements.define("ns-x-awards",Awards)