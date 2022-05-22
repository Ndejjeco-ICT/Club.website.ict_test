import { IWebComponents } from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="xb-glance-component">
    <div class="xb-wrapper">
        <div class="tr-title-area-wrapper">
            <div class="tr-title-container">Ndejje At A Glance</div>
        </div>
        <div class="tr-split-view">
            <div class="tr-view-1">
                <div class="tr-view-1-wrapper">
                    <div class="tr-data-cpr">
                        <div class="cl-title">Boys</div>
                        <div class="cl-figure">100</div>
                    </div>
                    <div class="tr-data-cpr">
                        <div class="cl-title">Girls</div>
                        <div class="cl-figure">100</div>
                    </div>
                    <div class="tr-data-cpr">
                        <div class="cl-title">Staff Members</div>
                        <div class="cl-figure">100</div>
                    </div>
                </div>
            </div>
            <div class="tr-view-2">
                <div class="tr-view-2-wrapper">
                    <div class="cl-picture-container"></div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

class Glance extends HTMLElement implements IWebComponents {

    constructor(){
        super();
        this.appendChild(Template_.content.cloneNode(true))
    }
    connectedCallback(){

    }
}

customElements.define("ns-x-glance",Glance)