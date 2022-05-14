import { IWebComponents } from "ns/typings/schw";


const _svgDataContent = `
<svg 
 xmlns="http://www.w3.org/2000/svg"
 xmlns:xlink="http://www.w3.org/1999/xlink"
 width="11.875in" height="1.611in">
<text kerning="auto" font-family="Myriad Pro" fill="rgb(0, 0, 0)" font-size="141.667px" x="0px" y="100.7px"><tspan font-size="141.667px" font-family="Montserrat Alternates" fill="#00A4E0">Ndejje&#32;S&#46;S&#46;S</tspan></text>
</svg>
`

const Template_ = document.createElement("template");
Template_.innerHTML = `
    <div class="pride-x-component">
    <div class="container">
    <div class="welcome-text">
        <div class="welcome-text-wrapper">
            No Pains No Gains
        </div>
    </div>
    <div class="welcome-text-2 svg-container">
        <div class="svg-container-wrapper">Ndejje S.S.S</div>
    </div>
    <div class="control-button-container">
        <div class="expl-button-container">Explore</div>
    </div>
    </div>
</div>

`

export class PrideComponent extends HTMLElement implements IWebComponents {


    constructor() {
        super();
        this.appendChild(Template_.content.cloneNode(true));

    }
    connectedCallback() {
        this.init();
    }
    private init() {
        this._createFlowAnimation()
    }
   
    _createFlowAnimation() {
        
    }
    
}
customElements.define("ns-x-pride", PrideComponent);