import { IWebComponents } from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="xb-cl-memeber">
    <div class="xb-cl-wrapper">
        <div class="xb-picture-container">
        </div>
        <div class="xb-content">
            <div class="xb-ct-1 xb-name">Mr Kalema Pius</div>
            <div class="xb-ct-2 xb-post">Cool Guy</div>
            <div class="xb-ct-3 xb-link">__@Ig</div>
        </div>
    </div>
</div>`


class MemberElement extends HTMLElement implements IWebComponents {

    constructor(){
        super();
        this.appendChild(Template_.content.cloneNode(true))
    }
    connectedCallback(){

    }
}

customElements.define("ns-x-member",MemberElement)