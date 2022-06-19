import  {IWebComponents} from "ns/typings/schw";


const Template_ = document.createElement("template")
Template_.innerHTML = `
<div class="xb-voices-component">
    <div class="xb-title-area-component">
        <div class="xb-title-area-container">
            Listen The Big Voices Of Ndejje
        </div>
    </div>
    <div class="xb-wrapper">
        <div class="xb-split-view-container">
            <div class="xb-split-view-area">
                <div class="xb-split-component-1 str-comp">
                    <div class="wrapper">
                        <div class="xb-picture-container"></div>
                        <div class="xb-description-container">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore magn</div>
                    </div>
                </div>
                <div class="xb-split-component-2 str-comp">
                    <div class="split-video-container">
                        <div class="videx-x-conveyor">
                        <div class="video-icon-restart">></div>
                            <video src="" class="video-provider" controls></video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="common-change-controls">
        <div class="prev-ctrl">&triangleleft;</div>
        <div class="next-ctrl">&triangleright;</div>
    </div>
</div>
`


class Voice extends HTMLElement implements IWebComponents {

    constructor(){
        super();
        this.appendChild(Template_.content.cloneNode(true))
    }
    connectedCallback() {

    }
}

customElements.define("ns-x-voices",Voice)