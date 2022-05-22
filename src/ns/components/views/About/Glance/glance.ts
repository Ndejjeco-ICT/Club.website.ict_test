import { IWebComponents } from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="xb-glance-component">
    <div class="xb-wrapper">
        <div class="tr-split-view">
            <div class="tr-view-1">
                <div class="tr-view-1-wrapper">
                    <div class="tr-data-cpr">
                        <div class="cpr-wrapper">
                            <div class="cl-title">
                                <div class="cl-title-wrapper">1963</div>
                            </div>
                            <div class="cl-figure">
                                <div class="cl-figure-wrapper">The Year Ndejje was Established</div>
                            </div>
                        </div>
                    </div>
                    <div class="tr-data-cpr">
                        <div class="cpr-wrapper">
                            <div class="cl-title">
                                <div class="cl-title-wrapper">162</div>
                            </div>
                            <div class="cl-figure">
                                <div class="cl-figure-wrapper">A Large Number of Staff Members</div>
                            </div>
                        </div>
                    </div>
                    <div class="tr-data-cpr">
                        <div class="cpr-wrapper">
                            <div class="cl-title">
                                <div class="cl-title-wrapper">2100</div>
                            </div>
                            <div class="cl-figure">
                                <div class="cl-figure-wrapper">With A Vast Number of Students</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="tr-view-2">
                <div class="tr-view-2-wrapper">
                    <div class="cl-title-area">Ndejje At A Glance</div>
                    <div class="cl-picture-container">__image__</div>
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