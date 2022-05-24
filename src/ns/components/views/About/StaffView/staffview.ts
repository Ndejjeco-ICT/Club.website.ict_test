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
                            <div class="cl-picture-container">_image_</div>
                        </div>
                        <div class="cl-view-2">
                            <div class="cl-content-text-holder">
                                <div class="ty-1">Meet Our HeadTeacher</div>
                                <div class="ty-2">On behalf of the School Administration, I welcome you all to this platform in the name of our Lord Jesus Christ and Saviour. Ndejje Senior Secondary School is one of the top Church of Uganda schools whose success is a result of the visionary leadership it has had for the last thirty years.</div>
                                <div class="ty-3">Ndejje has distinguished itself in providing holistic Education that brings up a balanced person empowered with relevant knowledge, skills and values to be a successful National and Global citizen.</div>
                            </div>
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