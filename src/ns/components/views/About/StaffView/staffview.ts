import { IWebComponents } from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `

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