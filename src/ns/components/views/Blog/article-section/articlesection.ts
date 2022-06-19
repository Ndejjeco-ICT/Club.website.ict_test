import {IWebComponents} from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="main-article-content">
<div class="article-content-title">
FEATURED TOPICS
</div>
<div class="article-grid">
    <div class="article-card article-1">
        <div class="card-picture">
            <img src="#" alt="">
        </div>
        <div class="card-text">
            <p>Lorem ipsum, dolor sittem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, dolor quae quia ea sunt quibusdam pariatur iure quaerat, sequi incidunt eaque vel molestiae quam perspiciatis possimus eius? Libero, cupiditate laudantium? neque ab.</p>
        </div>
    </div>
    <div class="article-card article-1">
        <div class="card-picture">
            <img src="#" alt="">
        </div>
        <div class="card-text">
            <p>Lorem ipsum, dolor sittem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, dolor quae quia ea sunt quibusdam pariatur iure quaerat, sequi incidunt eaque vel molestiae quam perspiciatis possimus eius? Libero, cupiditate laudantium? neque ab.</p>
        </div>
    </div>
    <div class="article-card article-1">
        <div class="card-picture">
            <img src="#" alt="">
        </div>
        <div class="card-text">
            <p>Lorem ipsum, dolor sittem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, dolor quae quia ea sunt quibusdam pariatur iure quaerat, sequi incidunt eaque vel molestiae quam perspiciatis possimus eius? Libero, cupiditate laudantium? neque ab.</p>
        </div>
    </div>
    <div class="article-card article-1">
        <div class="card-picture">
            <img src="#" alt="">
        </div>
        <div class="card-text">
            <p>Lorem ipsum, dolor sittem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, dolor quae quia ea sunt quibusdam pariatur iure quaerat, sequi incidunt eaque vel molestiae quam perspiciatis possimus eius? Libero, cupiditate laudantium? neque ab.</p>
        </div>
    </div>
    <div class="article-card article-1">
        <div class="card-picture">
            <img src="#" alt="">
        </div>
        <div class="card-text">
            <p>Lorem ipsum, dolor sittem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, dolor quae quia ea sunt quibusdam pariatur iure quaerat, sequi incidunt eaque vel molestiae quam perspiciatis possimus eius? Libero, cupiditate laudantium? neque ab.</p>
        </div>
    </div>
    <div class="article-card article-1">
        <div class="card-picture">
            <img src="#" alt="">
        </div>
        <div class="card-text">
            <p>Lorem ipsum, dolor sittem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, dolor quae quia ea sunt quibusdam pariatur iure quaerat, sequi incidunt eaque vel molestiae quam perspiciatis possimus eius? Libero, cupiditate laudantium? neque ab.</p>
        </div>
    </div>
</div>
</div>
`;

export class ArticleSection extends HTMLElement implements IWebComponents {
    constructor() {
        super();
        this.appendChild(Template_.content.cloneNode(true))
    }

    connectedCallback() {

    }
};


customElements.define("ns-x-articlesection",ArticleSection)


















