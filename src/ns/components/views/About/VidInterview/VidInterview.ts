import { IWebComponents } from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="xb-vid-interview">
    <div class="xb-wrapper">
        <div class="xb-content-container">
            <div class="vid-cover-poster">
                <div class="wrapper">
                    <div class="xty-image-control">
                        <div class="xty-ctrl"></div>
                    </div>
                    <div class="xty-video-control">
                        <video src="" controls></video>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

`;

class VidInterview extends HTMLElement implements IWebComponents {

    constructor(){
        super();
        this.appendChild(Template_.content.cloneNode(true))
    }
    connectedCallback(){

    }
}

customElements.define("ns-x-vidinterview",VidInterview)