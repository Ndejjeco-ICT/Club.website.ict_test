import {IWebComponents} from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="xb-academics-quote-component">
    <div class="xb-component-wrapper">
        <div class="xb-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quod quos  </div>
    </div>
</div>

`;

export class AcademicsQuote extends HTMLElement implements IWebComponents {
    constructor() {
        super();
        this.appendChild(Template_.content.cloneNode(true))
    }

    connectedCallback() {

    }
};


customElements.define("ns-x-acdmq",AcademicsQuote)