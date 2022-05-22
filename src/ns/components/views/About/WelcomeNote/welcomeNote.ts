import { IWebComponents } from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="xb-about-component">
    <div class="xb-wrapper">
        <div class="tr-title">
            <div class="wrapper">About Us</div>
        </div>
        <div class="tr-x-line"></div>
        <div class="tr-x-description">Get To Know About Ndejje In a deeper Aspect</div>
    </div>
</div>
`;

class WelcomeNote extends HTMLElement implements IWebComponents {

    constructor(){
        super();
        this.appendChild(Template_.content.cloneNode(true))
    }
    connectedCallback(){

    }
}

customElements.define("ns-x-welcomenote",WelcomeNote)