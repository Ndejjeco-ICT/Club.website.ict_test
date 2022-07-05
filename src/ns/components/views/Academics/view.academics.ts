import { IWebComponents } from "ns/typings/schw";

class AcademicsView extends HTMLElement implements IWebComponents {

    constructor(){
        super()
        this.innerHTML = `
        <ns-x-acdmw></ns-x-acdmw>
        <ns-x-life></ns-x-life>
        <ns-x-culture></ns-x-culture>
        <ns-x-community></ns-x-community>
        <ns-x-awards></ns-x-awards>
        <ns-x-voices></ns-x-voices>
        <ns-x-uniformdesign></ns-x-uniformdesign>
        <ns-x-news></ns-x-news>
        <ns-x-quotedos></ns-x-quotedos>
        `
    }

    connectedCallback(){

    }
};


customElements.define("ns-academics-view",AcademicsView)