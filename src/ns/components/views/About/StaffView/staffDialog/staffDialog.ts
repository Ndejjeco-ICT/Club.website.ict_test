import { IWebComponents } from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="xb-dialog-component">
    <div class="cb-dashboard-control">
        <div class="title-area">
            <div class="title-area-wrapper"></div>
        </div>
        <div class="close-control-wrapper">
            <div class="close-control">&times;</div>
        </div>
    </div>
    <div class="cb-dashboard-content">
        <div class="cb-dashboard-content-wrapper">
            <ns-x-member></ns-x-member>
            <ns-x-member></ns-x-member>
            <ns-x-member></ns-x-member>
            <ns-x-member></ns-x-member>
            <ns-x-member></ns-x-member>
            <ns-x-member></ns-x-member>
            <ns-x-member></ns-x-member>
            <ns-x-member></ns-x-member>
            <ns-x-member></ns-x-member>
            <ns-x-member></ns-x-member>
            <ns-x-member></ns-x-member>
            <ns-x-member></ns-x-member>
        </div>
    </div>
</div>

`;

class StaffDialog extends HTMLElement implements IWebComponents {

    constructor(){
        super();
        this.appendChild(Template_.content.cloneNode(true))
    }
    connectedCallback(){

    }
}

customElements.define("ns-d-staffdialog",StaffDialog)