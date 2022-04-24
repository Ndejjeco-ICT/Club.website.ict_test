import { IWebComponents } from "ns/typings/schw"; 
import { addDisposableEventListener } from "ns/common/domListener";

export class EnrollButtonComponent extends HTMLElement implements IWebComponents {

    private _enrollBtn: HTMLDivElement;
    constructor() {
        super();
        this.innerHTML = `
        <div class="enroll-ns-button">
            Enroll Now
        </div>
        `;
        this._enrollBtn = this.querySelector(".enroll-ns-button")! as HTMLDivElement;
    }

    connectedCallback() {
        this.init()
    }
    
    init() {
        this.atttachEventListenerToButton()
    }
    atttachEventListenerToButton() {
        addDisposableEventListener(this._enrollBtn, "click", this.invokeEnrollDialog.bind(this));
    }

    invokeEnrollDialog() {
        //invoke dialog;
    }

};
customElements.define("ns-enroll-button", EnrollButtonComponent);