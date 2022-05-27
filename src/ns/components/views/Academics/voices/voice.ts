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
                <div class="xb-split-component-1">
                    <div class="wrapper">
                        <div class="xb-picture-container"></div>
                        <div class="xb-description-container"></div>
                    </div>
                </div>
                <div class="xb-split-component-2">
                    <div class="split-vide-container">
                        <div class="videx-x-conveyor">
                            <video src="" class="video-provider" controls></video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`


class Voice extends HTMLElement implements IWebComponents {

    constructor(){
        super();
    }
    connectedCallback() {

    }
}

customElements.define("ns-x-voices",Voice)