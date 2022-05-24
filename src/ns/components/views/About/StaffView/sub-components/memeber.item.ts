import { IWebComponents } from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="xb-cl-memeber">
    <div class="xb-cl-wrapper">
        <div class="xb-picture-container">
            <div class="xb-picture-container-wrapper">__image__</div>
        </div>
        <div class="xb-content">
            <div class="xb-content-wrapper">
                <div class="xb-ct-1 xb-name xb-text">Kalema Pius</div>
                <div class="xb-ct-2 xb-post xb-text">Publiciy Secretary ICT club</div>
                <div class="xb-ct-3 xb-link xb-text">@Kalema Pius</div>
            </div>
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