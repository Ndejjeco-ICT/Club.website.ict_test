import { IWebComponents } from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="xb-goal-component">
    <div class="xb-wrapper">
        <div class="tr-title-area-wrapper">
            <div class="tr-title-container">Our Vision</div>
        </div>
        <div class="tr-description-wrapper">
            <div class="tr-description-container">Lorem ipsum dolor sit amet consectetur adipisicin ipsum dolor sit amet consectetur adipisicin</div>
        </div>
    </div>
</div>

`;

class OurGoal extends HTMLElement implements IWebComponents {

    constructor(){
        super();
        this.appendChild(Template_.content.cloneNode(true))
    }
    connectedCallback(){

    }
}

customElements.define("ns-x-xgoal",OurGoal)