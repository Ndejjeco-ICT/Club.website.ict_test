import {IWebComponents} from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_ .innerHTML = `
<div class="ponaco-component-edu">
    <div class="wrapper">
        <div class="info">Education  the Key.</div>
    </div>
</div>
`

export class EduComponent extends HTMLElement implements IWebComponents {

    constructor() {  
        super()
        this.appendChild(Template_.content.cloneNode(true))
    }
    connectedCallback(){

    };
}
customElements.define("ns-x-edu",EduComponent)