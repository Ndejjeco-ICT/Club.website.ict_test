import {IWebComponents} from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="blog-section-2">
<div class="main-section-content">
    <div class="content-txt">
        <h2>Ndejjean Fraternity</h2>
        <p>Get to know us more</p>
        <div class="nav-content">About us</div>
    </div>
</div>
</div>
`;

export class BlogSection2 extends HTMLElement implements IWebComponents {
    constructor() {
        super();
        this.appendChild(Template_.content.cloneNode(true))
    }

    connectedCallback() {

    }
};


customElements.define("ns-x-blogsection2",BlogSection2)