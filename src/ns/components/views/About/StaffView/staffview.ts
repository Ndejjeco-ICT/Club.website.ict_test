import { IWebComponents } from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="xb-staffview">
    <div class="xb-wrapper">
        <div class="tr-title-area-wrapper">
            <div class="tr-title-container">Staff Members</div>
        </div>
        <div class="tr-container-elements">
            <div class="tr-container-wrapper">
                <div class="tr-view-1">
                    <div class="tr-view-1-wrapper">
                        <div class="cl-view-1">
                            <div class="cl-picture-container"></div>
                        </div>
                        <div class="cl-view-2">
                            <div class="cl-content-text-holder"></div>
                        </div>
                    </div>
                </div>
                <div class="tr-view-2">
                    <div class="tr-view-2-wrapper">
                        <div class="tr-content">
                            <div class="tr-content-wrapper">
                                <div class="tr-members-wrapper">
                                    <ns-x-member></ns-x-member>
                                    <ns-x-member></ns-x-member>
                                    <ns-x-member></ns-x-member>
                                    <ns-x-member></ns-x-member>
                                    <ns-x-member></ns-x-member>
                                    <ns-x-member></ns-x-member>
                                </div>
                            </div>
                        </div>
                        <div class="tr-content-2">
                            <div class="selective-btn">View More</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>


`;

class StaffView extends HTMLElement implements IWebComponents {

    constructor(){
        super();
        this.appendChild(Template_.content.cloneNode(true))
    }
    connectedCallback(){

    }
}

customElements.define("ns-x-staffview",StaffView)