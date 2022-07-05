import {IWebComponents} from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="xb-award-item">
    <div class="xb-wrapper-container">
        <div class="xb-icon-container">
            <div class="xb-icon-container-wrapper"></div>
        </div>
        <div class="xb-content-section">
            <div class="xb-content-section-wrapper"></div>
        </div>
    </div>
</div>
`;


export class AwardItem extends HTMLElement implements IWebComponents {
    private _awardContent:HTMLDivElement|null;
    constructor() {
        super();
        this.appendChild(Template_.content.cloneNode(true))
        this._awardContent = null;
    }

    initializeComponent(){
        this._createComponentAttachment();
        this._attachData()
    }
    _attachData(){
        if(this._awardContent){
            let _dataElement  = this.getAttribute("data-content")!;
            this._awardContent.innerHTML = _dataElement;
        }
    }
    connectedCallback() {
        this.initializeComponent()
    }

    _createComponentAttachment(){
        this._awardContent = this.querySelector(".xb-content-section-wrapper")
    }
};


customElements.define("ns-x-awarditem",AwardItem)