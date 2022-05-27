import {IWebComponents} from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="xb-community-component">
    <div class="xb-wrapper">
        <div class="xb-content-text-1">Join The Community</div>
        <div class="xb-content-text-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, aut iste sed non ab mai</div>
        <div class="xb-content-text-3">
            <ns-enroll-button></ns-enroll-button>
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