import {IWebComponents} from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="blog-trends">
<div class="trend-text">
    <h1>Latest trends</h1>
</div>

<div class="blog-cards">
    <div class="wrapper">
        <div class="two">
            <div class="content-container-1">
                <div class="overlay">
                    <div class="text">Lorem ipsum dolor sit ame
                        t consectetur adipisicing elit. Sed ve
                        ritatis veniam vel voluptas, adipisci
                        est. Minus, voluptatibus impedit null
                    </div>
                </div>
            </div>
        </div>
        <div class="three">
            <div class="content-container-2">
                <div class="overlay">
                    <div class="text">Lorem ipsum dolor sit ame
                        t consectetur adipisicing elit. Sed ve
                        ritatis veniam vel voluptas, adipisci
                        est. Minus, voluptatibus impedit null
                    </div>
                </div>
            </div>
        </div>
        <div class="four">
            <div class="content-container-3">
                <div class="overlay">
                    <div class="text">Lorem ipsum dolor sit ame
                        t consectetur adipisicing elit. Sed ve
                        ritatis veniam vel voluptas, adipisci
                        est. Minus, voluptatibus impedit null
                    </div>
                </div>
            </div>
        </div>
        <div class="five">
            <div class="content-container-4">
                <div class="overlay">
                    <div class="text">Lorem ipsum dolor sit ame
                        t consectetur adipisicing elit. Sed ve
                        ritatis veniam vel voluptas, adipisci
                        est. Minus, voluptatibus impedit null
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="six">Six</div> -->
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