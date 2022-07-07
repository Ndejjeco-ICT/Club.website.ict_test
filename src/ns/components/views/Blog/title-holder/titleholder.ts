import {IWebComponents} from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="main-blog-component-section">
<div class="main-blog-container">
    <div class="title-holder">
        <div class="txt-1">WELCOME...</div>
        <div class="txt-2"><em>To the ndejjean blog</em></div>
        <div class="txt-3">where we write stories that inspire</div>
    </div>
</main-blog-container>
</main-blog-component-section>
`

export class Titleholder extends HTMLElement implements IWebComponents {
    constructor() {
        super();
        this.appendChild(Template_.content.cloneNode(true))
    }

    connectedCallback() {

    }
};


customElements.define("ns-x-titleholder",Titleholder)