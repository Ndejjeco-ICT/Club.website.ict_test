import { IWebComponents } from "ns/typings/schw";


class MemberElement extends HTMLElement implements IWebComponents {

    constructor(){
        super();
        this.innerHTML  = `
        `
    }
    connectedCallback(){

    }
}

customElements.define("ns-x-welcomenote",MemberElement)