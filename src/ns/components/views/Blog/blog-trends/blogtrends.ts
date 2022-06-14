import {IWebComponents} from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="blog-trends">
<div class="trend-article">
    <div class="trend-picture">
        <img src="#" alt="">
    </div>
    <div class="trend-text">
        <p>Lorem ipsum dolor sit amet consectetur ad
            enim velit quibusdam porro accusantium omnis
            ipsum!
        </p>
    </div>
</div>
</div>
`;

export class BlogTrends extends HTMLElement implements IWebComponents {
    constructor() {
        super();
        this.appendChild(Template_.content.cloneNode(true))
    }

    connectedCallback() {

    }
};


customElements.define("ns-x-blogtrends",BlogTrends)