import {IWebComponents} from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="article-topics-section">
    <div class="topics-main-container">
        <div class="topic-header-navigator">
            <div class="nav-1">trending</div>
            <div class="nav-1">trending</div>
            <div class="nav-1">trending</div>
        </div>

        <div class="topic-section-navigator">
            <div class="section-card-content">
                <h2>Trending</h2>
                <div class="content-card-layouts">
                    <div class="card">
                        <img src="#" class="img-card" alt="">
                        <p>hello</p>
                    </div>
                    <div class="card">
                        <img src="#" class="img-card" alt="">
                        <p>hello</p>
                    </div>
                    <div class="card">
                        <img src="#" class="img-card" alt="">
                        <p>hello</p>
                    </div>
                    <div class="card">
                        <img src="#" class="img-card" alt="">
                        <p>hello</p>
                    </div>
                </div>
            </div>
            <div class="section-card-content">
                <h2>Trending</h2>
                <div class="content-card-layouts">
                    <div class="card">
                        <img src="#" class="img-card" alt="">
                        <p>hello</p>
                    </div>
                    <div class="card">
                        <img src="#" class="img-card" alt="">
                        <p>hello</p>
                    </div>
                    <div class="card">
                        <img src="#" class="img-card" alt="">
                        <p>hello</p>
                    </div>
                    <div class="card">
                        <img src="#" class="img-card" alt="">
                        <p>hello</p>
                    </div>
                </div>
            </div>
            <div class="section-card-content">
                <h2>Trending</h2>
                <div class="content-card-layouts">
                    <div class="card">
                        <img src="#" class="img-card" alt="">
                        <p>hello</p>
                    </div>
                    <div class="card">
                        <img src="#" class="img-card" alt="">
                        <p>hello</p>
                    </div>
                    <div class="card">
                        <img src="#" class="img-card" alt="">
                        <p>hello</p>
                    </div>
                    <div class="card">
                        <img src="#" class="img-card" alt="">
                        <p>hello</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="article-section2-content">
            <div class="sec2-master-content">
                <div class="ms-x-1"><img src="#" class="ms-img" alt=""> writers club</div>
                <div class="ms-x-1"><img src="#" class="ms-img" alt=""> writers club</div>
                <div class="ms-x-1"><img src="#" class="ms-img" alt=""> writers club</div>
            </div>
        </div>

        <div class="info-wrapper-section">
            <div class="wrapper-content-1">
                <h2>Submit your newsletter</h2>
            </div>
            <div class="submit-container">
            <input type="text" placeholder="newsletter">
            </div>
        </div>
    </div>
</div>
`;

export class ArticleTopics extends HTMLElement implements IWebComponents {
    constructor() {
        super();
        this.appendChild(Template_.content.cloneNode(true))
    }

    connectedCallback() {

    }
};


customElements.define("ns-x-articletopics", ArticleTopics)