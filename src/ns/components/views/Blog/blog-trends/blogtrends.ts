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
            <!-- <div class="two-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sed et voluptate eum laudantium aperiam, architecto ut
                tempore cupiditate ab harum iusto laborum hic eligendi
                libero a quidem nihil delectus rem!
            </div> -->
        </div>
        <div class="three">Three</div>
        <div class="four">Four</div>
        <div class="five">Five</div>
        <div class="six">Six</div>
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