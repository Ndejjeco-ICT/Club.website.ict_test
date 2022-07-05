import {IWebComponents} from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="title-content">
    <div class="content-x">
        Blog
    </div>
    <div class="tr-line"></div>
    <div class="content-y">
        <div class="text-content">
            WHERE WE WRITE ARTICLES THAT INSPIRE,<br> - THATS THE NDEJJEAN CULTURE
            <button>Read more</button>

        </div>
        <div class="picture-content">
        <div class="img-selector img img1"></div>
        <div class="img-selector img img2"></div>
        <div class="img-selector img img3"></div>
        </div>
    </div>
</div>
`;

export class Titleholder extends HTMLElement implements IWebComponents {
    constructor() {
        super();
        this.appendChild(Template_.content.cloneNode(true))
    }

    connectedCallback() {

    }
};


customElements.define("ns-x-titleholder",Titleholder)