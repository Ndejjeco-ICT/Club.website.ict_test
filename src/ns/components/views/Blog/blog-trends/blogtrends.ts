import {IWebComponents} from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="blog-trends">
<div class="trend-title">TRENDING EVENT</div>
<div class="trend-article">
    <div class="trend-picture">
        <img src="#" alt="">
    </div>
    <div class="trend-text">
    <p>Lorem ipsum dolor sit amet consectetur ad
    enim velit quibusdam porro accusantium omnis
    ipsum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquam nemo perferendis quam molest
    ias voluptatibus iusto laboriosam ex recusanda
    e asperiores, amet quasi id officiis repellend
    us voluptate ea porro non eveniet.</p>
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