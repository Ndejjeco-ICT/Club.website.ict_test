import {IWebComponents} from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="text-wrapper">
<div class="info"><span class="ctr"><span class="cl">J</span>oy </span>And <span class="ctr"><span
            class="cl">P</span>ride!</span></div>
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