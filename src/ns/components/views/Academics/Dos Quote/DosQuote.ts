import {IWebComponents} from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="xb-d-component">
    <div class="xb-wrapper">
        <div class="xb-text-1">
            <div class="wrapper">
                An investment in knowledge pays the best interest.
            </div>
        </div>
        <div class="xb-text-2">Director Of Studies</div>
    </div>
</div>
`;


export class Dos extends HTMLElement implements IWebComponents {
    constructor() {
        super();
        this.appendChild(Template_.content.cloneNode(true))
    }

    connectedCallback() {

    }
};


customElements.define("ns-x-quotedos",Dos)