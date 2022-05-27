import { IWebComponents } from "ns/typings/schw";

class AcademicsView extends HTMLElement implements IWebComponents {

    constructor(){
        super()
        this.innerHTML = ``
    }

    connectedCallback(){

    }
};


customElements.define("ns-academics-view",AcademicsView)