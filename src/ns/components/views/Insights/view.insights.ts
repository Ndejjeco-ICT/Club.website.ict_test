import { IWebComponents } from "ns/typings/schw";

const Template_ = document.createElement("template")
Template_.innerHTML = `
<div class="insights-view-component-area">
    <div class="view-wrapper">
        <div class="view-title-area">
            <div class="view-back-button"></div>
            <div class="view-title-banner">
                <div class="wrapper">
                    <div class="major-title"></div>
                    <div class="minor-title"></div>
                </div>
            </div>
        </div>
        <div class="split-view-content">
            <div class="wrapper">
                <div class="insight-base-image"></div>
                <div class="insight-main-content">
                    <div class="content-data">
                        <div class="content-xtr1"></div>
                        <div class="content-xt2-image"></div>
                    </div>
                </div>
                <div class="insights-footer-area"></div>
            </div>
        </div>
    </div>
</div>
`;

class InsightsView extends HTMLElement implements IWebComponents {


    constructor(){
        super();
        this.appendChild(Template_.content.cloneNode(true))
    }
    connectedCallback(){

    }

}

customElements.define("ns-insights-view",InsightsView)