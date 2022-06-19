import { dialogHostEventManager } from "ns/dom/dialogHost/dialogHost";
import { IWebComponents } from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="xb-dialog-component">
    <div class="cb-dashboard-control">
        <div class="title-area">
            <div class="title-area-wrapper">More of Our Staff Members</div>
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

    private _xrt2:NodeListOf<HTMLDivElement>|null = null;
    private _xrClose:HTMLDivElement|null = null;
    
    constructor(){
        super();
        this.appendChild(Template_.content.cloneNode(true))
    }
    connectedCallback(){
        this.initializeComponent();
    }
    private initializeComponent(){
        this._createComponentAttachments()
        this._applyGeneralEventListeners()
    }
    _createComponentAttachments(){
        this._xrClose = this.querySelector(".xb-dialog-component .cb-dashboard-control .close-control-wrapper")
        this._xrt2 = this.querySelectorAll(".xb-dialog-component .cb-dashboard-content .cb-dashboard-content-wrapper ns-x-member")
    }

    _applyGeneralEventListeners(){
        if(this._xrClose){
            this._xrClose.addEventListener("click",()=>{
                dialogHostEventManager.emit("close-dialog","")
            })
        }
    }
}

customElements.define("ns-d-staffdialog",StaffDialog)