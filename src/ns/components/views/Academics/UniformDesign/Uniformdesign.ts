import {IWebComponents} from "ns/typings/schw"

const Template_ = document.createElement("template");
Template_.innerHTML = `

<div class="xb-uniform-design-component">
    <div class="xb-title container">
        <div class="xb-title-area-wrapper">Our Uniform design</div>
    </div>
    <div class="xb-wrapper">
        <div class="xb-main-container">
            <div class="xb-container-area">
                <div class="xb-content-manager">
                    <div class="xb-split-view">
                        <div class="xb-split-view-1">
                            <div class="xb-content-1"></div>
                            <div class="xb-content-2"></div>
                        </div>
                        <div class="xb-split-view-2">
                            <div class="xb-content-1"></div>
                            <div class="xb-content-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`

class uniformdesign extends HTMLElement implements IWebComponents{
    constructor(){
        super()
        this.appendChild(Template_.content.cloneNode(true))
    }
    connectedCallback(){

    }
}
customElements.define("ns-x-uniformdesign",uniformdesign)