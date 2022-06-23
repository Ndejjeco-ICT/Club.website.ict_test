import {IWebComponents} from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="title-content">
    <div class="content-x">
        <h1>NDEJJEAN BLOG</h1>
    </div>
    <div class="content-y">
        <div class="text-content">
            <h2>ARTICLES THAT INSPIRE</h2>
            <p>Thats the ndejjean way</p>
            <button>READ MORE</button>

        </div>
        <div class="picture-content">
        <div class="img-selector img"></div>
        <div class="img-selector img"></div>
        <div class="img-selector img"></div>
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