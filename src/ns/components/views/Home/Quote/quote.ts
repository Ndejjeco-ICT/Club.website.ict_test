import { IWebComponents } from "ns/typings/schw";


export class QuoteComponent extends HTMLElement implements IWebComponents {
    private _mainContentHolder: HTMLDivElement | null;
    constructor() {
        super();
        this._mainContentHolder = null;
        this.innerHTML = `
        <div class="ponaco-splitview-6">
            <div class="wx-component-6">
                <div class="main-content-holder">
                    <div class="x-content-1">Time has a wonderful way of showing us what matters</div>
                    <div class="x-content-2">Dr. Charles Kahigiriza</div>
                </div>
            </div>
        </div>
        `
    }
    connectedCallback() {
        this.init();
    }
    createElementHandle() {
        this._mainContentHolder = this.querySelector(".main-content-holder")
    }
    override scrollIntoView(arg?: boolean | ScrollIntoViewOptions): void {
        if (arg) {
            this.createFlowAnimation();
        }
    }
    createFlowAnimation() {
        
    }
    
    private init() {
        this.createElementHandle()
    }
}

customElements.define("ns-x-quote", QuoteComponent);