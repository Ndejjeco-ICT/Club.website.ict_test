import {IWebComponents} from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="article-section2-main-content">
<div class="sec2-master-main-content">
    <div class="ms-x-1"><img src="#" class="ms-img" alt=""> writers club</div>
    <div class="ms-x-1"><img src="#" class="ms-img" alt=""> ict club</div>
    <div class="ms-x-1"><img src="#" class="ms-img" alt=""> interact club</div>
    <div class="ms-x-1"><img src="#" class="ms-img" alt=""> Geography club</div>
    <div class="ms-x-1"><img src="#" class="ms-img" alt=""> International Inspiration club</div>
    <div class="ms-x-1"><img src="#" class="ms-img" alt=""> Physics club</div>
    <div class="ms-x-1"><img src="#" class="ms-img" alt=""> Math club</div>
    <div class="ms-x-1"><img src="#" class="ms-img" alt=""> Chess club</div>
    <div class="ms-x-1"><img src="#" class="ms-img" alt=""> Chess club</div>
    <div class="ms-x-1"><img src="#" class="ms-img" alt=""> Chess club</div>
    <div class="ms-x-1"><img src="#" class="ms-img" alt=""> Chess club</div>
</div>
</div>
`;

export class Caroselslider extends HTMLElement implements IWebComponents {
    constructor() {
        super();
        this.appendChild(Template_.content.cloneNode(true))
    }

    connectedCallback() {

    }
};


customElements.define("ns-x-caroselslider", Caroselslider)