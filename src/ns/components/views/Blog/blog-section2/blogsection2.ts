import {IWebComponents} from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="blog-section-2">
<div class="main-section-content">
    <div class="content-txt">
        <h2>Get to know us more </h2>
        <button>About us</button>
    </div>
    <div class="section-2-img">
        <img src="#" alt="" srcset="#">
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