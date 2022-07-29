import {IWebComponents} from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="main-blog-component-section">
<div class="section-blog-container">
    <div class="content-text">
        <div class="txt-1">WELCOME...</div>
        <div class="txt-2"><em>to the Ndejjean blog</em></div>
        <div class="txt-3">Stories, articles, news all in one place</div>
        <div class="abt-btn"><button><a href="#trending">Read our articles</a></button></div>
    </div>
</div>
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