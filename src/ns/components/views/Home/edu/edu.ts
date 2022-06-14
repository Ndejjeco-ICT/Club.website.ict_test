import {IWebComponents} from "ns/typings/schw";
import { createViewLinkerManger } from "ns/dom/view_linkers/view_linker";

const Template_ = document.createElement("template");
Template_ .innerHTML = `
<div class="ponaco-component-edu">
    <div class="wrapper">
        <div class="info">Keep Cool And Proud!</div>
    </div>
</div>
`

export class EduComponent extends HTMLElement implements IWebComponents {


    private _eduElementHandle:HTMLDivElement|null;

    constructor() {  
        super()
        this.appendChild(Template_.content.cloneNode(true))
        this._eduElementHandle = null;
    }
    connectedCallback(){
        this.initializeComponent();
       
    };

    initializeComponent(){
        this.__createComponentAttachment()
    };
    __createComponentAttachment() {
        this._eduElementHandle= this.querySelector(".wrapper .info")
    };
  



}
customElements.define("ns-x-edu",EduComponent)