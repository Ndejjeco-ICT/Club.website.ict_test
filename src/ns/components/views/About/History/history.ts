import { IWebComponents } from "ns/typings/schw";

export class HistorySectionComponent extends HTMLElement implements IWebComponents {

    private _historySection: HTMLDivElement | null;

    constructor() {
        super();
        this._historySection = null;
        this.innerHTML = `
        <div class="historyComponent">
        <div class="main-historysection-container">
            <div class="split-layout-divider">
                <div class="section-content-1">
                    <h2>History Of the School</h2>
                    <p>View the history of the school</p>
                    <button>Read more</button>
                </div>
                <div class="section-content-2">
                    <div class="section-divider">
                        <div class="content-left">
                            <div class="content-class-a">
                                <p>1973</p>
                            </div>
                            <div class="content-class-x">
                                <p>1756</p>
                            </div>
                            <div class="content-class-a">
                                <p>1973</p>
                            </div>
                            <div class="content-class-x">
                                <p>1756</p>
                            </div>
                        </div>
    
                        <div class="line-divider"></div>
    
                        <div class="content-right">
                            <div class="content-class-b">
                                <p>Lorem ipsum dolor sit amet consectetur adipisi
                                    pisci similique corporis reprehenderit!
                                </p>
                            </div>
                            <div class="content-class-y">
                                <p>Lorem ipsum dolor sit amet cons
                                    officiis distinctio!
                                </p>
                            </div>
                            <div class="content-class-b">
                                <p>Lorem ipsum dolor sit amet consectetur adipisi
                                    pisci similique corporis reprehenderit!
                                </p>
                            </div>
                            <div class="content-class-y">
                                <p>Lorem ipsum dolor sit amet cons
                                    officiis distinctio!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
    };
    connectedCallback() {
    };
}

customElements.define("ns-x-history", HistorySectionComponent);