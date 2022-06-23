import {IWebComponents} from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `

<div class="xb-culture-component">
    <div class="xb-title-area-wrapper">
        <div class="xb-title-container">Life And Culture</div>
        <div class="xb-title-minor-container">If we are to preserve culture we must continue to create it.</div>
    </div>
    <div class="xb-component-wrapper">
        <div class="xb-components-item-wrapper">
   

            <ns-x-gimage></ns-x-gimage>
            <ns-x-gimage></ns-x-gimage>
            <ns-x-gimage></ns-x-gimage>
            <ns-x-gimage></ns-x-gimage>
            <ns-x-gimage></ns-x-gimage>
            <ns-x-gimage></ns-x-gimage>
            <ns-x-gimage></ns-x-gimage>
          
        </div>
    </div>
</div>


`;

export class CultureGallery extends HTMLElement implements IWebComponents {
    private _titleAreaWrapper:HTMLDivElement|null = null;
    constructor() {
        super();
        this.appendChild(Template_.content.cloneNode(true))
    }


    initializeComponent(){
        this.createComponentAttachment();
    }
    createComponentAttachment(){
        this._titleAreaWrapper = this.querySelector(".xb-culture-component .xb-title-area-wrapper")
    }

    _viewInsetAnimation(){
        this._titleAreaWrapper!.style.animation = "__studentsLife__  1.5s forwards"
    }
    _createAnimationFacility(){
        if(this._titleAreaWrapper){
            
        }
    }

    connectedCallback() {
        this.initializeComponent()
    }
};


customElements.define("ns-x-culture",CultureGallery)