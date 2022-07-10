import {IWebComponents} from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="prime-article-section">
<div class="prime-article">
    <div class="prime-img">
        <img src="#" alt="" srcset="">
    </div>

    <div class="prime-text">
        <h2>Moment of the week</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente repellendus, fugit iusto sint
            molestiae
            optio quasi eligendi aperiam voluptate. Quibusdam velit
            neque alias iste autem optio quas, eveniet expedita atque.
        </p>
    </div>
</div>
</div>
`;

export class BlogSection3 extends HTMLElement implements IWebComponents {
    constructor() {
        super();
        this.appendChild(Template_.content.cloneNode(true))
    }

    connectedCallback() {

    }
};


customElements.define("ns-x-blogsection3",BlogSection3)