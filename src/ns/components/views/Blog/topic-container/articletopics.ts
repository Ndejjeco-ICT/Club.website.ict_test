import {IWebComponents} from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="article-topics-section">
<div class="topics-main-container">
<div class="topic-header-title">TOPICS - <span>A range of high class articles</span></div>
    <div class="topic-header-navigator">
        <div class="nav-1">trending</div>
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
                    <div class="info-nav-control">03/02/2020</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti modi
                        quidem obcaecati officia ducimus odit,
                        et
                    </p>
                    <div class="x-counter">3 likes</div>
                    <div class="nav-reader">Read article</div>
                </div>
                <div class="card">
                    <img src="#" class="img-card" alt="">
                    <div class="info-nav-control">03/02/2020</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti modi
                        quidem obcaecati officia ducimus odit,
                        et
                    </p>
                    <div class="x-counter">3 likes</div>
                    <div class="nav-reader">Read article</div>
                </div>
                <div class="card card-a">
                    <img src="#" class="img-card" alt="">
                    <div class="info-nav-control">03/02/2020</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti modi
                        quidem obcaecati officia ducimus odit,
                        et
                    </p>
                    <div class="x-counter">3 likes</div>
                    <div class="nav-reader">Read article</div>
                </div>
                <div class="card card-a">
                    <img src="#" class="img-card" alt="">
                    <div class="info-nav-control">03/02/2020</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti modi
                        quidem obcaecati officia ducimus odit,
                        et
                    </p>
                    <div class="x-counter">3 likes</div>
                    <div class="nav-reader">Read article</div>
                </div>
            </div>
        </div>
        <div class="section-card-content">
            <h2>LATEST</h2>
            <div class="content-card-layouts">
                <div class="card">
                    <img src="#" class="img-card" alt="">
                    <div class="info-nav-control">03/02/2020</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti modi
                        quidem obcaecati officia ducimus odit,
                        et
                    </p>
                    <div class="x-counter">3 likes</div>
                    <div class="nav-reader">Read article</div>
                </div>
                <div class="card">
                    <img src="#" class="img-card" alt="">
                    <div class="info-nav-control">03/02/2020</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti modi
                        quidem obcaecati officia ducimus odit,
                        et
                    </p>
                    <div class="x-counter">3 likes</div>
                    <div class="nav-reader">Read article</div>
                </div>
                <div class="card">
                    <img src="#" class="img-card" alt="">
                    <div class="info-nav-control">03/02/2020</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti modi
                        quidem obcaecati officia ducimus odit,
                        et
                    </p>
                    <div class="x-counter">3 likes</div>
                    <div class="nav-reader">Read article</div>
                </div>
                <div class="card">
                    <img src="#" class="img-card" alt="">
                    <div class="info-nav-control">03/02/2020</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti modi
                        quidem obcaecati officia ducimus odit,
                        et
                    </p>
                    <div class="x-counter">3 likes</div>
                    <div class="nav-reader">Read article</div>
                </div>
            </div>
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