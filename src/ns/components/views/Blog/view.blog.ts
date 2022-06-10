import { IWebComponents } from "ns/typings/schw";

export class BlogView extends HTMLElement implements IWebComponents {

    constructor(){
        super()
        this.innerHTML = `
        `
    }

    connectedCallback(){

    }
};


customElements.define("ns-blog-view",BlogView)
