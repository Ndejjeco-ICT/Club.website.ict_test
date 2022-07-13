import { IWebComponents } from "ns/typings/schw";

export class BlogView extends HTMLElement implements IWebComponents {

    constructor(){
        super()
        this.innerHTML = `
        <ns-x-titleholder></ns-x-titleholder>
        <ns-x-blogtrends></ns-x-blogtrends>
        <ns-x-articlesection></ns-x-articlesection>
        <ns-x-blogsection3></ns-x-blogsection3>
        <ns-x-caroselslider></ns-x-caroselslider>
        <ns-x-blogsection2></ns-x-blogsection2>
        `
    }

    connectedCallback(){

    }
};


customElements.define("ns-blog-view",BlogView)
